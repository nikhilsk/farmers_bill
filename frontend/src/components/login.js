import React from 'react';
import './login.css';
import {useSelector,useDispatch} from 'react-redux';
import {userBuilder,passwordBuilder} from '../actions';


const Login = ()=>{
  const userData = useSelector(state=>state.userNameReducer);
  const passData = useSelector(state=>state.passwordReducer);
  const formValidate = e=>{
    e.preventDefault();
    const data = {
      userData,
      passData
    }
    console.log(data);
    dispatch(userBuilder(''));
    dispatch(passwordBuilder(''));
  }
  const dispatch = useDispatch();
    return(
        <div className="">
<div className="pen-title">
  <h1>Material Login Form</h1><span>Pen <i className='fa fa-code'></i> by <a href='http://andytran.me'>Andy Tran</a></span>
</div>
<div className="rerun">Rerun Pen</div>
<div className="container">
  <div className="card"></div>
  <div className="card">
    <h1 className="title">Login</h1>
    <form>
      <div className="input-container">
        <input onChange={e=>dispatch(userBuilder(e.target.value))} type="#{type}" id="#{label}" required="required" value={userData}  />
        <label>Username</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input onChange={e=>dispatch(passwordBuilder(e.target.value))} type="#{type}" id="#{label}" required="required" value={passData} />
        <label>Password</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button onClick={formValidate}><span>Go</span></button>
      </div>
      
    </form>
  </div>
  <div className="card alt">
    <div className="toggle"></div>
    <h1 className="title">Register
      <div className="close"></div>
    </h1>
    <form>
      <div className="input-container">
        <input type="#{type}" id="#{label}" required="required"/>
        <label>Username</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="#{type}" id="#{label}" required="required"/>
        <label>Password</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="#{type}" id="#{label}" required="required"/>
        <label>Repeat Password</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button><span>Next</span></button>
      </div>
    </form>
  </div>
</div>
</div>

  )
}
  
  export default Login;
