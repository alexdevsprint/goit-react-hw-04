//API unsplash.com
import axios from "axios";

const API_KEY = "4QMrl8guwtes6LXxWeXN_wpyU-wBACS3-duCqs7NG78";

export const fetchData = async (query, page = 1, per_page = 12) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      query: query,
      page,
      per_page,
    },
  });

  return response.data;
};
