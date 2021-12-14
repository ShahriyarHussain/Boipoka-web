import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    try {
      const resource = await fetch("http://127.0.0.1:8000/api/posts/");
      const post = await resource.json();
      this.setState({
        posts: post,
      });
      console.log(post);
      console.log("fetch success");
    } catch (e) {
      console.log(e);
    }
  }

  // renderPosts = () => {
  //   const newPosts = this.state.posts;
  //   return newPosts.map((post) => (
  //     <li key={post.id}>
  //       <div className='p-2 m-5'>
  //         <h1>
  //           {post.author} {post.type}
  //         </h1>
  //         <div>{post.date_posted}</div>
  //         <div>
  //           {post.content} <br></br>
  //           <img src={post.image} alt='post' />
  //           {post.likes.length}
  //         </div>
  //       </div>
  //     </li>
  //   ));
  // };

  render() {
    return (
      <div className='App'>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.author}>
              <div className='p-2 m-5'>
                <h1>
                  {post.author} {post.post_type}
                </h1>
                <div>posted on {post.date_posted.split("T")[0]}</div>
                <div>
                  {post.content} <br></br>
                  <img src={post.image} alt='post' />
                  Likes: {post.likes.length} <br></br>
                </div>
              </div>
            </li>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default App;
