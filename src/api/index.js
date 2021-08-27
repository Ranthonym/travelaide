// all api calls
import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "0e06212cd5msh3ff46c97a5c41e1p1eb6dajsnf8c461c60363",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
