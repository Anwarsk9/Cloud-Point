const apiKey = "91ca63c283794aba18a30b4d45edd10c";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;
const div = document.querySelector(".weather");
const error = document.querySelector(".error");

async function callApi(city) {
  const response = await fetch(url + city);
  
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    error.style.display = "none";
    div.style.display = "block";

    document.querySelector(".weather h2").innerHTML =
      Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".weather h3").innerHTML = data.name;
    document.querySelectorAll(".wind-details")[0].innerHTML =
      data.main.humidity + "%";
    document.querySelectorAll(".wind-details")[1].innerHTML =
      data.wind.speed + " km/h";

    const img = document.querySelector(".weather .img");
    const imgUrl = "./Cloud-img/" + data.weather[0].main + ".png";
    img.setAttribute("src", imgUrl);
  } else {
    div.style.display = "none";
    error.style.display = "block";
}
}

const inp = document.querySelector(".search input");
const btn = document.querySelector(".search button");

btn.addEventListener("click", () => {
  callApi(inp.value);
});
