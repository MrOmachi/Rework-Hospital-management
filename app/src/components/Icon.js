import {Image} from 'react-bootstrap';
import ngn from "../images/flags/ngn.png";
import usd from "../images/flags/usd.png";
export function CurrencyIcon(props) {
    if(props.name==="usd" || props.name==="USD"){
        return (
            <Image src={usd} roundedCircle width={28} style={{margin:10,float:"right"}} height={28} />
        )
    }else{
        return (
            <Image src={ngn} roundedCircle width={28} style={{margin:10,float:"right"}} height={28} />
        )
    }
}

export function CountryIcon(props) {
    if(props.name==="us" || props.name==="US" || props.name==="United States" || props.name==="united states" || props.name==="USA"){
        return (
            <Image src={usd} roundedCircle width={20} style={{margin:0,float:"right"}} height={20} />
        )
    }else{
        return (
            <Image src={ngn} roundedCircle width={20} style={{margin:0,float:"right"}} height={20} />
        )
    }
}


export function LinkedIcon(props){
    if(props.name==="usd" || props.name==="USD"){
        return (
            <Image src={usd} width={60} style={{marginRight:30,float:"left"}} height={60} />
        )
    }else{
        return (
            <Image src={ngn} width={60} style={{marginRight:30,float:"left"}} height={60} />
        )
    }                             
}

export function AccountIcon(props){
    if(props.name==="usd" || props.name==="USD"){
        return (
            <Image src={usd} roundedCircle width={60} style={{marginRight:30,float:"left"}} height={60} />
        )
    }else{
        return (
            <Image src={ngn} roundedCircle width={60} style={{marginRight:30,float:"left"}} height={60} />
        )
    }
                                          
                                    
}

