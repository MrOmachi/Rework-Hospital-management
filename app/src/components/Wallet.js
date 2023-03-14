import {Card,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/wallet.css";
function Wallet(props) {
  return (
    <div className='wallet'>
    <Card as={Link} to={"/account/"+props.ticker}>
      <Card.Body>
        <Card.Title>
            {props.ticker}
            <Image src={props.icon} roundedCircle width={40} style={{margin:10,float:"right"}} height={40} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.address}</Card.Subtitle>
        <Card.Text>
                <div className='pull-right'>
                    {props.active ?
                    <b className='green-text'>Active</b>:
                    <b className='grey-text'>Inactive</b>}
                </div>
                <small>Current balance</small>
                <div className='balance'><b>{props.currency}{props.balance}</b></div>
        </Card.Text>
      </Card.Body>
    </Card>
    <a href="/transactions" className='wallet-link'>View balance history</a>
    <a href={"/account/"+props.ticker} style={{float:"right"}} className='wallet-link'> View account details</a>
    </div>
  );
}

export default Wallet;