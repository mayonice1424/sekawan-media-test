'use client'
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from 'next/navigation'
import { ReactNode, useState, useEffect } from "react";
import { RootState } from "@/redux/store";
import { HiMiniHome } from "react-icons/hi2";
import { FaTicket } from "react-icons/fa6";
import { setActiveRoute } from "@/redux/slice/navbarSlice";
import { toast } from "react-toastify";
// import { usePathname } from 'next/navigation'
export interface PropsNavbar {
  icon: ReactNode;
  name: string;
  link: string;
}
const GetDataSidebar = () => {
  const pathName = usePathname()
  const [innerHeight, setInnerHeight] = useState(0);
  const [extend, setExtend] = useState(false)
  const dispatch = useDispatch();
  const capitalizeFirstLetter = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const patchRoute = (name: string) => {
    console.log(name)
    dispatch(setActiveRoute(name));
  };
  const getSecondSegment = () => {
    const segments = pathName.split('/');
    if (segments.length < 3) { 
        return null;
    }
    const secondSegment =  capitalizeFirstLetter(segments[2].replace(/_/g, " "));
    return secondSegment;
  };

  const handleRouteChange = () => {
    const currentRoute = pathName === '/' ? '/Overview' : pathName;
    const currentRouteSegments = currentRoute.split("/");
    const firstSegment = currentRouteSegments.length > 1 ? currentRouteSegments[1] : "Overview";
    const nextButtonActive = capitalizeFirstLetter(
      firstSegment.replace(/[_]/g, " ").slice()
    );
    console.log('nextActiveButton:', nextButtonActive);
    patchRoute(nextButtonActive);
  };
  const activeRoute = useSelector(
    (state: RootState) => state.navbar.activeRoute
  );

  const handleLogOut = () =>{
    localStorage.removeItem('role')
    toast.success("Log Out success!", {
      position: "top-right",
    });
  }
  
  console.log(pathName)
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    handleRouteChange()
    getSecondSegment()
    setInnerHeight(window.innerHeight);
    console.log(window.innerHeight)
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
    };
    const delay = setTimeout(() => {
      const userRole = localStorage.getItem('role');
      setIsAdmin(userRole === 'admin');
    }, 1000); 

    return () => clearTimeout(delay);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathName]);

  
  let menu: PropsNavbar[] = [
    {
      icon: <HiMiniHome className={`w-5 h-5`} />,
      name: 'Overview',
      link: '/',
    }
  ];
  
  if (isAdmin) {
    menu.push({
      icon: <FaTicket className="w-5 h-5 "/>,
      name: 'Ticket',
      link: '/ticket',
    });
  }
  const secondSegment = getSecondSegment();
  return {
      menu,
      activeRoute,
      patchRoute,
      secondSegment,
      extend, 
      setExtend,
      innerHeight,
      setInnerHeight,
      handleLogOut,
      isAdmin
    }
}
export default GetDataSidebar;
