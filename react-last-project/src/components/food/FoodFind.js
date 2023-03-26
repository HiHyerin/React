import {useEffect,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodFind(){
    const [ss, setSs] = useState('제주')
    const [fdata,setFdata] = useState([]);
    const [curpage, setCurpage] = useState(1)
    const [totalpage, setTotalpage] = useState(0);
    useEffect(()=>{
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    },[])
    const dataChange=(e)=>{
        setSs(e.target.value)

    }
    const findData=()=>{
        // alert(ss)
        setCurpage(1)
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    }

    const dataKeyDown=(e)=>{
        setCurpage(1)
        if(e.keyCode == 13){
            axios.get("http://localhost/jeju/food_find_react",{
                params:{
                    page:curpage,
                    title:ss
                }
            }).then(response=>{
                console.log(response.data)
                setFdata(response.data)
                setCurpage(response.data[0].curpage)
                setTotalpage(response.data[0].totalpage)
            })
        }
    }

    const prev=()=>{
        const page = curpage>1?curpage-1:curpage
        setCurpage(page)
        setCurpage(curpage>1?curpage-1:curpage)
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)

        })
    }

    const next=()=>{
        const page = curpage<totalpage?curpage+1:curpage
        setCurpage(page)
        setCurpage(curpage<totalpage?curpage+1:curpage)
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)

        })
    }

    let html=fdata.map((food,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter' }>
            <NavLink to={"/jeju/food_detail/"+food.no}>
                <img src={food.poster} title={food.title} style={{"fontFamily":"TheJamsil5Bold"}}/>
                <p style={{"textAlign":"center", "color":"black", "fontFamily":"TheJamsil5Bold"}}>{food.title}</p>
            </NavLink>
        </li>
    )
    return(

        <div className="wrapper row3">
            <main className="hoc container clear">

                <div className="content" >
                    <div style={{"textAlign":"right"}}>
                        <header className="heading inline" style={{"fontFamily":"TheJamsil5Bold","fontSize":"20px"}}>
                            <input type={"text"} size={"20"} className={"input-lg"} onChange={dataChange} onKeyDown={dataKeyDown} style={{"height":"30px"}}/>
                            <input type={"button"} value={"검색"} className={"btn btn-sm btn-danger"} onClick={()=>findData()} style={{"height":"30px","fontSize":"15px"}}/>
                        </header>
                    </div>

                    <div id="gallery">
                        <figure>
                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>
                    <div className={"text-center"} style={{"textAlign":"center", "fontFamily":"TheJamsil5Bold"}}>
                        <button className={"btn btn-sm"} onClick={prev}>  이전</button>&nbsp;&nbsp;&nbsp;
                        {curpage} page / {totalpage} pages &nbsp;&nbsp;&nbsp;
                        <button className={"btn btn-sm"} onClick={next}>  다음</button>
                    </div>

                </div>

                <div className="clear"></div>
            </main>
        </div>
    )

}

export default FoodFind;