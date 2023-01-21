import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "./../../store/store";

const ProfileForm: React.FC = () => {
  const {
    user,
    vistedUser,
    loggedInStatus,
    setUser,
    setVisitedUSer,
    setLoggedInStatus,
  } = useStore((state) => state);
  const [currentUser, setCurrent] = useState();
  const [fullName, setFullName] = useState("");
  const [info, setInfo] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    if (avatar) {
      formData.append("avatar", avatar);
    }
    formData.append("full_name", fullName);
    formData.append("info", info);
    // formData.append("id", user.id);

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
        // handle success
        alert("yeaaa");
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
      setFullName(user.full_name);
      setInfo(user.info);
    }
  }, [loggedInStatus]);

  return (
    <form onSubmit={handleSubmit}>
      {user !== undefined ? (
        <>
          {user.username}
          <br />
          <label htmlFor="fullName">Full Ncame:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <label htmlFor="info">Info:</label>
          <textarea
            id="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <br />
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="file"
            id="avatar"
            onChange={(e: any) => setAvatar(e.target.files[0])}
          />
          <br />
          <button type="submit">Save Changes</button>
        </>
      ) : (
        "loading"
      )}
    </form>
  );
};

export default ProfileForm;
