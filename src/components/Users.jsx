import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const allData = useLoaderData();
    const [users, setUsers] = useState(allData);

    const handleDelete = _id => {
        console.log("delete this", _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log("handle delete data", data);
            if (data.deletedCount>0) {
                alert("deleted successfully");
                const remaining = users.filter(user=> user._id !== _id);
                setUsers(remaining);
            }
        })
        
    }
    return (
        <div>
            <h3>Users:{allData.length}</h3>
            <div className="">
                {
                    allData.map(user=> <p key={user._id}>{user._id} &nbsp; &nbsp; {user.name} &nbsp;&nbsp; {user.email} 
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={()=>handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;