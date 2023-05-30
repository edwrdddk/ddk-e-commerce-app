import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 17px;

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  
  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 27px;
  margin-bottom: 15px;
`;


// .checkout-container {
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;

  // .checkout-header {
  //   width: 100%;
  //   padding: 10px 0;
  //   display: flex;
  //   justify-content: space-between;
  //   border-bottom: 1px solid darkgrey;
  //   font-size: 17px;

  //   .header-block {
  //     text-transform: capitalize;
  //     width: 23%;

  //     &:last-child {
  //       width: 8%;
  //     }
  //   }
  // }

//   .total {
//     margin-top: 30px;
//     margin-left: auto;
//     font-size: 27px;
//     margin-bottom: 15px;
//   }
// }
