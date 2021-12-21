import { AiFillHome } from "react-icons/ai";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BsCartCheckFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdContactSupport, MdGroups } from "react-icons/md";
import logo from "../../Assets/boipoka_logo.svg";
import "./SideNavBar.css";
// import Community from "../Community/Community";
// import Trades from "../Trade/Trade";
import SideNavBarIcon from "./SideNavBarIcon";

const SideNavBar = (props) => {
  return (
    <div>
      <div
        className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-darkblue text-white shadow-lg'>
        <img src={logo} alt='logo' />
        <button onClick={() => props.click(0)}>
          <SideNavBarIcon
            icon={<AiFillHome size='48' />}
            text={"Home"}></SideNavBarIcon>
        </button>
        <button onClick={() => props.click(1)}>
          <SideNavBarIcon
            icon={<RiExchangeDollarFill size='48' />}
            text={"Trade"}></SideNavBarIcon>
        </button>
        <button onClick={() => props.click(2)}>
          <SideNavBarIcon
            icon={<MdGroups size='48' />}
            text={"Community"}></SideNavBarIcon>
        </button>
        <button onClick={() => props.click(3)}>
          <SideNavBarIcon
            icon={<BsFillBookmarkHeartFill size='48' />}
            text={"Wishlist"}></SideNavBarIcon>
        </button>
        <button onClick={() => props.click(4)}>
          <SideNavBarIcon
            icon={<BsCartCheckFill size='48' />}
            text={"Cart"}></SideNavBarIcon>
        </button>
        <button onClick={() => props.click(5)}>
          <SideNavBarIcon
            icon={<FaUserCircle size='48' />}
            text={"Account"}></SideNavBarIcon>
        </button>
        <button onClick={() => props.click(6)}>
          <SideNavBarIcon
            icon={<MdContactSupport size='48' />}
            text={"Support"}></SideNavBarIcon>
        </button>
      </div>
    </div>
  );
};

export default SideNavBar;
