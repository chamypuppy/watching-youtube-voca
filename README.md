# 🗒 React VOCA

### 개요
```리액트 도서 + Youtube 코딩앙마```님의 <strong><React js 강좌></strong>로 리액트를 공부하고 실습한 코드를 실은 레포지토리입니다. <br/><br/>

실습 프로젝트는 [리액트로 단어암기장 만들기 - VOCA] 이고 Netlify로 서버에 빌드하였습니다.<br/><br/>
https://66d5827d7ea1d4f6af4a344c--glowing-salmiakki-cb9c21.netlify.app/
<br/><br/>


### 학습 정리 블로그
https://coda.io/@qkfqkxhtm9/qkfqkxhtm9-coda<br/><br/>
```리액트 페이지 > 리액트 표 40번째 줄```의 react youtube VOCA 의 <strong>Notes</strong>에서 열람 가능합니다.
<br/><br/>

### 아직 해결되지 않은 문제점
빌드는 완료하였으나 Day 추가 버튼을 클릭하면 아무 일도 일어나지 않는 문제점을 확인하였습니다. <br/> <br/>
고민해본 결과, Day 추가 버튼을 클릭하면 서버에서 Day가 있는지 확인하는 과정을 거쳐야 하는데<br/> <br/>
그 서버가 json-server로 만든 서버여서 올려진 json 데이터 서버가 타인에게는 접근되지 않는 개인 localhost 서버임을 알게 되었습니다.<br/> <br/>
9/23 현재는 임시 서버에서 타인도 접근 가능한 실제 서버로 구축하기 위해 개선점을 찾고 있습니다.<br/> <br/>
이 문제점을 해결하여 README 파일도 추가 패치할 예정입니다.
