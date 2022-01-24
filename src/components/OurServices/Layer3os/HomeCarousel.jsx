import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Layer3os.css";
import Item from "./item";
import "./styles.css";
//import people from '../../../images/Picture.png'
import axios from "axios";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export default function HomeCarousel() {
  const [detail, setDetail] = useState();

  useEffect(() => {
    async function fetchData1() {
      axios.get("/ourServicelayer31/ourServicelayer31getDetail").then((res) => {
        console.log(res);
        setDetail(res.data);
      });
    }
    fetchData1();
  });

  return (
    <div className="App">
      {detail ? (
        <>
          <Carousel breakPoints={breakPoints}>
            {detail.map((data) => (
              <Item>
                <div className="all">
                  <h4 className="l3osh1">{data.l31osh}</h4>
                  <p className="l3osp1">{data.l31osp}</p>
                  <div className="review">
                    <img src={"http://localhost:5000/" + data.l31osim} alt="" />
                    <h5>{data.l31osh1}</h5>
                    <p>{data.l31osp1}</p>
                  </div>
                </div>
              </Item>
            ))}
          </Carousel>
        </>
      ) : null}
      {/* <Item>
            <div className="all">
              <h4 className="l3osh1">Intuitive Design</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="all">
              <h4 className="l3osh1">Mindblowing Service</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="all">
              <h4 className="l3osh1">Efficient Collaborating</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="all">
              <h4 className="l3osh1">Intuitive Design</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="all">
              <h4 className="l3osh1">Mindblowing Service</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="all">
              <h4 className="l3osh1">Efficient Collaborating</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="all">
              <h4 className="l3osh1">Intuitive Design</h4>
              <p className="l3osp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae explicabo at eligendi, accusantium dignissimos ea.</p>
                    
              <div className="review">
                <img src={people} alt="" />
                <h5>Jane Cooper</h5>
                <p>CEO at ABC Corporation</p>
              </div>
            </div>
          </Item> */}
    </div>
  );
}
