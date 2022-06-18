import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const mystate = useSelector((state) => state.Reducer.comData);
  const isLoading = useSelector((state) => state.Reducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      dispatch({
        type: "isLoading",
      });
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      dispatch({
        type: "GET_DATA",
        payload: {
          comData: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler = async (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if(isLoading){
    return <h1 className="text-center my-5">Loading....</h1>
  }
  return (
    <>
      <h1 className="text-danger my-5 text-center">Call Api with Redux</h1>
      <button
        className="my-2 btn btn-primary mx-5"
        style={{ fontSize: "15px" }}
        onClick={()=>navigate("/add")}
      >
        Add New
      </button>
      <div className="stories-div my-2">
        {(mystate.length>0)? mystate.map((curEle) => {
          return (
            <div className="card" key={curEle.id}>
              <h2 className="divtitle">
                {curEle.id < 10 ? `#0${curEle.id}` : `#${curEle.id}`}
              </h2>
              <h2 className="divtitle">{curEle.name}</h2>
              <p className="content-card">
                By <span> {curEle.email}</span> | {curEle.body}
              </p>
              <div className="card-button">
                <a
                  href={"https://Yasirsoha.github.io/portfolio"}
                  target="_blank"
                  rel="noreferrer" 
                >
                  Read more
                </a>
                <a onClick={() => deleteHandler(curEle.id)}
                href="#">Remove</a>
              </div>
            </div>
          );
        })
        :
            <h1 className="text-center">jhhh</h1>
        }
      </div>
    </>
  );
};

export default Home;
