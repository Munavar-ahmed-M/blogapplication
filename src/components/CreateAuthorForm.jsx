import React from "react";

function CreateAuthorForm() {
  return (
    <div>
      <form className="flex flex-col text-lg font-medium px-3 space-y-3">
        <label htmlFor="authorName">Name : </label>
        <input
          id="authorName"
          className="border-2 rounded-lg p-2  border-gray-600"
        ></input>
        <label htmlFor="imageUpload">Profile Image : </label>
        <input
          id="imageUpload"
          className="border-2 rounded-lg p-2 "
          type="file"
        ></input>
        <label htmlFor="profession">Profession : </label>
        <input
          id="profession"
          className="border-2 rounded-lg p-2"
          type="text"
        ></input>
      </form>
      <div className="flex justify-center my-6">
        <button className="bg-gray-800 p-2 text-white rounded-lg hover:bg-gray-600">
          Create Author
        </button>
      </div>
    </div>
  );
}

export default CreateAuthorForm;
