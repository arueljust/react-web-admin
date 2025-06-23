import {
    ChartBarBigIcon,
    LayoutDashboard,
    LogOutIcon,
    MessageCircle,
    Settings,
    ShoppingBagIcon,
    Users2Icon,
} from "lucide-react";
import { useRef, useState } from "react";

const sidebarMenu = [
  { icon: <LayoutDashboard size={18} />, text: "Dashboard" },
  { icon: <ShoppingBagIcon size={18} />, text: "My Store" },
  { icon: <ChartBarBigIcon size={18} />, text: "Analytics" },
  { icon: <MessageCircle size={18} />, text: "Message" },
  { icon: <Users2Icon size={18} />, text: "Team" },
];

const sidebarBottom = [
  { icon: <Settings size={18} />, text: "Settings" },
  { icon: <LogOutIcon size={18} />, text: "Logout", logout: true },
];

const Sidebar = ({ hide }) => {
  const [sidebarActive, setSidebarActive] = useState(0);
  const sidebarRef = useRef(null);

  return (
    <>
      <section id="sidebar" className={hide ? "hide" : ""} ref={sidebarRef}>
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">Admin</span>
        </a>
        <ul className="side-menu top">
          {sidebarMenu.map((item, idx) => (
            <li
              key={item.text}
              className={sidebarActive === idx ? "active" : ""}
            >
              <a href="#" onClick={() => setSidebarActive(idx)}>
                <span className="icon1">{item.icon}</span>
                <span className="text">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="side-menu">
          {sidebarBottom.map((item, idx) => (
            <li key={item.text}>
              <a href="#" className={item.logout ? "logout" : ""}>
                <span className="icon1">{item.icon}</span>
                <span className="text">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
