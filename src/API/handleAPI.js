import axios from "axios";
import { useEffect, useState } from "react";

function getUrl() {
  let endpoint =
    "https://sheets.googleapis.com/v4/spreadsheets/1bEB6mkGsYudlVAkf65wO-pjUU6yllq9uXfmeyY3YRKs/values/";
  let range = "Sheet1!B27:C100";
  let params = {
    majorDimension: "COLUMNS",
    key: "AIzaSyBa8lxt2dSjV5aw9RkU0uh38h6jYCI9mm8",
  };

  let url = endpoint + range + "?";
  for (let item of Object.keys(params)) {
    url += `${item}=${params[item]}&&`;
  }

  return url;
}

export const handleApi = () =>
  new Promise((resolve, reject) => {
    axios
      .get(getUrl())
      .then((result) => {
        console.log("Result", result);
        resolve({ data: result, code: 200 });
      })
      .catch((error) => {
        alert(`Error fetching data`);
        reject();
      });
  });
