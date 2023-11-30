import React from 'react';
import '../assets/css/main.css';

export const AddItems = ({newItem,handleSubmit,setNewItem})=>{
    return(
        <>
            <div class='container w-100 d-flex justify-content-center '>
                <form class='d-flex gap-5 mt-5 form-control1' onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    autoFocus
                    id='addItem'
                    placeholder='Add item'
                    class='form-control w-50 h-75 mt-1 '
                    value ={newItem}
                    onChange = {(e)=>setNewItem(e.target.value)}
                    /><br></br>
                    <button
                    type='submit' 
                    class='btn btn-primary'
                    aria-label='add-item'
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </>
    )
}