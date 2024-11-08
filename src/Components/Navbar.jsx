import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <NavLink
                to={'/'} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                Home
            </NavLink>
            <NavLink
                to={'/'} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                Home
            </NavLink>
            <NavLink
                to={'/'} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                Home
            </NavLink>
            <NavLink
                to={'/'} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                Home
            </NavLink>
        </div>
    );
};

export default Navbar;