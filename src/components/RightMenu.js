import React from 'react'

const RightMenu = () => {
    return (
            
        <div className="rightMenu">
            
            <div className="closedMenu"></div>
            <div className="menuSelection">
                <h1>Ayrıntılar</h1>
                <h3>Dosya İsmi.türü</h3>
                <p>Açıklamama bulunmamaktadır.</p>
                <p>11.03.2021 11:22</p>
                <p>73.46 KB &nbsp; &nbsp; &nbsp; 880x447</p>
               
                <h3>Kullanıcı Adı tarafından yüklendi.</h3>
                <p>Bu dosyayı tüm kullanıcılar görebilir.</p>
                
                <h3>Çözünürlükler</h3>
                <p className="resolution">5184x3456</p>
                <p className="resolution">1280x720</p>
            </div>
            
        </div>
    
    )
}

export default RightMenu;