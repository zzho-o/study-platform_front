import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

export const CategorySelector = React.createContext();

function Index() {
  const [select, setSelect] = React.useState("");
  return (
    <React.Fragment>
      <AppAppBar />
      <CategorySelector.Provider value={select} func={setSelect}>
        <ProductCategories />
        <ProductHowItWorks />
      </CategorySelector.Provider>
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
