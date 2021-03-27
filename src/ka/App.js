import './App.css';
import Feed from './feed/Feed';
import Footer from './footer/Footer';
import Header from './header/Header';
import NewsFeed from './news/NewsFeed';
import Partners from './parners/Partners';
import Slider from './Slider.js/Slider';
import Topbar from './topbar/Topbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductPage from './feed/ProductPage';
import Contact from './contact/Contact';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import NewsPage from './news/NewsPage';
import AllProducts from './feed/AllProducts';
import Location from '../map/Location';
import AllNews from './news/AllNews'

function App() {
  return (
    <div className="App">
      <MessengerCustomerChat
    pageId="102593761896998"
    appId="1464652937205144"
  />
      <Router>
        <Switch>
        <Route path="/allproducts">
          <AllProducts />
        </Route>
        <Route path="/news/:newsId/:artId">
          <NewsPage />
        </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/product/:langId/:prodId">
            <ProductPage />
          </Route>
          <Route path="/allnews">
            <AllNews />
          </Route>
          <Route path="/">
          <Topbar />
          <Header />
          <Slider />
          <Feed />
          <NewsFeed />
          <Partners />
            <Location />
          <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
