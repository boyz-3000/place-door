import React from "react";
import { NavLink } from "react-router-dom";
import routes from "./_routes";
import "./Menu.css";

const Menu = ({show, setShow}) => {
  if(show){
    return null;
  }

  return (
    <div className="menuWrapper">
      <div className="menu">
        {/* <button onClick={onClose} className={`${styles.btnClose} btn-close`} /> */}
        {routes.map((route) => (
          <NavLink to={route.path} key={route.name} className="link" onClick={() => setShow(false)}>
            <div className="icon">{route.icon}</div>
            <div className="link_name">{route.name}</div>
          </NavLink>
          
        ))}
      </div>
    </div>
  );
};

export default Menu;
