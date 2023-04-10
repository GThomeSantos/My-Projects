import React, {Component} from "react";
import './style.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 0,
            button: 'START'
        };
        this.timer = null
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }

    start() {
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            this.state.button = 'START'
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.number += 0.1;
                this.setState(state);

            }, 100);
            state.button = 'STOP';
        }
        this.setState(state);
    }

    clear() {
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;

        state.number = 0;
        state.button = 'START';
        this.setState(state)
    }
    
    render() {
        return(
            <div className="container">
              <img src={require('./assets/cronometro.png')} className="img" />
              <a className="timer">{this.state.number.toFixed(1)}</a>
              <div className="btnArea">
                <a onClick={this.start} className="btn">{this.state.button}</a>
                <a onClick={this.clear} className="btn">CLEAR</a>
              </div>
            </div>
        );
    }
}

export default App;