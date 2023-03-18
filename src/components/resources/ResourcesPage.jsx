import React from "react";
import './resources.css';

  function ResourcesPage(props) {
    return (

<section id="gallery">
  <div className="container">
    <div className="row">
    <div className="col-lg-4 mb-4">
            <div className="card ">
              <a href={props.projectUrl}>
                <img
                  src={props.image}
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title"> {props.title} </h5>
                <p className="card-text"> {props.description}</p>
                
              </div>
            </div>
            </div>
     </div>
    </div>
    </section>
  );
}

export default ResourcesPage;