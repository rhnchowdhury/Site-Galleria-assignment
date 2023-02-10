const ThirdPart = () => {
    return (
        <div className="bg-sky-200 h-64 rounded mt-5">
            <h1 className=" bg-sky-500 rounded-md text-white font-medium">Legend (Click to View)</h1>
            <div className="mt-1">
                <button className="bg-green-600 px-3">4 Answer</button>
                <button className="ml-5 bg-red-600 px-3">2 Answer</button>
                <button className="mt-2 bg-violet-400">1 Review+Ans</button>
                <button className="ml-2 bg-yellow-400">1 Review-Ans</button>
                <button className="mt-2 bg-gray-300 px-5">1 Dump</button>
                <button className="ml-3 bg-white px-3">1 No Visit</button>
            </div>
            <div className="m-1">
                <h1 className="text-center bg-sky-500 font-medium">10 All Questions</h1>
            </div>
            <div className="mt-12">
                <button className="ml-1 bg-sky-600 text-white px-6 rounded-md">Profile</button>
                <button className="ml-4 bg-sky-600 text-white px-7 rounded-md">Instr</button>
                <button className="mt-2 bg-sky-600 text-white px-3 rounded-md ml-1">Questions</button>
                <button className="ml-5 bg-sky-600 text-white px-4 rounded-md">Submit</button>
            </div>
        </div>
    );
};

export default ThirdPart;