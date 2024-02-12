import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] =useState("");
  const [phone, setPhone] =useState("");
  const [email, setEmail] =useState("");
  const [file, setFile] =useState()

  const upload = () => {
    const formData = new FormData()
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("file", file);
    axios.post('http://localhost:8000/create', formData)
    .then((response) => {
      console.log(response);
    })
    .catch(er => console.log(er))
  }
  

  return (
    <div className='container' style={{paddingTop: 60}}>
        <div className='row'><h1>React JS Upload File with Mysql Insert Data</h1>
          <div className='col-12'>
            <label className='form-label'>Name</label>
            <input type="text" className='form-control' placeholder='Enter Name' autoComplete='off'
             onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='col-12'>
            <label className='form-label'>Phone</label>
            <input type="text" className='form-control' placeholder='Enter Phone Number' autoComplete='off'
             onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className='col-12'>
            <label className='form-label'>Email</label>
            <input type="text" className='form-control' placeholder='Enter Email' autoComplete='off'
             onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='col-12'>
            <label className='form-label'>Upload File</label>
            <input type="file" className='form-control form-control-lg' autoComplete='off'
             onChange={(e) => setFile(e.target.files[0])}/>
          </div>

          <button type='button' className='btn btn-primary btn-lg' onClick={upload} style={{marginTop: '20px'}}>Upload</button>
        </div>
    </div>
  )
}

export default App