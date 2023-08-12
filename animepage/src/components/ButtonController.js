import React from 'react'

export const ButtonController = ({Page,setPage}) => {
  return (
    <div style={{display:'flex',gap:'1rem'}}>
        <button className='buttonPage' onClick={()=>setPage(Page-1)}>Previous Page</button>
        <button className='buttonPage' onClick={()=>setPage(Page + 1)}>Next Page</button>
    </div>
  )
}


