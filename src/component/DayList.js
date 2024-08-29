import { Link } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

export const DayList = () => {

    const days = useFetch("http://localhost:3002/days");

    return(
            <ul className="list_day">
                {
                    days.map(day => ( // key는 반복되는 요소에 고유한 값을 넣어주어야 한다.
                                      // map으로 객체요소들을 돌아!
                                      // day는 객체요소 하나
                                      // day.id는 객체요소 하나의 key이름
                                      // day.day는 객채요소 다른 하나의 key이름
                        <li key={day.id}>   
                            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                        </li>
                    ))
                }
            </ul>
    )
}