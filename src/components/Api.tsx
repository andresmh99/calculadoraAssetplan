import React, { useEffect, useState } from "react";

interface ApiData {
  Valor: string;
  Fecha: string;
}

function Api( ) {
  const [data, setData] = useState(null); // Inicializar como null
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=e3a430efb353c799c749b220ea019b770d74a4f8&formato=json";
    
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error en la llamada a la API");
        }
        return res.json();
      })
      .then(data => {

        setData(data.UFs[0]);
      
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    JSON.stringify(data, null, 2)
  );
}

export default Api;
