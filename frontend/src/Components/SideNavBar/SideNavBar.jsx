import { AiFillHome } from "react-icons/ai";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BsCartCheckFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdContactSupport, MdGroups } from "react-icons/md";
import logo from "../../Assets/boipoka_logo.svg";
import "./SideNavBar.css";
import Community from "../Community/Community";
import Trades from "../Trade/Trade";
import SideNavBarIcon from "./SideNavBarIcon";

const Sidebar = () => {
  let selection = 11;
  let renderPage = <Trades />;
  if (selection === 2) renderPage = <Trades />;
  if (selection === 11) renderPage = <Community />;
  const setSelected = (number) => {
    selection = number;
  };

  return (
    <div>
      <div
        className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-darkblue text-white shadow-lg'>
        <img src={logo} alt='logo' />
        <SideNavBarIcon
          icon={<AiFillHome size='48' />}
          text={"Home"}
          onClick={setSelected.bind(11)}></SideNavBarIcon>
        <SideNavBarIcon
          icon={<RiExchangeDollarFill size='48' />}
          text={"Trade"}
          onClick={setSelected.bind(2)}></SideNavBarIcon>
        <SideNavBarIcon
          icon={<MdGroups size='48' />}
          text={"Community"}
          onClick={setSelected.bind(3)}></SideNavBarIcon>
        <SideNavBarIcon
          icon={<BsFillBookmarkHeartFill size='48' />}
          text={"Wishlist"}
          onClick={setSelected.bind(4)}></SideNavBarIcon>
        <SideNavBarIcon
          icon={<BsCartCheckFill size='48' />}
          text={"Cart"}
          onClick={setSelected.bind(5)}></SideNavBarIcon>
        <SideNavBarIcon
          icon={<FaUserCircle size='48' />}
          text={"Account"}
          onClick={setSelected.bind(6)}></SideNavBarIcon>
        <SideNavBarIcon
          icon={<MdContactSupport size='48' />}
          text={"Support"}
          onClick={setSelected.bind(7)}></SideNavBarIcon>
      </div>

      <div>{renderPage}</div>
      {console.log("this", selection)}
    </div>
  );
};

export default Sidebar;
