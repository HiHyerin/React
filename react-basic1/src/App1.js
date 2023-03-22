import {Component,Fragment} from "react";
// Class 형태, Function 형태 (start => Hooks)

class App1 extends Component{ // 한 개의 기능이 Component
    constructor(props) {
        super(props); // 생성자
        /*
            생성자 역할
            - 변수 선언
            - 이벤트 등록
         */
    }
    componentDidMount(){
        // mounted : function() => axios
    }

    // index.js 에서 <App1 />은 render() 호출 => return 값을 받는다 => #{}
    render() {
        // 화면 UI -> HTML 작성
        return(// 작성위치
            <Fragment>
                <div>
                    <h1 style={{"color":"red"}}>Hello React!</h1>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                </div>
                <div>
                    <h1 style={{"color":"orange"}}>Hello React!</h1>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                    <h3>Hello React!</h3>
                </div>
            </Fragment>
            
        )
        // <Fragment> => /*div들 묶을 때 사용*/
    }
}

export default App1;