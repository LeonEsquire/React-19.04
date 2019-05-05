import React, { Component } from "react";
import ReactDOM from "react-dom";

import Blog from "./components/Blog";
import WelcomeModal from "./components/WelcomeModal";

class App extends Component {
  render() {
    const posts = [
      {
        title: "Заголовок поста",
        postBody:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi atque incidunt. Eius reiciendis neque veniam id consequuntur ducimus quos consequatur placeat eaque ipsam ipsa maiores eveniet pariatur velit amet, debitis quaerat porro esse ad accusamus distinctio fuga asperiores non incidunt? Cupiditate labore fugiat architecto amet consectetur ut, nobis animi!",
        date: new Date(),
        name: "Oleg"
      },
      {
        title: "Заголовок поста",
        postBody:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi atque incidunt. Eius reiciendis neque veniam id consequuntur ducimus quos consequatur placeat eaque ipsam ipsa maiores eveniet pariatur velit amet, debitis quaerat porro esse ad accusamus distinctio fuga asperiores non incidunt? Cupiditate labore fugiat architecto amet consectetur ut, nobis animi!",
        date: new Date(),
        name: "Oleg2"
      },
      {
        title: "Заголовок поста",
        postBody:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi atque incidunt. Eius reiciendis neque veniam id consequuntur ducimus quos consequatur placeat eaque ipsam ipsa maiores eveniet pariatur velit amet, debitis quaerat porro esse ad accusamus distinctio fuga asperiores non incidunt? Cupiditate labore fugiat architecto amet consectetur ut, nobis animi!",
        date: new Date(),
        name: "Oleg3"
      },
      {
        title: "Заголовок поста",
        postBody:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi atque incidunt. Eius reiciendis neque veniam id consequuntur ducimus quos consequatur placeat eaque ipsam ipsa maiores eveniet pariatur velit amet, debitis quaerat porro esse ad accusamus distinctio fuga asperiores non incidunt? Cupiditate labore fugiat architecto amet consectetur ut, nobis animi!",
        date: new Date(),
        name: "Oleg4"
      },
      {
        title: "Заголовок поста",
        postBody:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi atque incidunt. Eius reiciendis neque veniam id consequuntur ducimus quos consequatur placeat eaque ipsam ipsa maiores eveniet pariatur velit amet, debitis quaerat porro esse ad accusamus distinctio fuga asperiores non incidunt? Cupiditate labore fugiat architecto amet consectetur ut, nobis animi!",
        date: new Date(),
        name: "Oleg5"
      }
    ];

    return (
      <>
        <WelcomeModal />
        <Blog posts={posts} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
