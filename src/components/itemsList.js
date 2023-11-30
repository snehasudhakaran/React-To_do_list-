import React from 'react';
import '../assets/css/main.css';
import { MdOutlineDelete } from "react-icons/md";

export const ListItem = ({ items, handleCheck, handleDelete })=>{
    return(

        <ul className=' text-black d-flex justify-content-center align-items-center my-5'>
            <div class='con'>
            {items.map((item)=>
                <li className='d-flex justify-content-between mb-2 p-3 rounded-3'>
                    <input type='checkbox' checked={item.checked} onClick={()=>handleCheck(item.id)}/>
                    <label className='' onDoubleClick={()=>handleCheck(item.id)} style={(item.checked)?{textDecoration:'line-through'}:null}>{item.title}</label>
                    <div>
                    <MdOutlineDelete 
                    role='button' tabIndex='0' onClick={()=>handleDelete(item.id)}
                    aria-label={`Delete ${items.item}`}/>
                    </div>
                </li>
            )}  
            </div> 
        </ul>

    )
}

