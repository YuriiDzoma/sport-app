import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React from "react";
import {ProgramsListLinksProps} from "./ProgramsListLinks.types";


const ProgramsListLinks:React.FC<ProgramsListLinksProps> = ({programs, getProgram}) => (
    <div>

        {programs.map((item) => (

            <ProgramLink key={item.id} to={'/training/training_programs/' + item.id}>
                <div className={styles.program} onClick={() => {
                    getProgram(item)
                }}>
                    <span>{item.title}</span>
                </div>
            </ProgramLink>

        ))}
    </div>
)


export default ProgramsListLinks;