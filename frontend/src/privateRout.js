import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const PrivateRouts = ({component:Component,...rest})=>(
   <Route 
    {...rest}
    render = {props=>
        localStorage.getItem("user")?(
            <Component {...props} />
        ):(
            <Redirect to={{pathname:'/login',state:{from:props.l}}} />
        )

    }
    />
    );

export default PrivateRouts;