import React, { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Item from '~/components/Story/Item';



function SignUp_SingIn() {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");


    const [name, setname] = useState("");
    const [user, setuser] = useState("");
    const [avt, setavt] = useState("https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    

    const navigate = useNavigate();
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  async function login(){
    let result = await fetch(`http://localhost:3001/users?username=${username}&password=${password}`,{
                    method: 'get',
                    headers :{
                      "Content-Type":"application/json",
                      "Accept":"application/json"
                    }
    });
    result = await result.json(); 
    console.log(result[0])
    if(result.length === 1){
      localStorage.setItem("user-info",JSON.stringify(result[0]));
      navigate('/home');
    }
    
  }

  async function signUp(){
    let result = await fetch(`http://localhost:3001/users?username=${user}`,{
                    method: 'get',
                    headers :{
                      "Content-Type":"application/json",
                      "Accept":"application/json"
                    }
    });
    result = await result.json(); 
    
    if(result.length === 0){

      
      let item = {
        name : name,
        username: user,
        trietLy :"",
        avatar : avt,
        password : pass,
        emailAddress: email
      }
      let result = await fetch(`http://localhost:3001/users`,{
                    method: 'post',
                    headers :{
                      "Content-Type":"application/json",
                      "Accept":"application/json"
                    },
                    body: JSON.stringify(item)
    });
    result = await result.json(); 
     localStorage.setItem("user-info",JSON.stringify(result));
      navigate('/home');
    }
    
  }




        

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e)=>setUsername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>setpassword(e.target.value)}/>

          

          <MDBBtn className="mb-4 w-100" onClick={login}>Sign in</MDBBtn>
          

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='name' type='text' onChange={(e)=>setname(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Username' id='user' type='text' onChange={(e)=>setuser(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='avatar' id='avatar' placeholder='url' type='text' onChange={(e)=>setavt(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' onChange={(e)=>setemail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='pass' type='password' onChange={(e)=>setpass(e.target.value)}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={signUp}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default SignUp_SingIn;