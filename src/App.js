import { Component } from "react";
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

const tempArr = [{
  fName: 'Jane',
  lName: 'Doe',
  age: 24,
  onlineStatus: true
}]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
        </section>
      </div>
    );
  }
}

export default App;
