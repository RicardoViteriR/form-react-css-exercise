export function Todo({ todo, index, remove }) {

    function handler() {
        remove(index);
    }
    return (
        <div className="todo md:bg-green-500 " onClick={handler}>
            {todo.text}
        </div>
    )
}
