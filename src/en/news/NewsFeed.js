import React, {useState} from 'react'
import '../../styles/news.css'
import NewsCard from './NewsCard'
import {db} from '../../util/firebase'
import { Link } from 'react-router-dom'

function NewsFeed() {

  const [news, setNews] = useState([])

  const newsId = "Vu1psYYIuuZGUHwvpuul"

  React.useEffect(() => {
    db.collection("news").doc(newsId).collection("news").onSnapshot(snapshot => {
      setNews(snapshot.docs.map(doc => ({
        id: doc.id,
        news: doc.data()
      })))
    })
  },[])

  return (
    <div className="news__feed">
      <div className="news__feed__inner">
      <div className="feed__headline">
          <div className="feed__name">
          <div className="line"></div>
          <h2>News</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="news__cards">
          {
            news && news.map(({news, id}) => (
              <Link to={`/en/home/news/${newsId}/${id}`}>
                <NewsCard headline={news.headline} hero={news.hero} key={id} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
