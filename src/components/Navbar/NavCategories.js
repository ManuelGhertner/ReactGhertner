import React from "react"
import {Link, NavLink} from "react-router-dom";
import ItemListContainer from "../ItemListContainer";

const NavCategories = () =>{

    const categories = [
        {id:1, name: "Inicio",route:"/"},
        {id:2, name: "Para el asador",route:"categories/asador"},
        {id:3, name: "Para la parrilla",route:"categories/parrilla"},
        {id:4, name: "Para los comensales",route:"categories/comensales"},
    ];
return(
  
    <nav style={style.nav}>
    {
        categories.map((category)=>{
            return <Link key={category.id} style={style.category} to={category.route}>{category.name}</Link>
        })
        
       
    }
    </nav>

)}


const style = {
    nav:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
       
    },
    category:{
        alignSelf: "center",
        padding: 20,
        color: "black",
        fontSize: 32,
    }

}

export default NavCategories;
