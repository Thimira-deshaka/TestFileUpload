import React, { useState } from 'react'

function App() {
  const [name, setName] =useState("");
  const [phone, setPhone] =useState("");
  const [email, setEmail] =useState("");
  const [file, setFile] =useState()
  

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
            <input type="text" className='form-control form-control-lg' placeholder='Enter Name' autoComplete='off'
             onChange={(e) => setFile(e.target.files[0])}/>
          </div>

          <button type='button' className='btn btn-primary btn-lg' style={{marginTop: '20px'}}>Upload</button>
        </div>
    </div>
  )
}

export default App