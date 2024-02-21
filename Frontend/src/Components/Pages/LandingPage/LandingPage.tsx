import { MainInfo } from '../../MainInfo/MainInfo';
import NavbarGeneric from '../../NavbarGeneric/NavbarGeneric';
import React, { useLayoutEffect, useState } from 'react';
import {Stack} from '@mui/material';
import GenericFooter from '../../GenericFooter/GenericFooter';
import PhotosAndInfo from '../../PhotosAndInfo/PhotosAndInfo';
import { Margin } from '@mui/icons-material';
type LandingPageProps = {
    text: string;
}

const LandingPage = (): React.JSX.Element => { 
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
            minHeight: '700px'
          }}>
           <NavbarGeneric/>
           <Stack direction = 'column' alignItems={'center'} sx={{ flexGrow: 1}}>
                
                <Stack direction ='row' sx={{ flexGrow: 1, flexWrap: 'wrap', flex:1, gap: '1vw'}}>
                <MainInfo 
                image='https://picsum.photos/200/300'
                title='Test Title'
                description='This is a test description. I am not great at writing these. Hope this works'                
                />
            
                <MainInfo 
                image='https://picsum.photos/100'
                title='Test Title'
                description='This is a test description. I am not great at writing these. Hope this works'/>
            
                <MainInfo 
                image='https://picsum.photos/400/500'
                title='Test Title'
                description='This is a test description. I am not great at writing these. Hope this works'/>
                </Stack>
            
                {<PhotosAndInfo text='Phot info, the info about the photo, the info text 
                specifically relating to the provided photo, that info.' image = 'https://source.unsplash.com/random'
                spacing={(size[0])/300} size={2} side={true}/>}
                
            </Stack>
        </div>
    ); 
};

export default LandingPage;