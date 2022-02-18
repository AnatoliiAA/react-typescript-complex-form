import styled from "@emotion/styled/";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 5px 5px 5px 40px;
  border-radius: 5px;
  background-color: white;
  border: none;
  &:focus {
    box-shadow: 0px 6px 10px -5px #007aff;
  }
`;
