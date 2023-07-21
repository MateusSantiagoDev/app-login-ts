import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type TypeProps = "primary" | "secondary";

type Props = {
  type: TypeProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  max-height: 56px;
  min-height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.SUCCESS_800 : theme.COLORS.SECUNDARY_900};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY_50};
    font-family: ${theme.FONTS.TEXT};
    font-size: 20px;
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY_800,
}))``;
