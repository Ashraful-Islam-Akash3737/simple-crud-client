import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log("user", user);
        fetch(`http://localhost:5000/update/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("user updated successfully.") 
                }
                console.log("handle delete data", data);
            })
    }
    return (
        <div>
            <h4>Updated information of {loadedUser.name}</h4>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;