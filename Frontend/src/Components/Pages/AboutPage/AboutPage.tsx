import Navbar from '../../Navbars/Navbar';
import { Stack } from '@mui/material';
import React from 'react';
import GenericFooter from '../../GenericFooter/GenericFooter';

const AboutPage = (): React.JSX.Element => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh', 
        backgroundColor: 'white',
        overflowX: 'hidden', 
      }}
    >
      <Navbar NavbarType='Generic' CurrentPage='Landing'/>

      <Stack direction='column' alignItems={'center'} sx={{ flexGrow: 1 }} style={{ rowGap: 50 }}>
        <Stack
          direction='row' // for space between header and body
          sx={{ flexGrow: 1, flexWrap: 'wrap', flex: 1, gap: '1vw'}} // for space between header and body
        ></Stack> 

        <div style={{  display: 'flex', marginTop: 'auto', textAlign: 'left', padding: '5%', fontSize: 'large'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque vitae blandit urna. Fusce cursus, odio sed dignissim varius,
          orci mauris pellentesque orci, at vestibulum ex nisi in purus.
          Vestibulum eget pellentesque orci. Nulla feugiat lacinia fringilla.
          Praesent ut viverra arcu. Aliquam id finibus sapien. Sed finibus
          commodo nibh, sed lacinia sem sodales suscipit. Sed sit amet mauris
          magna. Aenean nec vehicula nisl. Curabitur id pellentesque sapien.
          Nulla facilisi. Aenean lacinia felis purus, ac faucibus enim rutrum ut.
          Aliquam ut sem lorem. Pellentesque sed purus vestibulum, ornare felis 
          nec, suscipit eros. In gravida, nunc a suscipit sollicitudin, felis
          mauris accumsan ligula, eget efficitur augue nisi id orci. Nam eu 
          elit consectetur, consequat est nec, faucibus purus. Vestibulum 
          eleifend finibus neque, quis fermentum leo faucibus non. Donec varius
          urna sed lorem fermentum, et pulvinar lectus congue. Phasellus ut
          molestie tellus. Curabitur sed rutrum lacus, eu pretium diam. Ut
          facilisis felis nibh.
          <br/>
          <br/>
          Praesent diam turpis, hendrerit non pulvinar ut, semper ut lacus. Vivamus
          efficitur nunc ipsum, quis scelerisque lectus posuere a. Integer blandit lorem
          sit amet vestibulum dignissim. Phasellus diam velit, tristique id commodo in,
          efficitur et lorem. Nam sit amet cursus ligula. Donec varius tempor eros, mollis
          consectetur ante elementum vel. Proin aliquet eleifend libero. Mauris sagittis 
          massa vitae ante lobortis, posuere imperdiet mauris pellentesque. Etiam feugiat
          quam sed enim laoreet, sed semper leo pharetra. In sollicitudin sapien
          quis tellus tempus malesuada. Integer sed euismod felis.  
          <br/>
          <br/>
          dolor sit amet, consectetur adipiscing elit. Nullam sit amet consequat erat, 
          at dignissim ipsum. Quisque porta molestie dui, vitae lacinia diam pulvinar
          porta. Nulla enim nunc, bibendum sed nibh et, ullamcorper facilisis dolor.
          Vivamus posuere id quam vel aliquet. Nunc efficitur sodales metus. 
          Pellentesque eget sagittis odio. Donec non mi efficitur, consectetur 
          ligula sed, pretium justo. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
          Sed imperdiet ex id neque finibus tempor. Pellentesque habitant morbi 
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Aliquam at odio elementum massa tincidunt viverra.

          Sed diam augue, consequat a turpis sollicitudin, ornare placerat libero.
          Nulla interdum dignissim ligula ut euismod. Mauris libero tellus, 
          convallis nec facilisis fermentum, laoreet et odio. Phasellus nec placerat
          velit. Morbi erat nibh, iaculis vel mauris ac, porttitor venenatis nisi.
          Phasellus pulvinar dictum ex, in egestas metus facilisis sed. Etiam a
          tellus elit. Cras id cursus odio.
        </div>

        <div style={{ display: 'flex', marginTop: 'auto' }}>
          <GenericFooter />
        </div>
      </Stack>
    </div>
  );
};

export default AboutPage;
