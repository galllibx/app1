import React from "react";
import { Header,Content,Footer } from "./func-components";

function App() {
  //แบบที่ 1 กำหนดฟังก์ชันทั้งหมดที่จะแสดงในแบบอาร์เรย์
  return (
    [<Header/>,<Content/>,<Footer/>]
  )
  //แบบที่ 2 กำหนดฟังก์ชันทั้งหมดที่จะแสเงลงใน Parent เดียวกัน
  /*
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
  */
}

export default App
