const ListDown = () => {
    return (
        <div className="lg:ml-2">
            <button className="bg-sky-600 text-white px-3 uppercase rounded-md">Clear Response</button>
            <button className="ml-1 lg:ml-2 bg-sky-600 text-white uppercase px-3 rounded-md">Review</button>
            <button className="mt-1 lg:ml-2 bg-sky-600 text-white uppercase px-3 rounded-md">Dump</button>
            <button className="ml-1 lg:ml-2 bg-sky-600  text-white uppercase px-3 rounded-md">Previous</button>
            <button className="ml-1 lg:ml-2 bg-sky-900  text-white uppercase px-3 rounded-md">Next</button>
            <button className="mt-1 lg:ml-2 bg-sky-600  text-white uppercase px-3 rounded-md">Changeable</button>
        </div>
    );
};

export default ListDown;