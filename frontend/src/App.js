import React from 'react'
import Banneri from './komponentit/banneri'
import Sponssi from './komponentit/sponssi-osuus';
import Vujuvuosi from './komponentit/vujuviikko';
import Vuosijuhla from './komponentit/vuosijuhla';
import Ilmoittautuminen from './komponentit/ilmo';
import Notification from './komponentit/notification'
import "./index.css";


// Whole page
const App = () => {

  return (
    <>
    
    <div className = "Siivu" id = "BA" >
      <Banneri></Banneri>
      </div>
    <div className = "Siivu" id = "VV">
      <Vujuvuosi></Vujuvuosi>
      </div>
    <div className = "Siivu" id = "SP">
      <Sponssi></Sponssi>
      </div>
    <div className = "Siivu" id = "VJ">
        <Vuosijuhla></Vuosijuhla>
    </div>
    <div>
    <Notification/>
    </div>
    <div className = "Siivu" id = "IL">
      <Ilmoittautuminen></Ilmoittautuminen>
    </div>
    </>
  )
}



export default App