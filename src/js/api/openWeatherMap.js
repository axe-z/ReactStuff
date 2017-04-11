 //import axios from 'axios'

  const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=606c997356f79caf9896e3c4a7aa3854&units=metric';
 //
   export const getTemp = (location) => {
     
    let encodedLocation = encodeURIComponent(location)
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

 ///VERSION FETCH
      return fetch(requestUrl)
      .then(function(res){  //renvois un blob
        return res.json()  //RETURN obligatoire mets le blob en json
      }).then(res => {
        if(res.cod && res.message){
          throw new Error(res.message)
        } else {
          console.log(res)
          return Math.round(res.main.temp)   //patch d anl object.
        }}).catch(err => {
         console.log(err)    //si err.
     });

  // VERSION AXIOS
  //    return axios.get(requestUrl).then( res => {
  //      console.log(res)
  //      if(res.data.cod && res.data.message){
  //         throw new Error(res.data.message)
  //         } else {
  //           return res.data.main.temp ;
  //         }
  //       }, function (res){
  //             throw new Error(res.data.message)
  // })



}


//http://api.openweathermap.org/data/2.5/weather?&appid=606c997356f79caf9896e3c4a7aa3854&units=metric
