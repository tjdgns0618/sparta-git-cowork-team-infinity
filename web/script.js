const memberData = {
    leader: {
        name: "양성훈",
        subName: "팀장 | 백엔드 개발자",
        quote: "무한히 성장하는 팀을 만드는 중입니다.",
        detail: "백엔드 개발을 중심으로 협업 흐름을 만들고, 팀원들이 각자 역할을 잘 수행할 수 있도록 방향을 잡고 있습니다.",
        description: "팀 소개 페이지를 이끄는 팀장입니다.",
        birthday: "1999.01.01",
        location: "서울",
        email: "leader@example.com",
        phone: "010-0000-0000",
        link: "https://github.com/tjdgns0618",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAgUBuKG8vBvL3nv89KJI7VRE0Rp3mPuhKWPqD6rWKxoqMsjsk1yTE19rGoQN7-dS0Q2na7N3xYpVaKPBILybHG9yMali9x2tu3mG6Q&s=10",
        strengths: ["리더십", "책임감", "협업 조율"],
        skills: ["Java", "Spring", "Git"],
        tilLink: "#",
    },
    member1: {
        name: "김철수",
        subName: "팀원 | 프론트엔드 개발자",
        quote: "UI/UX에 관심이 많습니다.",
        detail: "사용자가 보기 편한 화면과 자연스러운 인터랙션을 만드는 데 관심이 많습니다.",
        description: "프론트엔드 구현을 맡고 있습니다.",
        birthday: "2000.02.14",
        location: "경기",
        email: "member1@example.com",
        phone: "010-1111-1111",
        link: "https://github.com/",
        image: "https://via.placeholder.com/100",
        strengths: ["디자인 감각", "화면 구현", "사용성 고민"],
        skills: ["HTML", "CSS", "JavaScript"],
        tilLink: "#",
    },
    member2: {
        name: "이영희",
        subName: "팀원 | 디자이너",
        quote: "아름다운 디자인을 추구합니다.",
        detail: "단순히 예쁜 화면보다 의도가 명확하고 일관된 디자인을 만드는 데 집중합니다.",
        description: "디자인과 시각적 완성도를 담당합니다.",
        birthday: "1998.06.03",
        location: "인천",
        email: "member2@example.com",
        phone: "010-2222-2222",
        link: "https://github.com/",
        image: "https://via.placeholder.com/100",
        strengths: ["디자인 시스템", "컬러 감각", "정리력"],
        skills: ["Figma", "UI Design", "Branding"],
        tilLink: "#",
    },
    member3: {
        name: "박민수",
        subName: "팀원 | 풀스택 개발자",
        quote: "무엇이든 만들 수 있습니다.",
        detail: "프론트엔드와 백엔드를 모두 다루며, 기능을 빠르게 구현하고 연결하는 데 강점이 있습니다.",
        description: "전반적인 기능 구현을 담당합니다.",
        birthday: "1997.11.21",
        location: "부산",
        email: "member3@example.com",
        phone: "010-3333-3333",
        link: "https://github.com/",
        image: "https://via.placeholder.com/100",
        strengths: ["문제 해결", "빠른 구현", "적응력"],
        skills: ["React", "Node.js", "MySQL"],
        tilLink: "#",
    },
    member4: {
        name: "정수진",
        subName: "팀원 | 기획자",
        quote: "사용자 경험을 중시합니다.",
        detail: "기능이 왜 필요한지부터 먼저 생각하고, 흐름이 끊기지 않는 기획을 만드는 걸 중요하게 봅니다.",
        description: "서비스 흐름과 사용자 관점을 정리합니다.",
        birthday: "2001.04.09",
        location: "대전",
        email: "member4@example.com",
        phone: "010-4444-4444",
        link: "https://github.com/",
        image: "https://via.placeholder.com/100",
        strengths: ["기획 정리", "사용자 관점", "문서화"],
        skills: ["Planning", "Docs", "Communication"],
        tilLink: "#",
    },
    member5: {
        name: "최준호",
        subName: "팀원 | 데이터 분석가",
        quote: "데이터로 인사이트를 발굴합니다.",
        detail: "숫자만 보는 게 아니라 데이터에서 의미를 읽어내고, 의사결정에 도움 되는 방향을 고민합니다.",
        description: "데이터 분석과 인사이트 도출을 맡고 있습니다.",
        birthday: "1999.09.17",
        location: "광주",
        email: "member5@example.com",
        phone: "010-5555-5555",
        link: "https://github.com/",
        image: "https://via.placeholder.com/100",
        strengths: ["분석력", "패턴 파악", "논리적 사고"],
        skills: ["Python", "Pandas", "Visualization"],
        tilLink: "#",
    },
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

function renderStrengths(strengths) {
    modalStrengths.innerHTML = "";

    strengths.forEach((strength) => {
        const item = document.createElement("li");
        item.textContent = strength;
        modalStrengths.appendChild(item);
    });
}

function renderSkills(skills) {
    modalSkills.innerHTML = "";

    skills.forEach((skill) => {
        const item = document.createElement("span");
        item.textContent = skill;
        item.style.display = "inline-block";
        item.style.margin = "0 8px 8px 0";
        item.style.padding = "6px 10px";
        item.style.border = "1px solid #ddd";
        item.style.fontSize = "13px";
        modalSkills.appendChild(item);
    });
}

function openModal(memberId) {
    const member = memberData[memberId];

    if (!member) {
        return;
    }

    modalProfileImage.src = member.image;
    modalProfileImage.alt = `${member.name} 프로필 이미지`;
    modalName.textContent = member.name;
    modalSubName.textContent = member.subName;
    modalQuote.textContent = member.quote;
    modalDetail.textContent = member.detail;
    modalDescription.textContent = member.description;
    modalBirthday.textContent = member.birthday;
    modalLocation.textContent = member.location;
    modalEmail.textContent = member.email;
    modalPhone.textContent = member.phone;
    modalLink.href = member.link;
    modalLink.textContent = member.link;
    modalTilLink.href = member.tilLink;

    renderStrengths(member.strengths);
    renderSkills(member.skills);

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
