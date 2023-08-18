import React from "react";
import Banner from './banner'
import { Header,Content,Footer } from "./func-components";
import Calendar from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";

function App() {
  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Banner/>
      <Footer/>
      <Calculator2/>
      <EventData2/>
    </>
  )
}
export default App


