import React from "react";
import "../../css/mobileScreen.css";
import { CurrentUser, User } from "../../types";
const Mobile = (user: CurrentUser) => {
  return (
    <main>
      <div className="iphonex">
        <div className="front">
          <div className="screen">
            <div className="screen__view">
              <div className="user_data mt-1">
                <div className="m-auto">
                  <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <div className="flex-shrink-0">
                      {user.avatar instanceof Blob ||
                      user.avatar instanceof File ? (
                        <img
                          className="h-12 w-12 rounded-full"
                          src={URL.createObjectURL(user.avatar)}
                          alt=""
                        />
                      ) : user.image_url ? (
                        <img
                          className="h-12 w-12 rounded-full"
                          src={user.image_url}
                          alt=""
                        />
                      ) : (
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                  </span>
                </div>
                <div className="">
                  <div className="username">@{user.username}</div>
                  <div className="full_name">{user.full_name}</div>
                  <div className="info">{user.info}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="front__line"></div>
          <div className="front__line front__line-second"></div>
        </div>
        <div className="phoneButtons phoneButtons-right"></div>
        <div className="phoneButtons phoneButtons-left"></div>
        <div className="phoneButtons phoneButtons-left2"></div>
        <div className="phoneButtons phoneButtons-left3"></div>
        <div className="back"></div>
      </div>

      <div className="title">
        <p>IPHONE</p>
      </div>
    </main>
  );
};

export default Mobile;
