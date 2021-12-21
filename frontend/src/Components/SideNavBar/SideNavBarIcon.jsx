import "./SideNavBar.css";

const SidebarIcon = (props) => (
  <div className='sidebar-icon group'>
    {props.icon}
    <span className='sidebar-tip group-hover:scale-100'>{props.text}</span>
  </div>
);

export default SidebarIcon;
