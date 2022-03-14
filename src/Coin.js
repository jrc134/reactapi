import React from 'react'
import './Coin.css'


const Coin = ({ name, image, symbol, volume, price, priceChange, marketcap }) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
        <div className='coin'>
        <img src={image} alt="Crypto"/>
       <h1>{ name } </h1>
        <p className='coin-symbol'> { Symbol } </p>
        
            <h3 className='coin-price'>Price</h3> <p>${price}</p>
            <h3 className='coin-volume'>Volume</h3> <p>${ volume.toLocaleString() }</p>
            {priceChange < 0  ? (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)
        }
        <h3 className='coin-marketcap'>MarketCap: </h3>
        <p>
            ${marketcap}
        </p>
        </div>
    </div>
    </div>
  )
}

export default Coin