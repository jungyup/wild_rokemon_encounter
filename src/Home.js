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
            count: 0
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
                    this.setState({ count: this.state.count + 1 });
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp-11] = 0;
                rows[temp] = 1;
                this.setState(this.state);
            }
            // if all rokemons are found, alert and refresh the page
            if (this.state.count === 4) {
                window.alert("You Found and Caught All Rokemons!");
                window.location.reload();
            }
        }
        else if (e.keyCode === 40) {
            // down arrow
            temp = rows.findIndex(findActive);
            if (temp+11 <= 120) {
                if (rokemons.includes(rows[temp+11])) {
                    p.innerHTML = "You Found and Caught " + rows[temp+11];
                    this.setState({ count: this.state.count + 1 });
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp+11] = 0;
                rows[temp] = 1;
                this.setState(this.state);
            }
            // if all rokemons are found, alert and refresh the page
            if (this.state.count === 4) {
                window.alert("You Found and Caught All Rokemons!");
                window.location.reload();
            }
        }
        else if (e.keyCode === 37) {
            // left arrow
            temp = rows.findIndex(findActive);
            if (temp-1 >= 0) {
                if (rokemons.includes(rows[temp-1])) {
                    p.innerHTML = "You Found and Caught " + rows[temp-1];
                    this.setState({ count: this.state.count + 1 });
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp-1] = 0;
                rows[temp] = 1;
                this.setState(this.state);
            }
            // if all rokemons are found, alert and refresh the page
            if (this.state.count === 4) {
                window.alert("You Found and Caught All Rokemons!");
                window.location.reload();
            }
        }
        else if (e.keyCode === 39) {
            // right arrow
            temp = rows.findIndex(findActive);
            if (temp+1 <= 120) {
                if (rokemons.includes(rows[temp+1])) {
                    p.innerHTML = "You Found and Caught " + rows[temp+1];
                    this.setState({ count: this.state.count + 1 });
                }
                else {
                    p.innerHTML = "Nothing was found!";
                }
                rows[temp+1] = 0;
                rows[temp] = 1;
                this.setState(this.state);
            }
            // if all rokemons are found, alert and refresh the page
            if (this.state.count === 4) {
                window.alert("You Found and Caught All Rokemons!");
                window.location.reload();
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
                <div id="count">
                    <p>Total Rokemon Found: {this.state.count} </p>
                </div>
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