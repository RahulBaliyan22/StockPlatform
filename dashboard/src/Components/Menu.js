import React,{useState}from "react";
import {Link} from 'react-router-dom';
const Menu = () => {
  const [selectedMenu,setSelectedMenu]= useState(0);
  const[isProfileOpen,setIsProfileOpen] = useState(false);
  const handleMenuClick = (index)=>{setSelectedMenu(index)};
  const handleProfileClick = ()=>{setIsProfileOpen(!isProfileOpen)};
  const menuClass = "menu";
  const activeMenuClass = "menu Selected"; 
  return (
    <div className="menu-container">
      <img src="media/logo.png" alt =' ' style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link  style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link  style={{textDecoration:"none"}}  to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link  style={{textDecoration:"none"}}  to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link   style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link   style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link   style={{textDecoration:"none"}}  to="/apps" onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;