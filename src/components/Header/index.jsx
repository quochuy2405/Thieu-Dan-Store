import React from "react";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";
const List_Link = [
  {
    Name_Link: "Home",
    Link: "/",
  },
  {
    Name_Link: "Shop",
    Link: "/taekwondo",
  },
  {
    Name_Link: "Infomation",
    Link: "/taekwondo",
  },
  {
    Name_Link: "Taekwondo",
    Link: "/taekwondo",
  },
  {
    Name_Link: "Vovinam",
    Link: "/vovinam",
  },

];
function Header(props) {
  return (
    <div className="Header">
      <Link to="/" className="img_logo">
      <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/242965875_612641989904128_8833034643579671483_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=czm4mhc3Y3AAX8cwU-Q&_nc_ht=scontent.fsgn5-8.fna&oh=edbd0db128d9d2983a330e09ce05377f&oe=61A64F6A" alt=""  />
      </Link>
  
      <div className="nav_link">
      
        {List_Link.map((item, index) => (
          <NavLink to={item.Link} key={index}>
            <li className="link_item" >{item.Name_Link}</li>
          </NavLink>
        ))}
      </div>
          <div className="search">
          <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16  fa-3x search_icon"><path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z" class=""></path></svg>
              <input type="text" className="input_search" placeholder="Tìm kiếm"/>
            
       <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bars fa-w-14 fa-3x search_icon"><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" class=""></path></svg>
       </div>
    </div>
  );
}

export default Header;
