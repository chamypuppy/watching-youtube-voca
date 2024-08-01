import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 사용
import { Word } from "./Word";
import { useEffect, useState } from "react";

export const Day = () => {

    const day = useParams().day; 
    //useParam()을 통해서 주솔창의 문자열이 들어온다. 아 이거 .day는 꼭 붙여야하네 = =
    // const { day } = useParams();

    const [words, setWords] = useState([]); // 어? 왜 빈 배열로 만들지?

    useEffect(() => {
        // API 비동기 통신을 위해서 fetch 사용
        fetch(`http://localhost:3002/words?day=${day}`) // JSP랑 비슷하구마잉
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        })
    }, []); // 빈배열에 day를 넣은 이유> day의 최신값을 보장받을라고.
               /* 빈배열로 냅두면 day를 최신값으로 유지하지 못하기 때문이다.
                  이 배열 부분을 의존성 배열이라고 하는 것 같다. */

    return (
        <>
            <h2>Day {day}</h2>
                <table>
                    <tbody>
                        {
                            words.map(word => (
                               <Word word={word} key={word.id}/>
                            ))
                        }
                    </tbody>
                </table>
        </>
    )
}