import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 사용
import { Word } from "./Word";
import { useEffect, useState } from "react";

export const Day = () => {

    const day = useParams().day; //useParam()은 객체니까 키 값을 부른건가...
    // const { day } = useParams();

    const [words, setWords] = useState([]); // 어? 왜 빈 배열로 만들지?

    useEffect(() => {
        // API 비동기 통신을 위해서 fetch 사용
        fetch("http://localhost:3002/words") // API 경로 적어줌 > promise 반환
        .then(res => {  // res는 http 응답
            return res.json(); // res가 json이 아니라서 json으로 변환 > promise 반환
        })
        .then(data => {
            setWords(data);
        })
    }, []);

    console.log(words);

    /*
    words.map(word => {
        return(
            console.log(word.day)
            
        )
    })
    */
     

    return (
        <>
            <h2>Day {day}</h2>
                <table>
                    <tbody>
                        {
                            words.map(word => (
                               <Word word={word} key={word.id} day={word.day}/>
                            ))
                        }
                    </tbody>
                </table>
        </>
    )
}