import React from 'react'
import Banner from './banner'
import { Header,Content,Footer } from "./func-components";
import Calendar from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";
import RefsFunc from "./refs-func";
import RefsArray from './refs-array'

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
      <RefsFunc/>
      <RefsArray/>
    </>
  )
}
export default App


