import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [casosGlobales, setCasosGlobales] = useState([]);
  
  useEffect(()=>{
    const api_url = `https://disease.sh/v3/covid-19/all`;
    fetch(api_url)
      .then(data => {
        return data.json();
    })
      .then(resultado => {
        //console.log(resultado);
        setCasosGlobales(resultado); 
    });
    console.log(casosGlobales);
}, [])

  return (
    <AppContext.Provider
      value={{
        casosPaises
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
