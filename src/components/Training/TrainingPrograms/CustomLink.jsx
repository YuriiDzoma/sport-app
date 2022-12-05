import { Link } from "react-router-dom";
import styles from './TrainingPrograms.module.scss';
import {useLocation} from "react-router";

const CustomLink = ({children, to, ...props}) => {
    let location = useLocation();
    let activeLocation = location.pathname === to;

    return (
        <Link
            to={to}
            className={activeLocation ? styles.link_active : null}
            {...props}
        >
            {children}
        </Link>
    )
}

export {CustomLink};