import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <Slink to="/">Home</Slink>
      <Slink to="/users">Users</Slink>
    </SHeader>
  );
};
const SHeader = styled.header`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px;
`;

const Slink = styled(Link)`
  margin: 0 8px;
`;
