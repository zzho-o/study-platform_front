import * as React from "react";
const axios = require("axios");

function Redirect() {
  const code = new URL(window.location.href);
  const code_params = code.searchParams.get("code");
  const get_info = async () => {
    try {
      return await axios.post(
        "https://jadu-study-flatform.shop/api/oauth/kakao"
      );
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
