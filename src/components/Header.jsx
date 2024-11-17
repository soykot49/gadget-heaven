import bannerImg from "../assets/banner.jpg";

const Header = () => {
  
  return (
    <div className={`bg-[#9538E2] md:pb-44 relative md:rounded-br-2xl md:mx-9 md:rounded-bl-2xl 2xl:container 2xl:mx-auto`}>
      <div className="text-center text-white py-5 space-y-5 ">
        <h1 className="text-2xl  md:text-3xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-sm">
          Explore the latest gadgets that will take your experience tothe next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn rounded-full text-[#9538E2] font-bold">
          Shop Now
        </button>
      </div>
      <div
        className=" md:h-[480px] w-full md:w-[65%] bg-center bg-cover border-[20px] border-white/30 backdrop-blur-lg  rounded-2xl md:absolute
        top-[60%] left-[18%] shadow-xl"
      >
        <img
          src={bannerImg}
          alt=""
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Header;
