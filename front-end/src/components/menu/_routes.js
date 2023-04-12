import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";
import * as Bi from "react-icons/bi";

const studentRoutes = [
  {
    path: "/update",
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

const adminRoutes = [
  {
    path: "/add-user",
    name: "Add User",
    icon: <Ai.AiFillBell />,
  },
  {
    path: "//student-details",
    name: "Student Details",
    icon: <Bs.BsFillBriefcaseFill />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <Bi.BiLogOut/>,
  }
];

console.log(localStorage.getItem('userType'));

const userType = localStorage.getItem('userType');

let routes = [];

if(userType==='student') {
  routes = studentRoutes;
} else if(userType==='company') {
  
}
else{
  routes = adminRoutes;
}

console.log(routes);

export default routes;