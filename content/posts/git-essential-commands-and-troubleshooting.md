# Git 필수 명령어와 자주 만나는 오류 해결법

Git을 처음 사용하거나, 가끔 마주치는 오류 메시지에 당황한 적이 있다면 이 글이 도움이 될 것입니다.

## 목차
1. [Git 기본 명령어](#git-기본-명령어)
2. [자주 발생하는 오류와 해결법](#자주-발생하는-오류와-해결법)
3. [실무 팁](#실무-팁)

---

## Git 기본 명령어

### 저장소 초기화 및 설정

```bash
# 새 저장소 초기화
git init

# 원격 저장소 복제
git clone <repository-url>

# 사용자 정보 설정 (전역)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 현재 저장소만 설정
git config user.name "Your Name"
git config user.email "your@email.com"
```

### 상태 확인

```bash
# 현재 상태 확인 (가장 자주 사용)
git status

# 커밋 이력 확인
git log

# 한 줄로 간단히 보기
git log --oneline

# 그래프로 브랜치 확인
git log --oneline --graph --all
```

### 변경사항 관리

```bash
# 모든 변경사항 스테이징
git add .

# 특정 파일만 스테이징
git add <filename>

# 스테이징 취소
git reset <filename>

# 변경사항 확인
git diff                 # 스테이징 전
git diff --staged        # 스테이징 후
```

### 커밋

```bash
# 커밋 생성
git commit -m "커밋 메시지"

# 스테이징 + 커밋 동시에 (tracked 파일만)
git commit -am "커밋 메시지"

# 마지막 커밋 수정 (주의: push 전에만!)
git commit --amend -m "수정된 메시지"
```

### 브랜치

```bash
# 브랜치 목록
git branch

# 브랜치 생성
git branch <branch-name>

# 브랜치 이동
git checkout <branch-name>
git switch <branch-name>      # Git 2.23+

# 생성 + 이동
git checkout -b <branch-name>
git switch -c <branch-name>   # Git 2.23+

# 브랜치 삭제
git branch -d <branch-name>   # 병합된 브랜치
git branch -D <branch-name>   # 강제 삭제

# 브랜치 이름 변경
git branch -m <old-name> <new-name>
git branch -m <new-name>      # 현재 브랜치
```

### 원격 저장소

```bash
# 원격 저장소 확인
git remote -v

# 원격 저장소 추가
git remote add origin <repository-url>

# 푸시 (최초)
git push -u origin main

# 푸시 (이후)
git push

# 풀
git pull

# 원격 변경사항 가져오기 (병합 없이)
git fetch
```

### 병합

```bash
# 브랜치 병합
git merge <branch-name>

# 리베이스 (커밋 이력 정리)
git rebase <branch-name>

# 충돌 해결 후
git add .
git commit
```

---

## 자주 발생하는 오류와 해결법

### 1. `src refspec main does not match any`

```bash
$ git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/user/repo.git'
```

**원인**: 푸시하려는 브랜치에 커밋이 없음

**해결**:
```bash
# 현재 상태 확인
git status
git log

# 커밋이 없다면 먼저 커밋 생성
git add .
git commit -m "Initial commit"

# 다시 푸시
git push -u origin main
```

**추가 확인사항**:
- 브랜치 이름이 `main`인지 `master`인지 확인: `git branch`
- 원격에서 기본 브랜치 이름과 맞는지 확인

---

### 2. `fatal: not a git repository`

```bash
$ git status
fatal: not a git repository (or any of the parent directories): .git
```

**원인**: 현재 디렉토리가 Git 저장소가 아님

**해결**:
```bash
# Git 저장소 초기화
git init

# 또는 올바른 디렉토리로 이동
cd /path/to/your/repo
```

---

### 3. `fatal: remote origin already exists`

```bash
$ git remote add origin https://github.com/user/repo.git
fatal: remote origin already exists.
```

**원인**: 이미 `origin`이라는 원격 저장소가 등록됨

**해결**:
```bash
# 기존 origin 확인
git remote -v

# URL 변경
git remote set-url origin <new-url>

# 또는 삭제 후 다시 추가
git remote remove origin
git remote add origin <url>
```

---

### 4. `could not read Username for 'https://github.com'`

```bash
$ git push -u origin main
fatal: could not read Username for 'https://github.com': Device not configured
```

**원인**: GitHub 인증 정보가 없음

**해결 방법 1: GitHub CLI 사용 (권장)**
```bash
# 설치 (Mac)
brew install gh

# 로그인
gh auth login

# 다시 푸시
git push -u origin main
```

**해결 방법 2: SSH 키 사용**
```bash
# SSH 키 생성
ssh-keygen -t ed25519 -C "your@email.com"

# 키 복사
cat ~/.ssh/id_ed25519.pub
# GitHub Settings > SSH Keys에 추가

# 원격 URL을 SSH로 변경
git remote set-url origin git@github.com:user/repo.git
```

**해결 방법 3: Personal Access Token**
```bash
# GitHub > Settings > Developer settings > Personal access tokens
# 토큰 생성 후 비밀번호 대신 사용
```

---

### 5. `Updates were rejected because the tip of your current branch is behind`

```bash
$ git push
! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'origin'
hint: Updates were rejected because the tip of your current branch is behind
```

**원인**: 원격에 로컬에 없는 커밋이 있음

**해결**:
```bash
# 방법 1: pull 후 push (권장)
git pull --rebase origin main
git push

# 방법 2: merge 방식
git pull origin main
# 충돌 해결 후
git push

# 방법 3: 강제 푸시 (주의! 협업 시 사용 금지)
git push -f origin main
```

---

### 6. `Your branch is ahead of 'origin/main' by N commits`

```bash
$ git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
```

**원인**: 로컬 커밋이 아직 푸시되지 않음 (오류가 아님)

**해결**:
```bash
git push
```

---

### 7. `CONFLICT (content): Merge conflict`

```bash
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**원인**: 같은 파일의 같은 부분을 다르게 수정함

**해결**:
```bash
# 1. 충돌 파일 확인
git status

# 2. 파일을 열어 충돌 부분 수정
# <<<<<<< HEAD
# 현재 브랜치 내용
# =======
# 병합하려는 브랜치 내용
# >>>>>>> branch-name

# 3. 마커 제거하고 원하는 내용으로 수정

# 4. 수정 완료 후
git add .
git commit -m "Resolve merge conflict"
```

---

### 8. `detached HEAD state`

```bash
$ git checkout abc1234
Note: switching to 'abc1234'.
You are in 'detached HEAD' state.
```

**원인**: 특정 커밋으로 체크아웃하여 브랜치가 아닌 상태

**해결**:
```bash
# 브랜치로 돌아가기
git checkout main

# 또는 현재 상태에서 새 브랜치 생성
git checkout -b new-branch-name
```

---

## 실무 팁

### 커밋 메시지 컨벤션

```
<type>: <subject>

<body>

<footer>
```

**Type 종류**:
| Type | 설명 |
|------|------|
| `feat` | 새로운 기능 |
| `fix` | 버그 수정 |
| `docs` | 문서 변경 |
| `style` | 코드 포맷팅 (기능 변경 없음) |
| `refactor` | 리팩토링 |
| `test` | 테스트 추가/수정 |
| `chore` | 빌드, 설정 파일 수정 |

**예시**:
```
feat: 사용자 로그인 기능 추가

- JWT 토큰 기반 인증 구현
- 로그인 폼 컴포넌트 생성
- 로그인 API 연동

Closes #123
```

### .gitignore 필수 항목

```gitignore
# Dependencies
node_modules/

# Environment
.env
.env.local

# Build
dist/
build/
.next/

# IDE
.idea/
.vscode/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

### 유용한 Git Alias

```bash
# ~/.gitconfig에 추가
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"
```

---

## 마무리

Git은 처음에는 어렵게 느껴지지만, 기본 명령어를 익히고 오류 메시지를 이해하면 금방 익숙해집니다. 오류가 발생했을 때 당황하지 말고, 메시지를 차근차근 읽어보세요. 대부분의 해결책이 메시지 안에 있습니다.

**핵심 원칙**:
1. `git status`를 자주 확인하자
2. 커밋은 작은 단위로 자주 하자
3. push 전에 한 번 더 확인하자
4. 협업 시 `force push`는 신중하게

---

*이 글이 도움이 되었다면 공유해주세요!*
