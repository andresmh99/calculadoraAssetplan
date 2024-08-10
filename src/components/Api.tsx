const url =
  "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=e3a430efb353c799c749b220ea019b770d74a4f8&formato=json";
const UF = await fetch(url).then((res) => res.json());

export const Response = () => {
  return <></>;
};
