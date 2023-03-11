import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";
import * as Bi from "react-icons/bi";

const routes = [
  {
    path: "/updates",
    name: "Updates",
    icon: <Ai.AiFillBell />,
  },
  {
    path: "/jobs",
    name: "Jobs",
    icon: <Bs.BsFillBriefcaseFill />,
  },
  {
    path: "/applied",
    name: "Applied",
    icon: <Io.IoIosCheckmarkCircle />,
  },
  {
    path: "/resume",
    name: "Resume",
    icon: <Ai.AiFillFileText />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <Bi.BiLogOut/>,
  }
];

export default routes;