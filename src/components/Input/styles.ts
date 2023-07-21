import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type TypeProps = "primary" | "secondary";

type Props = {
  type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === "primary" ? theme.COLORS.SECUNDARY_900 : theme.COLORS.PRIMARY_50,
}))<Props>`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding: 5px;
  margin-bottom: 10px;

  ${({ theme, type }) => css`
    background-color: ${theme.COLORS.PRIMARY_600};
    border: 1px solid ${theme.COLORS.PRIMARY_300};
    color: ${type === "primary"
      ? theme.COLORS.SECUNDARY_400
      : theme.COLORS.PRIMARY_200};
  `}
`;
