import React from 'react'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import '../../styles/productPage.css'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import Footer from '../footer/Footer';
import Card from './Card'
import { useParams } from 'react-router-dom';
import {db} from '../../util/firebase'


function ProductPage() {
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  const {langId} = useParams()
  const {prodId} = useParams()

  const [product, setProduct] = React.useState([])
  React.useEffect(() => {
    db.collection("products").doc(langId).collection("products").onSnapshot(snapshot => {
      setProduct(snapshot.docs.map(doc => ({
        id: doc.id,
        product: doc.data()
      })))
    })
  },[])

  const images = [];
  return (
    <div className="product__page__wrapper">
      <Topbar />
      <Header />
      <div className="product__breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          მთავარი
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          პროდუქცია
        </Link>
      </Breadcrumbs>
      </div>
      <div className="product__page__inner">
      <div className="product__slider">
        <ImageGallery items={images} />
      </div>
      </div>
      {
        product && product.map(({product, id}) => {
          if(id === prodId){
            images.push({original: product.hero, thumbnail: product.hero},{original: product.structure, thumbnail: product.structure})
            return(
              <div className="product__specifications">
                <div className="specifications__list">
                  <ul>
                    {
                      product.name !== "" ? (
                        <li>
                        <span className="specName">სახელი</span>
                        <span className="specValue">{product.name}</span>
                      </li>
                      ):("")
                    }
                    {
                      product.type !== " " ? (
                        <li>
                        <span className="specName">მაცივრის ტიპი</span>
                        <span className="specValue">{product.type}</span>
                      </li>
                      ):(
                        ""
                      )
                    }
                    {
                      product.prodVolume !== "" ? (<li>
                        <span className="specName">მაცივრის მოცულობა</span>
                        <span className="specValue">{product.prodVolume} მ<sup>3</sup></span>
                      </li>):("")
                    }
                    {
                      product.prodareal !== ""?(
                        <li>
                      <span className="specName">პროდუქტის ხილვადობის არეალი </span>
                      <span className="specValue">{product.prodareal} მ<sup>2</sup></span>
                    </li>
                      ):("")
                    }
                    {
                        product.tempdiapason !== "" ? (                    <li>
                          <span className="specName">ტემპერატურის დიაპაზონი</span>
                          <span className="specValue">{product.tempdiapason}</span>
                        </li>):("")
                      }
                    {
                      product.voltagenomin !== "" ? (
                        <li>
                        <span className="specName">ნიმინალური ძაბვა</span>
                        <span className="specValue">{product.voltagenomin}</span>
                      </li>
                      ):("")
                    }  
                      {
                          product.freon !== "" ? (                   
                             <li>
                            <span className="specName">ფრეონის დაშვება</span>
                            <span className="specValue warning">{product.freon}</span>
                          </li>):("")
                        }  
                    {
                      product.cooling !== "" ? (                    <li>
                        <span className="specName">გაგრილება</span>
                        <span className="specValue">{product.cooling}</span>
                      </li>):("")
                    }  
                  
                    {
    product.shreder !== "" ? (                    <li>
      <span className="specName">ფრეონის შემავსებელი სარქველი "შრედერი"</span>
      <span className="specValue">{product.shreder}</span>
    </li>):("")
  }  

{
    product.trv !== "" ? (                    <li>
      <span className="specName">თერმოსტატული სარქველი</span>
      <span className="specValue">{product.trv}</span>
    </li>):("")
  }  
  {
    product.elBlok !== "" ? (                    <li>
      <span className="specName">ელექტრონული მართვის ბლოკი</span>
      <span className="specValue">{product.elBlok}</span>
    </li>):("")
  }  
    {
      product.led !== "" ? (
        <li>
      <span className="specName">LED განათება</span>
      <span className="specValue">{product.led}</span>
    </li>
      ):("")
    }

{
    product.drenage !== "" ? (                    <li>
      <span className="specName">დრენაჟის აღჭურვილობა</span>
      <span className="specValue">{product.drenage}</span>
    </li>):("")
  }  
  {
    product.length !== "" ? (                    <li>
      <span className="specName">სიგრძე</span>
      <span className="specValue">{product.length}</span>
    </li>):("")
  }  
  
  {
    product.width !== "" ? (                    <li>
      <span className="specName">სიგანე</span>
      <span className="specValue">{product.width}</span>
    </li>):("")
  }  
  {
    product.height !== "" ? (                    <li>
      <span className="specName">სიამაღლე</span>
      <span className="specValue">{product.height}</span>
    </li>):("")
  }  
  {
    product.deep !== "" ? (
      <li>
      <span className="specName">სიღრმე</span>
      <span className="specValue">{product.deep}</span>
    </li>
    ):("")
  }  

{
    product.decibel !== "" ? (                    <li>
      <span className="specName">ხმაურის დონე</span>
      <span className="specValue">{product.decibel}</span>
    </li>):("")
  }  
  {
    product.agregat !== "" ? (                    <li>
      <span className="specValue aloneval">{product.agregat}</span>
    </li>):("")
  }  
{
    product.universal !== "" ? (                    <li>
      <span className="specValue aloneval">უნივერსალური {product.universal}</span>
    </li>):("")
  }  
  {
    product.condit !== "" ? (                    <li>
      <span className="specValue aloneval">საკონდიტრო: {product.condit}</span>
    </li>):("")
  }  
  {
    product.fish !== "" ? (                    <li>
      <span className="specValue aloneval">თევზისთვის: {product.fish}</span>
    </li>):("")
  }  
  {
    product.move !== "" ? (                    <li>
      <span className="specValue aloneval">{product.move}</span>
    </li>):("")
  }  
  {
    product.bumper !== "" ? (                    <li>
      <span className="specValue aloneval">{product.bumper}</span>
    </li>):("")
  }  
  {
    product.body !== "" ? (
      <li>
      <span className="specValue aloneval">{product.body}</span>
    </li>
    ):("")
  }  
  {
    product.reonvalue !== "" ? (
      <li>
        <span className="specValue aloneval">{product.reonvalue}</span>
      </li>):("")
  }  

{
    product.evels !== "" ? (

      <li>
        <span className="specValue aloneval">თაროების {product.evels} რიგი</span>
      </li>):("")
  }  
  {
    product.levelsligh !== "" ? (

      <li>
        <span className="specValue aloneval">{product.levelsligh}</span>
      </li>):("")
  }  
  {
    product.inbody !== "" ? (                 <li>
      <span className="specValue aloneval">{product.inbody}</span>
    </li>):("")
  }  
  {
    product.add !== "" ? (                    <li>
      <span className="specValue aloneval">{product.add}</span>
    </li>):("")
  }  
  {
    product.front !== "" ? (                    <li>
      <span className="specValue aloneval">{product.front}</span>
    </li>):("")
  }  

  {
    product.slice !== "" ? (                    <li>
      <span className="specValue aloneval">{product.slice}</span>
    </li>):("")
  }  
  {
    product.cardslice !== "" ? (                    <li>
      <span className="specValue aloneval">{product.cardslice}</span>
    </li>):("")
  }  

  {
    product.lowtemp !== "" ? (                    <li>
      <span className="specValue aloneval">დაბალ ტემპერატურული: {product.lowtemp}</span>
    </li>):("")
  }  
  {
    product.ten !== "" ? (
      <li>
        <span className="specValue aloneval">{product.ten}</span>
      </li>):("")
  }  
  {
    product.lefrig !== "" ? (                    <li>
      <span className="specValue aloneval">{product.lefrig}</span>
    </li>):("")
  }  
  {
    product.ecocooler !== "" ? (                    <li>
      <span className="specValue aloneval">{product.ecocooler}</span>
    </li>):("")
  }  
  {
    product.doors !== "" ? (                    <li>
      <span className="specValue aloneval">{product.doors}</span>
    </li>):("")
  }  
  {
    product.roof !== "" ? (                    <li>
      <span className="specValue aloneval">{product.roof}</span>
    </li>):("")
  }  
                  </ul>
                </div>
              </div>
            )
          }
        })
      }
      <div className="feed related">
      <div className="feed__inner">
        <div className="feed__headline">
          <div className="feed__name">
          <div className="line"></div>
            <h2>შემოთავაზებული პროდუქცია</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="cards">
        {
          product && product.map(({product, id}) => (
            <Link onClick={scrollTop} to={`/product/${langId}/${id}`}>
              <Card name={product.name} hero={product.hero} />
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

export default ProductPage
