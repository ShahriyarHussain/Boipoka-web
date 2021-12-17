import React, { Component } from "react";

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
    let posts = null;
    if (this.state.status) {
      posts = (
        <div>
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
          </ul>
        </div>
      );
    } else {
      posts = <div className='p-2 m-5'>Connections to server refused</div>;
    }
    return <div className='flex-row ml-16 h-full w-full'>{posts}</div>;
  }
}

export default Community;
