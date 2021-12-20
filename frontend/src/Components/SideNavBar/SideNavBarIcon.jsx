import "./SideNavBar.css";

const SidebarIcon = ({ icon, text, selected }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tip group-hover:scale-100'>{text}</span>
  </div>
);

export default SidebarIcon;
