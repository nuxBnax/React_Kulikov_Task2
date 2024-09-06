import { useEffect, useState } from "react";
function CommentsList() {
    let [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" },
        { id: 6, text: "Это шестой комментарий" },
    ]);

    const [id, setId] = useState('');

    const catchComment = ({ target }) => {
        const divEl = target.closest('.block__comment');
        const elementId = divEl.getAttribute('data-id');

        setId(elementId);
    }

    useEffect(() => {
        const filteredComments = comments.filter((comment) => comment.id != id);
        setComments(filteredComments);

    }, [id]);

    return (
        <div className="block">
            <ul className="block__list">{"Список комментариев"}</ul>
            {comments.map((comm) =>
                <li className="block__comment" key={comm.id} data-id={comm.id} >
                    {comm.text}
                    <button className="block__btn" onClick={catchComment}>Удалить {comm.id} комментарий</button>
                </li>
            )}
        </div>
    );
}

export default CommentsList;