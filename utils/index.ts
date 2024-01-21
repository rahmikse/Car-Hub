export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "923cc91d55msh7fbfdc614ca6c6dp1eb9acjsn47956fb7d7c5",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
