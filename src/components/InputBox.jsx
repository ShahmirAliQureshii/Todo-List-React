import React from "react";

const InputBox = ({OnKeyEnter}) => {

  return (
    <>
      <input
        className="w-4/5 bg-white mx-2 rounded outline-none border border-gray-200 py-1 h-8 px-5 text-black"
        placeholder="Enter Your Todo"
        type="text"
        onKeyDown={OnKeyEnter}
      />
    </>
  );
};

export default InputBox;
