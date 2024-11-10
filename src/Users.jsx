import { Email } from "@mui/icons-material";
import axios from "axios";
import React from "react";

function Users (){
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios.get('http:/localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))


  }, [])

  const handleDelete = (id) => {
    axios.delete('http:/localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
            Window.location.reload()})
    .catch(errr => console.log(errr))
  }
  return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
        <link to="/create" className='btn btn-success'>Add +</link>
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            
            <th>Email</th>
            
            <th>Age</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              users.map((user) => {
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                  <link to={`/update/${user._id}`} className='btn btn-success'>Update</link>
                  <button  className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                </tr>
              })
            }
        </tbody>
        </table>
    </div>        
    </div>
  )
}

export default Users;