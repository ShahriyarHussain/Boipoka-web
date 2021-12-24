import { AiFillHome } from "react-icons/ai";
import { RiExchangeDollarFill, RiLogoutBoxRLine } from "react-icons/ri";
import { BsCartCheckFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdContactSupport, MdGroups } from "react-icons/md";
import logo from "../../Assets/boipoka_logo.svg";
import "./SideNavBar.css";
import SideNavBarIcon from "./SideNavBarIcon";

let test = 0;

const SideNavBar = (props) => {
  return (
    <div>
      <div
        className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-darkblue text-white shadow-lg'>
        <img src={logo} alt='logo' />
        <button
          onClick={() => {
            test = 0;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 0}
            icon={<AiFillHome size='48' />}
            text={"Home"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            test = 1;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 1}
            icon={<RiExchangeDollarFill size='48' />}
            text={"Trade"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            test = 2;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 2}
            icon={<MdGroups size='48' />}
            text={"Community"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            test = 3;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 3}
            icon={<BsFillBookmarkHeartFill size='48' />}
            text={"Wishlist"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            test = 4;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 4}
            icon={<BsCartCheckFill size='48' />}
            text={"Cart"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            test = 5;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 5}
            icon={<FaUserCircle size='48' />}
            text={"Account"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            test = 6;
            props.click(test);
          }}>
          <SideNavBarIcon
            isSelected={test === 6}
            icon={<MdContactSupport size='48' />}
            text={"Support"}></SideNavBarIcon>
        </button>
        <button
          onClick={() => {
            props.logoutFunc();
          }}>
          <SideNavBarIcon
            isSelected={false}
            icon={<RiLogoutBoxRLine size='48' />}
            text={"Logout"}></SideNavBarIcon>
        </button>
      </div>
    </div>
  );
};

export default SideNavBar;
