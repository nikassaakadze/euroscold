import React, {useState, useEffect} from 'react'
import Card from './Card'
import '../../styles/feed.css'
import {Link} from 'react-router-dom'
import {db} from '../../util/firebase'

function Feed() {

  const [product, setProduct] = useState("")
  const langId = "NoG9AkonsK17BY8iZmfW"

  useEffect(() => {
    db.collection("products").doc(langId).collection("products").onSnapshot(snapshot => {
      setProduct(snapshot.docs.map(doc => ({
        id: doc.id,
        product: doc.data()
      })))
    })
  }, [])

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
  return (
    <div style={{paddingTop: "50px"}} className="feed">
      <div className="feed__inner">
        <div className="feed__headline">
          <div className="feed__name">
          <div className="line"></div>
            <h2>товары</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="cards">
        {
          product && product.slice(0,8).map(({product, id}) => (
            <Link onClick={scrollTop} to={`/rus/home/product/${langId}/${id}`}>
              <Card hero={product.hero} name={product.name} key={id} />
            </Link>
          ))
        }
        </div>
        <div className="seeAll">
          <Link className="seeFullBtn" to="/rus/home/allproducts">
          увидеть все
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Feed
