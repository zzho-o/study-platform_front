import * as React from "react";

function Redirect() {
  const code = new URL(window.location.href);
  const code_params = code.searchParams.get("code");
  console.log(code_params);
  //   React.useEffect(async () => {});
  return <div></div>;
}

export default Redirect;
