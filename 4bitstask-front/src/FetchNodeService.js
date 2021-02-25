import axios from "axios";
var ServerURL = "http://localhost:5000";

const postDataAxios = async (Url, body, config) => {
  try {
    var url = `${ServerURL}/${Url}`;
    config = { "content-type": "application/json;charset=utf-8" };
    const response = await axios.post(url, body, config);
    var result = response.data;
    console.log("fethres", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getDataAxios = async (Url) => {
  try {
    var url = `${ServerURL}/${Url}`;
    var config = { "content-type": "application/json;charset=utf-8" };
    var response = await axios.get(url, config);
    var result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { ServerURL, getDataAxios, postDataAxios };
