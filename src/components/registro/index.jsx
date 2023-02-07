import { Button, Input } from "@nextui-org/react";
import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import api from "../../services/api";
import axios from "axios";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("Email e senha obrigatório")
      .email("email inválido"),
    password: yup.string().required("Senha inválida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha"),
    contact: yup.string().required("Contato obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const user = (data) => {
    console.log(data, "#######");
    // delete data.passwordConfirm;
    // api
    //   .post("/users", data)
    //   .then((response) => {
    //     console.log(response);
    //     toast.success("Cadastro realizado com sucesso!", {autoClose:3000});
    //     navigate("/login");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error("Ops! Algo deu errado", {autoClose:3000});
    //   });
  };


  return (
    <>
      {
        <Form onSubmit={handleSubmit(user)}>
          <div>
            <Input
              css={{ width: "265px" }}
              labelPlaceholder="Nome"
              {...register("name")}
            />
            <p>{errors.name && errors.name.message}</p>

            <Input
              css={{ width: "265px" }}
              labelPlaceholder="E-mail"
              {...register("email")}
            />
            <p>{errors.email && errors.email.message}</p>

            <Input.Password
              css={{ width: "265px" }}
              labelPlaceholder="Senha"
              {...register("password")}
            />

            <p>{errors.password && errors.password.message}</p>

            <Input.Password
              css={{ width: "265px" }}
              labelPlaceholder="Confirmar Senha"
              {...register("confirmPassword")}
            />

            <p>{errors.password && errors.password.message}</p>

            <Input
              css={{ width: "265px" }}
              labelPlaceholder="Contato"
              {...register("contact")}
            />

            <p>{errors.contact && errors.contact.message}</p>

            <div>
              <Button 
                css={{ width: "265px", background: "#FF577F" }}
                type="submit"
              >
                Cadastrar
              </Button>
            </div>
          </div>
          <div>
            <Button type="button"
              css={{
                background: "none",
                color: "#0072f5e8 ",
              }}
              size="xs"
              onPress={() => navigate("/", { replace: true })}
            >
              Voltar
            </Button>
          </div>
        </Form>
      }
    </>
  );
};

export default Register;
