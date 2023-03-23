import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
/*
    1. 메모리 할당
    2. componentWillMount()
    3. componentDidMount()    *mount : 가상 메모리(가상돔)
    ================================================= 데이터를 서버로부터 읽기(위)
        => useEffect() : 3번과 같은 역할 수행
    4. render() => 화면 출력
    5. componentWillUpdate()
    6. componentDidUpdate()
        => setXxx() : 6번과 같은 역할 수행
    6-1. render() => 수정된 화면 출력
    7. componentWillDestroy()
    8. componentDidDestroy()

    ==> props / state : 변경이 가능한 데이터
        ----- 호출시 전송 : 불변

    ==> 데이터 상태 관리 프로그램
    ==> class / function ---> 지역변수 (를 유지하는 변수 : useState()) => Hooks
        ----- 멤버변수

 */
// 호출 : <Header /> => 리턴값을 읽어서 index.html에서 출력
function Header(props){

    return(
        <div className="wrapper row1" style={{"backgroundColor":"#A4BACA"}}>
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <b className="logoname" style={{"fontFamily":"TheJamsil5Bold","fontSize":"30px"}}><NavLink to={"/"}>제주야놀자</NavLink></b>
                </div>
                <nav id="mainav" className="fl_right" style={{"fontFamily":"TheJamsil5Bold"}}>
                    <ul className="clear">
                        <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                        <li><a className="drop" href="#">제주</a>
                            <ul>
                                <li><NavLink to={"/jeju/food_list"}>맛집</NavLink></li>
                                <li><NavLink to={"/jeju/event_list"}>행사&이벤트</NavLink></li>
                            </ul>
                        </li>

                        <li><a className="drop" href="#">서울</a>
                            <ul>
                                <li><a href="pages/gallery.html">명소</a></li>
                                <li><a href="pages/full-width.html">자연/관광</a></li>
                                <li><a href="pages/full-width.html">쇼핑</a></li>
                            </ul>
                        </li>

                        <li><a className="drop" href="#">레시피</a>
                            <ul>
                                <li><NavLink to={"/recipe/recipe_list"}>맛집</NavLink></li>
                                <li><a href="pages/full-width.html">쉐프</a></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/jeju/product_list"} href="#">기념품</NavLink></li>
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;