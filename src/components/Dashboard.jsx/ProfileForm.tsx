import React, { useState } from "react";
import axios from "axios";

interface Props {
  currentUser: any; // This should be the current user object
}

const ProfileForm: React.FC<Props> = ({ currentUser }) => {
  const [fullName, setFullName] = useState(currentUser.full_name);
  const [info, setInfo] = useState(currentUser.info);
  const [avatar, setAvatar] = useState(null);
  console.log(currentUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!avatar) {
      return;
    }
    const formData = new FormData();
    formData.append("id", currentUser.id);
    formData.append("avatar", avatar);
    formData.append("full_name", fullName);
    formData.append("info", info);

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

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default ProfileForm;
