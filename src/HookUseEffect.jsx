import React from "react";
import axios from "axios";

const apiEndpoint = 'https://634b6992317dc96a30848e8e.mockapi.io/api/v1/todos';
const httpMethod = 'GET';

export const HookUseEffect = (props) => {

    const [state, setState] = React.useState({ currentBtn: "white" });
    const [color, setColor] = React.useState(state.currentBtn);
    const [count, setCount] = React.useState(0);
    const [todos, setTodo] = React.useState([]);

    const changeLight = (color) => {
        setState({ ...state, currentBtn: color })
    }

    const incrementCounter = () => setCount(count + 1)

    // Case 1
    React.useEffect(() => {
        setColor(state.currentBtn);
    }, [state.currentBtn]);

    // Case 2
    React.useEffect(() => {
        // let isEven = count % 2 === 0;
        // alert(isEven ? "Even number" : "Odd Number");
    });

    // Case 3
    React.useEffect(() => {
        axios.get(apiEndpoint).then(res => {
            setTodo(res.data);
        })
    }, []);

    return <div>
        <h1>Use Effect Hook</h1>

        <div style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: color, border: " 1px solid black" }}>

        </div>

        {/* Red */}
        <button onClick={(e) => changeLight("red")} >Red</button>
        <button onClick={(e) => changeLight("yellow")}>Yellow</button>
        <button onClick={(e) => changeLight("green")}>Green</button>
        <button onClick={(e) => changeLight("white")}>Off</button>

        <button onClick={incrementCounter}>Increment</button>

        {/* Table */}
        <h1>My Todos</h1>
        <table>
            <thead>
                <td>ID</td>
                <td>Name</td>
                <td>Is Completed</td>
            </thead>

            <tbody>
                {todos.map((todo) => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>{todo.isCompletd ? "Yes" : "No"}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}