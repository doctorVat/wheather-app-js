window.addEventListener('load', () => {
    let long;
    let lat; /*latitude*/

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1cf20bca54de392dd88838125b0e2eca`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then( data => {
                console.log(data);
                
            })
        })

       

    }
})


// 3345c2076dac6ee54e360ae97a0f621e
// 1cf20bca54de392dd88838125b0e2eca
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}