import { getApiData } from "./axios";
import { store } from "../app/store";
import { apiURL } from "../config";

export const getData = async (type, payload) => {
  const { football } = store.getState();
  switch (type) {
    case "getFootballData":
      return await getApiData("get", `${apiURL}/footballData`);

    case "login":
      const data = await getApiData("post", `${apiURL}/login`, {
        email: payload.email,
        password: payload.password,
      });
      return data;

    case "updateAccount": {
      const data = await getApiData(
        "put",
        `${apiURL}/update`,
        {
          email: payload.email,
          password: payload.password,
          userName: payload.userName,
        },
        { headers: { token: football.token } }
      );
      return data;
    }

    case "updateUserImage": {
      const data = await getApiData(
        "post",
        `${apiURL}/addImage`,
        {
          userImage: payload.userImage,
        },
        { headers: { token: football.token } }
      );

      return data;
    }

    case "saveTeam": {
      const data = await getApiData(
        "post",
        `${apiURL}/save`,
        {
          payload: payload
        },
        { headers: { token: football.token } }
      );
      return data;
    }

    case "forgotPassword": {
      const data = await getApiData("patch", `${apiURL}/forgot`, {
        email: payload.email,
      });
      return data;
    }
    case "updateNotificationEmails": {
      const data = await getApiData(
        "put",
        `${apiURL}/notification-emails`,
        {
          notificationEmails: payload.checked,
        },
        { headers: { token: football.token } }
      );
      return data;
    }

    case "syncData": {
      const data = await getApiData("get", `${apiURL}/sync`, undefined, {
        headers: { token: football.token },
      });
      return data;
    }
    case "updateScore": {
      const data = await getApiData(
        "put",
        `${apiURL}/points`,
        {
          payload: payload,
        },
        { headers: { token: football.token } }
      );
      return data;
    }

    default:
      console.log("you did not enter a valid type");
      break;
  }
};
