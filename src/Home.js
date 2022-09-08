import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import Mypage from "./MyPage";
import SignIn from "./SignIn";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      {/* <Mypage /> */}
      {/* <SignIn /> */}
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
