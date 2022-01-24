import React from "react";
import data from "./Data.json";
import Carousel from "react-elastic-carousel";
import "./Layer3os.css";
import Item from "./item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const SampleCaro = () => {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        {data.map((d) => (
          <Item>
            <h2>{d.name}</h2>
            <h4>{d.price}</h4>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SampleCaro;
