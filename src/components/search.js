import React from 'react';

export const SearchItems = ({search,setSearch})=>{
    return(
        <form class='mt-5 d-flex justify-content-center formm w-100'>
            <input 
            type='text'
            autoFocus
            placeholder='Search'
            aria-label='searchrole'
            class='form-control h-25'
            value={search}
            onChange = {(e)=>setSearch(e.target.value)}
            />
        </form>
    )
}