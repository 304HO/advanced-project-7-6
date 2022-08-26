# codestates-fe-advanced-project-7-6

## [Deploy Site](https://codestates-fe-advanced-project-7-6.vercel.app)

### 7조 팀원구성

- 장석찬(팀장)
- 김민성
- 제경모
- 채희찬

### 페이지 (gif 파일)

<details>
  <summary>메인 페이지</summary>
  - 설문 생성 페이지 이동 버튼 </br>
  - 설문 참여 페이지 이동 버튼
  
  ![메인페이지](https://user-images.githubusercontent.com/91649767/186906209-6ef0b967-56c2-4f6d-9c66-219115672f42.gif)
</details>

<details>
  <summary>설문 생성 페이지</summary>
  - 설문의 제목과 설명을 입력합니다.
  
![설문생성페이지](https://user-images.githubusercontent.com/91649767/186907071-bfdfc512-b8ee-4fbe-9776-49c8af4e5fd5.gif)
</details>

<details>
  <summary>질문 생성</summary>
  - 답변 필수 여부와 질문 생성(타입별)
  
  ![질문 생성](https://user-images.githubusercontent.com/91649767/186907949-9d73b9f8-82f5-410d-814c-202e96822a80.gif)
</details>

<details>
  <summary>Local Storage 저장된 데이터</summary>

![image](https://user-images.githubusercontent.com/91649767/186931893-395109af-6edc-4e48-9722-9a22845696d5.png)

</details>

<details>
  <summary>설문지 작성완료 안내 메시지</summary>
  
![설문작성완료안내메세지](https://user-images.githubusercontent.com/91649767/186931925-f939b123-68c6-4833-bd73-bb758a88ddf6.gif)
</details>

<details>
  <summary>설문작성 완료</summary>
  
![설문작성](https://user-images.githubusercontent.com/91649767/186932062-7380d0b5-7833-4e5f-bfa9-588ddebd0ced.gif)
</details>
### 프로젝트 실행 방법

```
git clone https://github.com/jsc7727/codestates-fe-advanced-project-7-6.git
cd codestates-fe-advanced-project-7-6
npm install
npm start
```

### 컴포넌트

- header - 장석찬
- CreateSurvey => input description - 장석찬
- alert - 장석찬
- modal => select | radio - 장석찬

- CreateSurvey => sideBar - 제경모
- SubmitSurvey => select input(drop box) | text input | data picker - 김민성
- SubmitSurvey => radio - 채희찬

# 구현 방법 혹은 구현하면서 어려웠던 점과 이에대한 개선방안

## 구조 개선

- react-router-dom 을 적극적으로 활용해서 컴포넌트를 더 분리했어야합니다.
- 구조를 개선하였을 경우 더 재사용 가능한 컴포넌트가 많았는데 아쉬웠습니다.

## 요구 사항을 제대로 파악하기

- 문서화를 세심하게 했으면 요구사항을 더 자세히 확인할 수 있었으나,
- 몇몇 기능이 요구사항과 다르게 구현되어 수정하는데 시간이 더 필요했습니다.
