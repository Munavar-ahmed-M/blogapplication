import navigations from "../utils/navigations";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={`w-2/12 bg-gray-800  p-4 text-white space-y-10 ${location.pathname.includes("createBlog") ? 'h-auto' : 'h-screen'}`}>
      <h1 className="text-2xl font-bold  ">Admin Panal</h1>
      <ul className="space-y-3">
        {navigations.map((navItem, index) => {
          return (
            <>
              <button
                className={`px-4 py-2 border border-gray-50  w-full transition-all rounded-xl cursor-pointer ${
                  location.pathname === "/admin/" + navItem.path
                    ? "bg-white text-black scale-99"
                    : "hover:bg-gray-600"
                }`}
                onClick={() => {
                  navigate(navItem.path);
                }}
              >
                <li
                  key={index}
                  className="flex gap-2 items-center font-semibold "
                >
                  <span>
                    {
                      <navItem.Icon
                        size={30}
                        color={
                          location.pathname === "/admin/" + navItem.path
                            ? "color-black"
                            : "color-white"
                        }
                      />
                    }
                  </span>
                  <span>{navItem.Navigation}</span>
                </li>
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
