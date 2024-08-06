import { useParams } from "react-router-dom"; // url에 포함된 값을 얻을 때 사용
import { Word } from "./Word";
import { useFetch } from "./hooks/useFetch";

export const Day = () => {

    const day = useParams().day; 
    //useParam()을 통해서 주솔창의 문자열이 들어온다. 아 이거 .day는 꼭 붙여야하네 = =
    // const { day } = useParams();

    const words = useFetch(`http://localhost:3002/words?day=${day}`);


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