import List from "./List";
import QuestionPart from "./QuestionPart";

const Parts = () => {
    return (
        <div className="flex mt-10">
            <div className="bg-white w-full h-full">
                <List></List>
                <QuestionPart></QuestionPart>
            </div>
            <div className="bg-sky-800 w-32 h-auto">
                <h1>tell</h1>

                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fug</h1>
            </div>
        </div>
    );
};

export default Parts;