import React, {useState} from 'react';
import './App.css';
import { BackButton, Foot, Info, LeftArrow, RightArrow, SimilarImage, Tag } from "./constants/icons";



function App (){
  const img0 = '/images/nature.jpg';
  const img1 = '/images/a.jpg';
  const img2 = '/images/b.jpg';
  const img3 = '/images/c.jpg';
  
  var ForwardImage;
  var BackImage;

  const imgList = [img0, img1, img2, img3]
  const [change, setChange] = useState(0);
  
  ForwardImage = () =>{
    
    if(change + 1 === imgList.length){
        setChange(change - imgList.length - 1)  
       
      }
      else{
        setChange(change + 1)  
      }
      
      
  }
  BackImage = () => {
    if(change - 1 === -1){
      setChange(imgList.length - 1) 
    }
    else{
      setChange(change - 1)
    }
  }

  

  
  
  
  
  return (
    <div className="App">
      
      {/* File Name Area */}
      
      <div className="fileNameArea" >
        <BackButton size ="56"/>
        <h2 className="FileHeader">Dosya İsmi</h2>
      </div>
      
      
      {/* Body Area */}
      
      <div className="bodyArea">

          <div className="Arrow"> 
          
          <span  onClick={BackImage} className="back" id="btnControl"><LeftArrow size ="72"/></span>
          
          </div>
          
          <div style={{width: (70*imgList.length) + "%", flexDirection : "row"}}>
            <div style = {{marginLeft: (change*  100 / imgList.length) + "%" }}>

            </div>
            {
              imgList.map((item, index)=> 
              <img src={item}  alt="" style = {{width: (100 / imgList.length) + "%" }} className="image" for="btnControl"></img>
              )
            }
                      
          </div>
          <div className="Arrow"> 
          <span onClick={ForwardImage} className="next" id="btnControl">
            <RightArrow size="72"/>
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
      
        <a href="#"> <Info size = "56" /> </a>
        
       
          <a href="#"> <Tag size = "56" />  </a>
        

        <a href="#"> <Foot size ="56" /> </a>
       
        
        <a href="#"> <SimilarImage size = "56"/> </a>
            
        
      </div>
      
     
   
 
     
     
    </div>
  )

}


export default App;
