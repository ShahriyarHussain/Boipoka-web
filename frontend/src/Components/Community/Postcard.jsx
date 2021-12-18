const Postcard = ({ author, type, date, content, likes }) => {
  return (
    <div className='p-2 m-5'>
      <h1>
        {author} {type}
      </h1>
      <div>posted on {date}</div>
      <div>
        {content} <br></br>
        {/* <img src={image} alt='post' /> */}
        Likes: {likes} <br></br>
      </div>
    </div>
  );
};

export default Postcard;
