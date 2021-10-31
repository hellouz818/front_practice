import { Route } from 'react-router'
import Header from './item/Header'
import MainPage from './main/MainPage'
import ArticlePage from './articles/ArticlePage';
import Footer from './main/Footer';

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/articleDetail/:articleId" component={ArticlePage} />
      <Footer />
    </>
  );
}

export default App;
