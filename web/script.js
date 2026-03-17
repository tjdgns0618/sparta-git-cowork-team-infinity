const memberFileMap = {
    leader: "../members/YSH.json",
    member1: "../members/MSJ.json",
    member2: "../members/PJY.json",
    member3: "../members/YSR.json",
    member4: "../members/KJG.json",
};

const modal = document.getElementById("memberModal");
const modalProfileImage = document.getElementById("modalProfileImage");
const modalName = document.getElementById("modalName");
const modalSubName = document.getElementById("modalSubName");
const modalQuote = document.getElementById("modalQuote");
const modalDetail = document.getElementById("modalDetail");
const modalDescription = document.getElementById("modalDescription");
const modalBirthday = document.getElementById("modalBirthday");
const modalLocation = document.getElementById("modalLocation");
const modalEmail = document.getElementById("modalEmail");
const modalPhone = document.getElementById("modalPhone");
const modalLink = document.getElementById("modalLink");
const modalStrengths = document.getElementById("modalStrengths");
const modalSkills = document.getElementById("modalSkills");
const modalTilLink = document.getElementById("modalTilLink");

const memberData = {};

function normalizeProfileImage(imagePath) {
    if (!imagePath) {
        return "https://via.placeholder.com/100";
    }

    const isAbsolutePath = imagePath.startsWith("http://") || imagePath.startsWith("https://");

    if (isAbsolutePath) {
        return imagePath;
    }

    return `../members/${imagePath.replace(/^\.?\//, "")}`;
}

function getCardElement(memberId) {
    return document.querySelector(`[data-member-id="${memberId}"]`);
}

function applyMemberToCard(memberId, member) {
    const card = getCardElement(memberId);

    if (!card || !member) {
        return;
    }

    const nameElement = card.querySelector(".member-name");
    const roleElement = card.querySelector(".member-role");
    const introElement = card.querySelector(".member-intro");
    const imageElement = card.querySelector(".member-image img");

    if (nameElement) {
        nameElement.textContent = member.name ?? "";
    }

    if (roleElement) {
        roleElement.textContent = member.subName ?? "";
    }

    if (introElement) {
        introElement.textContent = member.introduction?.quote ?? "";
    }

    if (imageElement) {
        imageElement.src = normalizeProfileImage(member.profileImage);
        imageElement.alt = `${member.name} 프로필 이미지`;
    }
}

function hideUnmappedCards() {
    const cards = document.querySelectorAll("[data-member-id]");

    cards.forEach((card) => {
        const memberId = card.dataset.memberId;

        if (!memberFileMap[memberId]) {
            card.style.display = "none";
        }
    });
}

function renderStrengths(strengths = []) {
    modalStrengths.innerHTML = "";

    strengths.forEach((strength) => {
        const item = document.createElement("li");
        item.textContent = strength;
        modalStrengths.appendChild(item);
    });
}

function renderSkills(skills = []) {
    modalSkills.innerHTML = "";

    skills.forEach((skill) => {
        const item = document.createElement("span");
        const skillName = typeof skill === "string" ? skill : skill.name;
        const skillProgress = typeof skill === "object" && skill.progress !== undefined ? ` ${skill.progress}%` : "";

        item.textContent = `${skillName}${skillProgress}`;
        item.style.display = "inline-block";
        item.style.margin = "0 8px 8px 0";
        item.style.padding = "6px 10px";
        item.style.border = "1px solid #ddd";
        item.style.fontSize = "13px";

        modalSkills.appendChild(item);
    });
}

function applyMemberToModal(member) {
    modalProfileImage.src = normalizeProfileImage(member.profileImage);
    modalProfileImage.alt = `${member.name} 프로필 이미지`;
    modalName.textContent = member.name ?? "";
    modalSubName.textContent = member.subName ?? "";
    modalQuote.textContent = member.introduction?.quote ?? "";
    modalDetail.textContent = member.introduction?.detail ?? "";
    modalDescription.textContent = member.info?.description ?? "";
    modalBirthday.textContent = member.info?.birthday ?? "";
    modalLocation.textContent = member.info?.location ?? "";
    modalEmail.textContent = member.info?.email ?? "";
    modalPhone.textContent = member.info?.phone ?? "";

    const linkValue = member.info?.link ?? "";
    modalLink.href = linkValue || "#";
    modalLink.textContent = linkValue || "링크 없음";

    modalTilLink.href = linkValue || "#";

    renderStrengths(member.strengths);
    renderSkills(member.skills);
}

async function loadMemberData() {
    const entries = Object.entries(memberFileMap);

    await Promise.all(
        entries.map(async ([memberId, path]) => {
            try {
                const response = await fetch(path);

                if (!response.ok) {
                    throw new Error(`${path} ${response.status}`);
                }

                memberData[memberId] = await response.json();
                applyMemberToCard(memberId, memberData[memberId]);
            } catch (error) {
                console.error(`멤버 데이터 로드 실패: ${memberId}`, error);
            }
        })
    );
}

async function openModal(memberId) {
    if (!Object.keys(memberData).length) {
        await loadMemberData();
    }

    const member = memberData[memberId];

    if (!member) {
        alert("해당 멤버 데이터가 아직 연결되지 않았습니다.");
        return;
    }

    applyMemberToModal(member);

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

window.openModal = openModal;
window.closeModal = closeModal;

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});

hideUnmappedCards();
loadMemberData();
