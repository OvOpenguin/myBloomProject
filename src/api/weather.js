export async function fetchWeather(city) {
  const apiKey = "CWA-D921AB93-923A-4B1E-9E3A-85B505350B1E";
  const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&locationName=${city}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather API error");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("fetchWeather error:", err);
    return null;
  }
}
