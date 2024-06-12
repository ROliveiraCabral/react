import { useState } from "react";

const ListerRender = () => {

const [list] = useState(["Matheus", "Pedro", "Josias"])

const [users, setUsers] = useState([
    {id:1, name:"maria", age:30},
    {id:2, name:"carlos", age:20},
    {id:3, name:"Rosa", age:40}
])

const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id);
    })
}

  return (
    <>
    <div>
        <ul>
            {list.map((item, i) => ( 
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
    <div>
        <ul>
            {users.map((user) => (
                <li key={users.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
    </>
  )
}

export default ListerRender