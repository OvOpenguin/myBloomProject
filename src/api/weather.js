export async function fetchWeather(city) {
  const apiKey = "CWA-CB70C905-2148-49DF-A0CD-017A0C1BE1E1";
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
