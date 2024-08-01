import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DayList = () => {
    const [days, setDays] = useState([]); // 처음에는 빈 배열을 가져와서 API에서 리스트 가져오기

    useEffect(() => { // useEffect 목적: 렌더링이 되고 [API를 호출]한다!
        // API 비동기 통신을 위해서 fetch 사용
        fetch("http://localhost:3002/days") // API 경로 적어줌 > promise 반환
        .then(res => {  // res는 http 응답
            return res.json(); // res가 json이 아니라서 json으로 변환 > promise 반환
        })
        .then(data => {
            setDays(data);
        })

    }, []) // 지금은 빈 배열이어서 한 번만 실행됨

    return(
            <ul className="list_day">
                {
                    days.map(day => ( // dummy데이터의 days키의 배열을 가지고 와서 반복한다.
                                            //key는 반복되는 요소에 고유한 값을 넣어주어야 한다.
                        <li key={day.id}>   
                            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                        </li>
                    ))
                }
            </ul>
    )
}