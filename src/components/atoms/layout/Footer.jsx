import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&:copy; 2021 test inc.</SFooter>;
};
const SFooter = styled.footer`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
