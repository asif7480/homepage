// import img
import Image from "../assets/house-banner.png";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[100px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            Join the Digital Revolution: <span className="text-violet-700">Blockchain Land</span> Awaits!

          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ducimus, sit laborum iste iure unde voluptates nemo a rerum
            aspernatur?
          </p>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-center items-end">
          <img src={Image} />
        </div>
      </div>

    </section>
  );
};

export default Banner;