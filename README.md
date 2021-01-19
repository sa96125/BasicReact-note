<h1>React Project 2021</h1>

<p>리액트 프레임워크를 공부하며 배운내용을 기록하기 위한 레포지토리입니다. </br>
복습 또는 네비게이션으로 활용할 예정이며 새로운 내용을 덧붙여 하나의 사전처럼 만드는 것이 목표입니다. 
</p>
</br>

***project01*** `semantic-ui` `faker`
> #### SNS의 댓글의 스타일을 리액트로 구현한다 ####
> * React, ReactDOM, NodeModule 
> * 리액트 파일트리, 1700이상의 패키지가 있는 이유
> * JSX의 기본적인 문법, 역할에 대해서 배움
</br>
</br>

***project02*** `semantic-ui` 
> #### 브라우저에 접속하는 사용자의 위치에 따른 계절을 표현 ####
> * 리액트 라이프사이클
> * state , componentDidmount
> * loading 접속 component
> * 변수로서의 객체활용법
> * Props system
> * ```window.navigator.geolocation.getCurrentPosition(position(callback), err(callback))```
> * ```new Date().getMonth()```
> * ```component.defaultProps= { message:'loading...'} ```
</br>
</br>


***project03*** `semantic-ui` `unSplash` `axios`
> #### 검색창을 만들어 검색어를 서밋하면 관련된 이미지를 브라우저에 띄운다. ####
> * 기능(component, apis)별로 파일트리 구조를 나눈다
> * class component와 functional component의 차이점을 이해
> * 이벤트와 에로우()=>펑션, this, bind의 관계
> * list와 컴포넌트(key prop)
> * component의 DOM 접근 ```this.imageRef = React.createRef()```
> * async - await
> * grid(css)
> * ```export default axios.create({baseURL, params})```
</br>
</br>


***project04*** `semantic-ui` `GoogleAPI` `axios`
> #### 검색창을 만들어 검색어를 서밋하면 관련 동영상리스트와 비디오를 재생 ####
> * 구글API중 Youtube API의 데이터를 사용한다.
> * Props system(2) 리스트 item의 콤포넌트 prop 이벤트를 사용하여 App의 callback함수를 호출하여 데이터를 다시 전달! 
> * ```<iframe title="youtube video" src={youtubeLink}></iframe>```
> * ```display:flex !important;```
</br>
</br>


***project05*** `semantic-ui`
> #### 제목을 클릭하면 내용을 볼 수 있는 간단한 위젯 ####
> * Hook system - 1. useState()
> * react.Fragment
</br>
</br>


***project06*** `semantic-ui` `axios` `wikipedia API`
> #### 실시간 검색어를 구현하고 위키디피아의 정보와 링크를 리스트로 나열하는 웹어플리케이션  ####
> * Hook system - 2. useEffect()
> * useEffect의 사이클, return 했을 때 동작과정을 이해한다.
> * setTimeout , clearTimeout
</br>
</br>
