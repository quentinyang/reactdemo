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
      // return false;
    }

    render() {
      return (
        <div className={"node "+app} key={app}>
          {app}
         {this.props.children}
        </div>
      );
    }
  }

  return Node;

}

var Root = generator('R');
let A = generator('A');
let B = generator('B');
let C = generator('C');
let D = generator('D');
let E = generator('E');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {shape: ''};

    this.changeShape = this.changeShape.bind(this);
  }

  shape1() {
    return (
      <A>
        <B/>
      </A>
    );
  }
  shape2() {
    return (
      <A>
        <C/>
      </A>
    );
  }
  shape3() {
    return (
      <A>
        <B key="B"/>
        <C key="C"/>
      </A>
    );
  }
  shape4() {
    return (
      <A>
        <C key="C"/>
        <B key="B"/>
      </A>
    );
  }
  shape5() {
    return (
      <A>
        <B key="B"/>
        <C key="C"/>
        <E key="E"/>
        <E/>
      </A>
    );
  }
  shape6() {
    return (
      <A>
        <B key="B" className="test"/>
        <C key="C"/>
        <E key="E"/>
        <E className="test2" data-t ="aa"/>
      </A>
    );
  }

  changeShape(e) {
    this.setState({shape: e.target.name});
    console.log('======' + e.target.name + '=======')
  }

  render() {
    var self = this;
    function getShape() {
      if (self[self.state.shape]) {
        return (<Root>{self[self.state.shape]()}</Root>);
      }
      return "";
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="">
          <input type="button" name="shape1" value="shape1" onClick={this.changeShape} />
          <input type="button" name="shape2" value="shape2" onClick={this.changeShape} />
          <input type="button" name="shape3" value="shape3" onClick={this.changeShape} />
          <input type="button" name="shape4" value="shape4" onClick={this.changeShape} />
          <input type="button" name="shape5" value="shape5" onClick={this.changeShape} />
          <input type="button" name="shape6" value="shape6" onClick={this.changeShape} />
          <input type="button" name="clear" value="Clear" onClick={this.changeShape} />
        </div>


        {getShape()}


      </div>
    );
  }
}

export default App;
