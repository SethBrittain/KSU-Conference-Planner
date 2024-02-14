import { MainInfo } from '../../MainInfo/MainInfo';
import NavbarGeneric from '../../NavbarGeneric/NavbarGeneric';
import React, { useLayoutEffect, useState } from 'react';
import {Stack} from '@mui/material';
import GenericFooter from '../../GenericFooter/GenericFooter';
import PhotosAndInfo from '../../PhotosAndInfo/PhotosAndInfo';
type LandingPageProps = {
    text: string;
}

function useWindowSize() {
    const [size, setSize] = useState([0,0]);
    useLayoutEffect(()=> { 
        function updateSize()
        {
            setSize([window.innerWidth-1, window.innerHeight-1]);
        }
       window.addEventListener('scroll resize', updateSize);
       updateSize();
       return() => window.removeEventListener('scroll resize', updateSize);
    }, []);
    return size;
}

const LandingPage = (): React.JSX.Element => { 
    const size = useWindowSize();

    return (
        <div style={{
            width: size[0],
            height: size[1],
            minHeight: '50vh',
            minWidth: '50wh',
            backgroundColor: 'white'
          }}>
            
           <NavbarGeneric/>
           <Stack direction = 'column' alignItems={'center'}>
                <Stack direction ='row' spacing={(size[0])/150} sx={{ flexGrow: 1, flex:1}}>
                <MainInfo 
                image='https://source.unsplash.com/random'
                title='Test Title'
                description='This is a test description. I am not great at writing these. Hope this works'/>
            
                <MainInfo 
                image='https://source.unsplash.com/random'
                title='Test Title'
                description='This is a test description. I am not great at writing these. Hope this works'/>
            
                <MainInfo 
                image='https://source.unsplash.com/random'
                title='Test Title'
                description='This is a test description. I am not great at writing these. Hope this works'/>

                </Stack>
            
                {/*<PhotosAndInfo image = 'https://source.unsplash.com/random'/>*/}
                
            </Stack>
            
        </div>
    ); 
};

export default LandingPage;