// import { Button } from "@nextui-org/react";
// import { useNavigate } from "react-router-dom";

import { Button } from "@nextui-org/react"

const Dashboard=()=>{

    return (
        <div>
        <div>
          <Button css={{
                    background: "none", color:"#0072f5e8 "}} size="xs">Sair</Button>
        </div>

      <div className="header">
        <div>
          <h1>Usuário</h1>
        </div>
      </div>
      <hr />

      <section>
        <div>
          <h2>Olá, ... </h2>
        </div>
        <div>
          <p>...</p>
        </div>
      </section>
      <hr />
      <div>
        <p>Você não possue contato cadastrado</p>
        </div>
    </div>
    )
}

export default Dashboard