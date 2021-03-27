import React, {useState, useEffect} from 'react'
import Card from './Card'
import '../../styles/feed.css'
import {Link} from 'react-router-dom'
import {db} from '../../util/firebase'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'

function AllProducts() {

  const [product, setProduct] = useState("")
  const langId = "Y4NkkstrdiMuOadb1wnT"

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
    <React.Fragment>
    <div style={{paddingTop: 0}} className="feed">
    <Topbar />
    <Header />
      <div className="feed__inner allProd">
        <div className="feed__headline">
          <div className="feed__name">
          <div className="line"></div>
            <h2>სრული პროდუქცია</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="cards">
        {
          product && product.map(({product, id}) => (
            <Link onClick={scrollTop} to={`/product/${langId}/${id}`}>
              <Card hero={product.hero} name={product.name} key={id} />
            </Link>
          ))
        }
        </div>
      </div>
    </div>
    <Footer />
    </React.Fragment>
  )
}

export default AllProducts

