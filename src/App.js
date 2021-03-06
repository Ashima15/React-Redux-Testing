import { Component } from "react";
import Header from './component/header';
import Headline from './component/headline';
import Button from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";
import './App.scss';

const tempArr = [{
  fName: 'Jane',
  lName: 'Doe',
  age: 24,
  onlineStatus: true
}]
class App extends Component {

  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      hideBtn: false
    }
  }

  fetch(){
    this.props.fetchPosts();
    this.updateState();
  }

  updateState = () => {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  example_returnValue = (number) => {
    return number + 1;
  }

  render() {

    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test='appComponent'>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
         
         {
           !hideBtn &&  <Button {...configButton} />
         }

          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div> 
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);