import { useState } from "react";
import { UserName } from "./UserName";

export const Hello = props => {

    const [name, setName] = useState("Mike");
    const { age } = props; // props 분할 대입 (118p)
    const [addAge, setAddAge] = useState(age);
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    return(
        <div>
            <h1>Hello</h1>
            <p>{name}({addAge}):{msg}</p>
            <UserName name={name}/>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
                setAddAge((addAge) => addAge+1)
            }}>change</button>
        </div>
    )
}