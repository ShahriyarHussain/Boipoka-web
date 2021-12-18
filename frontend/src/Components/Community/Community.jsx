import React, { Component } from "react";
import Postcard from "./Postcard";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], status: false };
  }

  async componentDidMount() {
    try {
      const resource = await fetch("http://127.0.0.1:8000/api/posts/");
      const post = await resource.json();
      this.setState({
        posts: post,
        status: true,
      });
      console.log(post);
      console.log("fetch success");
    } catch (e) {
      this.setState({
        status: false,
      });
      console.log(e);
    }
  }

  render() {
    let postList = null;
    if (this.state.status) {
      postList = (
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.author}>
              <Postcard
                author={post.author}
                type={post.type}
                date={post.date_posted.split("T")[0]}
                content={post.content}
                likes={post.likes}
                image={post.image}
              />
            </li>
          ))}
        </ul>
      );
    } else {
      postList = <div>Connections to server refused</div>;
    }

    return (
      <div className='flex-row ml-16 h-auto w-auto'>
        <h1 className='font-bold text-5xl p-2 m-5'>Community</h1>
        <div className='p-2 m-5'>{postList}</div>
      </div>
    );
  }
}

export default Community;
