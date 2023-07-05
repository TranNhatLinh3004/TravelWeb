import React from "react";
import { Container } from "reactstrap";
import "./post.css";
import {
  FaRegCalendarAlt,
  FaRegShareSquare,
  FaRegComment,
} from "react-icons/fa";
function Post(props) {
  return (
    <Container>
      <div className="postwrapper">
        <div className="posts">
          <div className="post">
            <img
              src="https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <div className="info">
              <div className="icon">
                <i>
                  <FaRegCalendarAlt />
                </i>
                <p>11/11/2023</p>
              </div>
              <div className="icon">
                <i>
                  <FaRegComment />
                </i>
                <p>1 Comment</p>
              </div>
              <div className="icon">
                <i>
                  <FaRegShareSquare />
                </i>
                <p>Share</p>
              </div>
            </div>
            <h3 className="">Aestibulum ipsum a ornare car</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
              atque molestias aliquid obcaecati omnis tempore fuga culpa
              voluptatem?
            </p>
            <button>Read more</button>
          </div>{" "}
          <div className="post">
            <img
              src="https://images.pexels.com/photos/977737/pexels-photo-977737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="info">
              <div className="icon">
                <i>
                  <FaRegCalendarAlt />
                </i>
                <p>11/11/2023</p>
              </div>
              <div className="icon">
                <i>
                  <FaRegComment />
                </i>
                <p>1 Comment</p>
              </div>
              <div className="icon">
                <i>
                  <FaRegShareSquare />
                </i>
                <p>Share</p>
              </div>
            </div>
            <h3 className="">Aestibulum ipsum a ornare car</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
              atque molestias aliquid obcaecati omnis tempore fuga culpa
              voluptatem?
            </p>
            <button>Read more</button>
          </div>
        </div>
        <div className="newletter">
          <h2 className="heading">
            TRAVEL TIPS
            <span></span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            veniam sapiente consectetur labore ipsa, expedita voluptatibus
            exercitationem! Vel numquam dolor voluptates inventore adipisci
            facere odit corporis, ipsum sunt soluta commodi!
          </p>
          <button>Read more</button>
        </div>
      </div>
    </Container>
  );
}

export default Post;
