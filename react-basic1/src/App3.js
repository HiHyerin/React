import {Component} from "react";

class App3 extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const html = this.props.movie2.map((m)=>
            <tr>
                <td className={"text-center"}>{m.rank}</td>
                <td className={"text-center"}>
                    <img src={'https://www.kobis.or.kr/'+m.thumbUrl} style={{"width":"30px","height":"30px"}}/>
                </td>
                <td>{m.movieNm}</td>
                <td className={"text-center"}>{m.genre}</td>
                <td className={"text-center"}>{m.director}</td>
                <td className={"text-center"}>{m.watchGradeNm}</td>
            </tr>
        )
        return(
            <div className={"row"}>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th className={"text-center"}>순위</th>
                        <th className={"text-center"}></th>
                        <th className={"text-center"}>영화명</th>
                        <th className={"text-center"}>장르</th>
                        <th className={"text-center"}>감독</th>
                        <th className={"text-center"}>등급</th>
                    </tr>
                    </thead>
                    <tbody>
                        {html}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App3