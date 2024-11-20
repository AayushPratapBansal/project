import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4  rounded-md  mt-5  active ">
            <div className=" flex justify-evenly flex-wrap text-[30px] ">
                <div className='bar '>
                    <NavLink to="/" className=""> Home</NavLink>
                </div>
                <div className='bar'>
                    <NavLink to="/about" className="">About  </NavLink>
                </div>
                <div className='bar'>
                    <NavLink to="/projects"> Projects  </NavLink>
                </div>
                <div className='bar'>
                    <NavLink to="/experience"> Experience</NavLink>
                </div>
                <div className='bar'>
                    <NavLink to="/contact"> Let's Connect</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
