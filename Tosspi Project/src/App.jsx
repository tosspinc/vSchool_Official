import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contacts from './components/Contacts';
//import Footer from './components/Footer';

function App() {
  
  return (
    <>                                                    {/*java and jsx coding has to go inside these brackets in react.*/}
      <Navbar />                                          {/*calls the Navbar jsx file*/}
      <Main />                                            {/*calls the Main jsx file*/}
        <div className="contacts">                        {/*contact div created with class name of contacts*/}
          <Contacts                                       /*calls the Contacts jsx file.*/
            contactsImg="../images/TosspiFoundation.jpg"   /*image for contact*/
            contactsName="The Tosspi Foundation"          /*name for contact*/
            contactsNumber="(801)347-5153"                /*phone number for contact*/
            contactsEmail="thetosspifoundation@gmail.com" /*email for contact*/
          />
        </div>
        
        {/*counts the clicks inside the button*/}
        {/*<div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>*/}
      {/*<Footer />*/}                      {/*calls the Footer jsx file*/}
    </>
  )
}

export default App
