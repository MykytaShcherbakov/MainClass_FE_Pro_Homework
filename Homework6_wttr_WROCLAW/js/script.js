async function fetchWeather() {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.textContent = "Загрузка...";
    try {
        const response = await fetch('https://wttr.in/wroclaw?format=j1');
        const data = await response.json();
        const currentCondition = data.current_condition[0];
        weatherDiv.innerHTML = `
            <h2>${data.nearest_area[0].areaName[0].value}</h2>
            <p>Температура: ${currentCondition.temp_C}°C</p>
            <p>Ощущается как: ${currentCondition.FeelsLikeC}°C</p>
            <p>Описание: ${currentCondition.weatherDesc[0].value}</p>
        `;
    } catch (error) {
        weatherDiv.textContent = "Ошибка загрузки данных о погоде.";
        console.error(error);
    }
}
fetchWeather();