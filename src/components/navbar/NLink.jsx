import { NavLink } from "react-router-dom";

const NLink = ({ path, title }) => {
    return (
        <NavLink to={path} className={`nav-link`}>
            {" "}
            {title}{" "}
        </NavLink>
    );
};

export default NLink;
