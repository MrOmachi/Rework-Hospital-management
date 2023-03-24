import {Card,Image} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import "../css/wallet.css";
function VirtualAccount(props) {

  const navigate = useNavigate();

  const openAccount=()=>{
          navigate('/account',{state:props.account});
        }

  
      var formatAmount=function(number,currency){
             return number.toLocaleString('en-US', { style: 'currency', currency: currency });
      }

  return (
    <div className='wallet'>
    <Card onClick={e=>openAccount()}>
      <Card.Body>
        <Card.Title>
            {props.account.Currency}
            <Image src={props.account.Icon} roundedCircle width={40} style={{margin:10,float:"right"}} height={40} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">**** **** **** {props.account.LastFourDigits}</Card.Subtitle>
        <Card.Text>
                <div className='pull-right'>
                    {props.account.Active ?
                    <b className='green-text'>Active</b>:
                    <b className='grey-text'>Inactive</b>}
                </div>
                <small>Current balance</small>
                <div className='balance'><b>{formatAmount(props.account.Balance.Money,props.account.Currency)}</b></div>
        </Card.Text>
      </Card.Body>
    </Card>
    {/* <a href="#" className='wallet-link'>View balance history</a>
    <a href='#' style={{float:"right"}} className='wallet-link'> View account details</a> */}
    </div>
  );
}

export default VirtualAccount;