import React from "react";
import styled from "styled-components";
import homeImage from "../../../assets/hero.png";
import { Container, Row, Col } from "reactstrap";
import "./home.css";
import Services from "../../UI/services/Services";
import Categories from "../../UI/categories/Categories";
import Tours from "../../UI/tours/Tours";
import Post from "../../UI/post/Post";

export default function Home() {
  return (
    <>
      <Container id="hero">
        <div className="background">
          <img
            src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="content">
          <div className="title">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
              tenetur!
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">Where you want to go</label>
              <input type="text" placeholder="Search Your location" />
            </div>
            <div className="container">
              <label htmlFor="">Check-in</label>
              <input type="date" />
            </div>
            <div className="container">
              <label htmlFor="">Check-out</label>
              <input type="date" />
            </div>
            <button>Explore Now</button>
          </div>
        </div>
      </Container>
      <Categories />
      <Tours />
      <Services />
      <Post />
    </>
  );
}
