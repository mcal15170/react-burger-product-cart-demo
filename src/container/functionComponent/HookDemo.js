import React, { useState, useEffect, useRef, useReducer } from "react";

export default function HookDemo() {
  // useRef
  const inputRef = useRef();
  // userState
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

  //end useState

  // useEffect
  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => setCounter(0), 5000);
    return () => {
      clearInterval(interval);
      console.log("return useEffect");
    };
  }, [counter, friut]);

  //end useEffect

  // useReducer

  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            title: action.title
          }
        ];

      case "REMOVE_BY_ID":
        return state.filter((_, index) => index != action.id);
        case 'CLEAR':
          return [];
    }
  }, []);

  //end useReducer
  const updateValue = [1, 0];

  const updateStatus = id => {
    setWork({
      ...works,
      ...(works.list[id].status = updateValue[works.list[id].status])
    });
  };

  const handlerSubmit = event => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      title: inputRef.current.value
    });
    inputRef.current.value = "";
  };

  return (
    <div className="container">
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

      <h2>userReducer + useRef</h2>
      <form onSubmit={handlerSubmit}>
        <input ref={inputRef} />
      </form>
       <button  onClick={() => {
              dispatch({ type: "CLEAR"});
            }}>clear All</button>
       &nbsp;
      {items.map((item, i) => (
        <p key={item.id}>
          {item.title}
          &nbsp;
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_BY_ID", id: i });
            }}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}
