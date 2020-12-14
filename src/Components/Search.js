import React, {useState} from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import {DateRangePicker} from 'react-date-range'
import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'

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
            <h2>
                Number of Guests
                <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type='number' />
            <Button>Search Airbnb</Button>
        </div>
    )
}

export default Search
