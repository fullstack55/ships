import React from "react";
import { Route, Switch } from "react-router-dom";
import "./photos-page.sass";
import Header from "../../components/header/header";
import TabLinks from "../../components/common/tab-links/tab-links";
import MostPopularPhotos from "./components/most-popular-photos/MostPopularPhotos";
import PhotosIndex from "./components/photos-index/photos-index";
import NewPhotos from "./components/new-photos/NewPhotos";
import PhotosCategories from "./components/photos-categories/photos-categories";
import Footer from "../../components/common/footer/footer";
import SummeryPhoto from "./components/summery-photo/summery-photo";
import SearchPhoto from "./components/search-photo/SearchPhoto";

const PhotosPage = () => {
  return (
    <div className={"photos-wrapper"}>
      <Header info={false} />
      <TabLinks
        links={[
          { label: "Photo Index", to: "/photos/index" },
          { label: "Most Popular", to: "/photos/most-popular" },
          { label: "New Photos", to: "/photos/new" },
          { label: "Categories", to: "/photos/categories" },
          { label: "Photo Search", to: "/photos/search" },
        ]}
      />
      <div className={"photos-wrapper__content"}>
        <Switch>
          <Route path="/photos/index" exact render={() => <PhotosIndex />} />
          <Route
            path="/photos/most-popular"
            exact
            render={() => <MostPopularPhotos />}
          />
          <Route path="/photos/new" exact render={() => <NewPhotos />} />
          <Route
            path="/photos/categories"
            exact
            render={() => <PhotosCategories />}
          />
          <Route path="/photos/summery" exact render={() => <SummeryPhoto />} />
          <Route path="/photos/search" exact render={() => <SearchPhoto />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default PhotosPage;
