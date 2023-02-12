import React, { useContext } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import api from "../../services/api";
// import { Mail } from "./Mail";
import { toast } from "react-toastify";
import { useState } from "react";
import { UserContext } from "../context";


export default function CreateContact() {
  const { contacts, setContacts } = useContext(UserContext);

 

  const userId = window.localStorage.getItem("@USERID");


  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const contact = async () => {
    try {
      const response = await api.post(`/contacts`, {
        email,
        phone,
        userId: userId,
      });
      toast.success("Contato criado com sucesso!", { autoClose: 3000 });
      setContacts([...contacts, response.data]);
    } catch (err) {
      console.error(err);
      toast.error("Ops! Algo deu errado", { autoClose: 3000 });
    }
  };

  return (
    <div>
      <Button auto color="black" shadow onPress={handler}>
        Crie um contato
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Crie seu
            <Text b size={18}>
              Contato
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button onClick={contact} auto onPress={closeHandler}>
            criar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
