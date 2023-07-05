import React from "react";
import "./productdetails.css";
import {
  FaRegBookmark,
  FaRegEye,
  FaTheRedYeti,
  FaUserCheck,
  FaUserFriends,
} from "react-icons/fa";
import { Container } from "reactstrap";
import OptionWithInput from "../../UI/optionwithInput/OptionWithInput";
function ProductDetails(props) {
  return (
    <Container>
      <div className="tour">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="info">
          <h2>Switzerland – 5 Days Mountain Hiking Tour</h2>
          <div className="rating">
            {" "}
            <div>
              <span>
                <i class="ri-star-s-fill"></i>
              </span>
              <span>
                <i class="ri-star-s-fill"></i>
              </span>
              <span>
                <i class="ri-star-s-fill"></i>
              </span>
              <span>
                <i class="ri-star-s-fill"></i>
              </span>
              <span>
                <i class="ri-star-half-s-line"></i>
              </span>
            </div>
            <p>
              ( <span>3 Reviews</span> )
            </p>
          </div>
          <span className="onsale">
            From <strike>$100</strike>
          </span>
          <p className="price">
            $8,700<small>/per person</small>{" "}
          </p>
          <p className="notification">
            There’s only 5 spot left. Join 19 others at Travelu’s experience
            this Saturday.
          </p>
          <form>
            <i>
              <FaUserCheck />
            </i>
            <OptionWithInput />

            <i>
              <FaUserFriends />
            </i>
            <OptionWithInput />
          </form>
          <div className="date">
            <div className="icon">
              <i>{/* <FaUserCheck /> */}</i>
              <p>12 Days 11 Nights</p>
            </div>
            <div className="icon">
              <i>{/* <FaUserCheck /> */}</i>
              <p>12 Days 11 Nights</p>
            </div>
            <div className="icon">
              <i>{/* <FaUserCheck /> */}</i>
              <p>12 Days 11 Nights</p>
            </div>
            <div className="icon">
              <i>{/* <FaUserCheck /> */}</i>
              <p>12 Days 11 Nights</p>
            </div>
          </div>
          <div className="regulations">
            <i>
              <FaTheRedYeti />
            </i>
            <div
              className="
            "
            >
              <h2>100% Refundable</h2>
              <p>
                Cancel up to 12 days before your trip and get a full refund,
                including service fees.
              </p>
            </div>
            <div className="boxs">
              <div className="box">
                <i>
                  <FaUserCheck />
                </i>
                <p>SHARE</p>
              </div>
              <div className="box">
                <i>
                  <FaRegBookmark />
                </i>
                <p> SAVE TO WISH LIST</p>
              </div>
              <div className="box">
                <i>
                  <FaRegEye />
                </i>
                <p>3510</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
