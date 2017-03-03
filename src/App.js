import { is } from 'immutable';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let generator = (app) => {
   class Node extends Component {
    constructor(props) {
      super(props);
      console.log(app + ' is created.');
    }
    componentDidMount() {
      console.log(app + ' did mount.');
    }

    componentWillUnmount() {
      console.log(app + ' will unmount.');
    }

    componentDidUpdate() {
      console.log(app + ' is updated.');
    }

    // 使用Immutable增加性能
    // shouldComponentUpdate(nextProps = {}, nextState = {}) {
    //   const thisProps = this.props || {},
    //         thisState = this.state || {};

    //   nextState = nextState || {};

    //   if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
    //       Object.keys(thisState).length !== Object.keys(nextState).length) {
    //     return true;
    //   }

    //   for (const key in nextProps) {
    //     if (!is(thisProps[key], nextProps[key])) {
    //       return true;
    //     }
    //   }

    //   for (const key in nextState) {
    //     if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }

    render() {
      console.log(app, 'rendering')
      return (
        <div className={"node " + app} data-name={app}>
         {this.props.children}
        </div>
      );
    }
  }

  return Node;

}

var R = generator('R');
let A = generator('A');
let B = generator('B');
let C = generator('C');
let D = generator('D');

class App extends Component {
  constructor(props) {
    super(props);

    this.changeShape = this.changeShape.bind(this);
    this.state = {shape: ''};
  }

  shape1() {
    return (
      <R>
        <A >
          <B />
        </A>
      </R>
    );
  }
  shape2() {
    return (
      <R>
        <A>
          <C/>
        </A>
      </R>
    );
  }
  shape3() {
    return (
      <R>
        <A>
          <B/>
          <C/>
        </A>

      </R>
    );
  }
  shape4() {
    return (
      <R>
        <A>
          <B/>
        </A>
        <C>
          <D/>
        </C>
      </R>
    );
  }
  shape5() {
    return (
      <R>
        <A>
          <B/>
          <C>
            <D/>
          </C>
        </A>
      </R>
    );
  }
  shape6() {
    return (
      <R>
        <A>
          <B/>
          <C/>
        </A>
      </R>
    );
  }
  shape7() {
    return (
      <R>
        <A>
          <B key="B"/>
          <C key="C"/>
        </A>
      </R>
    );
  }
  shape8() {
    return (
      <R>
        <A>
          <C key="C"/>
          <B key="B"/>
        </A>
      </R>
    );
  }

  changeShape(e) {
    this.setState({shape: e.target.name});
    console.log('======' + e.target.name + '=======')
  }

  getShape() {
    if (this[this.state.shape]) {
      return this[this.state.shape]();
    }
    return "";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div >
          <input type="button" name="shape1" value="Shape1" onClick={this.changeShape} />
          <input type="button" name="shape2" value="Shape2" onClick={this.changeShape} />
          <input type="button" name="shape3" value="Shape3" onClick={this.changeShape} />
          <input type="button" name="shape4" value="Shape4" onClick={this.changeShape} />
          <input type="button" name="shape5" value="Shape5" onClick={this.changeShape} />
          <input type="button" name="shape6" value="Shape6" onClick={this.changeShape} />
          <input type="button" name="shape7" value="Shape7" onClick={this.changeShape} />
          <input type="button" name="shape8" value="Shape8" onClick={this.changeShape} />
          <input type="button" name="clear" value="Clear" onClick={this.changeShape} />
        </div>

        {this.getShape()}

      </div>
    );
  }
}

export default App;
