import React from "react";
import "./searchPhoto.sass";
import PageTitle from "../../../../components/common/page-title/page-title";
import bg from "../../../../assets/images/desktop/photos/bg.png";
import Button from "../../../../components/common/button/button";
import InputField from "../../../../components/common/input-field/input-field";
import Select from "../../../../components/common/select-with-label/select-with-label";
import Checkbox from "../../../../components/common/checkbox/checkbox";

const SearchPhoto = () => {
  return (
    <div className={"photo-search"}>
      <PageTitle
        main={"Photo"}
        secondary={"Search"}
        className={"photo-search__title"}
      />
      <div className={"photo-search__header-block"}>
        <div className={"photo-search__header-block__left-part"}>
          <p>
          basic  <span>search</span>
          </p>
          <div
            className={"photo-search__header-block__left-part__absolute-image"}
          >
            <img src={bg} alt="" />
          </div>
        </div>
        <div className={"photo-search__header-block__right-part"}>
          <p>
          advanced  <span>search</span>
          </p>
          <div
            className={"photo-search__header-block__right-part__absolute-image"}
          >
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
      <div className="photo-search__main-block">
        <header className="photo-search__main-block__header">
          <InputField label="Ship name:" className="search-photo-input" />
          <Select
            options={[{ value: "Anywhere (slow)", label: "Anywhere (slow)" }]}
          />
        </header>
        <main className="photo-search__main-block__main">
          <div className="photo-search__main-block__main__left">
            <p className="title-paragraph">Identification and categorization</p>
            <div>
              <InputField label="IMO:" />
              <InputField label="MMSI:" />
              <InputField label="ENI:" />
              <InputField label="Pennant no.:" />
              <InputField label="Callsign:" />
            </div>
            <div>
              <Select
                label="Category"
                options={[
                  {
                    value: "Photos taken at the Cap-Charles me...",
                    label: "Photos taken at the Cap-Charles me...",
                  },
                ]}
              />
              <Checkbox
                checked={true}
                onChange={() => console.log("here")}
                label="Include subcategories"
              />
            </div>
          </div>
          <div className="photo-search__main-block__main__center">
            <p className="title-paragraph">Administrative</p>
            <div>
              <Select
                label="Flag:"
                options={[
                  {
                    value: "Albania",
                    label: "Albania",
                  },
                ]}
              />{" "}
              <Select
                label="Home port:"
                options={[
                  {
                    value: "Abberville La",
                    label: "Abberville La",
                  },
                ]}
              />{" "}
              <Select
                label="Build year:"
                options={[
                  {
                    value: "2019",
                    label: "2019",
                  },
                ]}
              />{" "}
              <Select
                label="Status:"
                options={[
                  {
                    value: "In build",
                    label: "In build",
                  },
                ]}
              />
            </div>
            <div>
              <Select
                label="Class society:"
                options={[
                  {
                    value: "Compania Nacional De Registro & Ins...",
                    label: "Compania Nacional De Registro & Ins...",
                  },
                ]}
              />
              <InputField label="Builder:" />
              <InputField label="Owner:" />
              <InputField label="Manager:" />
            </div>
          </div>
          <div className="photo-search__main-block__main__right">
            <div>
              <div>
                <p className="title-paragraph">Photographer and photo location</p>
                <Select
                  label="Photographer:"
                  options={[
                    {
                      value: "All Photographers",
                      label: "All Photographers",
                    },
                  ]}
                />
                <Select
                  label="Country:"
                  options={[
                    {
                      value: "All Countries",
                      label: "All Countries",
                    },
                  ]}
                />
                <Select
                  label="Port:"
                  options={[
                    {
                      value: "Select country first",
                      label: "Select country first",
                    },
                  ]}
                />
              </div>
              <Checkbox
                checked={true}
                onChange={() => console.log("here")}
                label="Include subports"
              />
            </div>

            <div className="photo-search__main-block__main__right__bottom">
              <p className="title-paragraph">Photographer and photo location</p>
              <div>
                <Select
                  label="Sort by:"
                  options={[
                    {
                      value: "Newest first",
                      label: "Newest first",
                    },
                  ]}
                />
                <Select
                  label="Limit:"
                  options={[
                    {
                      value: "192 photos/pa..",
                      label: "192 photos/pa..",
                    },
                  ]}
                />
                <Select
                  label="Display:"
                  options={[
                    {
                      value: "Thumbnails + photo info only",
                      label: "Thumbnails + photo info only",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="photo-search__main-block__footer">
          <Button variant="secondary">Clear Form</Button>
          <Button variant="outlined">Search Now!</Button>
        </footer>
      </div>
    </div>
  );
};

export default SearchPhoto;
