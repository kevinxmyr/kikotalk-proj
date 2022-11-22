import React, { useState } from "react";
import { Button, Modal, Input, Icon } from "semantic-ui-react";

function Signup(props) {
  const [open, setOpen] = useState(false);

  const myStyle = {
        color: 'white !important',
        backgroundColor: 'red',
  }

  return (
    <>
      <style>{`
        .signupbutton {
          background-color: #42b72a !important;
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
          color: white !important;
          width: 14rem !important;
          height: 3.2rem !important;
        }
        .signupbutton:hover {
          border-radius: 4px !important;
          background-color: #3ca827 !important;
        }
        .input{
          width: 50% !important;
        }
        .modal{
          width: 80% !important;
          max-width: 38rem !important;
        }
      `}</style>
      
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button className='signupbutton'>Create new account</Button>}>
        <Modal.Header>Sign Up</Modal.Header>

        <Modal.Content image>
          <Modal.Description>
            <Input className="" placeholder='First Name'>
              <input />
            </Input>
            <Input placeholder='Last Name'>
              <input data-testid='my-input-1' />
            </Input>
            <Input placeholder='Mobile no. or email'>
              <input data-testid='my-input-1' />
            </Input>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color='gray' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            color='green'
            content='Submit'
            onClick={() => setOpen(false)}></Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default Signup;
