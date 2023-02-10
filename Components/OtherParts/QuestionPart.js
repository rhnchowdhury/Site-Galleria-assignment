import { BsFillCaretDownFill, IconName } from "react-icons/bs";
const QuestionPart = () => {
    return (
        <div className="mt-5">
            <div className="flex justify-between bg-sky-600">
                <h1 className="text-white">Q No: 1</h1>
                <h1 className="text-white">View in: <span className="badge bg-white text-black">English<BsFillCaretDownFill></BsFillCaretDownFill></span> </h1>
            </div>
            <div className="flex mt-2">
                <div>
                    <h1 className="text-sky-600 uppercase font-medium">Question Instruction</h1>
                    <p>Passage You want to hit a small box on the floor with a
                        marble fired from a spring-loaded gun that is mounted
                        on a table. The target box is a distance R horizontally
                        from the edge of the table; see the figure to the right.
                        You compress the spring a distance d, but the center of
                        the marble falls short by a distance r of the center of the
                        box. How far should you compress the spring to score a
                        direct hit (neglect friction)?</p>
                </div>
                <div>
                    <h1 className="text-sky-600 uppercase font-medium">Question</h1>
                    <p>A block of mass m is projected with velocity Vo as shown
                        in the fig. The distance between free ends is l0.
                        Maximum displacement of the block during the motion.</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionPart;