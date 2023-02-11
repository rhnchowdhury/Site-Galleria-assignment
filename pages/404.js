import Image from "next/image";

const ErrorPage = () => {
    return (
        <div>
            <Image src='/error.jpg' alt='' width={800} height={800} style={{ marginLeft: '20%', marginTop: '5%' }}></Image>
        </div>
    );
};

export default ErrorPage;