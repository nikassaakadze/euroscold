import React, {useState} from 'react'
import './admin.css'
import 'antd/dist/antd.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Popconfirm, message, Select, Input} from 'antd';
import {auth, db, storage} from  '../util/firebase'
import ProductCard from './ProductCard'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {Link} from 'react-router-dom'
import NewsUploader from './NewsUploader';
const { Option } = Select;

function AdminPannel() {

  //popconfirm
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  // ---------------------------------------------------------

  const [image, setImage]  = useState(0)
  const [imgPrev, setImgPrev] = useState(null)
  const [url, setUrl] = useState("")
  const [progress, setProgress] = useState("")
  const [products, setProducts] = useState([])
  const [prodUploadLang, setProdUploadLang] = useState("Y4NkkstrdiMuOadb1wnT")
  const [productLoadByLang, setProductLoadByLang]  = useState("Y4NkkstrdiMuOadb1wnT")

  const [name, setName] = useState("")
  const [temp, setTemp] = useState("")
  const [tempdiapason, setTempdiapason] = useState("")
  const [type, setType] = useState("")
  const [voltagenomin, setVoltagenomin] = useState("")
  const [freon, setFreon] = useState("")
  const [cooling, setCooling] = useState("")
  const [condensat, setCondensat] = useState("")
  const [shreder, setShreder] = useState("")
  const [trv, setTrv] = useState("")
  const [elBlok, setElblok] = useState("")
  const [led, setLed] = useState("")
  const [drenage, setDrenage] = useState("")

  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [length, setLength] = useState("")
  const [weight, setWeight] = useState("")
  const [decibel, setDecibel] = useState("")

  const [prodareal, setProdAreal] = useState("")
  const [prodVolume, setProdVolume] = useState("")
  const [elconsump, setelconsump] = useState("")
  const [consumpindefrost, setconsumpindefrost] = useState("")
  const [voltage, setVoltage] = useState("")

  const [agregat, setagregat] = useState("")
  const [universal, setUniversal] = useState("")
  const [condit, setcondit] = useState("")
  const [fish, setfish] = useState("")
  const [lowtemp, setlowtemp] = useState("")
  const [move, setmove] = useState("")
  const [bumper, setbumper] = useState("")
  const [body, setbody] = useState("")
  const [panels, setpanels] = useState("")
  const [reonvalue, setreonvalue] = useState("")
  const [inbody, setinbody] = useState("")
  const [add, setadd] = useState("")
  const [front, setfront] = useState("")
  const [slice, setslice] = useState("")
  const [cardslice, setcardslice] = useState("")
  const [ten, setten] = useState("")
  const [evels, setEvels] = useState("")

  const [deep, setDeep] = useState("")

  const imageVisualize = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
    setImgPrev(URL.createObjectURL(e.target.files[0]))
  }

  function handleChange(value) {
    setProdUploadLang(value)
  }
const handloLoadProd = (value) =>{
  setProductLoadByLang(value)
}
React.useEffect(() => {
  db.collection("products").doc(productLoadByLang).collection("products").onSnapshot(snapshot => {
    setProducts(snapshot.docs.map(doc => ({
      id: doc.id,
      products: doc.data()
    })))
  })
}, [productLoadByLang])

