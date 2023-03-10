'use client';

import React from 'react'
import { useState } from 'react';



function SearchBar() {
    const [searchWord, setSearchWord] = useState('')

  return (
    <>
        <input value={searchWord} onChange={e => setSearchWord(e.target.value)} 
            type="text" 
            placeholder="Search for products..." 
            className="bg-gray-100 w-full py-2 px-4 rounded-xl" />
    </>
  )
}

export default SearchBar