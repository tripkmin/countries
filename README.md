## English

### 🔗 Links

- Github URL: [Click here](https://github.com/tripkmin/countries)
- Live Site URL: [Click here](https://countries-tripkmin.vercel.app/)

### 🛠️ Technologies Used

- `React JS`
- `React Query`
- `TypeScript`
- `Styled-Components`
- `Framer Motion`
- `HTML5`, `CSS`

### 🗒️ Core Features

- Browse all countries on the home screen
- Search for countries using an input field
- Filter countries by region
- Click on a country to view detailed information on the Nation Detail Page
- View and navigate to neighboring countries on the Nation Detail Page
- Responsive design implementation
- Visual feedback for all interactive elements on the page
- Implemented Light Mode and Dark Mode

### ⚡ Additional Features

- Custom Design
  - Created icons as components for easy reuse
  - Applied responsive design for a horizontally elongated card on mobile devices
  - Implemented Skeleton UI on Nation Card and Nation Detail Page
  - Used a custom function to intuitively shorten the population number on Nation Card
  - Applied fade-in-up effect when loading Nation Detail Page
  - Applied scrolling animation to display multiple country names for the respective country on the Nation Detail Page.
- Rendering Optimization with useDebounce Hook
  - Applied a custom hook to delay search application by 300ms after completion of search term input
- Load Entire Country Data Based on Scroll
  - Due to the absence of pagination in the REST Countries API, displayed data is split on the client side
  - Globalized search term, option selection information, and data slice count using ContextAPI
  - Ensured that the screen retains the same information (search term, option info, scroll position) even after going back from Nation Detail Page
- Country Lookup Feature Using Google Maps API
- Reset Button for Input/Option Initialization Functionality

### ‼️ To-Do Features

- Main Layout loads first when the page is initially loaded, causing inconsistency
- Tooltip display feature
- Analyze the color code of country images and display the corresponding color as the background

## 한국어

### 🔗 링크

- Github URL: [여기를 클릭해주세요](https://github.com/tripkmin/countries)
- Live Site URL: [여기를 클릭해주세요](https://countries-tripkmin.vercel.app/)

### 🛠️ 사용한 기술

- `React JS`
- `React Query`
- `TypeScript`
- `Styled-Components`
- `Framer Motion`
- `HTML5`, `CSS`

### 🗒️ 기본 기능

- 홈 화면에서 전체 국가 조회 가능
- 입력 필드를 사용하여 국가 검색 가능
- 지역별로 국가 필터링 가능
- 국가를 클릭할시 Nation Detail Page에서 자세한 정보 조회 가능
- Nation Detail Page에서 접경 국가 정보 조회 및 이동 가능
- 반응형 디자인 구현
- 페이지의 모든 인터랙티브 요소에 대한 시각적 피드백 제공
- 라이트 모드, 다크 모드 구현

### ⚡ 추가 기능

- 커스텀 디자인
  - 아이콘을 컴포넌트로 만들어 재사용성이 용이하게 만듬
  - 모바일 환경에서는 카드가 가로로 긴 형태로 변형되어 보이도록 적용
  - Nation Card와 Nation Detail Page에서 Skeleton UI 적용
  - Nation Card의 인구 수를 커스텀 함수를 사용해 직관적으로 줄임
  - Nation Detail Page 로드 시 fade in up 효과 적용
  - Nation Detail Page에서 해당 국가의 여러 국가명이 스크롤되는 애니메이션 적용
- useDebounce 훅을 통한 렌더링 최적화
  - 검색어 입력이 완료되고 300ms 후 검색이 적용되도록 useDebounce 훅을 적용함
- 스크롤에 맞게 전체 국가 데이터 로드
  - REST Countries API에서 페이지네이션을 제공하지 않아 데이터를 클라이언트 단에서 나눠서 보여줌
  - 검색어, 옵션 선택 정보, 데이터 슬라이스 카운트를 ContextAPI를 사용해 전역변수화 시킴
  - 이를 통해 Nation Detail Page를 들어갔다가 뒤로가기를 해도 들어가기 전 정보(검색어, 옵션 정보, 스크롤 위치)가 그대로 유지된 화면을 볼 수 있게 함.
- Google Maps API를 이용한 해당 국가 조회 기능
- Reset 버튼을 통한 input/option 초기화 기능

### ‼️ 보완해야 할 기능

- 페이지 처음 로드 시 Main Layout이 먼저 로드되어 통일성이 깨지는 현상 발생
- 툴팁 표시 기능
- 국가 이미지의 컬러 코드를 분석해 해당 국가에 맞는 색상을 배경으로 띄워주는 기능
