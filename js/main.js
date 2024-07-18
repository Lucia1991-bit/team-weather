import { initWeather } from "./weather.js";
import { getRainData } from "./rain.js";
import { clearRainfall, hideRainfall, openRainfall } from "./map.js";

//處理天氣與雨量頁面轉換
function handlePageSwitch() {
  const weatherBtn = document.getElementById("weather_btn");
  const rainBtn = document.getElementById("rain_btn");
  const weatherContainer = document.querySelector(
    ".week_weather_info_container"
  );

  const rainContainer = document.querySelector(".rain_info_container");

  // 預設 weather_btn clicked
  weatherBtn.classList.add("active");

  // update display of weather and rain
  function updateDisplay() {
    if (weatherBtn.classList.contains("active")) {
      hideRainfall();
      weatherContainer.style.display = "flex";
      rainContainer.style.display = "none";
    } else if (rainBtn.classList.contains("active")) {
      // showRainfall();
      openRainfall();
      weatherContainer.style.display = "none";
      rainContainer.style.display = "flex";
    }
  }

  updateDisplay();

  // 切換頁面
  weatherBtn.addEventListener("click", function () {
    this.classList.add("active");
    rainBtn.classList.remove("active");
    updateDisplay();
  });

  rainBtn.addEventListener("click", function () {
    this.classList.add("active");
    weatherBtn.classList.remove("active");
    updateDisplay();
  });
}

function initPage() {
  // 載入天氣頁面
  initWeather();

  //載入雨量頁面
  getRainData();

  //監聽頁面轉換按鈕
  handlePageSwitch();
}

// //初始化天氣資料
document.addEventListener("DOMContentLoaded", initPage);
