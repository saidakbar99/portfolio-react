import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return(
        <div name='home' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-light-green'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl text-name font-bold'>Saidakbar Zafarov</h1>
                <h2 className='text-4xl sm:text-7xl text-position font-bold'>I'm a Front-end Developer</h2>
                {/*<p className='text-position max-w-[700px] py-4'></p>*/}
                <div className='mt-8'>
                    <button className='group text-white border-2 px-4 py-3 my-2 flex items-center hover:bg-light-green hover:border-light-green'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home