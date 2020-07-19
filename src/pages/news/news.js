import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import Title from "../../components/common/title/title";
import Tabs from "../../components/common/tabs/tabs";
// import Pagination from "../../components/common/pagination/pagination";
import NewsSearch from "./components/news-search";
import NewsCard from "./components/news-card";
import AdvancePagination from "../../components/common/advance-pagination/AdvancePagination";

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <>
      <Header info={false} />
      <Tabs
        activeTab={activeTab}
        tabs={[
          {
            key: "latest",
            label: "Latest News",
          },
          {
            key: "most",
            label: "Most Read News",
          },
        ]}
        onChange={setActiveTab}
      />
      <Title
        boldText={activeTab === "latest" ? "LATEST" : "MOST READ"}
        regularText={
          activeTab === "latest" ? "SHIPPING INDUSTRY NEWS" : "HEADLINES"
        }
      />
      {activeTab === "latest" && (
        <>
          <NewsSearch />
          <AdvancePagination totalPages={11797}/>
        </>
      )}
      <div className="container1">
        <div className="news-cards-container">
          {activeTab === "latest" &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <NewsCard key={index} />
            ))}
          {activeTab !== "latest" &&
            [1, 2].map((item, index) => <NewsCard key={index} />)}
        </div>
      </div>
      {activeTab === "latest" && (
        <AdvancePagination totalPages={11797}/>
      )}
      <Footer />
    </>
  );
};

export default NewsPage;
