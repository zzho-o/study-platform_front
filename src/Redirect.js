import * as React from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Redirect() {
  const code = new URL(window.location.href);
  const code_params = code.searchParams.get("code");
  const navigate = useNavigate();
  React.useEffect(async () => {
    try {
      const data = await axios
        .post("https://jadu-study-flatform.shop/api/oauth/kakao", {
          body: {
            token: `${code_params}`,
          },
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        });
    } catch (err) {
      navigate("/");
      alert(`로그인 실패!:${err}`);
    }
  }, []);
  get_info();
  return <div></div>;
}

export default Redirect;
