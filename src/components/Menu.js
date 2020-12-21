import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
const menu = [
    {
        name: 'Trang chủ',
        to : '/',
        exact :true
    },
    {
        name: 'Giới thiệu',
        to : '/about',
        exact :false
    },
    {
        name: 'Link',
        to : '/link',
        exact :false
    },
    {
        name: 'Sản Phẩm',
        to : '/products',
        exact :false
    },
    {
      name: 'Đăng nhập',
      to : '/login',
      exact :false
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active" : "";
          return (
            <li className = {active}>
              <Link  to={to}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };
class Menu extends Component {
    render() { 
        return (
            <nav class="navbar navbar-default">
            <ul className="nav navbar-nav">
            {this.showMenu(menu)}
              {/* <MenuLink label='Trang chủ' to ='/' activeOnlyWhenExact= {true}/>
              <MenuLink label='Giới thiệu' to ='/about' activeOnlyWhenExact= {false}/>
              <MenuLink label='Link' to ='/link' activeOnlyWhenExact= {false}/> */}
            </ul>
          </nav>
        );
    }
    showMenu = (menus)=>{
        var result = null;
        if(menus.length >0){
            result = menus.map((menu, index)=>{
                return <MenuLink key={index} 
                                 label = {menu.name}
                                 to = {menu.to}
                                 activeOnlyWhenExact = {menu.exact}/>
            });
            return result;
        }
        
    }

}
 
export default Menu;