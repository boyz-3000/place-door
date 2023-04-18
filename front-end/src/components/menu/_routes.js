import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";
import * as Bi from "react-icons/bi";
import * as Ri from "react-icons/ri";
import * as Cg from "react-icons/cg";

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

const companyRoutes = [
  {
    path: "/applied-student",
    name: "Applied Students",
    icon: <Ai.AiFillBell />,
  },
  {
    path: "/post-jobs",
    name: "Post Job",
    icon: <Bs.BsFillBriefcaseFill />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon : <Cg.CgProfile />
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
    path: "/student-details",
    name: "Student Details",
    icon: <Io.IoIosSchool />,
  },
  {
    path: "/company-details",
    name: "Company Details",
    icon: <Bs.BsFillBriefcaseFill />,
  },
  {
    path: "/applications",
    name: "Applications",
    icon: <Ri.RiPagesLine />,
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
  routes = companyRoutes;
}
else{
  routes = adminRoutes;
}

console.log(routes);

export default routes;