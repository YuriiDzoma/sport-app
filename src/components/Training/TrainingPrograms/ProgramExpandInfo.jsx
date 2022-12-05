import styles from "./TrainingPrograms.module.scss";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";

const ProgramExpandInfo = ({item}) => {

    return (
        <div className={styles.programExpandContainer}>
            <div className={styles.programExpand}>
                <h2>{item.name}</h2>
            </div>
            <div className={styles.programExpand}>
                <div className={styles.programExpand_type}>
                    <span>Type:</span>
                    <span>{item.type}</span>
                </div>
            </div>
            <div>
                <span>{item.text}</span>
            </div>
            <div className={styles.redactor}>
                <Link to={`/training/training_programs/${item.id}/redactor/`}>
                    <FontAwesomeIcon icon={faPenToSquare}/>
                </Link>
            </div>
        </div>
    )
}

export default ProgramExpandInfo