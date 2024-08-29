import { useNavigate } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

export const CreateDay = () => {

    const days = useFetch("http://localhost:3002/days");
    const navigate = useNavigate();

    console.log(days.length);
    /*
    console.log(days);

    days.map(day =>{
        console.log(day.day);
    })
    */

    function addDay(e) {
        e.preventDefault();
        
        fetch(`http://localhost:3002/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1
            }),
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료되었습니다.");
                navigate(`/day/${days.length+1}`); // 방금 생성한 일자로 넘어가게 했는데, 좋은 코드일까?
            }
        })
    }

    return(
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}