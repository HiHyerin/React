import {useState,useEffect,Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function ProductList(){
    const [productList, setProductList] = useState([]);
    const [curpage,setCurpage]=useState(1);
    const [totalpage,setTotalpage]=useState(0);
    const [startPage,setStartPage]=useState(0);
    const [endPage,setEndPage]=useState(0);
    const [ss, setSs] = useState('');
    const [fdata,setFdata] = useState([]);

    /*******************************************************************/
    useEffect(()=>{
        axios.get('http://localhost/jeju/product_list_react',{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setProductList(response.data);
            //setFdata(response.data)

        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost/jeju/product_page_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            //setFdata(response.data)

        })
    },{})

    /*******************************************************************/
    // 이벤트 처리
    const dataChange=(e)=>{
        setSs(e.target.value)

    }
    /*const pages=(page)=>{
        axios.get('http://localhost/jeju/product_list_react',{
            params:{
                page:page

            }
        }).then(response=>{
            console.log(response.data)
            setProductList(response.data);
            //setFdata(response.data)
        })

        axios.get("http://localhost/jeju/product_page_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            //setFdata(response.data)

        })
    }*/

    const findData=(page)=>{
        // alert(ss)
        axios.get("http://localhost/jeju/product_list_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setProductList(response.data);

        })
        axios.get("http://localhost/jeju/product_page_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        })
    }

    const dataKeyDown=(e)=>{
        setCurpage(1)
        if(e.keyCode == 13){
            axios.get("http://localhost/jeju/product_list_react",{
                params:{
                    page:curpage,
                    title:ss
                }
            }).then(response=>{
                console.log(response.data)
                //setFdata(response.data)
                setProductList(response.data);

            })
            axios.get("http://localhost/jeju/product_page_react",{
                params:{
                    page:curpage,
                    title:ss
                }
            }).then(response=>{
                console.log(response.data)
                setTotalpage(response.data.totalpage)
                setCurpage(response.data.curpage)
                setStartPage(response.data.startPage)
                setEndPage(response.data.endPage)
                //setFdata(response.data)

            })
        }
    }

    const pagePrev=()=>{
        findData(startPage-1)
    }

    const pageNext=()=>{
        findData(endPage+1)
    }

    const pageChange=(page)=>{
        findData(page)

    }

    /*******************************************************************/

    let html=productList.map((product,index)=>
        <li className={index%3==0?'one_third first':'one_third' }>
            <div className="container" style={{"padding":"0px"}}>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th colSpan={"2"} style={{"padding":"0px"}}>
                            <NavLink to={product.detail}><img src={product.poster} /></NavLink>
                    </th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td><p>
                        {product.title}
                    </p></td>
                </tr>
                <tr>
                    <td><p>
                        {product.location}
                    </p></td>
                </tr>
                <tr>
                    <td><p>
                        {product.content}
                    </p></td>
                </tr>


                </tbody>
            </table>
        </div>
        </li>
    )

    let row=[];
    if(startPage>1)
    {// 배열에 추가
        row.push( <li><a href="#" onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i==curpage)
        {
            row.push(<li className="current"><strong><a href={"#"} onClick={()=>pageChange(i)}> {i}</a></strong></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href="#" onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }
    /*******************************************************************/
    return (
        <Fragment>
            <div className="wrapper row3">
                <main className="hoc container clear" >

                    <div className="content" >

                        <div id="gallery">
                            <figure>
                                <header className="heading inline" style={{"fontFamily":"TheJamsil5Bold"}}><b style={{"paddingRight":"650px"}}>관광 기념품샵</b>
                                    <input type={"text"} size={"20"} className={"input-lg"} onChange={dataChange} onKeyDown={dataKeyDown} style={{"height":"30px"}}/>
                                    <input type={"button"} value={"검색"} className={"btn btn-sm btn-danger"} onClick={()=>findData()} style={{"height":"30px","fontSize":"15px"}}/>
                                </header>
                                <ul className="nospace clear">
                                    {html}
                                </ul>
                            </figure>
                        </div>

                        <nav className="pagination">
                            <ul>
                                {row}
                            </ul>
                        </nav>
                    </div>

                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )

}
export default ProductList;