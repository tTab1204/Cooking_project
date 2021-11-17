# 👨🏻‍🍳 Cooking (MERN stack) 
### 요리 공유 플랫폼!
> **Cooking**은 사용자들이 호스트의 요리 이벤트를 예매하고, 요리사들이 호스트로 등록되는 MERN stack (es6) 웹사이트입니다.

**❝현재 Presenter/Container 컴포넌트 디자인 패턴을 적용했던 디렉토리 구조를 제거하는 리팩토링을 진행 중입니다.** <br />바뀐 디렉토리 구조를 확인하려면 <strong>[여기]()</strong>를 클릭하세요.❞

**❝ ❗미완성 Readme입니다.❞**


#### ✅ 테스트 ID/PW
| ID | PW |
| :--------: | :--------: |
|test@gmail.com|1234567|



### 💁🏻 Wiki 
- 🌐 [Skill Spec [FE]](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%8C%90-Skill-Spec-%5BFrontEnd%5D)
- 🛠 [Skill Spec [BE]]()
- 📁 [디렉토리 구조]()


## 🤹‍♂ Tech Stack
저는 프로젝트를 진행하며 다음과 같은 기술 스택을 사용했습니다.

## 🔨 Web Architecture
<img src="https://user-images.githubusercontent.com/66458836/141753350-77e4e0df-d07e-44ca-8565-98996540dd03.jpg" width="70%" height="50%" />

## 주요 기능
- 로그인/회원가입
- JWT Authorization
- 이벤트 검색 (이름, 날짜)
- 댓글(답글), 팔로우, 좋아요/싫어요
- MyTicketPage에 상품 추가/제거
- Ant Design
- Styled Components
- 반응형 웹 페이지

## 사용 기술
- React
- Redux
- Node
- Express
- Mongoose
- Heroku

## 설치
```
$ npm install
```

## 실행
```javascript
 "scripts": {
    "start": "node server/index.js",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\"",
  }
```
- 루트 디렉토리에서 `npm run dev`라고 실행하면 서버와 클라이언트를 동시에 실행할 수 있습니다.
- 서버와 클라이언트를 따로 실행하고 싶다면, 루트 디렉토리에서 `npm start`라고 실행하면 서버가 실행되고, `client` 디렉토리에서 `npm start`라고 실행하면 `client` 폴더가 실행됩니다.


## Deployment
Heroku, awsS3
