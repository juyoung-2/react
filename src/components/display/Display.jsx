import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import styled from 'styled-components';
import Main from '../layout/Main';
import {Routes, Route} from 'react-router-dom';
import Detail from '../detail/Detail.jsx';
import axios from  'axios';
import { createContext } from 'react';
import Cart from '../cart/Cart.jsx';
export const ProductContext = createContext();


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;
const HeaderArea = styled.div`
    width: 100%;
    background-color : white;
    position : sticky;
    top : 0;
      z-index : 9999;
`;
const Body = styled.div`
    width: 100%;
    min-height: 50vh;
`;

const Display = () => {

  const  [products, setProducts] = useState([]); // 화면에 보여줄 상품
  const [displayData, setDisPlayData] = useState([]); // 화면에 보여줄 상품
  const  [cnt, setCnt] = useState(1); // 더보기 클릭 횟수
  const [loadMore, setLoadMore] = useState(true); // 더보기 버튼 활성화 상태


    useEffect(()=>{
      axios.get('/api/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(err => console.log(err));
    }, [products, cnt]); 


    useEffect(()=>{
      setDisPlayData(products.slice(0, (cnt * 3)));
    }, [products, cnt]);

    const handleLoadMore = () =>{
      setCnt(prev => prev + 1 );
    }


    /* fetch('/api/products')
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err)); */


      axios.get('/api/products')
        .then(response => console.log(response.data))
        .catch(err => console.log(err));



  return (
    <Container>
      <HeaderArea>
        <Header/>
      </HeaderArea>
      <Body>
        <Routes>
          <Route 
            path='/' 
            element={
            <ProductContext.Provider 
              value={{displayData, loadMore, handleLoadMore}}>
              <Main/>
            </ProductContext.Provider>
            }
          />
          <Route path='/detail/:pId' element={<Detail data={products}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Body>
    </Container>
   
  );
};

export default Display;