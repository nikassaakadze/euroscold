import React from 'react'

function Card({hero ,name}) {
    return (
        <div className="card">
        <div className="card__hero">
          <img src={hero} alt={name} />
            <div className="seeprod">
                <span>ნახვა</span>
            </div>
        </div>
        <div className="card__footer">
            <div className="product__name">
                <h4>{name}</h4>
            </div>
        </div>
      </div>
    )
}

export default Card
