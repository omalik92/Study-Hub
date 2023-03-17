import React from "react";
import './resources.css';

  function ResourcesPage(props) {
    return (


            <div className="card ">
              <a href={props.projectUrl}>
                <img
                  src={props.image}
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <p className="card-title"> {props.title} </p>
                <p className="card-text"> {props.description}</p>
              </div>
            </div>

  );
}

export default ResourcesPage;