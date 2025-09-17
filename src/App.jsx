import Header from './components/common/Header.jsx';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { localStorageUtil } from './utils/localStorageUtil.js';
import { dateFormatter } from './utils/dateFormatter.js';


function App() {

  useEffect(( )=> {  
    const clearDate = localStorageUtil.getClearDate()
    // const now = new Date()
    const nowDate = dateFormatter.formatDateToYMD(new Date())
    
    
      if ( clearDate !== nowDate )
        { 
          localStorageUtil.clearLocalstorage()
          localStorageUtil.setClearDate(nowDate)
        } 


  }, [  ])

  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>

      {/* 스크롤 초기화, 최상위 컴포넌트에 한 번만 추가 */}
      <ScrollRestoration></ScrollRestoration>

    </>
  )
}

export default App
