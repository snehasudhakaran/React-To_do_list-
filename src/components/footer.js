import React from "react";

export const Footer = (props)=>{
    const date = new Date();

    return (
        <>
            <div class='bg-primary text-white container p-2' >
                <p class='mb-1 fw-bold'>{props.length} List {props.length>=2 ? 'items':'item'}</p>
                <h2>CopyRight &copy;{date.getFullYear()} </h2>
            </div>
        </>
    )
}