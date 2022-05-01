let weather= {
    "apiKey": "9d31fcd5bff6a6c0007e24d33baf6326",
    fetchWeather: function(city){
        fetch
        (
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
        .then((response) =>response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const { temp, feels_like,humidity }=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,feels_like,humidity,speed)
        document.querySelector(".city").innerText="Weather in "+ name;
        //document.querySelector(".icon").src=" http://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".temperature").innerText=temp+"°C";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+ "%";
        document.querySelector(".feels").innerText="Feels like "+feels_like+"°C";
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
    document.querySelector(".search button").addEventListener("click",function(){
        weather.search();
    });
