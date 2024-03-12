import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tablefun = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/findall")
      .then(res => {
        console.log(res.data)
        setData(res.data.userData)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  function handleDel(email) {
    axios.delete(`http://localhost:8000/api/delete/${email}`)
      .then(res => {
        console.log(res.data)
        setData(prevData => prevData.filter(item => item.email))
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
    
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>

          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {
          // data.map((each) => {
          //   return (
          //     <>
          //       <tr>

          //         <td>{each.name}</td>
          //         <td>{each.email}</td>
          //         <td>{each.password}</td>
          //       </tr>

          //     </>
          //   )
          // })
          data.map((each, index) => (
            <tr key={index}>
              <td>{each.name}</td>
              <td>{each.email}</td>
              <td>{each.password}</td>
              <td><button onClick={()=>{navigate('/update')
              localStorage.setItem(each.email)
            }} >Update</button></td>
              <td><button onClick={()=>{handleDel(each.email)}}>Delete</button></td>

            </tr>
          ))
        }

        {/* <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr> */}
      </tbody>
    </Table>
  );

}

export default Tablefun