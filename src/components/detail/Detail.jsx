// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailHead from './DetailHead';
import DetailBody from './DetailBody';
import Spinner from '../spinner/Spinner';


const DetailWrapper = styled.div`
  margin : 60px auto 0;
  max-width : 1200px;
  width : 80%;
`;

const Detail = ({data}) => {
  const {pId} = useParams();

  const[detailProduct, setDetailProduct] = useState({});
  const[isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const product = data.find(obj => obj.id === Number(pId));
    setDetailProduct(product);
    setIsLoading(false); // 데이터 로드가 완료될 때 로딩 상태를 false로 변경
  }, [pId, data]);


  // 1번 방법
  //const product1 = {...data[pId-1]};
  // 2번 방법 - filter
  //const product2 = data.filter(obj => obj.id ===  Number(pId));
  // 3번 방법 - find
  //const product = data.find(obj => obj.id ===  Number(pId));

  if(!detailProduct || isLoading){
    return <Spinner/>
  }


  return (
    <DetailWrapper>
      <DetailHead data={detailProduct}/>
      <DetailBody detail={detailProduct.detail}/>
    </DetailWrapper>
  );
};

export default Detail;