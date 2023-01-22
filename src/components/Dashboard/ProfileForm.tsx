import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../../store/store";
import ShareLink from "./ShareLink";
import LinksContainer from "./LinksContainer";
import Mobile from "./Mobile";
import { CurrentUser, User } from "../../types";

const ProfileForm: React.FC = () => {
  const {
    user,
    visitedUser: vistedUser,
    loggedInStatus,
    setUser,
    setVisitedUSer,
    setLoggedInStatus,
  } = useStore((state) => state);
  const [currentUser, setCurrent] = useState<CurrentUser>({
    email: "",
    full_name: "",
    id: 0,
    image_url: "",
    avatar: null,
    info: "",
    username: "",
    links: [],
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { avatar, full_name, username, id, info } = currentUser;

    const formData = new FormData();

    if (avatar) {
      formData.append("avatar", avatar);
    }
    formData.append("full_name", full_name);
    formData.append("info", info);
    formData.append("username", username);
    formData.append("id", user.id);
    try {
      const res = await axios.post(
        "http://localhost:3000/profile_update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
      } else {
        // handle error
        console.error("fff", res);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (user) {
      setCurrent({ ...user, avatar: null });
      // setAvatar(user.image_url);
    }
  }, [loggedInStatus]);
  const handleChange = (e: any) => {
    if (e.target.name === "avatar") {
      setCurrent({
        ...currentUser,
        image_url: URL.createObjectURL(e.target.files[0]),
        avatar: e.target.files[0],
      });
    } else {
      setCurrent({ ...currentUser, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {}, [currentUser.avatar]);

  return (
    <div className=" md:grid md:grid-cols-2 ">
      <div className="bg-gray-100 p-3">
        <div className="">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-4 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <div className="flex-shrink-0">
                          {user.image_url ? (
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
                      <button
                        type="button"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        {" "}
                        <input
                          type="file"
                          id="avatar"
                          name="avatar"
                          className="hidden"
                          onChange={handleChange}
                        />
                        <label htmlFor="avatar">Change</label>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name:
                      </label>
                      <div className="relative mt-1 rounded-md  rounded-r-md  p-2 border shadow-sm border-gray-400">
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={currentUser.username}
                          onChange={handleChange}
                          className="block w-full flex-1   focus:outline-none sm:text-sm"
                          placeholder="enter your name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name:
                      </label>
                      <div className="relative mt-1 rounded-md  rounded-r-md  p-2 border shadow-sm border-gray-400">
                        <input
                          type="text"
                          id="fullName"
                          name="full_name"
                          value={currentUser.full_name}
                          onChange={handleChange}
                          className="block w-full flex-1   focus:outline-none sm:text-sm"
                          placeholder="enter your name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1 relative  rounded-md  rounded-r-md  p-2 border shadow-sm border-gray-400">
                      <textarea
                        id="info"
                        rows={3}
                        name="info"
                        value={currentUser.info}
                        onChange={handleChange}
                        className="block w-full flex-1   focus:outline-none sm:text-sm"
                        placeholder="describe about yourself"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Links
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Decide which links you'd like to share
                </p>
              </div>
            </div>
            <div className="mt-5 ">
              {" "}
              <div className="">
                {loggedInStatus ? (
                  <LinksContainer links={currentUser.links} />
                ) : (
                  "loading"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <Mobile {...currentUser} />
      </div>
    </div>
  );
};

export default ProfileForm;