const success = () => {
  message.success('ინფორმაცია წარმატებით აიტვირთა');
};

  React.useEffect(() => {
    if(url != ""){
      db.collection('products').doc(prodUploadLang).collection('products').add({
          name: name,
          hero: url,
          temp:temp,
          tempdiapason:tempdiapason,
          type:type,
          voltagenomin:voltagenomin,
          freon:freon,
          cooling:cooling,
          condensat:condensat,
          shreder:shreder,
          trv:trv,
          elBlok:elBlok,
          led:led,
          drenage:drenage,
          width:width,
          height:height,
          length:length,
          weight:weight,
          decibel:decibel,
          prodareal: prodareal,
          prodVolume: prodVolume,
          elconsump: elconsump,
          consumpindefrost: consumpindefrost,
          voltage: voltage,
          agregat: agregat,
          universal: universal,
          condit: condit,
          fish:fish,
          lowtemp: lowtemp,
          move: move,
          bumper:bumper,
          body: body,
          panels:panels,
          reonvalue:reonvalue,
          inbody: inbody,
          add: add,
          front: front,
          slice: slice,
          cardslice: cardslice,
          ten: ten,
          evels: evels,
          deep: deep
        })
        success()
    }
  }, [url])

  const handleOk = () => {
    const uploadTask = storage.ref(`products/ka/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytestTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      error => {
        alert(error)
      },() => {
      storage
      .ref("products/ka")
      .child(image.name)
      .getDownloadURL()
      .then(url => {setUrl(url)})
      }
      )
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <div className="admin__wrapper">
    <div className="pannelHeader">
    <div className="pannelLogout">
    <a href="" onClick={() => auth.signOut()} >გასვლა</a>
    <ExitToAppIcon className="logoutIcon" />
    </div>
    <div className="backHome">
      <Link className="pannelLogout" to="/">
        <span>მთავარი გვერდი</span>
        <HomeRoundedIcon />
      </Link>
    </div>
    </div>
      <div className="admin__inner">
        <div className="admin__header">
          
        </div>
        <div className="admin__tools">
          <div className="add__products">
          <div className="tool__name">
            <h2>პროდუქციის დამატება</h2>
          </div>
            <div className="add__products__inner">
              <div className="product__uploader">
              <div className="langSelect__attention">
              <h3>ინფორმაციის ატვირთვა !</h3>
              <Select size="large" defaultValue="Y4NkkstrdiMuOadb1wnT" className="langSelect" onChange={handleChange}>
                <Option value="Y4NkkstrdiMuOadb1wnT">ქართულად</Option>
                <Option value="19K9k99o0yzaGsjL9PST">ინგლისურად</Option>
                <Option value="NoG9AkonsK17BY8iZmfW">რუსულად</Option>
              </Select>
              </div>
              <div className="imageChoose">
                <label className="imguploadinput" htmlFor="imageUpload" >სურათის არჩევა</label>
                <input id="imageUpload" onChange={imageVisualize} type="file" hidden />
              </div>
                <div className="product__hero">
                  {
                    imgPrev !== "" ? (<img className="imageUploadRending" src={imgPrev} alt="" />) : (<span>...</span>)
                  }
                </div>
                {/* options */}
                <div className="product__info__fields">
                  <TextField value={name} onChange={(e) => setName(e.target.value)} className="field" id="" label="სახელი" variant="outlined" />
                  <TextField value={temp} onChange={(e) => setTemp(e.target.value)} className="field" id="" label="გარემო ტემპერატურა" variant="outlined" />
                  <TextField value={tempdiapason} onChange={(e) => setTempdiapason(e.target.value)} className="field" id="" label="ტემპერატურის დიაპაზონი" variant="outlined" />
                  <TextField value={type} onChange={(e) => setType(e.target.value)} className="field" id="" label="მაცივრის ტიპი" variant="outlined" />
                  <TextField value={prodareal} onChange={(e) => setProdAreal(e.target.value)} className="field" id="" label="პროდუქტის ხილვადობის არეალი" variant="outlined" />
                  <TextField value={prodVolume} onChange={(e) => setProdVolume(e.target.value)} className="field" id="" label="მოცულობა მ/კუბში" variant="outlined" />
                  <TextField value={elconsump} onChange={(e) => setelconsump(e.target.value)} className="field" id="" label="დენის მოხმარება დღეში (კილოვატი საათში)" variant="outlined" />
                  <TextField value={consumpindefrost} onChange={(e) => setconsumpindefrost(e.target.value)} className="field" id="" label="დენის მოხმარება ჩამოლღობის დროს (კილოვატი საათში)" variant="outlined" />
                  <TextField value={voltagenomin} onChange={(e) => setVoltagenomin(e.target.value)} className="field" id="" label="ნომინალური ძაბვა" variant="outlined" />
                  <TextField value={voltage} onChange={(e) => setVoltage(e.target.value)} className="field" id="" label="ვოლტაჟი" variant="outlined" />
                  <TextField value={freon} onChange={(e) => setFreon(e.target.value)} className="field" id="" label="ფრეონის დაშვება" variant="outlined" />
                  <TextField value={cooling} onChange={(e) => setCooling(e.target.value)} className="field" id="" label="გაგრილება" variant="outlined" />
                  <TextField value={condensat} onChange={(e) => setCondensat(e.target.value)} className="field" id="" label="გალღობა" variant="outlined" />
                  <TextField value={shreder} onChange={(e) => setShreder(e.target.value)} className="field" id="" label="ფრეონის შემავსებელი სარქველი" variant="outlined" />
                  <TextField value={trv} onChange={(e) => setTrv(e.target.value)} className="field" id="" label="თერმოსტატული საქველი (ტრვ)" variant="outlined" />
                  <TextField value={elBlok} onChange={(e) => setElblok(e.target.value)} className="field" id="" label="ელექტრონული მართვის ბლოკი" variant="outlined" />
                  <TextField value={led} onChange={(e) => setLed(e.target.value)} className="field" id="" label="LED განათება" variant="outlined" />
                  <TextField value={drenage} onChange={(e) => setDrenage(e.target.value)} className="field" id="" label="დრენაჟის აღჭურვილობა" variant="outlined" />
                  <TextField value={width} onChange={(e) => setWidth(e.target.value)} className="field" id="" label="სიგანე" variant="outlined" />
                  <TextField value={height} onChange={(e) => setHeight(e.target.value)} className="field" id="" label="სიმაღლე" variant="outlined" />
                  <TextField value={length} onChange={(e) => setLength(e.target.value)} className="field" id="" label="სიგრძე" variant="outlined" />
                  <TextField value={weight} onChange={(e) => setWeight(e.target.value)} className="field" id="" label="წონა" variant="outlined" />
                  <TextField value={decibel} onChange={(e) => setDecibel(e.target.value)} className="field" id="" label="ხმაურის დონე" variant="outlined" />

                  <TextField value={agregat} onChange={(e) => setagregat(e.target.value)} className="field" id="" label="აგრეგატი (გარე / შიდა)" variant="outlined" />
                  <TextField value={universal} onChange={(e) => setUniversal(e.target.value)} className="field" id="" label="უნივერსალური (ოფცია)" variant="outlined" />
                  <TextField value={condit} onChange={(e) => setcondit(e.target.value)} className="field" id="" label="საკონდიტრო (ოფცია)" variant="outlined" />
                  <TextField value={fish} onChange={(e) => setfish(e.target.value)} className="field" id="" label="თევზისთვის (ოფცია)" variant="outlined" />
                  <TextField value={lowtemp} onChange={(e) => setlowtemp(e.target.value)} className="field" id="" label="დაბალ ტემპერატურული (ოფცია)" variant="outlined" />
                  <TextField value={move} onChange={(e) => setmove(e.target.value)} className="field" id="" label="გადაადგილების საშუალება (მაგ. გორგოლაჭები)" variant="outlined" />
                  <TextField value={bumper} onChange={(e) => setbumper(e.target.value)} className="field" id="" label="წინა ფასადის ფერები" variant="outlined" />
                  <TextField value={body} onChange={(e) => setbody(e.target.value)} className="field" id="" label="მაცივრის შიდა მასალა (მაგ. უჟანგავი ფოლადი)" variant="outlined" />
                  <TextField value={panels} onChange={(e) => setpanels(e.target.value)} className="field" id="" label="წინა შუშა (მოძრავი / უძრავი / მოხსნის შესაძლებლობა)" variant="outlined" />
                  <TextField value={reonvalue} onChange={(e) => setreonvalue(e.target.value)} className="field" id="" label="ფრეონის ტევადობა" variant="outlined" />
                  <TextField value={inbody} onChange={(e) => setinbody(e.target.value)} className="field" id="" label="სათავსოები (კამერა)" variant="outlined" />
                  <TextField value={add} onChange={(e) => setadd(e.target.value)} className="field" id="" label="0-" variant="outlined" />
                  <TextField value={front} onChange={(e) => setfront(e.target.value)} className="field" id="" label="ფარდა ჟალუზი" variant="outlined" />
                  <TextField value={slice} onChange={(e) => setslice(e.target.value)} className="field" id="" label="0-" variant="outlined" />
                  <TextField value={cardslice} onChange={(e) => setcardslice(e.target.value)} className="field" id="" label="საჭრელი დაბა (აღჭურვილია / არ გააჩნია)" variant="outlined" />
                  <TextField value={ten} onChange={(e) => setten(e.target.value)} className="field" id="" label="ტენიანობა (%)" variant="outlined" />
                  <TextField value={evels} onChange={(e) => setEvels(e.target.value)} className="field" id="" label="თაროების რიგი (რიგების რაოდენობა)" variant="outlined" />
                  <TextField value={deep} onChange={(e) => setDeep(e.target.value)} className="field" id="" label="სიღრმე" variant="outlined" />
                  {/* preventspam */}
                  <Popconfirm
                    title="ნამდვილად გსურთ ატვირთვა ?"
                    visible={visible}
                    onConfirm={handleOk}
                    okButtonProps={{ loading: confirmLoading }}
                    onCancel={handleCancel}
                  >
                  <Button onClick={showPopconfirm} className="uploadButton" variant="contained" color="primary"> ატვირთვა </Button>
                  </Popconfirm>
                </div>
              </div>
              <div className="product__loader">
                <div className="product__loader__inner">
                  <div className="product__loader__lang">
                  <div className="langSelect__attention">
                    <h3>არსებული პროდუქცია !</h3>
                    <Select size="large" defaultValue="Y4NkkstrdiMuOadb1wnT" className="langSelect" onChange={handloLoadProd}>
                      <Option value="Y4NkkstrdiMuOadb1wnT">ქართულად</Option>
                      <Option value="19K9k99o0yzaGsjL9PST">ინგლისურად</Option>
                      <Option value="NoG9AkonsK17BY8iZmfW">რუსულად</Option>
                    </Select>
                    </div>
                  </div>
                  <div className="cards__wrapper">
                  <div className="product__loader__cards">
                    {
                      products.length !== 0 ? (
                        products?.map(({products, id}) => (
                        <ProductCard name={products.name} hero={products.hero} key={id} prodId={id} collId={productLoadByLang} />
                      ))
                      ):(<h1 className="infoEmpty">პროდუქცია არ არის</h1>)
                    }
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsUploader />
        </div>
      </div>
    </div>
  )
}

export default AdminPannel
