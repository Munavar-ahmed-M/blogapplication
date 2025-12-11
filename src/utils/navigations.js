import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineNoteAdd } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
const navigations = [
  {
    Navigation: "Dashboard",
    Icon: RiDashboardFill,
    path: "dashboard",
  },
  {
    Navigation: "Manage BlogPosts",
    Icon: MdOutlineNoteAdd,
    path: "addBlog",
  },
  {
    Navigation: "Manage Authors",
    Icon: HiUserAdd,
    path: "addAuthor",
  },
];

export default navigations;
