import { useState } from "react";
import kor from "../db/data.json";

export const Word = (props) => {
    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow () {
        setIsShow(!isShow);
    }

    function toggleDone () {
        //setIsDone(!isDone);
        fetch(`http://localhost:3002/words/${word.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            }),
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone) // JSON에서도 바꿨지만, State에서도 바꿔줘야 하는구나...
            }
        });
    }

    // 삭제버튼 > 콘솔창 > json data에서 삭제 / 삭제한 단어를 제외하고 페이지에 다시 그려줘야 함(아~ 컴포넌트 재렌더링!!!)
    function del(){
        if(window.confirm("삭제하시겠습니까?")){ // window.confirm 이유 : Unexpected use of 'confirm'  no-restricted-globals
            fetch(`http://localhost:3002/words/${word.id}`, {
                method: "DELETE",
                /* headers: {
                    "Content-Type": "application/json",
                    를 안 써도 되는구나. 삭제할 때에는 특별히 정보를 넘겨줄 필요가 없어서
                } */
            })
            .then(res => {
                if(res.ok) {
                    setWord({id: 0});
                }
            })
        }
    }

    if(word.id === 0) return null; // 왜 null을 리턴한걸까?

    return(
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기" }</button>
                <button onClick={del} className="btn_del">
                    삭제
                </button>
            </td>
        </tr>
    )
}