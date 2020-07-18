import React from "react";
import "./categories.sass";
import "../content.sass";
import Battleship from "../../../../assets/images/desktop/main/content/categories/battleship.jpg";
import Cargo from "../../../../assets/images/desktop/main/content/categories/cargo.jpg";
import Barge from "../../../../assets/images/desktop/main/content/categories/barge.jpg";
import Fishing from "../../../../assets/images/desktop/main/content/categories/fishing.jpg";
import OilTanker from "../../../../assets/images/desktop/main/content/categories/oil_tanker.jpg";
import Ferry from "../../../../assets/images/desktop/main/content/categories/ferry.jpg";
import Yacht from "../../../../assets/images/desktop/main/content/categories/yacht.jpg";
import Destroyer from "../../../../assets/images/desktop/main/content/categories/destroyer.jpg";
import DrillShips from "../../../../assets/images/desktop/main/content/categories/drill_ships.jpg";
import Dredgers from "../../../../assets/images/desktop/main/content/categories/dredgers.jpg";
import PilotVessels from "../../../../assets/images/desktop/main/content/categories/pilot_vessels.jpg";
import Reefers from "../../../../assets/images/desktop/main/content/categories/reefers.jpg";
import Category from "./category/category";
import SectionTitle from "../../../common/section-title/section-title";

const Categories = () => {
  return (
    <div>
      <SectionTitle
        title={"Top categories"}
        className={"section__title-margin-top"}
      />
      <div className="categories">
        <Category imgSrc={Battleship} name={"Battleship"} />
        <Category imgSrc={Cargo} name={"Cargo"} />
        <Category imgSrc={Barge} name={"Barge"} />
        <Category imgSrc={Fishing} name={"Fishing"} />
        <Category imgSrc={OilTanker} name={"Oil Tanker"} />
        <Category imgSrc={Ferry} name={"Ferry"} />
        <Category imgSrc={Yacht} name={"Yacht"} />
        <Category imgSrc={Destroyer} name={"Destroyer"} />
        <Category imgSrc={DrillShips} name={"Drill Ships"} />
        <Category imgSrc={Dredgers} name={"Dredgers"} />
        <Category imgSrc={PilotVessels} name={"Pilot Vessels"} />
        <Category imgSrc={Reefers} name={"Reefers"} />
      </div>
    </div>
  );
};

export default Categories;
