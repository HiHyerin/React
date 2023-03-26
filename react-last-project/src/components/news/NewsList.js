import {useState, useEffect} from "react";
import axios from "axios";

function NewsList(){
    const  [newsList, setNewsList] = useState([])
    const [title, setTitle] = useState('제주')
    useEffect(()=>{
        axios.get("http://localhost/news/news_list_react", {
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    },[])
    const dataChange=(e)=>{
        setTitle(e.target.value)
    }
    const dataKeyDown=(e)=>{
        if(e.keyCode==13){
        axios.get("http://localhost/news/news_list_react", {
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
        }
    }
    const findData=()=>{
        axios.get("http://localhost/news/news_list_react", {
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    }
    let html=newsList.map((news)=>
        <table className={"table"}>
            <tr>
                <td><a href={news.link} target={"_blank"}> <b><h3 style={{"margin-bottom":"10px","margin-top":"10px","textAlign":"left"}}  dangerouslySetInnerHTML={{__html:news.title}}></h3></b></a></td>
                <td  style={{"padding-top":"10px","padding-bottom":"10px"}}>{news.pubDate}</td>
            </tr>
            <tr>
                <td colSpan={"2"} dangerouslySetInnerHTML={{__html:news.description}}></td>
            </tr>
        </table>
    )

    return(
        <div className="wrapper row3">
            <main className="hoc container clear">

                <div className="content" >
                    <div style={{"textAlign":"right"}}>
                        <header className="heading inline" style={{"fontFamily":"TheJamsil5Bold","fontSize":"20px"}}>
                            <input type={"text"} size={"20"} className={"input-lg"} onChange={dataChange} value={title} onKeyDown={dataKeyDown} style={{"height":"30px"}}/>
                            <input type={"button"} value={"검색"} className={"btn btn-sm btn-danger"} onClick={()=>findData()} style={{"height":"30px","fontSize":"15px"}}/>
                        </header>
                    </div>

                    <div id="gallery">
                        <figure>
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <td>
                                        {html}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </figure>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default NewsList;