import { Input } from "@components/Input";
import { Button } from "@components/Button";

import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <S.Title>Login</S.Title>

      <Input
        placeholder="email"
        autoCorrect={false}
        autoCapitalize="none"
        type="primary"
      />

      <Input
        placeholder="Password"
        autoCorrect={false}
        autoCapitalize="none"
        type="primary"
      />
      
      <Button
      title="Entrar"
      type="primary"
      />
    </S.Container>
  );
}
