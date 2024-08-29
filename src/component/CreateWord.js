import { useFetch } from "./hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CreateWord = () => {

    const days = useFetch("http://localhost:3002/days");
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3002/words/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            }),
        })
        .then(res => {
            if(res.ok) {
                alert("생성이 완료되었습니다.");
                navigate(`/day/${dayRef.current.value}`); // 해당 날짜 페이지로 이동
            }
        });
    }
    
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                    /* 맵 함수 안에 꼭 소괄호 안 써도 되는구나 */
                    
                </select>
            </div>
            <button onClick={onSubmit}>저장</button>
        </form>
    )
}