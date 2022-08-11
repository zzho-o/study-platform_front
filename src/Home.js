import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import Signup from "./modules/views/signup";

function Index() {
  return (
    <React.Fragment>
      {/* <AppAppBar />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter /> */}
      <Signup />
    </React.Fragment>
  );
}

export default withRoot(Index);
