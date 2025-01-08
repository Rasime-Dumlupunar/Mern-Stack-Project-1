import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

export const HomeCard = ({ post }) => {
  const dispatch = useDispatch();

  const updatePost = (id) => {
    dispatch({
      type: "MODAL",
      payload: { open: true, updateId: id },
    });
  };
  const deletePost = (id) => {
    dispatch(deletePostAction(id));

    toast("Silme işlemi başarılı.", {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
    });
  };
  return (
    <div className=" relative w-1/4 max-md:w-1/2 border-4 p-3 rounded-xl bg-orange-100 mx-5 my-3">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-sm">{post?.description}</div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-md text-red-700 font-semibold">{post?.user}</span>
        <span className="text-sm text-gray-600">
          {post?.date?.substring(0, 10)}
        </span>
      </div>
      <div className="absolute top-2 right-2 items-center space-x-3 flex ">
        <RiDeleteBin5Line
          size={25}
          onClick={() => deletePost(post._id)}
          className=" bg-orange-500 rounded-full text-white p-1"
        />
        <GrUpdate
          size={25}
          onClick={() => updatePost(post._id, post)}
          className=" bg-green-500 rounded-full text-white p-1"
        />
      </div>
    </div>
  );
};
