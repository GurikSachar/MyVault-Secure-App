function Home() {
    return (
        <div className="grid row-span-5 h-full w-full font-Anta">
            <div className="transition ease-in-out hover:scale-110 duration-200 cursor-pointer flex-col items-center text-white place-self-start mt-10 ml-10 w-96 h-48 text-center rounded-2xl">
                <div className="flex justify-center items-center w-96 h-16 bg-red-600 rounded-t-2xl text-xl">
                    What is MyVault?
                </div>
                <div className="flex justify-center items-center w-96 h-36 p-4 bg-white rounded-b-2xl text-black ">
                    MyVault is an online storage service which provides a secure means to store account credentials for all types of
                    categories including Gaming, Banking, E-Commerce and more.
                </div>
            </div>
            <div className="transition ease-in-out hover:scale-110 duration-200 cursor-pointer flex-col text-white place-self-center w-96 h-48 text-center rounded-2xl">
                <div className="flex justify-center items-center w-96 h-16 bg-red-600 rounded-t-2xl text-xl">
                    How do we display your saved data?
                </div>
                <div className="flex justify-center items-center w-96 h-36 p-4 bg-white rounded-b-2xl text-black">
                    Once you have created a note and saved it, it is displayed in the form of a sticky note like shown here.
                    Your saved data cannot be viewed or accessed unless you have logged in.
                </div>
            </div>
            <div className="transition ease-in-out hover:scale-110 duration-200 cursor-pointer flex-col text-white place-self-end mb-16 mr-10 w-96 h-48 text-center rounded-2xl">
                <div className="flex justify-center items-center w-96 h-16 bg-red-600 rounded-t-2xl text-xl">
                    Who is the creator of this app?
                </div>
                <div className="flex justify-center items-center w-96 p-4 h-40 text-wrap bg-white rounded-b-2xl text-black">
                    That would be me! My name is Gurik Sachar and I am currently final year student at VIT Vellore pursuing a
                    Bachelor of Technology in Electronics and Communication Engineering. I have built this app using MongoDB,
                    Express.js, React.js and Node.js.
                </div>
            </div>
        </div>
    )
}

export default Home