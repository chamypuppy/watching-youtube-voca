import dummy from "../db/data.json";       // 여기서는 {}로 안 불러오네. 왜지?
//export 'dummy' (imported as 'dummy') was not found in '../db/data.json' (possible exports: days, words)
import { Link } from "react-router-dom";

export const DayList = () => {
    console.log(dummy);
    return(
        <ul className="list_day">
            {
                dummy.days.map(day => ( // dummy데이터의 days키의 배열을 가지고 와서 반복한다.
                                        //key는 반복되는 요소에 고유한 값을 넣어주어야 한다.
                    <li key={day.id}>   
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))
            }
        </ul>
    )
}