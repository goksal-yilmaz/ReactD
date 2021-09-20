import React, { useState } from 'react';
import { BackButton, Foot, Info, LeftArrow, RightArrow, SimilarImage, Tag } from "./constants/icons";
import useWindowDimensions from './useWindowDimensions';
import './App.css';

const imgList = [
  { url: '/images/nature.jpg' },
  { url: '/images/a.jpg' },
  { url: '/images/b.jpg' },
  { url: '/images/c.jpg' },
];

function App() {
  const { width } = useWindowDimensions();
  const [change, setChange] = useState(0);

  const ForwardImage = () => {
    console.log(change + 1 === imgList.length)
    if (change + 1 === imgList.length) {
      setChange(0)
    }
    else {
      setChange(change + 1)
    }
  }

  const BackImage = () => {
    if (change - 1 === -1) {
      setChange(imgList.length - 1)
    }
    else {
      setChange(change - 1)
    }
  }

  return (
    <div className="App">

      {/* File Name Area */}
      <div className="fileNameArea" >
        <BackButton size="56" />
        <h2 className="FileHeader">Dosya İsmi</h2>
      </div>

      {/* Body Area */}
      <div className="bodyArea">
        <div className="Arrow">
          <span onClick={BackImage} className="back" id="btnControl"><LeftArrow size="72" /></span>
        </div>

        <div style={{ width: width * 0.7, overflow: 'hidden' }}>
          <div className="slider" style={{ width: width * 0.7 * imgList.length, marginLeft: -(change * width * 0.7) }}>
            {
              imgList.map((item, index) =>
                <div key={index} style={{ width: width * 0.7 }}>
                  <img src={item.url} alt="" style={{ width: width * 0.7 }} className="image" htmlFor="btnControl" />
                </div>
              )
            }
          </div>
        </div>

        <div className="Arrow">
          <span onClick={ForwardImage} className="next" id="btnControl">
            <RightArrow size="72" />
          </span>
        </div>
      </div>

      {/* Right Menu Selection */}
      <div className="rightMenuSelection">
        <h3>Ayrıntılar</h3>
        <h4>Dosya İsmi.türü</h4>
        <p>Açıklama bulunmamaktadır.</p>
        <p>11.03.2021 11:22</p>
        <p className="text">73.46 KB &nbsp; &nbsp;880x447</p>
        <h4 className="header">Kullanıcı adı tarafından yüklendi.</h4>
        <p className="text1">Bu dosyayı tüm kullanıcılar görebilir.</p>
        <h4>Çözünürlük</h4>
        <p>5184x3456</p>
        <p className="text">1280x720</p>
      </div>

      {/* Closed Menu */}
      <div className="closedMenu">
        <a href="#"> <Info size="56" /> </a>
        <a href="#"> <Tag size="56" />  </a>
        <a href="#"> <Foot size="56" /> </a>
        <a href="#"> <SimilarImage size="56" /> </a>
      </div>
    </div>
  )
}

export default App;
