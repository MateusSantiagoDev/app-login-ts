import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  font-size: 24px;
`;
