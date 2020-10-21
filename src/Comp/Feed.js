import React, { useState, useEffect } from "react";

let newArr = [
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
];
let newArrLength = [];
const postsPerPage = 10;

const Feed = () => {
  const [loadNow, setItem] = useState([]);
  const [next, setNext] = useState(10);
  const loopWithSlice = (start, end) => {
    const slicedPosts = newArr.slice(start, end);
    newArrLength = [...newArrLength, ...slicedPosts];
    setItem(newArrLength);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMore = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div className="feed">
      {loadNow.map((item, index) => {
        return (
          <img
            key={index}
            className="img"
            src={`https://picsum.photos/id/${item}/400/300`}
            alt="whoops"
          />
        );
      })}
      <button className="loadmore" onClick={handleShowMore}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Feed;
