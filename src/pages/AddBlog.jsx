import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate, useLocation, Outlet } from "react-router";

function AddBlog() {
  const navigate = useNavigate();
  const location = useLocation();
  const naviateToCreateBlog = () => {
    navigate("createBlog");
  };
  return location.pathname.includes("createBlog") ? (
    <Outlet></Outlet>
  ) : (
    <>
      <div className="text-gray-900 py-3 px-6 w-9/12 space-y-6">
        <h1 className="text-2xl mt-4 font-bold  ">Admin {">"} Blog</h1>
        <div>
          {/**features */}
          <div id="options" className="flex justify-end p-4">
            <button
              onClick={naviateToCreateBlog}
              className="bg-gray-700 p-2 text-white rounded-lg font-medium hover:bg-gray-600 cursor-pointer"
            >
              + Add Blog
            </button>
          </div>
          <div className="border-2 border-gray-700 rounded-xl overflow-hidden  ">
            <table className="w-full ">
              <thead className=" border-gray-700 border-b-2">
                <tr className="text-center font-bold">
                  <th className="border-b-2 border-gray-400 p-2">Author</th>
                  <th className="border-b-2 border-gray-400 p-2 ">
                    Posted_Date
                  </th>
                  <th className="border-b-2 border-gray-400 p-2 ">Title</th>
                  <th className="border-b-2 border-gray-400 p-2 ">Edit</th>
                  <th className="border-b-2 border-gray-400 p-2 ">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center font-medium bg-gray-300 border-b border-gray-500  ">
                  <td className="py-4">Alex</td>
                  <td className="py-4">12/12/12</td>
                  <td className="w-1/4 font-bold overflow-hidden py-2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dicta perspiciatis quia sapiente illum? Laudantium eveniet
                    </p>
                  </td>

                  <td>
                    <button className="px-2 text-md py-2 text-amber-50 rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer">
                      <MdModeEdit size={20} />
                    </button>
                  </td>
                  <td>
                    <button className="px-2 text-md py-2 text-amber-50 rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer">
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBlog;
