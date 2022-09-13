import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductCategories />
      <ProductCTA />
    </React.Fragment>
  );
}

export default withRoot(Index);
