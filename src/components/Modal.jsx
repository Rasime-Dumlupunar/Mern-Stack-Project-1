import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  console.log("modal", modal);

  const onchangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
    } else {
      dispatch(createPostAction(postData));
    }

    dispatch({ type: "MODAL", payload: false });
    toast("Ekleme işlemi başarılı.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-5 rounded-xl ">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="font-bold text-2xl ">
            {" "}
            {modal?.updateId ? "Update Post" : "Share the Your Post"}
          </h1>
          <AiOutlineClose
            size={28}
            className="bg-slate-300 rounded-full px-1 font-bold"
          />
        </div>
        <div className="my-4 flex flex-col space-y-5">
          <input
            value={postData.user}
            name="user"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="User"
          />
          <input
            value={postData.title}
            name="title"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="Title"
          />
          <input
            value={postData.description}
            name="description"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="Description"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-red-600 text-white cursor-pointer rounded-xl hover:bg-red-800 tracking-widest"
        >
          {modal?.updateId ? "UPDATE" : "SHARE"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
