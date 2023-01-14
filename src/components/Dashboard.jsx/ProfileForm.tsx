import React, { useState } from "react";
import axios from "axios";

function UpdateForm() {
  const [avatar, setAvatar] = useState();
  const [fullName, setFullName] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("full_name", fullName);
    formData.append("info", info);

    axios
      .patch("/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Avatar:
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>
      <br />
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Info:
        <input
          type="text"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateForm;
