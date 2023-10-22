import React from "react";
import { projectDetail } from "../helpers/ProjectDetail";

function Meta({ name }) {
  const project = projectDetail.find((p) => p["name"] === name);
  const content = project.content;
  // const container = document.getElementById("body");
  const container = document.createElement("div");
  container.setAttribute("id", "body");
  container.innerHTML = "";
  // const list = Object.keys(content);
  // console.log(content);
  var list = [];
  const find_key = Object.keys(content).forEach((key, index) => {
    list.push(key);
  });
  console.log(list);

  return (
    <div id="body">
      {/* {Object.keys(content).forEach((key, index) => {
        list.push(key);
      })} */}
      {list.map((key, index) => {
        console.log("there are some keys");
        if (key.includes("image")) {
          console.log("image found");
          let img = new Image();
          img.src = content[key];
          return <img src={content[key]} alt="projectDetail" />;
        }
        if (key.includes("text")) {
          let p = document.createElement("p");
          p.innerHTML = content[key];
          container.appendChild(p);
          return <p>{content[key]}</p>;
        }
        if (key.includes("list")) {
          return (
            <ul>
              {content[key].map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          );
        }
        if (key.includes("link")) {
          return (
            <a href={content[key].link_source}>{content[key].link_text} </a>
          );
        }

        return <div></div>;
      })}
    </div>
  );

  // return (
  //   <div>

  //     {/* {Object.keys(content).forEach((key, index) => {
  //       console.log("there are some keys");
  //       if (key.includes("image")) {
  //         console.log("image found");
  //         let img = new Image();
  //         img.src = content[key];

  //         container.appendChild(img);
  //       }
  //       if (key.includes("text")) {
  //         let p = document.createElement("p");
  //         p.innerHTML = content[key];
  //         container.appendChild(p);
  //       }
  //       return;
  //     })} */}
  //     {/* {content.forEach((key, value) => {
  //       if (key.includes("image")) {
  //         return <div>image+1</div>;
  //       } else if (key.includes("text")) {
  //         return <p> {value}</p>;
  //       }
  //       return <div>key+1</div>;
  //     })} */}
  //     {/* <div>key</div> */}
  //   </div>
  // );
}

export default Meta;
