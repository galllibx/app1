import React from 'react'
// import Banner from './banner'
// import { Header,Content,Footer } from "./func-components";
// import Calendar from "./class-components";
// import { Calculator2 } from "./calculator";
// import { EventData2 } from "./event-data";
// import RefsFunc from "./refs-func";
// import RefsArray from './refs-array';
// import MessageBox from './state-func';
import { userContext } from './context'
import Header from'./context-header'

// function App() {
//   return (
//     <>
//       <Header/>
//       <p><center><Calendar/></center></p>
//       <Content/>
//       <Banner/>
//       <Footer/>
//       <Calculator2/>
//       <EventData2/>
//       <RefsFunc/>
//       <RefsArray/>
//       <MessageBox/>
//     </>
//   )
// }
// export default App()
export default function App(){
  return (
      <userContext.Provider value={'Tom Jerry'}>
        <Header/>
      </userContext.Provider>
    )
}


