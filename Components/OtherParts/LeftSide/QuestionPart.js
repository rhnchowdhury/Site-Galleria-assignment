import Image from "next/image";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets//img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import { BsFillCaretDownFill } from "react-icons/bs";

const QuestionPart = () => {
    return (
        <div className="mt-5 m-2 shadow-2xl rounded-md">
            <div className="flex justify-between bg-sky-600 rounded-md">
                <h1 className="text-white ml-1">Q No: 1</h1>
                <h1 className="text-white mr-1">View in: <span className="badge bg-white text-black">English<BsFillCaretDownFill></BsFillCaretDownFill></span> </h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-2 gap-10">
                <div className="w-full m-1">
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
                <div className="w-full m-1">
                    <h1 className="text-sky-600 uppercase font-medium">Question</h1>
                    <p>A block of mass m is projected with velocity Vo as shown
                        in the fig. The distance between free ends is l0.
                        Maximum displacement of the block during the motion.</p>
                    <Image src={img1} alt=''></Image>
                    <div className="flex">
                        <input type="checkbox" className="checkbox mt-5" />
                        <Image src={img2} alt='' className="ml-2"></Image>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="checkbox mt-6" />
                        <Image src={img3} alt='' className="ml-2"></Image>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="checkbox mt-5" />
                        <Image src={img4} alt='' className="ml-2"></Image>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="checkbox mt-5" />
                        <Image src={img5} alt='' className="ml-2"></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionPart;