// import { Button } from "@nextui-org/react";
// import { useNavigate } from "react-router-dom";


import { useLocation, useNavigate } from "react-router-dom";
import CreateContact from "../../components/modal/createContact";
import { RiDeleteBinFill } from "react-icons/ri";
import EditeUser from "../../components/modal/editeUser";
import { useContext, useState } from "react";
import EditeEmail from "../../components/modal/editeEmail";
import EditePhone from "../../components/modal/editePhone";
import api from "../../services/api";
import { toast } from "react-toastify";
import { DivUser, DivEmail, DivPhone } from "./styled";
import { Modal, Button, Text } from '@nextui-org/react';
import { UserContext } from "../../components/context";


const Dashboard = () => {
  const { contacts } = useContext(UserContext);
  // const [contacts, setContacts] = useState([]);

  const [userName, setUserName] = useState(
    window.localStorage.getItem("@NAME")
  );
  const [userPhone, setUserPhone] = useState(
    window.localStorage.getItem("@PHONE")
  );
  const [userEmail, setUserEmail] = useState(
    window.localStorage.getItem("@EMAIL")
  );

  const Userid = window.localStorage.getItem("@USERID"); 
  // necessário ser id do contato

  window.localStorage.setItem("@CONTACTS", JSON.stringify(contacts));
 

  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;

  
  function logout() {
    window.localStorage.clear();

    //se existir algum caminho dentro do meu estado vou redirecionar para esse caminho, se não, para o login... state? pra saber se ele esta vazio ou não
    const toNavigate = state?.state.pathname || "/login";

    navigate(toNavigate, { replace: true });
  }
  const updateUserName = (name) => {
    setUserName(name);
  };
  const updateUserPhone = (phone) => {
    setUserPhone(phone);
  };
  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  const deleteUser = (data) => {
    api
    .delete(`/users/${Userid}`, data)
    .then((response) => {
      console.log(response);
      
      toast.success("Usuário deletado!", { autoClose: 3000 });
      navigate("/login", { replace: true })
        
      })
      .catch((err) => {
        console.error(err);
        toast.error("Ops! Algo deu errado", { autoClose: 3000 });
      });
  };
  const deleteContact = (data) => {
   console.log("chegou aqui ");
    // api
    //   .delete(`/contacts/${ID DO CONTATO}`, data)
    //   .then((response) => {
    //     console.log(response);

    //     toast.success("Contato deletado!", { autoClose: 3000 });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error("Ops! Algo deu errado", { autoClose: 3000 });
    //   });
  };

  return (
    <div>
      <div>
        <Button
          css={{
            background: "none",
            color: "#0072f5e8 ",
          }}
          size="xs"
          onClick={logout}
        >
          Sair
        </Button>
      </div>

      <div className="header">
        <div>
          <h1>Usuário</h1>
        </div>
      </div>
      <hr />
      <section>
        <div>
          <DivUser>
            <h2>Olá, {userName} </h2>
            <div>
              <EditeUser updateUserName={updateUserName} />
            </div>
          </DivUser>
          <DivPhone>
            <p>Contato: {userPhone}</p>
            <div>
              <EditePhone updateUserPhone={updateUserPhone} />
            </div>
          </DivPhone>
          <DivEmail>
            <p>Email: {userEmail}</p>
            <div>
              <EditeEmail updateUserEmail={updateUserEmail} />
            </div>
          </DivEmail>
        </div>

        <div>
          <button  onClick={deleteUser}>
            {" "}
            <RiDeleteBinFill />{" "}
          </button>
        </div>
      </section>

      <hr />
      <div>
        <CreateContact />
      </div>
      <div>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}> Email: {contact.email} - Phone: {contact.phone}{" "} 
             </li>
          ))}
        </ul>
      ) : (
        <p>Você ainda não possui contato cadastrado</p>
      )}
      </div>
      {/* <button onClick={deleteContact()}><RiDeleteBinFill />{" "} </button>  */}
      
    </div>
  );
};

export default Dashboard;
