import { Button, Input } from "@nextui-org/react";

import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { UserContext } from '../../components/context/index';

import { DivButton, DivVoltar } from "./styleLogin";
import { useContext } from "react";

// import jwt from 'jsonwebtoken';

const Login = () => {
  const { setContacts } = useContext(UserContext);
  const location = useLocation();
  const state = location?.state;
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email e senha obrigatório")
      .email("email inválido"),
    password: yup.string().required("Senha inválida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const signIn = async (data) => {
    api
      .post("/login", data)      
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token.token);
        window.localStorage.setItem("@NAME", response.data.token.name);
        window.localStorage.setItem("@USERID", response.data.token.id);
        window.localStorage.setItem("@PHONE", response.data.token.phone);
        window.localStorage.setItem("@EMAIL", response.data.token.email);
        window.localStorage.setItem("@CONTACTS", response.data.token.contacts);
        setContacts(response.data.token.contacts);
       
     
        toast.success("Login efetuado com sucesso!", { autoClose: "3000" });
        // setUser(user);

        navigate("/dashboard");

        //location é um objeto que dentro dele tem o state->from->pathname que é a parte que informa em que pagina esta
        const toNavigate = state?.state.pathname || "/dashboard";
      
        navigate(toNavigate, { replace: true });
      })
      .catch((err) => {
        toast.error("O login não foi bem sucedido!", { autoClose: "3000" });
        console.log(err);
      });
      

  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit(signIn)}>
            <div>
              <Input
                css={{ width: "216px" }}
                labelPlaceholder="E-mail"
                {...register("email")}
              />
              <p>{errors.email && errors.email.message}</p>

              <Input.Password
                css={{ width: "216px" }}
                labelPlaceholder="Password"
                {...register("password")}
              />

              <p>{errors.password && errors.password.message}</p>
            </div>
            <DivButton>
              <Button size="xs" css={{ background: "#000000c2" }} type="submit">
                Entrar
              </Button>
              <p>Ainda não possue uma conta?</p>
              <Button
                size="xs"
                css={{
                  background: "#000000c2",
                }}
                onPress={() => navigate("/registro", { replace: true })}
              >
                Cadastre-se
              </Button>
            </DivButton>
          </form>
        </div>
      </div>
      <DivVoltar>
        <Button
          css={{
            background: "none",
            color: "#0072f5e8 ",
          }}
          size="xs"
          onPress={() => navigate("/", { replace: true })}
        >
          Voltar
        </Button>
      </DivVoltar>
    </div>
  );
};
export default Login;
