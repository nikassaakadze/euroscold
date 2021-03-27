import React from 'react'

function NewsCard({headline, hero}) {
  
  return (
    <div className="news__card">
    <div className="news__card__hero">
      <img src={hero} alt="" />
    </div>
    <div className="news__card__footer">
      <div className="news__name">
        <h4>{headline}</h4>
      </div>
    </div>
  </div>
  )
}

export default NewsCard
