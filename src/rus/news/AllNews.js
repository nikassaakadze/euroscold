import React, {useState, useEffect} from 'react'
import {db} from '../../util/firebase'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'
import {Link} from 'react-router-dom'
import NewsCard from './NewsCard'

function NewsPage() {

  const [news, setNews] = useState([])
  const newsId = "bSKJuetK1ctxbeam7HuX"

  React.useEffect(() => {
    db.collection("news").doc(newsId).collection("news").onSnapshot(snapshot => {
      setNews(snapshot.docs.map(doc => ({
        id: doc.id,
        news: doc.data()
      })))
    })
  },[])


  return (
    <div className="news__page__wrapper">
    <Topbar />
    <Header />
    <div className="news__feed">
      <div className="news__feed__inner">
      <div className="feed__headline">
          <div className="feed__name">
          <div className="line"></div>
          <h2>Новости</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="news__cards">
          {
            news && news.map(({news, id}) => (
              <Link to={`/rus/home/news/${newsId}/${id}`}>
                <NewsCard headline={news.headline} hero={news.hero} key={id} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default NewsPage
