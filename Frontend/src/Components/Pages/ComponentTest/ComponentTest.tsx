//import React from 'react'
import { MuiButton } from '../../Button/Button';
import { MainInfo } from '../../MainInfo/MainInfo';
import { PhotoCarousel } from '../../PhotoCarousel/PhotoCarousel';
import SignUpPage2 from '../SignUpPage2/SignUpPage2';

import React, { useLayoutEffect, useState } from 'react';
import {Stack} from '@mui/material';
import LandingPage from '../LandingPage/LandingPage';
import SignUpPage1 from '../SignUpPage/SignUpPage1';
import Navbar from '../../Navbars/Navbar';

const ComponentTest = (): React.JSX.Element => { 
    return (
		<Navbar NavbarType='SignUp' CurrentPage='SignUp'/>
    ); 
};

export default ComponentTest;