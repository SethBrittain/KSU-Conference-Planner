import { MuiButton } from '../../Button/Button';
import { MainInfo } from '../../MainInfo/MainInfo';
import NavbarGeneric from '../../NavbarGeneric/NavbarGeneric';
import NavbarGeneralAttendee from '../../NavbarGeneralAttendee/NavbarGeneralAttendee';
import NavbarPresenter from '../../NavbarPresenter/NavbarPresenter';
import NavbarReviewer from '../../NavbarReviewer/NavbarReviewer';
import NavbarScheduler from '../../NavbarScheduler/NavbarScheduler';
import { PhotoCarousel } from '../../PhotoCarousel/PhotoCarousel';
const ComponentTest = (): React.JSX.Element => { 
    return (
        <div>
            { <MuiButton/> }
            { <MainInfo 
            image='https://source.unsplash.com/random'
            title='Test Title'
            description='This is a test description. I am not great at writing these. Hope this works'/>
            }
            <NavbarGeneric></NavbarGeneric>
            <PhotoCarousel></PhotoCarousel>
            <NavbarGeneralAttendee></NavbarGeneralAttendee>

            <NavbarPresenter></NavbarPresenter>
            <NavbarReviewer></NavbarReviewer>
            <NavbarScheduler></NavbarScheduler>
        </div>
    ); 
};

export default ComponentTest;