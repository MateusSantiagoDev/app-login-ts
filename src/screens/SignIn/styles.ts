import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 30px;
`;

export const signUpButtonText = styled.TouchableOpacity`
  margin-top: 30px;
  align-self: flex-end;
`;

export const signUpText = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY_300};
    font-family: ${theme.FONTS.TEXT};
  `}
`;
