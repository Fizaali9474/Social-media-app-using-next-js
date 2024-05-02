
"use client";
import React, { useState, useEffect } from "react";
import { getingAds } from "../config/firebase";
import "./post.css";

import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";

const PostCard = () => {
  const [posts, setosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const getPost = await getingAds();
    setosts(getPost);
    console.log(getPost);
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="container">
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/430056780_796734845707794_5055827750180866353_n.jpg?ccb=11-4&oh=01_Q5AaIPGnK8XtBjvOzmKIMXlK5YuThdim6JxijipJMv4x8i5L&oe=663CCA6E&_nc_sid=e6ed6c&_nc_cat=108"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                />
                <h3>Fiza Ali</h3>
              </div>
              <div className="card-body">
                <div color="cardImg">
                  <img
                    src={!post.image ? "no image Upload" : post.image}
                    className="card-img-top"
                    alt="..."
                  />
                </div>

                <p className="card-text">
                  {!post.description ? "No Descript" : post.description}
                </p>
                <div className="actionDiv">
                  <AiFillLike className="action" />
                  <FaCommentDots className="action" />
                  <TbLocationShare className="action" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCard;
