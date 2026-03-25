import React, { useContext } from 'react'
import styled from 'styled-components';
import ProductList from '../product/ProductList';
import { ProductContext } from '../display/Display';

const Wrapper = styled.div``;
const MainBG = styled.div`
 min-height: 500px;
 background-image: url(/images/main/main1.jpg);
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 margin-bottom: 50px;
`;

const LoadMoreButton = styled.button`
  display : block;
  margin : auto;
  padding : 10px 20px;
  text-align : center;
`;
const Main = () => {

  const {displayData, loadMore, handleLoadMore} = useContext(ProductContext);

  return (
    <Wrapper>
      <MainBG/>
      <ProductList data={displayData}/>
      {
        loadMore &&
         <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
      }
    </Wrapper>
  );
};

export default Main;