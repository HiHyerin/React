import {Component, Fragment} from "react";
import axios from "axios";

class App5 extends Component{
    constructor(props) {
        super(props);
        // 멤버변수 설정 => state
        // 이벤트 등록
        this.state = {
            location:[]
        }
    }


    componentDidMount() {
        // let _this = this --> arrow함수를 쓰면 _this를 쓰지 않아도 된다
        axios.get("http://localhost/food/location_react").then(response=>{
            console.log(response.data)
            this.setState({location:response.data})
        }) // setState을 할 때마다 render부분이 바뀜(render를 다시 호출해서 데이터가 변경)
    }

    render() {
        const html=this.state.location.map(loca=>
            <div className="col-md-3">
                <div className="thumbnail">
                    <img src={loca.poster} style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{loca.name}</p>
                    </div>
                </div>
            </div>
        )
        return(
            <Fragment>
                <div className={"row"}>
                    <div className={"text-center"}>
                        <h4>food_location 출력</h4>
                    </div>
                </div>
                <div style={{"height":"20px"}}></div>
                <div className={"row"}>
                    {html}
                </div>
            </Fragment>
        )
    }



}
export default App5;