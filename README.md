# React Shop Project

React를 기반으로 만든 간단한 쇼핑몰 프로젝트입니다.  
상품 목록 조회, 상품 상세 조회, 장바구니 담기 기능을 구현했으며,  
Redux를 활용해 장바구니 상태를 관리했습니다.

---

## 프로젝트 소개

이 프로젝트는 React의 컴포넌트 구조와  
Redux를 이용한 전역 상태 관리 방식을 연습하기 위해 제작한 쇼핑몰 예제입니다.

상품 목록 화면과 상세 화면을 구성하고,  
상세 페이지에서 상품을 장바구니에 담을 수 있도록 구현했습니다.

---

## 주요 기능

- 상품 목록 조회
- 상품 상세 페이지 조회
- 장바구니 상품 추가
- Redux를 활용한 전역 상태 관리
- styled-components를 활용한 UI 구성

---

## 기술 스택

- React
- Redux
- React Router DOM
- Styled-components
- JavaScript
- CSS

---

## 폴더 구조

```bash
src
 ┣ action
 ┃ ┗ cartAction.js
 ┣ components
 ┃ ┣ detail
 ┃ ┣ display
 ┃ ┣ layout
 ┃ ┗ product
 ┣ reducers
 ┃ ┣ cart.js
 ┃ ┗ index.js
 ┣ util
 ┃ ┗ display
 ┣ App.js
 ┗ index.js
 ```

---

## 실행 방법
 
 ### 프로젝트 설치
 ```bash
 npm install
 ```

 ### 개발 서버 실행
 ```bash
npm start
```

---


## 구현 내용

  ### 상품 목록
  상품 데이터를 화면에 출력하고, 사용자가 상품을 확인할 수 있도록 구성했습니다.

  ### 상품 상세
  상품 이미지, 상품명, 가격, 배송비 등의 정보를 상세하게 확인할 수 있도록 구현했습니다.

  ### 장바구니
  상세 페이지에서 장바구니 버튼 클릭 시 Redux action이 dispatch 되도록 구성했습니다.  
  장바구니 데이터는 reducer를 통해 전역 상태로 관리합니다.

---

## 상태 관리

장바구니 기능은 Redux를 통해 관리했습니다.

- `action` : 장바구니 추가 액션 정의
- `reducer` : 장바구니 상태 변경 처리
- `store` : 전역 상태 저장

---

## 배운 점

이 프로젝트를 통해 다음과 같은 내용을 연습할 수 있었습니다.

- React 컴포넌트 분리 및 재사용
- props를 통한 데이터 전달
- React Router를 활용한 페이지 구성
- Redux를 활용한 상태 관리 흐름 이해
- styled-components를 활용한 컴포넌트 단위 스타일링