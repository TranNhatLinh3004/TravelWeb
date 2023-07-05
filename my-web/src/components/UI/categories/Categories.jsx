import React from "react";
import "./categories.css";
import { Container } from "reactstrap";

function Categories(props) {
  return (
    <Container>
      <h2 className="heading">
        Choose Your Destinations
        <span></span>
      </h2>

      <div className="categories">
        <div className="card card-1">
          <h2 className="title">Ice Adventure Vacations</h2>
          <p className="subtitle">your best vacation ever</p>

          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className="box-bottom">
            <a href="#" className="btn btn-primary" role="button">
              View All Tour
            </a>
            <span>14 Tour</span>
          </div>
        </div>
        <div className="left">
          <div className="card card-2">
            <h2 className="title">National Park</h2>
            <p className="subtitle">your best vacation ever</p>

            <img
              src="https://images.pexels.com/photos/5707156/pexels-photo-5707156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="box-bottom">
              <a href="#" className="btn btn-primary" role="button">
                View All Tour
              </a>
              <span>14 Tour</span>
            </div>
          </div>
          <div className="card card-3">
            <h2 className="title">Adult Vacations</h2>
            <p className="subtitle">your best vacation ever</p>

            <img
              src="https://images.pexels.com/photos/14878535/pexels-photo-14878535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="box-bottom">
              <a href="#" className="btn btn-primary" role="button">
                View All Tour
              </a>
              <span>14 Tour</span>
            </div>
          </div>
        </div>
        {/* <div class="line"></div> */}
      </div>
    </Container>
  );
}

export default Categories;
