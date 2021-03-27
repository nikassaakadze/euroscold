import React, {useState, useEffect} from 'react'
import {db} from '../../util/firebase'
import {useParams} from 'react-router-dom'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'

function NewsPage() {

  const [article, setArticle] = useState([])
  const {newsId} = useParams()
  const {artId} = useParams()

  useEffect(() => {
    db.collection("news").doc(newsId).collection("news").onSnapshot(snapshot => {
      setArticle(snapshot.docs.map(doc => ({
        id: doc.id,
        article: doc.data()
      })))
    })
  },[])


  return (
    <div className="news__page__wrapper">
    <Topbar />
    <Header />
      <div className="news__page__inner">
      {
        article && article.map(({article, id}) => {
          if(id === artId){
            return(
              <div className="news__article">
          <div className="Article__headline">
            <h1>{article.headline}</h1>
          </div>
          <div className="article__hero">
            <img src={article.hero} alt="" />
          </div>
          <div className="Article__body">
            <p>{article.newsText}</p>
          </div>
        </div>
            )
          }
        }
        )
      }
      </div>
      <Footer />
    </div>
  )
}

export default NewsPage
