import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HandleData() {

  const [jsonData, setJsonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://data.brreg.no/enhetsregisteret/api/enheter');
      console.log('Retrieved data: ', request);
      let units = request.data._embedded.enheter;
      console.log('Each unit: ', units);
      setJsonData(units);
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
        jsonData.map((unit, i) => (
        <li className="card" key={i}>
            <div className="card-body">
              { unit.organisasjonsnummer == '956338581' ? 
              <>
              <h4 className="card-title orgNr">{unit.navn}</h4>
              <p className="card-text mb-2 text-muted">Organisasjonsnummer: {unit.organisasjonsnummer}</p>
              <p className="card-text mb-2">Beskrivelse: {unit.organisasjonsform.beskrivelse}</p>
              <p className="card-text mb-2">Antall ansatte: {unit.antallAnsatte}</p>
              <p className="card-text mb-2">Næringskode: {unit.naeringskode1.kode}</p>
              <p className="card-text mb-2">Beskrivelse av næringskode: {unit.naeringskode1.beskrivelse}</p>
              </> : 
              <>
                <h4 className="card-title">{unit.navn}</h4>
                <p className="card-text mb-2 text-muted">Organisasjonsnummer: {unit.organisasjonsnummer}</p>
                <p className="card-text mb-2">Beskrivelse: {unit.organisasjonsform.beskrivelse}</p>
                <p className="card-text mb-2">Antall ansatte: {unit.antallAnsatte}</p>
              </>
              }
                
            </div>
        </li>
    )) }
    </>
  )
  
}


export default HandleData;
