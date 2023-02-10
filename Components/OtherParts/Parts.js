import ImgPart from "./ImgPart";
import List from "./List";
import QuestionPart from "./QuestionPart";

const Parts = () => {
    return (
        <div className="flex m-2">
            <div className="bg-white w-full h-full">
                <List></List>
                <QuestionPart></QuestionPart>
            </div>
            <div className=" w-60  h-auto">
                <ImgPart></ImgPart>
            </div>
        </div>
    );
};

export default Parts;