import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try{
        const {data: {data} } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'b8f1602ee8mshf9e6fbc121b76a3p11a173jsnde75b992930f',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }); 

        return data;
    } catch (error) {
        console.log(error)

    }
}

