import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage,faDoorOpen} from '@fortawesome/free-solid-svg-icons';
function Layout({ children }) {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Appointments",
      path: "/appointments"
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    }
  ];

  const doctorMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments"
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Users",
      path: "/admin/userslist"
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist"
    },
    // {
    //   name: "Profile",
    //   path: "/profile"
    // },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;
  console.log(menuToBeRendered);
  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";
  return (
    <div style={{backgroundColor:"black",width:"100%"}}>
      {/* <div className="" style={{backgroundColor:"blue",width:"100%"}}> */}
          <div className="" style={{backgroundColor:"darkblue",width:"100%",display:"grid", height:"8vh",gridTemplateColumns:"15% 25% 45% 15%"}}>
            <div style={{width:"100%", margin:"0",padding:"1vh",display:"flex" ,justifyContent:"center"}}>
              <p style={{ fontSize:"3vh", fontWeight:"bolder", cursor:"pointer"}}  onClick={() => navigate("/")}><span style={{color:"red"}}>Doc</span><span style={{color:"White"}}>Connect</span></p>
            </div>
            <div className="menu" style={{width:"100%", margin:"0",padding:"1vh"}}>
            <ul style={{display:"flex",textDecoration:"none", listStyleType:"none", justifyContent:"space-around"}}>
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              
              return (
                  <li ><Link to={menu.path} style={{color:"white",fontWeight:"bolder"}}>{menu.name}</Link></li>
              );
            })}
            </ul>
          </div>
          <div>

          </div>
          <div style={{margin:"0",padding:"1vh",display:"flex"}}>
            <ul style={{display:"flex",textDecoration:"none", listStyleType:"none", justifyContent:"space-around",width:"100%"}}>
            <li style={{backgroundColor:"white", padding:"1vh",borderRadius:"5px"}}><p style={{color:"White",cursor:"pointer",fontWeight:"bolder"}}>{role}</p></li>
            <li onClick={() => navigate("/notifications")} style={{color:"white"}}><FontAwesomeIcon icon={faMessage} style={{cursor:"pointer"}}/></li>
            <li onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}><Link to="/login" style={{color:"white"}}><FontAwesomeIcon icon={faDoorOpen}/></Link></li>
            </ul >
          </div>
          </div>
        <div className="" style={{backgroundColor:"white",width:"100%",overflow:"hidden"}}>
          <div style={{padding:"5vh"}}>{children}</div>
        </div>
      {/* </div> */}
    </div>
    
  );
}

export default Layout;
