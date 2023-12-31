import React, { useState } from "react";
import { Container } from "reactstrap";
import Destination1 from "../../../assets/Destination1.png";
import Destination2 from "../../../assets/Destination2.png";
import Destination3 from "../../../assets/Destination3.png";
import Destination4 from "../../../assets/Destination4.png";
import Destination5 from "../../../assets/Destination5.png";
import Destination6 from "../../../assets/Destination6.png";

import "./tours.css";
import ProductsList from "../productslist/ProductsList";
function Tours(props) {
  const data = [
    {
      id: "01",
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      id: "02",

      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      id: "03",

      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      id: "04",

      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      id: "05",

      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      id: "06",

      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  const [active, setActive] = useState(1);
  return (
    <Container>
      <div id="recommend">
        <div className="title">
          <h2>Recommended Destinations</h2>
        </div>
        <div className="packages">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  className={active === index + 1 ? "active" : ""}
                  onClick={() => setActive(index + 1)}
                >
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="destinations">
          <ProductsList data={data} />
        </div>
      </div>
    </Container>
  );
}

export default Tours;
