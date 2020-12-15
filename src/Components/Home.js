import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='Home'>
            <Banner />

            <div className='home_section'>

                <Card src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
                title='Stylist apartment in center of the city'
                description='Entire apartment. Helsinki, Finland'
                price='$4.00'/>

                <Card src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                title='Nice apartment in center of Turku'
                description='Entire apartment. Turku, Finland'
                price='$4.00'/>
                
                <Card src= "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                title='Arty interior in 1900 wooden house'
                description='Entire house. Helsinki, finland'
                price='$4.00'/>
            </div>
            <div className='home_section'>
            <Card src= "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                title='Brand new studio apartment near the harbour'
                description='Entire house. Vaasa, finland'
                price='$4.00'/>
                
                <Card src= "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
                title='Villa Aurora guest-house'
                description='Entire house. Turku, Finland'
                price='$4.00'/>

                <Card src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                title='A cosy family house'
                description='Entire house.Vaasa, Finland'
                price='$4.00'/>
            </div>
        </div>
    )
}

export default Home
