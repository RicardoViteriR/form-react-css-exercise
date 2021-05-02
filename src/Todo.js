export function Todo({ todo, index, remove }) {

    function handler() {
        remove(index);
    }
    return (

        <div className="text-white bg-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
            <div className="px-4 py-5 sm:p-6 ">
                <h1 className="text-lg leading-6 font-medium text-gray-900 " > {todo.text}</h1>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                </div>
                <div className="mt-5">
                    <button
                        type="button"
                        onClick={handler}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    >
                        Delete
                    </button>
                </div>
                <br />
            </div>


        </div >




    )
}
