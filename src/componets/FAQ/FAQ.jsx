import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const FAQ = () => {
  return (
    <>
      <Container>
        <Heading>
          <h3 className="heading">Frequently asked questions</h3>
          <p className="description">
            Here are some of our most asked questions.{" "}
          </p>
          <Frame1>
            <Frame2>
              <p className="text">Still need help? We’re here for you.</p>
              <button>Chat with us</button>
            </Frame2>
            <img src="images/Group 99.png" alt="group-99" />
          </Frame1>
        </Heading>
        <Frame3>
          <ul class="accordion">
            <li>
              <input type="radio" name="accordion" id="first" />
              <label for="first">
                What should I do on my first trip to Rome?
              </label>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  assumenda recusandae, quas incidunt necessitatibus labore,
                  natus ipsa, nesciunt rerum quasi modi reprehenderit totam quam
                  accusamus praesentium! Tenetur voluptatum nemo assumenda!
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="second" />
              <label for="second">
                What are some hidden gems to see in Rome?
              </label>
              <div class="content">
                <p>
                  Rome is packed with hidden gems. If you love art, don't miss
                  the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                  Barracco is a free museum and well worth a quick visit. If you
                  love the ancient stuff, don't miss the Domus Romana at Palazzo
                  Valentini, the Domus Aurea, and the Baths of Caracalla. For
                  even more hidden gems, take a tour of Trastevere, a
                  fascinating neighborhood full of history and ambiance.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="third" />
              <label for="third">How much time should I spend in Rome?</label>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  assumenda recusandae, quas incidunt necessitatibus labore,
                  natus ipsa, nesciunt rerum quasi modi reprehenderit totam quam
                  accusamus praesentium! Tenetur voluptatum nemo assumenda!
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="fourth" />
              <label for="fourth">What food is Rome known for?</label>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  assumenda recusandae, quas incidunt necessitatibus labore,
                  natus ipsa, nesciunt rerum quasi modi reprehenderit totam quam
                  accusamus praesentium! Tenetur voluptatum nemo assumenda!
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="fifth" />
              <label for="fifth">
                What is the best way to get around Rome?
              </label>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  assumenda recusandae, quas incidunt necessitatibus labore,
                  natus ipsa, nesciunt rerum quasi modi reprehenderit totam quam
                  accusamus praesentium! Tenetur voluptatum nemo assumenda!
                </p>
              </div>
            </li>
          </ul>
        </Frame3>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Heading = styled.div`
  padding-top: 64px;

  .heading {
    font-size: 24px;
    font-family: "Open Sans";
    line-height: 32px;
    color: #1c2024;
    font-weight: 700;
  }
`;

const Frame1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  line-height: 32px;
  margin-top: 24px;
  padding: 20px;
  background-color: #f9f9fb;
  width: 446px;
  height: 170px;
`;

const Frame2 = styled.div`
  margin-top: 30px;
  .text {
    font-size: 18px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }

  button {
    width: 133px;
    height: 50px;
    margin-top: 24px;
    border-radius: 12px;
    border: none;
    background-color: #000000;
    color: white;
    font-size: 16px;
    font-family: "Open Sans";
    font-weight: 700;
  }
`;

const Frame3 = styled.div`
  width: 100%;

  .accordion {
    margin: 60px;
    width: 634px;
  }

  .accordion li {
    list-style: none;
    width: 100%;
    padding: 5px;
  }

  .accordion li label {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #303030;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    font-family: "Open Sans";
    background: #ffffff;
    margin-bottom: 2px;
    cursor: pointer;
    position: relative;
  }

  label::after {
    content: "+";
    font-size: 34px;
    position: absolute;
    right: 20px;
    transition: transform 0.5s;
  }

  input[type="radio"] {
    display: none;
  }

  .accordion .content {
    color: #60646c;
    text-align: left;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 700;
    font-family: "Open Sans";
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s, padding 0.5s;
  }

  .accordion input[type="radio"]:checked + label + .content {
    max-height: 600px;
    padding: 30px 20px;
  }

  .accordion input[type="radio"]:checked + label::after {
    transform: rotate(135deg);
  }
`;

export default FAQ;
