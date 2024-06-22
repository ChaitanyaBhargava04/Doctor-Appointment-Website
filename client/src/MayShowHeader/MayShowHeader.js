import React , {useEffect,useState} from "react";
import { useLocation} from "react-router-dom";
const MayShowHeader = ({children}) =>  {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false)
    useEffect(()=> {
        console.log('this is location', location)
        if(location.pathname === '/Layout') {
        setShowHeader(false)
        }
        // else if(location.pathname === '/signup') {
        //     setShowHeader(false) 
        // } 
        else {
        setShowHeader(true)
        }
    }, {location});
    return (
    <div>{ showHeader && children}</div>
    )
}

export default MayShowHeader;