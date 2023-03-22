import {Modal,ListGroup} from 'react-bootstrap';

function ListOptions(props){
  const choose=function(recipient){
        props.Selection(recipient);
        close();
      }; 
      function close(){
        props.ShowOptions(false);
      }
return (
<>
<Modal show={props.show} onHide={close}>

  <Modal.Header closeButton>
    <Modal.Title>
            <b>{props.title}</b>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
      <ListGroup>
    <ListGroup className="account_details">
        {props.options ? props.options.map(function(option,key){
                  return(
                        <ListGroup.Item key={key} onClick={e=>choose(option)}>
                              {option.name}
                        </ListGroup.Item>
                        )
            })
          :null}
          {props.button}
    </ListGroup>
    </ListGroup>

    </Modal.Body>
</Modal>


</>
)
}

export default ListOptions;

