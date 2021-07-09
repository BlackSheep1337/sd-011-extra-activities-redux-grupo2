import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100vw;
  height: 8rem;
  border-bottom: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  font-size: 2rem;
  color: green;
`;

export const WrapperForm = styled.section`
  display: flex;
  width: 100vw;
  position: absolute;
  justify-content: center;
  margin-top: 4rem;
`;

export const FormControl = styled.form`
  position: relative;
  width: 50vw;
  border: 2px solid green;
  height: 8rem;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 5px green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: green;
  }
  input {
    width: 600px;
    height: 40px;
    border: 2px solid green;
    border-radius: 10px;
    font-size: 2rem;
    color: green;
    font-weight: 900;
    &:focus {
      outline: none;
    }
  }
`;