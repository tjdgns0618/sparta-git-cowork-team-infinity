# 팀원 소개 페이지

Git 커밋 협업을 통한 팀원 소개 페이지 프로젝트입니다.

![main image](./image/main.png)

## 프로젝트 구조

```
sparta-git-cowork/
├── index.html          # 팀원 목록 페이지
├── members/           # 팀원 정보 JSON 파일 디렉토리
│   ├── members.json   # 팀원 목록 파일
│   ├── member1.json  # 템플릿 1 (프론트엔드 개발자)
│   ├── member2.json  # 템플릿 2 (백엔드 개발자)
│   ├── member3.json  # 템플릿 3 (UI/UX 디자이너)
│   ├── member4.json  # 템플릿 4 (풀스택 개발자)
│   ├── member5.json  # 템플릿 5 (데이터 분석가)
│   └── example.json   # 예시 팀원 정보
└── image/             # 이미지 파일 디렉토리
```

## 시작하기

### 1. 저장소 클론 및 브랜치 생성

```bash
# 저장소 클론
git clone <repository-url>
cd sparta-git-cowork

# 새 브랜치 생성 (본인의 이름 또는 아이디로)
git checkout -b add-member-<your-name>
```

### 2. 본인의 팀원 정보 추가

**방법 1: 기존 템플릿 활용 (추천)**

1. `members/` 디렉토리에서 본인과 가장 유사한 역할의 템플릿을 선택합니다:
   - `member1.json` - 프론트엔드 개발자
   - `member2.json` - 백엔드 개발자
   - `member3.json` - UI/UX 디자이너
   - `member4.json` - 풀스택 개발자
   - `member5.json` - 데이터 분석가

2. 선택한 템플릿 파일을 복사하여 본인의 JSON 파일을 생성합니다:
   ```bash
   cp members/member1.json members/본인아이디.json
   ```

3. 생성한 JSON 파일을 열어 본인의 정보로 수정합니다.

**방법 2: 처음부터 작성**

1. `members/` 디렉토리에 본인의 JSON 파일을 생성합니다.
   - 파일명: `본인아이디.json` (예: `honggildong.json`)

2. 아래 템플릿을 참고하여 본인의 정보를 작성합니다.

```json
{
  "id": "your-id",
  "name": "홍길동",
  "subName": "풀스택 개발자",
  "profileImage": "image/your-profile.png",
  "introduction": {
    "quote": "자기소개 한 줄",
    "detail": "자기소개 상세 내용"
  },
  "info": {
    "description": "간단한 소개",
    "birthday": "2000.01.01",
    "location": "서울시 강남구",
    "email": "your.email@example.com",
    "phone": "010-1234-5678"
  },
  "strengths": ["의사소통", "도전 정신", "리더십"],
  "skills": [
    { "name": "HTML", "progress": 10 },
    { "name": "CSS", "progress": 10 },
    { "name": "JavaScript", "progress": 15 }
  ],
  "licenses": ["정보처리기사"],
  "education": [
    {
      "name": "스파르타 대학교",
      "period": "2016.03.02 ~ 2020.02.20",
      "gpa": "4.0",
      "location": "서울시 강남구"
    }
  ],
  "experience": [
    {
      "period": "6개월",
      "company": "회사명",
      "term": "2023.01~2023.06",
      "team": "개발팀, 개발자",
      "task": "주요 업무",
      "project": {
        "name": "프로젝트명",
        "term": "2023.02~2023.05",
        "detail": "프로젝트 상세 설명"
      }
    }
  ],
  "projects": [
    {
      "title": "프로젝트명",
      "description": "프로젝트 설명",
      "image": "image/project-image.png",
      "link": "project.html"
    }
  ]
}
```

3. `members/members.json` 파일에 본인의 JSON 파일명을 추가합니다.

```json
{
  "members": [
    "member1.json",
    "member2.json",
    "member3.json",
    "member4.json",
    "member5.json",
    "your-id.json"
  ]
}
```

   **중요**: 배열의 순서는 자유롭게 배치할 수 있습니다. 기존 템플릿들은 유지하고, 본인 파일만 추가하세요.

4. 프로필 이미지를 `image/` 디렉토리에 추가합니다 (선택사항).
   - 파일명: `본인아이디.png` 또는 `본인아이디.jpg`
   - JSON 파일에서 `profileImage` 필드를 수정: `"image/본인아이디.png"`

### 3. 변경사항 커밋 및 푸시

```bash
# 변경사항 확인
git status

# 변경사항 스테이징
git add members/your-id.json
git add members/members.json
git add image/your-profile.png  # 이미지가 있는 경우

# 커밋
git commit -m "Add: 홍길동 팀원 정보 추가"

# 푸시
git push origin add-member-<your-name>
```

### 4. Pull Request 생성

1. GitHub에서 Pull Request를 생성합니다.
2. PR 제목: `Add: [본인 이름] 팀원 정보 추가`
3. PR 설명에 본인의 간단한 소개를 작성합니다.

### 5. 코드 리뷰 및 머지

- 다른 팀원들의 코드 리뷰를 받습니다.
- 승인 후 메인 브랜치에 머지됩니다.

## 주의사항

1. **파일명 규칙**: JSON 파일명은 `본인아이디.json` 형식으로 작성하세요.
2. **JSON 형식**: JSON 파일의 문법 오류가 없도록 주의하세요.
3. **이미지 경로**: 이미지 파일은 `image/` 디렉토리에 저장하고, 경로는 `image/파일명.png` 형식으로 작성하세요.
4. **커밋 메시지**: 명확하고 간결한 커밋 메시지를 작성하세요.
5. **충돌 해결**: 다른 팀원과 동시에 수정한 경우 충돌을 해결해야 합니다.

## 예시

### 팀원 정보 추가 예시

```bash
# 1. 브랜치 생성
git checkout -b add-member-kim

# 2. 템플릿 복사 (프론트엔드 개발자인 경우)
cp members/member1.json members/kim.json

# 3. JSON 파일 수정
# members/kim.json 파일을 열어 본인 정보로 수정

# 4. members.json 업데이트
# members/members.json에 "kim.json" 추가

# 5. 커밋 및 푸시
git add members/kim.json members/members.json
git commit -m "Add: 김철수 팀원 정보 추가"
git push origin add-member-kim
```

### 템플릿별 역할 안내

- **member1.json** (김개발): 프론트엔드 개발자 - React, TypeScript 중심
- **member2.json** (이백엔드): 백엔드 개발자 - Node.js, Python 중심
- **member3.json** (박디자인): UI/UX 디자이너 - Figma, Adobe XD 중심
- **member4.json** (최풀스택): 풀스택 개발자 - React, Node.js 모두
- **member5.json** (정데이터): 데이터 분석가 - Python, SQL, 머신러닝 중심

본인의 역할과 가장 유사한 템플릿을 선택하여 수정하시면 됩니다!

## 문의

프로젝트 관련 문의사항이 있으면 이슈를 생성해주세요.

---
Copyright ⓒ TeamSparta All rights reserved.
