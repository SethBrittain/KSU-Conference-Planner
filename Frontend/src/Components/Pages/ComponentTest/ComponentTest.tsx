//import React from 'react'
import { MuiButton } from '../../Button/Button';
import { MainInfo } from '../../MainInfo/MainInfo';
import NavbarGeneric from '../../NavbarGeneric/NavbarGeneric';
import NavbarGeneralAttendee from '../../NavbarGeneralAttendee/NavbarGeneralAttendee';
import NavbarPresenter from '../../NavbarPresenter/NavbarPresenter';
import NavbarReviewer from '../../NavbarReviewer/NavbarReviewer';
import NavbarScheduler from '../../NavbarScheduler/NavbarScheduler';
import { PhotoCarousel } from '../../PhotoCarousel/PhotoCarousel';

import React, { useLayoutEffect, useState } from 'react';
import {Stack} from '@mui/material';
import LandingPage from '../LandingPage/LandingPage';

function useWindowSize() {
    const [size, setSize] = useState([0,0]);
    useLayoutEffect(()=> { 
        function updateSize()
        {
            setSize([window.innerWidth, window.innerHeight]);
        }
       window.addEventListener('resize', updateSize);
       updateSize();
       return() => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


const ComponentTest = (): React.JSX.Element => { 
    const size = useWindowSize();

    return (
       <LandingPage></LandingPage>
    ); 
};

export default ComponentTest;