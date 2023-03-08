import axios from "axios";

export const getApiData = async (method = "get", url, body, headers) => {
  try {
    let results;

    if (method === "get" || method === "delete") {
      results = await axios[method](url, headers);
    } else {
      results = await axios[method](url, body, headers);
    }

    return results.data;
  } catch (error) {
    console.log(error);
  }
};
