import axios from "axios";

export const weatherApi = axios.create({
	baseURL: "http://api.weatherapi.com/",
});
