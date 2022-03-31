import React from "react";
import styled from "styled-components";
import { Flex } from "./../style/Flex";

function Card({ title, body, image, id }) {
  return (
    <CardStyled layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`/images/${image}`} alt="" />
      </div>
    </CardStyled>
  );
}

export default Card;

const CardStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};

  div {
    flex: 1;
  }

  img {
    width: 80%;
    float: right;
  }
`;
