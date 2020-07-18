import React from "react";

import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import PageTitle from "../../components/common/page-title/page-title";
import AISHeader from "./components/AISHeader";
import AISBody from "./components/AISBody";
import AISFooter from "./components/AISFooter";

const AIS = () => {
  return (
    <>
      <Header info={false} />
      <PageTitle
        main={"AIS"}
        secondary={"LIV(BETA)"}
        className={"photos-index__title"}
      />
      <AISHeader />
      <AISBody />
      <AISFooter />
      <Footer />
    </>
  );
};

export default AIS;
