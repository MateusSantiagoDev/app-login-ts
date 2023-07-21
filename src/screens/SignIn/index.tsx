import { KeyboardAvoidingView, Platform } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        
        <S.Content>
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

          <Button title="Entrar" type="primary" />

          <S.signUpButtonText>
            <S.signUpText>Cadastre-se</S.signUpText>
          </S.signUpButtonText>

        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
