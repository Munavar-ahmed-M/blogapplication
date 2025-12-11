import React from "react";
import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
function AddBlogForm({ addBlog, editBlog }) {
  const IntializeFormData = {
    title: " ",
    imageUpload: null,
    metaTitle: "",
    metaDescription: "",
    author: "not selected",
  };
  const [formData, setFormData] = useState(IntializeFormData);
  const [content, setContent] = useState("");
  return (
    <div className="w-4xl space-y-6">
      <h1 className="font-bold text-2xl  py-3 px-1 border-gray-300 border-b-2">
        {addBlog ? "Create Blog" : "Edit Blog"}
      </h1>
      <form className="flex flex-col text-lg font-medium px-3 space-y-3">
        <label htmlFor="BlogTitle">Title : </label>
        <input
          value={formData.title}
          id="BlogTitle"
          className="border-2 rounded-lg p-2  border-gray-600"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        ></input>
        <label htmlFor="imageUpload">Image upload : </label>
        <input
          value={formData.imageUpload}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              imageUpload: e.target.value,
            }))
          }
          id="imageUpload"
          className="border-2 rounded-lg p-2 "
          type="file"
        ></input>
        <label htmlFor="metaTitle">Meta Title : </label>
        <input
          value={formData.metaTitle}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              metaTitle: e.target.value,
            }))
          }
          id="metaTitle"
          className="border-2 rounded-lg p-2"
          type="text"
        ></input>
        <label htmlFor="metaDescription">Meta Description : </label>
        <textarea
          value={formData.metaDescription}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              metaDescription: e.target.value,
            }))
          }
          id="metaDescription"
          className="border-2 rounded-lg p-2"
          type="text"
        ></textarea>
        <label htmlFor="author">Author : </label>
        <select
          id="author"
          value={formData.author}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              author: e.target.value,
            }))
          }
          className="border-2 rounded-lg py-2 px-4 w-44 "
        >
          <option>Not selected</option>
          <option>tester 1</option>
          <option>tester 2</option>
        </select>
        <label htmlFor="blogContent">Write a Content : </label>
        <div className="w-full">
          <RichTextEditorComponent
            value={content}
            onChange={(e) => setContent(e.value)}
          >
            <Inject
              services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}
            />
          </RichTextEditorComponent>
        </div>
      </form>
      <div className="flex justify-center my-6">
        <button className="bg-gray-800 p-2 text-white rounded-lg hover:bg-gray-600">
          {addBlog ? "Create Post" : "Edit Post"}
        </button>
      </div>
    </div>
  );
}

export default AddBlogForm;
