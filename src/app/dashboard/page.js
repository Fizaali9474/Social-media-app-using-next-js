/*<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="Welcome.css" />
  <div id="">
    <div id="b">
      <div id="c">
        <div className="slide-container">
          <div className="slide-content" id="slide-content">
            <img
              src="./insta img 2/insta img 2.jpg"
              alt=""
              className="active"
            />
            <div>
              <img src="./insta img 2/insta img 2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-content box">
            <div className="logo">
              <img
                src="./dark/dark.png"
                alt="Instagram "
                className="logo-light"
              />
              <img
                src="./light/light.png"
                alt="Instagram logo"
                className="logo-dark"
              />
            </div>
            <div className="signin-form">
              <div className="form-group">
                <div className="animate-input">
                  <form>
                    <input type="text" placeholder="phone,number or email" />
                  </form>
                </div>
              </div>
              <div className="form-group">
                <div className="animate-input">
                  <label htmlFor="" />
                  <input type="password:" placeholder="password" />
                </div>
              </div>
              <div className="btn-group">
                <button id="f1">Log In</button>
              </div>
              <div className="divine">
                <div />
                <div>OR</div>
                <div />
              </div>
              <div className="btn-group">
                <button className="btn-fb">
                  <img src="./fb img/facebook-icon.png" alt="" />
                  <span>Log in with Facebook</span>
                </button>
              </div>
              <a href="Forgot Password?" id="f2">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="box goto">
            <p>
              Don't have an account?
              <a href="#">Sign up</a>
            </p>
          </div>
          <div className="app-download">
            <p>Get the app.</p>
            <div className="store-link">
              <a href="#">
                <img src="./app store/app-store.png" alt="app store" />
              </a>
              <a href="#">
                <img src="./google play/gg-play.png" alt="google play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="links">
        <a href="">Meta</a>
        <a href="">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Top Accounts</a>
        <a href="#">Locations</a>
        <a href="#">Instagram Lite</a>
        <a href="">Threads</a>
        <a href="">Contact Uploading &amp; Non-users</a>
        <a href="#">Meta Verified</a>
        <a href="">English</a>
      </div>
      <div className="copyright">© 2023 Instagram from Meta</div>
    </div>
  </div>
  <h1>Fiza Ali- </h1>
</>

export default dashboard*/


"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


function Dashboard() {
  return (
    <div className="flex">
      <aside className="sidebar  position-fixed top-0 left-0 flex flex-col items-start w-[250px] h-[100%] p-[30px] bg-color-[white] border-l-[1px solid black]">
        <header className="sidebar-header">
          <div className="avatar">
            <img
              className="w-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXzDNIYwYf1w6MffsLQzqFVv6wOz7ndg1CMmNzhAlRA&s"
            />
          </div>
          <div className="home-main flex items-center  pt-[35px] mb-[10px]">
            <svg
              aria-label="Home"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
                class=""
              ></path>
            </svg>
            <h3 className="ps-[20px] font-bold text-[16px] cursor-pointer">
              Home
            </h3>
          </div>

          <div className="search-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="Search"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Search</title>
              <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class=""
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
            <h3 className="ps-[10px] text-[16px] cursor-pointer">Search</h3>
          </div>

          <div className="explore-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="Explore"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Explore</title>
              <polygon
                fill="none"
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
              <polygon
                fill-rule="evenodd"
                points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
              ></polygon>
              <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <h3 className="ps-[10px] text-[16px] cursor-pointer">Explore</h3>
          </div>
          <div className="home-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="Reels"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Reels</title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h3 className="ps-[10px] text-[16px] cursor-pointer">Reels</h3>
          </div>
          <div className="home-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="Messenger"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Messenger</title>
              <path
                d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.739"
              ></path>
              <path
                d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h3 className="ps-[10px]  text-[16px] cursor-pointer">Messages </h3>
          </div>

          <div className="home-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="Notifications"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Notifications</title>
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
            <h3 className="ps-[10px] text-[16px] cursor-pointer">
              Notifications
            </h3>
          </div>

          <div className="create-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="New post"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Create Post</title>
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
            <h3 className="ps-[10px] text-[16px] cursor-pointer">
              <Link href={"./addPost"}>Create Post</Link>
              {/* <Link to="/postAds">Create</Link> */}
            </h3>
          </div>

          <div className="profile-main flex items-center m-auto pt-[25px] mb-[13px]">
            <img
              className="w-[25px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1tp4q1VhgJ69MDeSjmtqfQOjcXI0_9OAKnarbIO3KOD31OJAp-MsLJcPcbKJN3CmPt8&usqp=CAU"
            />
            <h3 className="ps-[10px]  text-[16px] cursor-pointer">Profile</h3>
          </div>

          <div className="more-main flex items-center m-auto pt-[25px] mb-[10px]">
            <svg
              aria-label="Settings"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Settings</title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="4"
                y2="4"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="12"
                y2="12"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="20"
                y2="20"
              ></line>
            </svg>
            <h3 className="ps-[10px]  text-[16px] cursor-pointer">More</h3>
          </div>
        </header>
      </aside>
      <header className="">
        <div className="flex gap-[25px] m-[20px]  max-w-[800px] flex-wrap">
          {/* <p className="text-xs w-14 truncate text-center">huzaifa</p> */}

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://images.unsplash.com/photo-1611880147493-7542bdb0f024?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW4lMjBnaXJsfGVufDB8fDB8fHww  "
            alt=""
          />
          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-blond-model-dressed-summer-hipster-clothes-trendy-girl-posing-street-background-funny-positive-woman_158538-5479.jpg  "
            alt=""
          />

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://img.freepik.com/premium-photo/funny-woman-white-background-cheerful-female-model-joyful-positive-human-emotion-facial-expression-body-language_361425-6935.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714089600&semt=ais   "
            alt=""
          />

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://img.freepik.com/free-photo/young-woman-sitting-cross-legged-isolated_171337-19356.jpg"
            alt=""
          />

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://img.freepik.com/free-photo/sideways-portrait-afro-american-cheerful-male-with-crisp-hair-smiles-gently_273609-8531.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais"
            alt=""
          />

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://img.freepik.com/free-photo/cheerful-african-man-smiling-speaking-phone_176420-12629.jpg"
            alt=""
          />

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://www.shutterstock.com/image-photo/african-man-smiling-260nw-407082223.jpg"
            alt=""
          />

          <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkhi6QfSKoc3YvuGQNl6mifZJ9Ye3nDr-5mCqxYkYcw&s"
            alt=""
          />
 {   /*     <img
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
            src="https://images.statusfacebook.com/profile_pictures/stylish_dps/stylish_dps_for_boys_52.jpg"
            alt=""
  />*/}
        </div>
        <div className="flex items-center justify-evenly">
          <p className="text-xs w-14 truncate text-center">Fiza</p>
          <p className="text-xs w-14 truncate text-center">Areeba</p>
          <p className="text-xs w-14 truncate text-center">Laiba</p>
          <p className="text-xs w-14 truncate text-center">Tooba</p>
          <p className="text-xs w-14 truncate text-center">Saim</p>
          <p className="text-xs w-14 truncate text-center">Baber</p>
          <p className="text-xs w-14 truncate text-center">Ayan</p>
          <p className="text-xs w-14 truncate text-center">Aamir</p>
        
        </div>
      </header>
    
    </div>
    
  );
}

export default Dashboard;