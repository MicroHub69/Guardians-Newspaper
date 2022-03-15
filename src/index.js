import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import latestdata from "./latestdata";
import topdata from "./topdata";
import Latest from "./Latest";
import TopNew from "./TopNew";

function App() {
  const latest = latestdata.map((item) => {
    return (
      <Latest
        key={item.id}
        main_img={item.coverImg}
        title={item.title}
        description={item.description}
        user={item.user}
        time={item.time}
        username={item.username}
        label={item.label}
      />
    );
  });

  const recents = topdata.map((item) => {
    return (
      <TopNew
        key={item.id}
        main_img={item.coverImg}
        title={item.title}
        description={item.description}
        user={item.user}
        time={item.time}
        username={item.username}
        label={item.label}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Banner />
      {latest}

      <div className="container other_blog">{recents}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
