import styles from './TrainingPrograms.module.scss'
import {CustomLink} from "./CustomLink";

const ProgramsList = ({programs, getProgram}) => (
    <div>

        {programs.map(item => (

            <CustomLink key={item.id} to={'/training/training_programs/' + item.id}>
                <div className={styles.program} onClick={() => {
                    getProgram(item.id, item)
                }}>
                    <span>{item.title}</span>
                </div>
            </CustomLink>

        ))}
    </div>
)


export default ProgramsList;