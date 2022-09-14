import * as React from "react";
import MainHeader from "./modules/views/MainHeader";
import Mainfooter from "./modules/views/Mainfooter";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <MainHeader />
      <Mainfooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
