import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrgForm() {

  const [isOrgFormData, setIsOrgFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/');
      console.log('Retrieved data: ', request);
      let orgForms = request.data._embedded.organisasjonsformer;
      console.log('Each orgForm: ', orgForms);
      setIsOrgFormData(orgForms);
      setIsLoading(false);
      return request;
    }
    fetchData();
    }, []);

  return (
    <>
    { isLoading ? (
      <div className="spinner" style={{ marginTop: '40px', marginLeft: '55%', transform: 'translate(-65%, 400px)' }}>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    ) :  
    isOrgFormData.map((orgForm, i) => (
        <li className="card" key={i}>
            <div className="card-body">
                <h4 className="card-title">Kode: {orgForm.kode}</h4>
                <p className="card-text mb-2 text-muted">Link: {orgForm._links.self.href}</p>
                <p className="card-text mb-2">Beskrivelse: {orgForm.beskrivelse}</p>
            </div>
        </li>
    )) }
    </>
  )
  
}


export default OrgForm;