import './Navbar.css';

type navbarProps = {

}

const Navbar = (): React.JSX.Element => {
    return (
        <div className='flex-column sm:flex items-center shadow-md py-2 px-3 bg-white'>
            <div className='flex items-center bg-white'>
                <svg className='shrink h-24 w-24'><circle cx='50' cy='50' r='30' fill='#A21CAF'></circle></svg>
                <span className='py-1 px-5 text-3xl grow'>Planner</span>
                <button className='bg-gray-300 outline p-2 m-2 rounded sm:hidden' onClick={(e)=>{toggleMenu()}}>Menu</button>
            </div>
            <div id="collapseMenu">
                <div className='nav-item py-1 px-5 text-lg'>Home</div>
                <div className='nav-item py-1 px-5 text-lg'>Sessions</div>
                <div className='nav-item py-1 px-5 text-lg'>About</div>
                <div className='nav-item py-1 px-5 text-lg'>FAQ</div>
                <div className='grow'></div>
                <button className='nav-item p-3 m-1 bg-fuchsia-700 text-white rounded text-lg'>Logout</button>
            </div>
        </div>
    );
}

const toggleMenu = () => {
    let menu : HTMLElement|null = document.getElementById("collapseMenu");
    if (menu != null) {
        if (menu.style.overflow === "hidden") {
            menu.style.overflow = "auto";
            menu.style.maxHeight = "0";
        } else {
            menu.style.overflow = "hidden";
            menu.style.maxHeight = "30vh";
        }
    }
}

export default Navbar;