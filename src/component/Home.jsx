import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function Home() {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setData(res.data);
                setRecords(res.data)
            })
            .catch(err => console.log(err))
    }, [])
const Filter=(event)=>
setRecords(data.filter(f=>f.name.toLowerCase().includes(event.target.value)))
  return (
    <div  className='p-5 bg-light'>
      <div>
      <input type="text" placeholder='Search' className='form-control'onChange={Filter} />
      < table  className='table'>
        <thead>
         <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
         </tr>
        </thead>
      <tbody>
        {records.map((d,i) =>(
          <tr key ={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.phone}</td>
          </tr>
        ))}

      </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home
