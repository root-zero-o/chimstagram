# 침스타그램💟

침스타그램(Chimstagram, 침착맨 + 인스타그램) <br>

### 1. 목적💁‍♀️
Redux, Redux middleware(Redux-thunk), Firebase를 공부하기 위해, 스트리머 '침착맨'을 좋아하는 마음을 담아 만들었습니다!

### 2. 사용된 기술🛠

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black"> <img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

### 3. 상세🔍 <br>
#### Home

<img src="https://user-images.githubusercontent.com/97326130/172772472-bb3e2fe2-eb50-4665-91f5-11dc06a29e58.gif" width="600"/>

- DB에 저장된 글 정보를 각각 카드에 표시해줍니다.
- 카드를 클릭하면 상세 정보를 담은 모달창이 열립니다.
- 로그인을 하지 않으면 게시글을 작성할 수 없습니다.
- 아래 네비게이션 바에는 순서대로 홈화면으로 가는 버튼, 침착맨 유튜브와 연결된 버튼, 침착맨 트위치와 연결된 버튼, 로그인/로그아웃 버튼이 있습니다.

#### SignUp <br>

<img src="https://user-images.githubusercontent.com/97326130/172773084-c5ecceff-db1c-4709-9bdd-a4e01865bf63.png" width="600"/>

- 회원가입 화면입니다.
- 정보를 입력하고 가입버튼을 누르면, Firebase Authentication에 정보가 저장되며 자동으로 로그인됩니다.
- 취소 버튼을 누르면 홈화면으로 돌아갑니다.

#### LogIn <br>

<img src ="https://user-images.githubusercontent.com/97326130/172774348-ff1c1e94-b423-4f20-8d97-63ba1f7e8aaa.gif" width="600"/>

- 로그인 화면입니다.
- 정보를 입력하고 'Log In'버튼을 누르면 홈화면으로 이동됩니다.
- 로그인된 홈 화면에는 로그인 한 사용자의 닉네임이 표시되고, 네비게이션 바의 'Log In'버튼이 'Log Out'으로 변합니다.

#### Input <br>

<img src="https://user-images.githubusercontent.com/97326130/172775832-f4a0f4e2-8490-4922-834b-6aadbc6cfbb9.gif" width="600"/>

- 게시글 작성 화면입니다.
- 파일을 선택하면 미리보기로 이미지를 볼 수 있으며, 글을 입력하고 완료 버튼을 누르면 글이 저장됩니다.

#### 게시글 수정 및 삭제 <br>

<img src="https://user-images.githubusercontent.com/97326130/172776544-3c7959dd-b08f-4d71-81cf-6e5ba015de0d.gif" width="600"/>

- 게시글 모달 좌측 하단 버튼을 누르면 게시글의 수정 및 삭제가 가능합니다.
- 수정 및 삭제 버튼은 해당 게시글을 작성한 사용자에게만 나타납니다.

#### 좋아요 <br>

<img src="https://user-images.githubusercontent.com/97326130/172777836-87906ec6-1726-40a7-8fd9-f8043656f50c.gif" width="600"/>

- 게시글 모달 내 하트 이모티콘을 누르면 게시글에 '좋아요'를 표시할 수 있습니다.
- '좋아요'를 표시한 상태에서 다시 한 번 하트 이모티콘을 누르면 '좋아요'를 취소할 수 있습니다.
