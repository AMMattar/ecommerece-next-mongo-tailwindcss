import React from 'react'

async function getAllProducts() {

    const res = await fetch('http://localhost:3000/api/products')

    if(!res.ok) throw new Error('faild to fetch data')
  return res.json()
}

export default getAllProducts