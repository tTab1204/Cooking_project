# 👨🏻‍🍳 Cooking (MERN stack) 
### 요리 공유 플랫폼!
> **Cooking**은 사용자들이 호스트의 요리 이벤트를 예매하고, 요리사들이 호스트로 등록되는 MERN stack (es6) 웹사이트입니다.

**❝현재 Presenter/Container 컴포넌트 디자인 패턴을 적용했던 디렉토리 구조를 제거하는 리팩토링을 진행 중입니다.❞** <br />바뀐 디렉토리 구조를 확인하려면 <strong>[여기](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%93%81-Directory-Structure)</strong>를 클릭하세요.

#### ✅ 테스트 ID/PW
| ID | PW |
| :--------: | :--------: |
|test@gmail.com|1234567|



### 💁🏻 Wiki 
- 🌐 [Skill Spec [FE]](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%8C%90-Skill-Spec-%5BFrontEnd%5D)
- 🛠 [Skill Spec [BE]](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%9B%A0-Skill-Spec-%5BBackEnd%5D)
- [📜 REST API Reference](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%93%9C-REST-API-Reference)
- 📁 [디렉토리 구조](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%93%81-Directory-Structure)

## 👨🏻‍🏫 주요 기능
#### 🔒 로그인/회원가입/관리 권한
 - **JWT Authorization** - [사용 이유](https://github.com/tTab1204/Cooking_project/wiki/JWT(JSON-Web-Token)%EB%8A%94-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B1%B8%EA%B9%8C%3F)
 - 토큰 발급/삭제, 토큰 만료기간을 이용한 로그인/로그아웃 구현
 - **auth 컴포넌트를 통한(hoc 컴포넌트)** 관리자/일반 유저가 이용할 수 있는 페이지 구분
 
#### 📇 필터링
 - 사용자가 입력한 날짜를 바탕으로 필터링 기능 구현
 - 사용자가 입력한 키워드를 바탕으로 필터링 기능 구현
 - **키워드 입력 시 과도한 API 호출을 막기 위해 디바운싱 적용**

#### 💬 댓글/답글
 - 사용자가 댓글을 입력, 수정, 삭제가 가능하도록 구현
 - 답글(대댓글)기능 구현

#### 🛒 상품 추가/삭제 
- MyTicketPage(cart)에서 상품 추가/제거
- 상품을 추가, 삭제함에 따라 DB내의 User 스키마의 cart 필드 변화

## 🤹‍♂ Tech Stack
- 🌐 [Skill Spec [FE]](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%8C%90-Skill-Spec-%5BFrontEnd%5D)
- 🛠 [Skill Spec [BE]](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%9B%A0-Skill-Spec-%5BBackEnd%5D)

## 🔨 Web Architecture
<img src="https://user-images.githubusercontent.com/66458836/141753350-77e4e0df-d07e-44ca-8565-98996540dd03.jpg" width="70%" height="50%" />

## 💪 어려웠던 기술 & 기능 / 해결과정
> Cooking! 프로젝트를 진행하며 겪었던 기술적인 어려움, 어려움을 해결해 나간 과정에서 적용했던 기술들을 <br />소개드립니다!

### [🔒 HOC 컴포넌트(Auth)를 이용한 권한 인증](https://github.com/tTab1204/Cooking_project/wiki/%F0%9F%94%92-HOC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8(Auth)%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B6%8C%ED%95%9C-%EC%9D%B8%EC%A6%9D)
### [🔒 JWT를 이용한 로그인 기능]()
### [🔒 CORS 이슈]()
### [🧾 댓글/답글 기능]()

<hr />

### ⚙ 기술 관련 내용 정리
- [JWT를 왜 사용하는 걸까?](https://github.com/tTab1204/Cooking_project/wiki/JWT(JSON-Web-Token)%EB%8A%94-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B1%B8%EA%B9%8C%3F)



## 설치 및 실행
```
$ npm install
```
```javascript
 "scripts": {
    "start": "node server/index.js",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\"",
  }
```
- 설치는 `npm install` 명령어를 입력합니다.
- 루트 디렉토리에서 `npm run dev`라고 실행하면 서버와 클라이언트를 동시에 실행할 수 있습니다.
- 서버와 클라이언트를 따로 실행하고 싶다면, 루트 디렉토리에서 `npm start`라고 실행하면 서버가 실행되고, `client` 디렉토리에서 `npm start`라고 실행하면 `client` 폴더가 실행됩니다.


## Deployment
Heroku, awsS3

**[⬆ 맨 위로 가기](#)**
