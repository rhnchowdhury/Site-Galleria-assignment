import List from "./LeftSide/List";
import ListDown from "./LeftSide/ListDown";
import QuestionPart from "./LeftSide/QuestionPart";
import FirstPart from "./RightSide/FirstPart";
import SecondPart from "./RightSide/SecondPart";
import ThirdPart from "./RightSide/ThirdPart";

const Parts = () => {
    return (
        <div className="flex flex-col lg:flex-row m-2">
            <div className="bg-white w-full h-full rounded-md">
                <List></List>
                <QuestionPart></QuestionPart>
                <ListDown></ListDown>
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