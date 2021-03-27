import React, {useState, useEffect} from 'react'
import Card from './Card'
import '../../styles/feed.css'
import {Link} from 'react-router-dom'
import {db} from '../../util/firebase'

function Feed() {

  const [product, setProduct] = useState("")
  const langId = "19K9k99o0yzaGsjL9PST"

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
            <h2>Products</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="cards">
        {
          product && product.slice(0,8).map(({product, id}) => (
            <Link onClick={scrollTop} to={`/en/home/product/${langId}/${id}`}>
              <Card hero={product.hero} name={product.name} key={id} />
            </Link>
          ))
        }
        </div>
        <div className="seeAll">
          <Link className="seeFullBtn" to="/en/home/allproducts">
            See all
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Feed
