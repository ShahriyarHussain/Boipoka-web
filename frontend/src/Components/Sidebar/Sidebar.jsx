import { AiFillHome } from "react-icons/ai";
import { RiExchangeDollarFill } from "react-icons/ri";
// import { GrGroup } from "react-icons/gr";
import { BsFillBookmarkStarFill, BsCartCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdContactSupport, MdGroups } from "react-icons/md";
import logo from "../../Assets/boipoka_logo.png";

const Sidebar = () => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-16 m-0
    flex flex-col bg-gray-800 text-white shadow-lg'>
      <img src={logo} alt='logo' />
      <SidebarIcon icon={<AiFillHome size='48' />} text={"Home"}></SidebarIcon>
      <SidebarIcon
        icon={<RiExchangeDollarFill size='48' />}
        text={"Trade"}></SidebarIcon>
      <SidebarIcon
        icon={<MdGroups size='48' />}
        text={"Community"}></SidebarIcon>
      <SidebarIcon
        icon={<BsFillBookmarkStarFill size='48' />}
        text={"Wishlist"}></SidebarIcon>
      <SidebarIcon
        icon={<BsCartCheckFill size='48' />}
        text={"Cart"}></SidebarIcon>
      <SidebarIcon
        icon={<FaUserCircle size='48' />}
        text={"Account"}></SidebarIcon>
      <SidebarIcon
        icon={<MdContactSupport size='48' />}
        text={"Support"}></SidebarIcon>
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tip group-hover:scale-100'>{text}</span>
  </div>
);

export default Sidebar;
