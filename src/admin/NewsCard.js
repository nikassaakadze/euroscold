import React from 'react'
import {db, storage} from  '../util/firebase'

function NewsCard({headline, hero, cardId}) {
    const deleteNews = () => {
        db.collection("news").doc("Xa4X7v09Els0nqpAC4iO").collection("news").doc(cardId).delete().then(function() {
        }).catch(function(error) {
            console.log("Error removing document: ", error);
        });
      }
    return (
        <div className="news__loader__card">
        <div className="news__loader__card__hero">
          <img src={hero} alt={headline} />
        </div>
        <div className="news__name">
          <h4>{headline}</h4>
        </div>
        <button onClick={deleteNews}>წაშლა</button>
      </div>
    )
}

export default NewsCard
