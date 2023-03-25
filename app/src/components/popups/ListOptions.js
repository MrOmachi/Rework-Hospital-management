import {Modal,ListGroup,Image} from 'react-bootstrap';
import { BsNutFill } from 'react-icons/bs';

function ListOptions(props){
  const choose=function(option){
        props.Selection(option);
        close();
      }; 
      function close(){
        props.ShowOptions(false);
      }

      var formatAmount=function(number,currency){
        return number.toLocaleString('en-US', { style: 'currency', currency: currency });
 }

return (
<>
<Modal className="modal-list" show={props.show} onHide={close}>

    <Modal.Header closeButton>
      <Modal.Title>
              <b>{props.title}</b>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup className="options">
          {props.options ? props.options.map(function(option,key){
                    return(
                          <ListGroup.Item key={key} onClick={e=>choose(option)}>
                                {option.RecipientIdentifier ? 
                                <>
                                <Image src={option.Icon} roundedCircle width={40} style={{float:"right"}} height={40} />
                                <h6>{option.Name}</h6>
                                </>
                                :
                                <>
                                {option.Currency} account **** {option.LastFourDigits} <div className="pull-right">{formatAmount(option.Balance.Money,option.Currency)}</div>
                                </>}
                          </ListGroup.Item>
                          )
              })
            :null}

{props.title2 ? <ListGroup.Item>
<b>{props.title2}</b>
</ListGroup.Item>:null}
              {props.options2 ? props.options2.map(function(option,key){
                    return(
                          <ListGroup.Item key={key} onClick={e=>choose(option)}> 
                                <Image src={option.Icon} roundedCircle width={28} style={{float:"right"}} height={28} />
                                {option.Currency} account **** {option.LastFourDigits}
                          </ListGroup.Item>
                          )
                    })
            :null}
            {props.button}
      </ListGroup>
    </Modal.Body>

</Modal>
</>
)
}

export default ListOptions;

