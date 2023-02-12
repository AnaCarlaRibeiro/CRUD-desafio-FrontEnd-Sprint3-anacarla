import React from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { FaRegEdit } from "react-icons/fa";
import api from "../../services/api";
import { toast } from "react-toastify";




export default function EditeEmail( {updateUserEmail}) {

  const Userid= window.localStorage.getItem("@USERID")
  const [visible, setVisible] = React.useState(false);
  const [newEmail, setNewEmail] = React.useState('');

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const edite = (data) => {   
 
    api
    .patch(`/users/${Userid}`, {email: newEmail})
    .then((response) => {
      console.log(response);
      toast.success("Usuário editado!", {autoClose:3000});
  
      updateUserEmail(newEmail)


      setVisible(false);
     })
    .catch((err) => {
      console.error(err);
      toast.error("Ops! Algo deu errado", {autoClose:3000});
    });
  };


  return (
    <div>
      <Button auto color="black" shadow onPress={handler}>
      <FaRegEdit/> 
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
           Edite seu
            <Text b size={18}>
              Email
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
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}             
          />       
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button  onClick={edite} auto onPress={closeHandler}>
           Editar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}