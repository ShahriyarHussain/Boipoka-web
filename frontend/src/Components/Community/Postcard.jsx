const Postcard = ({ author, type, date, content, likes, image }) => {
  return (
    <div className='p-2 m-5'>
      <h1>
        {author} {type}
      </h1>
      <div>posted on {date}</div>
      <div>
        <div>{content}</div>
        {/* <img src={image} alt='post' width={"200px"} height={"400px"} /> */}
        Likes: {likes} <br></br>
      </div>
    </div>
  );
};

export default Postcard;
