import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 1440px;
  height: 1740px;
  margin: 20px auto;
  background-color: #f5f0fa;
  border-radius: 20px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    height: 900px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;
