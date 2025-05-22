import CommonInput from "../components/inputs/CommonInput";
import CommonButton from "../components/buttons/CommonButton";
import CommonLink from "../components/links/CommonLinks";

export default function Login() {
  return (
    <form className="flex flex-col gap-[24px] w-full max-w-[500px] px-[24px] py-[32px] bg-[#232225] rounded-[4px]">
      <div className="flex flex-col gap-[24px]">
        <CommonInput
          label="Nome/E-mail"
          name="email"
          type="text"
          placeholder="Digite seu nome/E-mail"
        />
        <CommonInput
          label="Senha"
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
      </div>

      <div className="flex flex-row justify-between gap-[24px]">
        <CommonLink label="Esqueci a minha senha" path="forgot-password" />
        <CommonButton label="Entrar" type="submit" />
      </div>
    </form>
  )
}