import React, { useState, useEffect } from "react";

export default function HookDemo() {
  const [counter, setCounter] = useState(0);
  const [friut, setFriut] = useState("apple");
  const [works, setWork] = useState({
    list: [
      { id: "w1", text: "work about project", status: 0 },
      { id: "w2", text: "work about project", status: 0 },
      { id: "w3", text: "work about project", status: 0 }
    ]
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => setCounter(0), 5000);
    return () => {
      clearInterval(interval);
      console.log('return useEffect');
      
    }
  },[counter,friut]);

  const updateStatus = id => {
    setWork({
      ...works,
      ...(works.list[id].status = updateValue[works.list[id].status])
    });
  };

  const updateValue = [1, 0];

  return (
    <div>
      {console.log("render")}
      <h2>Counter : {counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <hr />
      <h2>Friut : {friut}</h2>

      <button
        onClick={() => {
          setFriut("mengo");
        }}
      >
        chang friut
      </button>
      <hr />
      <h2>work list</h2>
      {works.list.map((work, i) => (
        <p key={i}>
          <b> id:</b> {work.id}&nbsp;&nbsp;&nbsp;<b>text</b> : {work.text}
          &nbsp;&nbsp;&nbsp;<b>status</b>:{work.status}&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              updateStatus(i);
            }}
          >
            Update
          </button>
        </p>
      ))}
      <hr />
      <div>
        {posts.map(post => (
          <p style={{ width: "25%", border: "1px solid red" }} key={post.id}>
            <span>
              <b>{post.title}</b>
            </span>
            <span>{post.body}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
