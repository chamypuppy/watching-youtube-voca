import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 사용
import { Word } from "./Word";
import { useEffect, useState } from "react";

export const Day = () => {

    const day = useParams(); //useParam()을 통해서 주솔창의 문자열이 들어온다. .day는 뗌
    // const { day } = useParams();

    const [words, setWords] = useState([]); // 어? 왜 빈 배열로 만들지?

    useEffect(() => {
        // API 비동기 통신을 위해서 fetch 사용
        fetch(`http://localhost:3002/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        })
    }, []);
     

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