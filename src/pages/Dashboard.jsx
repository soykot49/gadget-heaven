import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const { pathname } = useLocation();
  const isDashboard = () =>
    pathname != "/dashboard" || pathname != /^\/product\/\d+$/.test(pathname);

  const isDashboardPath = pathname === "/dashboard";

  return (
    <div>
       <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div
        className={` ${
          !isDashboard() ? "mx-9" : "mx-0 "
        } bg-[#9538E2]  py-8  relative flex flex-col gap-5 2xl:container 2xl:mx-auto`}
      >
        <h1 className="text-5xl mb-2 text-center font-bold text-white">
          Dashboard
        </h1>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>
        <div className="self-center flex gap-3">
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `btn rounded-full px-10 font-bold  ${
                isActive || isDashboardPath ? "bg-white text-black" : "bg-[#9538E2]"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `btn rounded-full px-10 font-bold text-black ${
                isActive ? "bg-white" : "bg-[#9538E2]"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
