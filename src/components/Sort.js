import React from 'react'

const Sort = (props)=> {
    // const {sort}=props
    return (
        <div className="sort">
                    <span>Sort by</span>
                    <select>
                      <option default>Default</option>
                      <option value="0">Price ▲</option>
                      <option value="1">Price ▼</option>
                      <option value="2">Rating ▼</option>
                    </select>
                  </div>
    )
}

export default Sort
