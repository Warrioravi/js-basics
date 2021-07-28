
var city="Delhi";


function get(city){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c371e679253980ec1ec3b83a05d197d5')
.then(response => response.json())
.then((data)=>{
console.log(data);
}

)

.catch(err => alert("Wrong city name!"));
}
get(city);