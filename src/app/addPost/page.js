"use client";
import React, { useState } from "react";
import "./addPost.css";
import Link from "next/link";
import { userCardItem } from "../config/firebase";

const AddPost = ({ onAdd }) => {
  const [img, setImg] = useState("");
  const [des, setdes] = useState("");

  const addItem = async () => {
    try {
      console.log(img, des ,'img,des')
      await userCardItem({ img, des });
    } catch (error) {}
    console.log(error.message);
  };

  return (
    <div className="postAddCard">
      <div className="imagePreview">
        <img
          src="https://buffer.com/library/content/images/size/w1200/2023/11/best-time-to-post-on-Instagram-featured-image.png"
          alt="Preview"
        />
        Create your post now!
      </div>
      <input
        type="file"
        placeholder="Image URL"
        className="input"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <textarea
        placeholder="Write Your Description"
        onChange={(e) => setdes(e.target.value)}
        className="textarea"
      />

      <button onClick={addItem} className="addButton">
         Post
      </button>
    </div>
  );
};

export default AddPost;
