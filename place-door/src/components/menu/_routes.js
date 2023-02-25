import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";

const routes = [
  {
    path: "/",
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
];

export default routes;