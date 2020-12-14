import React, {useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'

function Banner() {
    const [Date, setDate] = useState(false)

    return (
        <div className='Banner'>
            <div className='banner_search'>
                <Button className='banner_searchbtn' onClick={()=>setDate(!Date)} variant='outlined'>Search Dates</Button>
                {Date && <Search/>}
            </div>
            <div className='banner_info'>
                <h1>Get out and stretch thine imagination</h1>
                <h5>Plan a staycation; if you don't do it right away, time will pass you by Honey.</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
