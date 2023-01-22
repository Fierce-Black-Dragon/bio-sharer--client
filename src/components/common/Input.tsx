import React from "react";
interface input {
  name: string;
  id: string;
  label_input: string;
  handleChange: Function;
  value: any;
  type: string;
  placeholder: string;
}
const Input = (props: input) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700"
        >
          {props.label_input}
        </label>
        <div className="relative mt-1 rounded-md  rounded-r-md  p-2 border shadow-sm border-gray-400">
          <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            className="block w-full flex-1   focus:outline-none sm:text-sm"
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
