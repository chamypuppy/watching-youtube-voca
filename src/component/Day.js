import dummy from "../db/data.json";
import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 사용
import { Word } from "./Word";

export const Day = () => {

    const day = useParams().day; //useParam()은 객체니까 키 값을 부른건가...
    const wordList = dummy.words.filter(word => word.day === Number(day))
    // console.log(wordList);
    console.log(day);
    

    return (
        <>
            <h2>Day {day}</h2>
                <table>
                    <tbody>
                        {
                            wordList.map(word => (
                               <Word word={word} key={word.id}/>
                            ))
                        }
                    </tbody>
                </table>
        </>
    )
}