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
import AllProducts from './feed/AllProducts';
import NewsPage from './news/NewsPage';
import AllNews from './news/AllNews'
import Location from '../map/Location';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
          <MessengerCustomerChat
    pageId="102593761896998"
    appId="1464652937205144"
  />
      <Router>
        <Switch>
        <Route path="/en/home/allproducts">
          <AllProducts />
        </Route>
          <Route path="/en/home/contact">
            <Contact />
          </Route>
          <Route path="/en/home/news/:newsId/:artId">
          <NewsPage />
        </Route>
        <Route path="/en/home/allnews">
          <AllNews />
        </Route>
          <Route path="/en/home/product/:langId/:prodId">
            <ProductPage />
          </Route>
          <Route exact path="/en/home">
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
