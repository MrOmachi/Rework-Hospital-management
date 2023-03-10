import {Card,Image} from 'react-bootstrap';
import "../css/wallet.css";
function Wallet(props) {
  return (
    <>
    <Card className='wallet'>
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
                <h2><b>{props.balance}</b></h2>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card.Link href="#">View balance history</Card.Link>
    <Card.Link href="#" style={{float:"right"}}> View account details</Card.Link>
    </>
  );
}

export default Wallet;