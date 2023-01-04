import React from 'react'

const DropDown = ({items, toggleSection}) => {
    return (
        <div className="ml-5">
            <select name="" id="" className="px-2 md:px-5 py-1 rounded-lg cursor-pointer bg-primary-300 text-white">
                {
                    items.map((item, index)=>{
                        return <option onClick={e => toggleSection(e)} value={item} key={`${item}-${index}`}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropDown
