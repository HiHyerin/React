import logo from './logo.svg';
import './App.css';
/*
  index.js App 호출
          --------- <App/> --(o)
                     App() --(x)
                  => jsx : javascript + xml
    1. xml 형식
        = 함수명 / 클래스명 : 첫자는 무조건 대문자(대문자로 안하면 태그로 인식)
        = 화면을 출력 : HTML 태그명은 무조건 소문자
        = HTML 제작시에는 무조건 루트가 존재해야 한다
                              -----
                           전체를 감싸는 태그가 있어야 한다.
        = 속성값은 반드시 "" 사용
        = CSS => <a className="">
        = <div style={{"height:20px"}}>
        = <img src=""> => <img :src=""> : Vue
                          <img th:src=""> : Thymeleaf
                          <img src="${}"> : Jsp
                          <img src={}> : React
        = 여는 태그와 닫는 태그가 동일
          <div>
              <img src={}> -- (x) 오류나는 코드
              <img src={}/> -- (o)
          </div>

        = index.js <App/> => return값 ==> index.html => <div id="root"></div>

        ** react는 MVC에서 View 담당

        = props : 고정값
        = state : 변경값

 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
