import React from "react";
import resources from "./resources.json";
import ResourcesPage from "./ResourcesPage";
import "./resourcesDisplay.css";

function ResourcesDisplay() {
  // Creating an array with the projects.json file
  const resourcesArray = [];
  for (let i = 0; i < resources.length; i++) {
    resourcesArray.push(
      <ResourcesPage
        image={resources[i].image}
        title={resources[i].title}
        description={resources[i].description}
        projectUrl={resources[i].projectUrl}
      />
    );
  }

  return (
    <div>
      <section id="resources" className="jumbotron text-center">
        <h1 className="display-3">Course Dashboard</h1>
        <p className="lead">
          Take Control of Your Learning: Access All Your Web Development Courses
          in One Dashboard.
        </p>
      </section>
      <div className="row justify-content-center" id="rows">
        <div className="container-fluid my-container">
          <div className="row">
            <div className="col-4">{resourcesArray[0]}</div>
            <div className="col-4">{resourcesArray[1]}</div>
            <div className="col-4">{resourcesArray[2]}</div>
          </div>
          <div className="row">
            <div className="col-4">{resourcesArray[3]}</div>
            <div className="col-4">{resourcesArray[4]}</div>
            <div className="col-4">{resourcesArray[5]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesDisplay;
