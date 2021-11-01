import React from "react";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";
const List_Link = [
  {
    Name_Link: "Taekwondo",
    Link: "/taekwondo",
  },
  {
    Name_Link: "Vovinam",
    Link: "/vovinam",
  },
  {
    Name_Link: "Khác",
    Link: "/orderpage",
  },
];
function Header(props) {
  return (
    <div className="Header">
      <Link to="/" className="img_logo">
      <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/242965875_612641989904128_8833034643579671483_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=czm4mhc3Y3AAX8cwU-Q&_nc_ht=scontent.fsgn5-8.fna&oh=edbd0db128d9d2983a330e09ce05377f&oe=61A64F6A" alt=""  />
      </Link>
      <div className="search">
         <input type="text" className="input_search" placeholder="Tìm kiếm"/>
         <i class="fas fa-search"></i>
       </div>
      <div className="nav_link">
      
        {List_Link.map((item, index) => (
          <NavLink to={item.Link}>
            <li className="link_item">{item.Name_Link}</li>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
