import React from 'react'

const ListGroup = () => {
    const items=["NewYork","San Francisco","Tokyo","London"];
  return (
    <ul className='list-group'>
        {items.map((ele,index)=>
                    <li key={index} className='list-group-item'>{ele}</li>

        )}
       
    </ul>
  )
}

export default ListGroup