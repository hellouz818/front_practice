import './App.css';
import Plant from './images/plantIcon.png';

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="mainContentsWrapper">
          <div className="mainHeader">
            <div className='logo'>LO</div>
            <div className="headerNavigator">
              <div className="headerButton">ABOUT</div>
              <div className="headerButton">ARTICLE</div>
              <div className="headerButtonLine">SUBSCRIBE</div>
            </div>
          </div>
          <div className="mainTitleWrapper">
            <p className="mainTitle">LOMBOK</p>
            <p className="subTitle">HOLISTIC HEALTH</p>
            <hr className="smallLine" />
          </div>
          <div className="imageWrapper">
            <img src={Plant} className="plantIcon1" alt="logo" />
            <img src={Plant} className="plantIcon2" alt="logo" />
          </div>
        </div>
          
      </div>
      <div className="mainContainer"></div>
    </>
  );
}

export default App;
