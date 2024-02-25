import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { styled } from "styled-components";
import { memo } from "react";
export const SearchInput = memo(() => {
  return (
    <div>
      <SContainer>
        <Input type="text" placeholder="asassassa" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 10px;
`;
