import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DayList = () => {
    const [days, setDays] = useState([]); // 처음에는 빈 배열을 가져와서 API에서 리스트 가져오기

    useEffect(() => { // useEffect 목적: 렌더링이 되고 [API를 호출]한다!
        console.log("Count change")
    }, []) // 빈 배열을 넣으면 (상태값 변경과 무관하게) 렌더링이 완료되고 최초에 한 번만 실행된다.

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