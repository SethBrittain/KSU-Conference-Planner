
import React from "react";

export const NotFound = (): React.JSX.Element => { 
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            backgroundColor: 'white'
          }}>
            <div>
                <h1 style={{fontSize: '64px'}}>ERROR 404 Page Not Found</h1>
                <text style={{fontSize:'32px'}}>If expecting a page to have loaded, please report this bug by emailing someone@ksu.edu</text>
            </div>
            
        </div>
        
    ); 
};