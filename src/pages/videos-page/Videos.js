import React from "react";

import "./videos.sass";

import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import PageTitle from "../../components/common/page-title/page-title";
import AdvancePagination from "../../components/common/advance-pagination/AdvancePagination";
import VideoCard from "./components/VideoCard";
import SearchField from "../../components/common/search-field/search-field";

const Videos = () => {
  return (
    <React.Fragment>
      <Header info={false} />
      <main className="videos-main">
        <PageTitle main={"videos"} />
        <div className="videos-main__container-header">
          <div className={"videos-main__container-header__info-section"}>
              <SearchField label={'Search by word:'} />
            <p>
              <span>21 456</span> videos uploaded
            </p>
          </div>
          <div className="videos-main__container-header__pagination-section">
            <AdvancePagination totalPages={11134} />
            <p>
              Hint: The left/right arrows on your keyboard will take you to the
              previous/next page.
            </p>
          </div>
        </div>

        <div className="videos-main__container-main">
          {shipVideoCards.map(({ url, name, info }, index) => (
            <VideoCard key={index} url={url} name={name} info={info} />
          ))}
        </div>

        <div className="videos-main__footer-pagination">
          <AdvancePagination totalPages={11134} />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

const shipVideoCards = [
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
  {
    url: "https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg",
    name: "HELENE KNUTSEN - IMO 9005780 - Germany - River Elbe - Otterndorf",
    info: {
      uploadedDate: "Mar 11, 2020",
      view: "10",
      uploadedBy: "DiFoo",
    },
  },
];

export default Videos;
