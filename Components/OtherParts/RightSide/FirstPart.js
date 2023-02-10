import { useState } from 'react';

const FirstPart = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 bg-sky-200 rounded-md py-2'>
            <div className=''>
                {selectedImage && (
                    <div className='m-1'>
                        <img alt="not fount" width={"100px"} src={URL.createObjectURL(selectedImage)} />
                        <br />
                    </div>
                )}
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }} />
            </div>
            <div>
                <p>Time</p>
                <p>Left: 08:39:31</p>
                <p>Name:</p>
            </div>
        </div>
    );
};

export default FirstPart;