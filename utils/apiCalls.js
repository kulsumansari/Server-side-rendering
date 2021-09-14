
export const getData= async ()=>{
  let response = await fetch("https://kulsumansari.github.io/webpage-data/companyData/data.json");
  let data = await response.json();
  return data;
}