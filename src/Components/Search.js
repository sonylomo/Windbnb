import React, {useState} from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import {DateRangePicker} from 'react-date-range'

function Search() {
    const [Start, setStart] = useState(new Date())
    const [End, setEnd] = useState(new Date())

    const selectionRange = {
        startDate: Start,
        endDate: End,
        key: 'selection',   
    }

    function handleSelect(ranges) {
        setStart(ranges.selection.startDate)
        setEnd(ranges.selection.endDate)
    }

    return (
        <div className='Search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
    )
}

export default Search
