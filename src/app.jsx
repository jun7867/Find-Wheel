import './app.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import NaverMapAPI from './components/naverMap/naverMap';

function App() {
  return (
    <>
      <Navbar />
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVERMAP_API} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    </>
  );
}

export default App;
