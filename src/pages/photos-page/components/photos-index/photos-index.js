import React from "react";
import "./photos-index.sass";
import PageTitle from "../../../../components/common/page-title/page-title";
import stearingIcon from "../../../../assets/images/desktop/photos/orangeStearingWheel.svg";
import toLeft from "../../../../assets/images/desktop/photos/toLeftArrow.svg";
import toRight from "../../../../assets/images/desktop/photos/toRightArrow.svg";
import update from "../../../../assets/images/desktop/photos/update.svg";
import bg from "../../../../assets/images/desktop/photos/bg.png";
import steeringIcon from "../../../../assets/images/desktop/photos/stearingWheel.svg";
import FeaturesLinks from "./feature-links/features-links";
import Typography from "../../../../components/common/typography/typography";
import ShipItem from "../most-popular-photos/components/shipItem/ShipItem";
import MostPopular from "./most-popular/most-popular";

const PhotosIndex = () => {
  return (
    <div className={"photos-index"}>
      <PageTitle
        main={"Photo"}
        secondary={"index"}
        className={"photos-index__title"}
      />
      <div className={"photos-index__latest-added-photo"}>
        <div className="photos-index__latest-added-photo__topography-section">
          <Typography firstText="Latest added photos" before />
          <div>
            <div>
              <img src={update} alt="update" />
              <span>Update</span>
            </div>
            <span>View all new photos</span>
          </div>
        </div>
        <div className="photos-index__latest-added-photo__ships">
          <div>
            {ships.map((ship, index) => (
              <ShipItem
                key={index}
                url={ship.url}
                firstTitle={ship.firstTitle}
                secondTitle={ship.secondTitle}
                withLike={true}
              />
            ))}
          </div>
          <div>
            <div>
              <img src={toLeft} alt="arrow" />
            </div>
            <div>
              <img src={toRight} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className={"photos-index__features-container"}>
        <div>
          <div className={"photos-index__features-container__header"}>
            <div
              className={"photos-index__features-container__header__left-part"}
            >
              <img src={stearingIcon} alt="steering wheel" />
              <p>
                <span>New</span> Feature Here!
              </p>
            </div>
            <div
              className={"photos-index__features-container__header__right-part"}
            >
              <span
                className={
                  "photos-index__features-container__header__right-part__cta"
                }
              >
                Try out new search-engine
                <span> here</span>
              </span>
            </div>
          </div>
          <div className={"photos-index__features-container__header__images"}>
            <img src={bg} alt="" />
            <img src={steeringIcon} alt="" />
          </div>
        </div>
        <div className={"photos-index__features-container__body"}>
          <FeaturesLinks
            firstText={"New"}
            secondText={"Photographers"}
            links={[
              [
                "harrystaale",
                "tmcwboards",
                "Centreport Empty Depot",
                "beverlonian",
                "Jerome Penney",
                "Uwe Lindemann",
              ],
              [
                "Luis Acosta",
                "Nico.T",
                "Syzygy",
                "Riverman19",
                "ZaneE",
                "JVN01",
              ],
            ]}
          />
          <FeaturesLinks
            firstText={"New"}
            secondText={"Ships"}
            links={[
              [
                "BELGICA",
                "Merlimau Transporter II",
                "BORE",
                "HOEGH NEW YORK",
                "MTM BIG APPLE",
                "SVITZER SETIMIO",
              ],
              [
                "SEIYO MARU",
                "NORD SANTIAGO",
                "DAISY GLORY",
                "Veendam",
                "SEATRAIN TEXAS",
                "Otto Nubel",
              ],
            ]}
          />
          <FeaturesLinks
            firstText={"New"}
            secondText={"Locations"}
            links={[
              [
                "Coxen Hole Honduras",
                "Pangkal Balam Indonesia",
                "Chimbote Peru",
                "Jawaharlal Nehru Port India",
                "Penneshaw Australia",
                "Sitra Bahrain",
              ],
              [
                "Liepaja Latvia",
                "Port Tudy Lorient France",
                "Stylis Greece",
                "Partington, Manchester Ship Canal, Unit...",
                "Topolobampo Mexico",
                "Maniitsoq Greenland",
              ],
            ]}
          />
        </div>
      </div>
      <div className={"photos-index__photos-locations"}>
        <Typography firstText="Latest added" secondText="photos" before />
        <div className={"photos-index__photos-locations__map-container"} />
      </div>
      <MostPopular secondText={"( last 24 hours )"} />
      <MostPopular secondText={"( last 48 hours )"} />
      <MostPopular secondText={"( last week )"} />
      <MostPopular secondText={"( last month )"} />
      <MostPopular secondText={"( last 180 days )"} />
      <MostPopular secondText={"( last year )"} />
    </div>
  );
};

const ships = [
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU",
    firstTitle: "© Michael Schindler",
    secondTitle: "Added 6 minutes ago",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU",
    firstTitle: "© Michael Schindler",
    secondTitle: "Added 6 minutes ago",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU",
    firstTitle: "© Michael Schindler",
    secondTitle: "Added 6 minutes ago",
  },
  // {
  //   url:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU",
  //   firstTitle: "© Michael Schindler",
  //   secondTitle: "Added 6 minutes ago",
  // },
];

export default PhotosIndex;
