import React, { Component } from 'react';

import './style.css';

const rokemons = ['pickachee', 'roombasaur', 'fartmander', 'spurtle'];

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            position: 0
        };
    }

    movePosition = (e) => {
        
    };

    // checkPosition = (item) => {
    //     if (item == 0) {
    //         return <div id="gamemap" className="container">
    //                 <div id="message"></div>
    //                 {rows.map((item, index) => (
    //                     <div className="column" style={style} key={index}></div>
    //                 ))}
    //             </div>
    //     } else {
    //         return <div id="gamemap" className="container">
    //                 <div id="message"></div>
    //                 {rows.map((item, index) => (
    //                     <div className="column" style={style} key={index}></div>
    //                 ))}
    //             </div>
    //     }
    // };

    render() {
        let style = {
            "background": "teal",
            "width": "9%",
            "height": "100px",
            "padding": "3px",
            "background-clip": "content-box"
        };

        let active = {
            "background": "black",
            "width": "9%",
            "height": "100px",
            "padding": "5px",
            "background-clip": "content-box"
        };

        let rows = [
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,0,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1
                ];
        // let columns = [];

        // for (var i = 0; i < 11; i++) {
        //     columns.push(<span className="column" style={style} key={i}></span>);
        // }

        return(
            <div id="gamemap" className="container">
                <div id="message"></div>
                {rows.map((item, index) => {
                    if (item === this.state.position) {
                        return <div className="column" style={active} key={index}></div>
                    } else {
                        return <div className="column" style={style} key={index}></div>
                    }
                })}
            </div>
        );
    }
}

export default Home;

/*<div data-role="tile"><img src="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png" className="icon" /></div>*/
/*<div id="gamemap" className="container">
    <div id="message"></div>
    <div id="grid">
        <div style={style}></div>
        <div style={style}></div>
    </div>

</div>
<div className="row" key={index}>
                        {columns}
                    </div>
*/
// createTile = () => {
//
//     let rows = [];
//     let columns = [];
//
//     for (var i = 0; i < 11; i++) {
//         rows.push(<span className="row" key={i}></span>);
//     }
//
//     return rows;
//
// };