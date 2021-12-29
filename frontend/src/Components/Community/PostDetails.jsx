import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useFetch from "../../Hooks/useFetch";
import Loader from "../Loaders/Loaders";
import { BsFillHeartFill } from "react-icons/bs";
import CheckLogin from "../../Hooks/CheckLogin";
import { UserContext } from "../../Hooks/UserContext";
import { Link } from "react-router-dom";

const PostDetails = () => {
  CheckLogin();

  const base_url = "http://127.0.0.1:8000/api/posts/";

  const { id } = useParams();
  const { username } = useContext(UserContext);
  const [postDetails, setPostDetails] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // console.log("update", id);

  useEffect(() => {
    setIsPending(true);
    console.log("I am above here");
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(
        base_url + id + "/",
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        },
        { signal: abortController.signal }
      )
        .then((response) => {
          console.log(response);
          console.log("success1");
          if (!response.ok) {
            throw Error("Unable to fetch post from the resource");
          }
          return response.json();
        })
        .then((json) => {
          console.log("success2");
          setIsPending(false);
          setPostDetails(json);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch operation ignored");
          } else if (err.name === "TypeError") {
            setIsPending(false);
            setError("Unable to connect to server");
          } else {
            // setError(err.message);
            setIsPending(false);
            console.log("The error:", err);
            setError("Unexpected error occured");
          }
        });
    }, 1000);
    return () => {
      abortController.abort();
    };
  }, [base_url]);

  return (
    <div className='h-auto w-auto ml-20'>
      {isPending && <Loader />}
      <div className='text-red-600 font-bold text-3xl'> {error} </div>
      <div>
        {postDetails.author === username ? (
          <div>
            <Link to={`/posts/update/${id}/`}>
              <button className='bg-mildorange rounded-lg p-2 font-bold my-4'>
                Update Post
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {postDetails && (
        <article className='bg-darkblue rounded-xl max-w-5xl h-auto text-white'>
          <div className='p-2 m-5'>
            <div className='my-3'>
              <span className='font-bold mr-2'>{postDetails.author}</span>
              <span className='ml-1'>{postDetails.type}</span>
            </div>
            <div>
              <span className='text-gray-300 mt-1'> on {postDetails.date}</span>
            </div>
            <div className='bg-gray-500 rounded-xl mt-4'>
              <article className='font-medium p-4'>
                {postDetails.content}
              </article>
            </div>
            <div className='mt-5 ml-3'>
              <span>
                <BsFillHeartFill />
              </span>
              <span className='mt-3 p-1'>{postDetails.likes}</span>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
