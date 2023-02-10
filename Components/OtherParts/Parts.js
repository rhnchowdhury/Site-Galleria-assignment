import List from "./List";
import QuestionPart from "./QuestionPart";
import FirstPart from "./RightSide/FirstPart";
import SecondPart from "./RightSide/SecondPart";
import ThirdPart from "./RightSide/ThirdPart";

const Parts = () => {
    return (
        <div className="flex m-2">
            <div className="bg-white w-full h-full rounded-md">
                <List></List>
                <QuestionPart></QuestionPart>
            </div>
            <div className=" w-60  h-auto">
                <FirstPart></FirstPart>
                <SecondPart></SecondPart>
                <ThirdPart></ThirdPart>
            </div>
        </div>
    );
};

export default Parts;