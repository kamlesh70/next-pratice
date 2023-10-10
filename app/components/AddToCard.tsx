'use client'; // we are directing next that it is a client side component not server side component

import React from 'react'

const AddToCard = () => {
  return (
    <button onClick={()=>console.log("added to the card")}>Add To Card</button>
  )
}

export default AddToCard;