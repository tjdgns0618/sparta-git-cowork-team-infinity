const memberFileMap = {
    leader: "../members/YSH.json",
    member1: "../members/MSJ.json",
    member2: "../members/PJY.json",
    member3: "../members/YSR.json",
    member4: "../members/KJG.json",
    // member5: "../members/CJH.json", // 필요 시 추가
};

// DOM Elements
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

// --- 다크모드 로직 ---
const toggleBtn = document.getElementById('darkModeToggle');
const modeIcon = toggleBtn.querySelector('.mode-icon');

function updateModeIcon(theme) {
    modeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateModeIcon(savedTheme);
}

toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateModeIcon(newTheme);
});

// --- 데이터 로딩 로직 ---
function normalizeProfileImage(imagePath) {
    if (!imagePath) return "https://via.placeholder.com/100";
    if (imagePath.startsWith("http")) return imagePath;
    return `../members/${imagePath.replace(/^\.?\//, "")}`;
}

function applyMemberToCard(memberId, member) {
    const card = document.querySelector(`[data-member-id="${memberId}"]`);
    if (!card || !member) return;

    card.querySelector(".member-name").textContent = member.name || "";
    card.querySelector(".member-role").textContent = member.subName || "";
    card.querySelector(".member-intro").textContent = member.introduction?.quote || "";

    const img = card.querySelector(".member-image img");
    img.src = normalizeProfileImage(member.profileImage);
    img.alt = `${member.name} 프로필 이미지`;
}

function renderList(container, items, isSkill = false) {
    container.innerHTML = "";
    items?.forEach(item => {
        const el = document.createElement(isSkill ? "span" : "li");
        const text = typeof item === "string" ? item : `${item.name}${item.progress ? ` ${item.progress}%` : ""}`;
        el.textContent = text;
        container.appendChild(el);
    });
}

function applyMemberToModal(member) {
    modalProfileImage.src = normalizeProfileImage(member.profileImage);
    modalName.textContent = member.name || "";
    modalSubName.textContent = member.subName || "";
    modalQuote.textContent = member.introduction?.quote || "";
    modalDetail.textContent = member.introduction?.detail || "";
    modalDescription.textContent = member.info?.description || "";
    modalBirthday.textContent = member.info?.birthday || "";
    modalLocation.textContent = member.info?.location || "";
    modalEmail.textContent = member.info?.email || "";
    modalPhone.textContent = member.info?.phone || "";

    const link = member.info?.link || "#";
    modalLink.href = link;
    modalLink.textContent = member.info?.link || "링크 없음";
    modalTilLink.href = member.info?.til || link; // TIL 링크 우선 적용

    renderList(modalStrengths, member.strengths);
    renderList(modalSkills, member.skills, true);
}

async function loadMemberData() {
    const entries = Object.entries(memberFileMap);
    await Promise.all(entries.map(async ([id, path]) => {
        try {
            const res = await fetch(path);
            if (!res.ok) throw new Error();
            memberData[id] = await res.json();
            applyMemberToCard(id, memberData[id]);
        } catch (e) {
            console.error(`로드 실패: ${id}`);
            document.querySelector(`[data-member-id="${id}"]`).style.display = "none";
        }
    }));
}

window.openModal = async (id) => {
    if (!memberData[id]) await loadMemberData();
    const member = memberData[id];
    if (member) {
        applyMemberToModal(member);
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
};

window.closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
};

// 초기화
initTheme();
loadMemberData();

// 모달 외부 클릭 시 닫기
modal.addEventListener("click", e => e.target === modal && closeModal());