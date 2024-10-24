
const Banner = () => {
    return (
        <div style={{background:'url(https://i.ibb.co.com/CmRH89n/Rectangle-1-1.png)',backgrounPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'400px'}}>
            <div className="flex flex-col items-center text-center gap-5 justify-center">
            <h1 className="text-5xl text-white">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-xl text-gray-300">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-5">
            <button className="btn bg-green-500 text-2xl">Explore Now</button>
            <button className="btn bg-green-500 text-2xl">Our FeedBack</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;