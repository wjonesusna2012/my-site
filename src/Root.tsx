import React from 'react';
import './App.css';
import SwipeAssembly from './swiper/swipeAssembly';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NavigationMenu from './navigation/navigationMenu';
import ScrollCard from './scrollCard/scrollCard';
import ItemsObject from './scrollCard/constants';
// import Ocean from './images/Ocean.jpg';
import { SwipeAssemblyTestData, SwiperProfessionalCerts } from './textFiles/skills';
import { Outlet } from 'react-router-dom';
import WorkCardList from './workCards/WorkCardList';
import Dialer from './dialer/dialer';
import LandingPage from './isa/LandingPage';
import Background from './images/ClimbingBackground.png';
import { navyWorkCardDetails, workCardDetails } from './workCards/workCardInput';
// const testItems = [{ description: 'Default Ocean', image: Ocean }];

const Layout = () => {
  return (
    <div className="App" style={{
        width: "100%",
        height: "100%",
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <NavigationMenu />
      <div
          style={{
            overflowY: 'scroll',
            backgroundImage: `url(${Background})`,
            backgroundColor: 'var(--alt-text)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            flex: '1 0 0',
          }}
      >
        <div style={{ opacity: 0.95 }}>
          <Outlet />
        </div>
      </div>
      <Dialer />
    </div>
  )
}
const Root = () => {
  const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          path: "/",
          element:
            <LandingPage />
        },
        {
          path: "/about",
          children: [
            {
              path: '/about/hobbies',
              element: <ScrollCard items={ItemsObject['AboutHobbiesItems']}/>
            },
            {
              path: '/about/education',
              element: <ScrollCard items={ItemsObject['AboutEducationItems']}/>
            }

          ]
        },
        {
          path: "/work",
          children: [
            {
              path: '/work/fullstack',
              element: <WorkCardList workCardDetails={workCardDetails}/>,
            },
            {
              path: '/work/navy',
              element: <WorkCardList workCardDetails={navyWorkCardDetails}/>,
            }

          ]
        },
        {
          path: "/skills",
          children: [
            {
              path: "/skills/skills",
              element: <SwipeAssembly swipeData={SwipeAssemblyTestData.swipeData} />
            },
            {
              path: "/skills/accredations",
              element: <SwipeAssembly swipeData={SwiperProfessionalCerts} />
            }
          ]
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
};

export default Root;
