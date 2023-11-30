import React from "react";

export const Header = (props)=>{
    return(
        <>
        <div class='container bg-primary p-3 text-white '>
          <h1>{props.title}</h1>
        </div>
        </>
    )

}

Header.defaultProps ={
  title:"To do List",
}