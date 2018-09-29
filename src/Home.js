import React, { Component } from 'react';

import './style.css';

const rokemons = ['pickachee', 'roombasaur', 'fartmander', 'spurtle'];

// generate initial game map grid
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
    1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1
];

class Home extends Component {

    constructor(props) {

        super(props);

        this.movePosition = this.movePosition.bind(this);
        this.insert = this.insert.bind(this);
        document.body.onkeydown = this.movePosition;

        this.state = {
            position: 0,
            index: 60
        };
    }

    // insert Rokemons data into the game map
    insert(first, second) {

        if (!second.some(function (v){return first.indexOf(v) >= 0})) {
            for(let i = 0; i < first.length; i++) {
                let position = Math.floor(Math.random() * Math.floor(120));
                if (second[position] === 1) {
                    second[position] = first[i];
                }
            }
            console.log(rows);
        }

        return second;
    };

    // move position for user
    movePosition = (e) => {

        let temp;
        let p = document.getElementById('message');

        function findActive(element) {
            return element < 1;
        }

        if (e.keyCode === 38) {
            // up arrow
            temp = rows.findIndex(findActive);
            if (temp-11 >= 0) {
                if (rokemons.includes(rows[temp-11])) {
                    p.innerHTML = "You Found and Caught " + rows[temp-11];
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp-11] = 0;
                rows[temp] = 1;
                this.setState({index: temp-11});
            }
        }
        else if (e.keyCode === 40) {
            // down arrow
            temp = rows.findIndex(findActive);
            if (temp+11 < 120) {
                if (rokemons.includes(rows[temp+11])) {
                    p.innerHTML = "You Found and Caught " + rows[temp+11];
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp+11] = 0;
                rows[temp] = 1;
                this.setState({index: temp+11});
            }
        }
        else if (e.keyCode === 37) {
            // left arrow
            temp = rows.findIndex(findActive);
            if (temp-1 >= 0) {
                if (rokemons.includes(rows[temp-1])) {
                    p.innerHTML = "You Found and Caught " + rows[temp-1];
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp-1] = 0;
                rows[temp] = 1;
                this.setState({index: temp-1});
            }
        }
        else if (e.keyCode === 39) {
            // right arrow
            temp = rows.findIndex(findActive);
            if (temp+1 < 120) {
                if (rokemons.includes(rows[temp+1])) {
                    p.innerHTML = "You Found and Caught " + rows[temp+1];
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp+1] = 0;
                rows[temp] = 1;
                this.setState({index: temp+1});
            }
        }
    };

    render() {
        let style = {
            "background": "teal",
            "width": "8.5%",
            "height": "100px",
            "margin": "1px"
        };

        let active = {
            "background": "black",
            "width": "8.5%",
            "height": "100px",
            "margin": "1px"
        };

        this.insert(rokemons, rows);

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

// var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

/*<div data-role="tile"><img src="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png" className="icon" /></div>*/
/*<div id="gamemap" className="container">
    <div id="message"></div>
    <div id="grid">
        <div style={style}></div>
        <div style={style}></div>
    </div>

</div>


        // let columns = [];

        // for (var i = 0; i < 11; i++) {
        //     columns.push(<span className="column" style={style} key={i}></span>);
        // }
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