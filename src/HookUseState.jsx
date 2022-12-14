import React from "react";

export const HookUseState = (props) => {

    const [users, setUsers] = React.useState([]);

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [isEdit, setIsEdit] = React.useState(false);
    const [editIndex, setEditIndex] = React.useState(-1);

    const submitForm = () => {
        let user = { name, age };

        if (isEdit) {
            let newUsers = users;
            newUsers[editIndex] = user;
            setUsers([...newUsers]);
            setIsEdit(false);
            setEditIndex(-1);
        } else {
            setUsers([...users, user]);
        }
        setName("");
        setAge("");
    }

    const editData = (user, index) => {
        setName(user.name);
        setAge(user.age);
        setIsEdit(true);
        setEditIndex(index);
    }

    const delData = (user, index) => {
        let newUsers = users;
        newUsers.splice(index, 1);
        setUsers([...newUsers]);
    }

    return <div>
        <h1>Form</h1>
        <label>Name: </label>
        <input type={"text"} placeholder={"Name"} value={name} onChange={(e) => setName(e.target.value)} />

        <br />
        <label>Age:</label>
        <input type={"number"} placeholder={"Age"} value={age} onChange={(e) => setAge(e.target.value)} />

        <br />
        <button onClick={submitForm} >{isEdit ? "Update" : "Submit"}</button>

        <br />
        <br />
        <table style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>Sl.No</td>
                <td style={{ border: "1px solid black" }}>Name</td>
                <td style={{ border: "1px solid black" }}>Age</td>
                <td style={{ border: "1px solid black" }}>Edit</td>
                <td style={{ border: "1px solid black" }}>Delete</td>
            </tr>
            {users.map((user, key) => {
                return <tr key={key} style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }}>{key + 1}</td>
                    <td style={{ border: "1px solid black" }}>{user.name}</td>
                    <td style={{ border: "1px solid black" }}  >{user.age}</td>
                    <td style={{ border: "1px solid black" }}  >
                        <button onClick={(e) => editData(user, key)} >Edit</button>
                    </td>
                    <td style={{ border: "1px solid black" }}  >
                        <button onClick={(e) => delData(user, key)} >Delete</button>
                    </td>
                </tr>
            })}
        </table>
    </div>
}