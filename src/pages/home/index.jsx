import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { ContainerButton } from "./styled";

const Home=()=>{
    const navigate = useNavigate();
    return (
        <div>
            <h1>Faça login ou cadastre-se e tenha seus contatos salvos</h1>
            <ContainerButton>

            <Button css={{ background: "#000000c2"}} size="xs" onPress={() => navigate("/login", { replace: true })}>Login</Button>
            <Button css={{ background: "#000000c2"}} size="xs" onPress={() => navigate("/registro", { replace: true })}>Cadastrar</Button>
            </ContainerButton>

        </div>


    )
}

export default Home