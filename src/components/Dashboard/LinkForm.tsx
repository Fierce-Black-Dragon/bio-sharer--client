import React, { useEffect, useState } from "react";
import { linkType } from "../../types";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import axios from "axios";
interface formType {
  link: linkType;

  setOpen: Function;
}
const LinkForm = (props: formType) => {
  const { link, setOpen } = props;
  console.log(props);

  const [formData, setFormData] = useState<linkType>(link);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("gfgffxdz");

    try {
      const res = await axios.post("http://localhost:3000/link", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res);

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
    if (link) {
      setFormData(link);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formData.title}

        <Input
          name="title"
          id="title"
          label_input=" Link title"
          handleChange={handleChange}
          value={formData.title}
          type="text"
          placeholder="Enter link title here..."
        />

        <Input
          name="url"
          id="url"
          label_input=" URl"
          handleChange={handleChange}
          value={formData.url}
          type="text"
          placeholder="Enter link url here..."
        />
        <span className="sm:ml-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            save
          </button>
        </span>
      </form>
    </div>
  );
};

export default LinkForm;
