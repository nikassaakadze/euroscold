import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { Popconfirm, message, Select, Input} from 'antd';
import {auth, db, storage} from  '../util/firebase'
import NewsCard from './NewsCard'

const { TextArea } = Input;
const { Option } = Select;

function NewsUploader() {

  const [newsText, setNewsText] = useState("")
  const [newsHeadline, setNewsHeadline] = useState("")
  const [url, setUrl] = useState("")
  const [image, setImage]  = useState(0)
  const [progress, setProgress] = useState("")
  const [newsLang, setNewsLang] = useState("Xa4X7v09Els0nqpAC4iO")
  const [news, setNews] = useState([])
  const [imgPrev, setImgPrev] = useState(0)

  const imageUpload = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
      setImgPrev(URL.createObjectURL(e.target.files[0]))
    }
  }

  React.useEffect(() => {
    if(url != ""){
      db.collection('news').doc(newsLang).collection('news').add({
          headline: newsHeadline,
          hero: url,
          newsText: newsText  
        })
    }
  }, [url])

  useEffect(() => {
    db.collection("news").doc(newsLang).collection("news").onSnapshot(snapshot => {
      setNews(snapshot.docs.map(doc => ({
        id: doc.id,
        news: doc.data()
      })))
    })
  },[])

  const uploadNews = () => {
    const uploadTask = storage.ref(`news/${image.name}`).put(image)
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
      .ref("news")
      .child(image.name)
      .getDownloadURL()
      .then(url => {setUrl(url)})
      }
      )
  };
  
  function handleChange(value) {
    setNewsLang(value)
  }

  return (
    <div className="upload__news">
    <div className="upload__news__inner">
      <div className="uploadNews__header">
      <div className="tool__name">
    <h2>სიახლეების დამატება</h2>
  </div>
      </div>
    </div>
    <div className="newsUploader">
      <div className="newsUploader__inner">
      <div className="newsUploader__mainField">
      <div className="mainFIledName">
        <h3>ნიუსის დაწერა</h3>
      </div>
      <div className="newsLang">
      <Select size="large" defaultValue="Xa4X7v09Els0nqpAC4iO" className="langSelect" onChange={handleChange}>
        <Option value="Xa4X7v09Els0nqpAC4iO">ქართულად</Option>
        <Option value="Vu1psYYIuuZGUHwvpuul">ინგლისურად</Option>
        <Option value="bSKJuetK1ctxbeam7HuX">რუსულად</Option>
      </Select>
      </div>
      <div className="news__headline">
        <Input value={newsHeadline} onChange={(e) => setNewsHeadline(e.target.value)} size="large" placeholder="სათაური" className="news__headline__field" />
      </div>
        <TextArea value={newsText} onChange={(e) => setNewsText(e.target.value)}  placeholder="ტექსტი" rows={20} />
        <div className="news__gallery">
        <div className="gallery__headline">
          <h4>სურათების დართვა</h4>
        </div>
          <div className="gallery__inner">
          <label className="choosenewsimage"  htmlFor="imgup">სურათის არჩევა</label>
            <input id="imgup" onChange={imageUpload} type="file" hidden  />
            {imgPrev !== "" ? (<img className="imageUploadRending" src={imgPrev} alt="" />) : (<span>...</span>)}
          </div>
        </div>
      </div>
      <div className="uplaodNews">
      <Button onClick={uploadNews} className="uploadButton" variant="contained" color="primary"> ნიუსის ატვირთვა </Button>
      </div>
      </div>
      <div className="news__loader">
        <div className="news__loader__headline">
          <h3>არსებული სიახლეები</h3>
        </div>
        <div className="news__loader__Grid">
        {
          news && news.map(({news,id}) => (
            <NewsCard headline={news.headline} hero={news.hero} key={id} cardId={id} />
          ))
        }
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsUploader
