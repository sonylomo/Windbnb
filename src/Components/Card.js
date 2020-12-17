import React from 'react'
import './Card.css'

function Card({src, title, description, price}) {
    return (
        <div className='Card col-sm'>
            <img src={src} alt={title} />
            <div className='card_info'>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Card
