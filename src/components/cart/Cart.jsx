import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import formatKoreanCurrency from '../../util/display/display';

const CartWrapper = styled.div`
    max-width: 80%;
    margin : auto;

    table{
        width:100%;
    }
    td{
        text-align : center;
    }
`;

function Cart(props) {

    const cart = useSelector(state => state.cart);

    return (
        <CartWrapper>
            <table>
                  <thead>
                   <tr>
                       <th>번호</th>
                       <th>상품 이름</th>
                       <th>수량</th>
                       <th>가격</th>
                       <th>삭제</th>
                   </tr>
                </thead>
                <tbody>
                {
                    cart.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.productName}</td>
                                <td>
                                    <button>-</button>
                                    {item.count}
                                    <button>+</button>
                                </td>
                                <td>{formatKoreanCurrency(item.price * item.count)}</td>
                                <td>
                                    <button>삭제</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </CartWrapper>
    );
}

export default Cart;
