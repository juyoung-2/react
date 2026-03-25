import React from 'react'
import styled from 'styled-components';

const DetailImg = styled.img`
  content : url(/images/product/${props=>props.image});
  width : 80%;
  display : block;
  margin : auto;
`;

const DetailBody = ({detail}) => {
  

  return (
    <DetailImg image={detail}/>
    );
};

export default DetailBody;