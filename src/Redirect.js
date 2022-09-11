import * as React from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Redirect() {
  const code = new URL(window.location.href);
  const code_params = code.searchParams.get("code");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  let data;
  // React.useEffect(async () => {
  //     await axios.post('https://jadu-study-flatform.shop/api/oauth/kakao', {
  //     headers: {
  //       token: code_params,
  //     },
  //   });
  // })
  const get_info = async () => {
    try {
      return await axios
        .post(
          "https://jadu-study-flatform.shop/api/oauth/kakao",
          {},
          {
            headers: {
              token: code_params,
            },
          }
        )
        .then((res) => {
          console.log(res);
          navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  };
  const print_info = async () => {
    const info = await get_info();

    console.log(info);
  };
  // print_info()
  print_info();
  //   React.useEffect(async () => {});
  return <div></div>;
}

export default Redirect;
