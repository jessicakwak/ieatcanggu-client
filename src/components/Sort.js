import React from 'react'

const Sort = (props)=> {
    const {sort}=props
    return (
        <div className="sort">
                    <span>Sort by</span>
                    <select onChange={sort}>
                      <option default>Select</option>
                      <option value="0">Price ▲</option>
                      <option value="1">Price ▼</option>
                      <option value="2">Rating ▼</option>
                      <option value="3">Name A-Z</option>
                      <option value="4">Name Z-A</option>
                    </select>
                  </div>
    )
}

export default Sort
