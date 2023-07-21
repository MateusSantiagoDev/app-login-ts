import { TextInputProps } from "react-native";

import * as S from "./styles";

type Props = TextInputProps & {
  type: S.TypeProps;
};

export function Input({ type, ...rest }: Props) {
  return(
    <S.Container type={type} {...rest} />
  )
}
