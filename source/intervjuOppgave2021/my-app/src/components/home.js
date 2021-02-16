import React from 'react';
import HandleData from './main';
import OrgForm from './orgForm';

function Home() {
    return (
      <>
        <div className="row">
            <div className="col-md-6">
            <h3><center><strong>Enheter</strong></center></h3>
            <HandleData />
            </div>
            <div className="col-md-6">
            <h3><center><strong>Organisasjonsformer</strong></center></h3>
            <OrgForm />
            </div>
        </div>
      </>
    )
    
  }
  
  
  export default Home;