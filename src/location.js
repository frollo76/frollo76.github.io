import { getApiKey } from "../data.mjs";


//-----------------------------------------------------------------------------

const url = `http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid=${getApiKey()}`;

