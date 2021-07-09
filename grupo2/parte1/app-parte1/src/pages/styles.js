import styled from 'styled-components';

export const WrapperPerfis = styled.section`
  margin-top: 8rem;
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const PerfilCard = styled.div`
  width: 20rem;
  border: 2px solid green;
  display: inline-block;
  height: 28rem;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  h3 {
    margin-left: 1rem;
  }
  a {
    margin-left: 1rem;
  }
`;