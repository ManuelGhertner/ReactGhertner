import React from "react"

const NavCategories = () =>{

    const categories = [
        {id:1, name: "Para el asador"},
        {id:2, name: "Para la parrilla"},
        {id:2, name: "Para los comensales"},
    ];
return(
    <nav style={style.nav}>
    {
        categories.map((category)=>{
            return <a key={category.id} style={style.category} href="">{category.name}</a>
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
