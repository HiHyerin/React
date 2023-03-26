import {useState, useEffect, Fragment} from "react";
import axios from "axios";

function Home(){
    const [foodTop, setFoodTop]=useState([])
    // 서버연결 후 데이터 읽기
    useEffect(()=>{ // mounted
        axios.get("http://localhost/jeju/food_top6").then(response=>{
            console.log(response.data)
            setFoodTop(response.data)
        })
    },[])
    let html = foodTop.map((food,key)=>
        <li className="one_third">
            <article><a href="#"><img src={food.poster} style={{"width":"100%"}} key={food.no}/></a>
                <h6 className="heading">{food.title}</h6>
                <p>{food.addr}</p>
            </article>
        </li>
    )
    return(
        <Fragment>
        <div className="bgded overlay" style={{"backgroundImage":"url('https://img.freepik.com/premium-photo/lights-on-sea-background-waves_196038-1983.jpg?w=900')", "height":"600px"}}>
            <div id="pageintro" className="hoc clear" style={{"paddingTop":"100px"}}>
                <article>
                    <h3 className="heading">Oh! Jeju!</h3>
                    <p>Use React, Redux, Spring-Boot Project by HiHyerin and
                        Introduce Jeju, Seoul Famous Tasty restaurant. Today's weather and news are also reflected in real time.</p>
                    <footer><a className="btn" href="#">Tristique vehicula</a></footer>

                </article>
                <div style={{"height":"50px"}}></div>
                <div>
                    <form style={{"textAlign":"center"}}>
                        <fieldset><input className="input1"  type="search" />
                            <button className="button1" type="submit"><i className="fa fa-search"></i></button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
            {/*<div className="wrapper row3" style={{"height":"200px"}}>
            <main className="hoc container clear">
                <section id="introblocks" >
                    <ul className="nospace group btmspace-80 elements elements-four">
                        <li className="one_quarter">
                            <article><a href="#"><i className="fas fa-hand-rock"></i></a>
                                <h6 className="heading" >오늘의 날씨</h6>
                                <p>Today's Weather</p>
                            </article>
                        </li>
                        <li className="one_quarter">
                            <article><a href="#"><i className="fas fa-dove"></i></a>
                                <h6 className="heading">오늘의 뉴스</h6>
                                <p>Today's News</p>
                            </article>
                        </li>
                        <li className="one_quarter">
                            <article><a href="#"><i className="fas fa-history"></i></a>
                                <h6 className="heading">추천 여행지</h6>
                                <p>Recommand Travel Spot</p>
                            </article>
                        </li>
                        <li className="one_quarter">
                            <article><a href="#"><i className="fas fa-heartbeat"></i></a>
                                <h6 className="heading">추천 맛집</h6>
                                <p>Tasty Food!</p>
                            </article>
                        </li>
                    </ul>
                </section>

                <div className="clear"></div>
            </main>
        </div> */}
        <div className="bgded" style={{"backgroundColor":"#F9FCFD"}}>
            <section id="services" className="hoc container clear" style={{"paddingTop":"20px"}}>
                <p style={{"fontSize":"30px", "fontFamily":"TheJamsil5Bold"}}>제주 맛집 추천</p>
                <ul className="nospace group elements elements-three">
                    {html}
                </ul>
            </section>
        </div>
        </Fragment>
    )
}
export default Home;