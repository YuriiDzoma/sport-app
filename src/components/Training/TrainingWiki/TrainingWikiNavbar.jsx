import {Link} from "react-router-dom";
import styles from './TrainingWiki.module.scss'


const TrainingWikiNavbar = ({trainingWikiNavbar}) => {
    return (
        <div className={styles.TrainingWikiNavbar}>
            {trainingWikiNavbar.map(item => (
                <Link key={item.id} to={item.url}>
                    <span>{item.title}</span>
                </Link>
            ))}

        </div>
    )
}

export default TrainingWikiNavbar;