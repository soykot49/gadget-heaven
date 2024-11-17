import { Link, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
       <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <Header></Header>
      <div className="bg-[#F7F7F7]  min-h-screen">
        <div className="md:pt-[350px] container mx-auto ">
          <h1 className=" text-2xl md:text-3xl py-10  font-bold text-center md:py-5">
            Explore Cutting-Edge Gadgets
          </h1>
          <div className="flex flex-col md:flex-row gap-10 pb-5">
            <div className="md:w-[20%] ">
              <Categories categories={categories}></Categories>
            </div>
            <div className="w-[90%] mx-auto md:mx-0 md:w-[80%]">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
