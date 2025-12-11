import React from "react";
import Model from "../components/Model";
import AddBlogForm from "../components/AddBlogForm";

function CreateBlog() {
  return (
    <div className="w-10/12">
      <Model closeNavigation={"/admin/addBlog"}>
        <AddBlogForm addBlog={true} editBlog={false} />
      </Model>
    </div>
  );
}

export default CreateBlog;
