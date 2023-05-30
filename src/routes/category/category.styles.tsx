import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin: 0 15px 30px 15px;
  
  @media screen and (max-width: 800px) {
    width: 20vw;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    grid-row-gap: 25px;
    margin: 0 40px 30px 4px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;


