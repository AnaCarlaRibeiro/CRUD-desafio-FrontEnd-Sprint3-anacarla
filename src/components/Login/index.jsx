import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api"
import axios from "axios";
import { DivButton, DivVoltar } from "./styleLogin";
import { useEffect } from "react";



const Login=()=>{
    const [user, setUser] = useState();

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
        console.log(response.data, "aqui data");
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", response.data.token)
            // window.localStorage.setItem("@USERID", response.data.user.id)
            // window.localStorage.setItem("@USERNAME", response.data.user.name)
    
        toast.success("Login efetuado com sucesso!", {autoClose:"3000"})
        setUser(user);
        navigate("/dashboard");
        
        // sessionstorage cookies
        //location é um objeto que dentro dele tem o state->from->pathname que é a parte que informa em que pagina esta
        const toNavigate = state?.state.pathname || "/dashboard";
        
        navigate(toNavigate, { replace: true });
      })
      .catch((err) => {
        toast.error("O login não foi bem sucedido!", {autoClose:"3000"});
        console.log(err);
      });
        
    }
    // useEffect(()=>{
    //     console.log("aqui, LOGIN");
    //   },[])
    return (
        <div>
            <div>
      <h1>Login</h1>
<div>
      <form onSubmit={handleSubmit(signIn)}>
        <div>
          <Input css={{ width: "216px"}} labelPlaceholder="E-mail" {...register("email")} />
          <p>{errors.email && errors.email.message}</p>

          <Input.Password css={{ width: "216px"}}
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
          <Button size="xs" css={{
                    background: "#000000c2",
                                 
                  }}
                  onPress={() => navigate("/registro", { replace: true })}>Cadastre-se</Button>
      
        </DivButton>
      </form>
</div>
    </div>
    <DivVoltar>

            <Button css={{
                    background: "none", color:"#0072f5e8 "
                                 
                  }} size="xs" onPress={() => navigate("/", { replace: true })}>Voltar</Button>
    </DivVoltar>
        </div>
    )
}
export default Login