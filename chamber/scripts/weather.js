const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.687819603909592&lon=-46.491862082713745&appid=8d714a9e648314b4e9c7eaaf4addf378&units=imperial'



async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


async function displayinfo() {
    try{
        
    }
    catch (error) {
        console.log(error)
    }
}