import styles from './TrainingPrograms.module.scss'
import {connect} from "react-redux";
import ProgramsList from "./ProgramsList";
import {addComment, addProgram, editProgram} from "../../../redux/training-reducer";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreate/ProgramCreateButton";
import {useState} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import {getPrograms} from "../../../redux/training-selectors";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";

const TrainingProgramsContainer = ({programs, addProgram, editProgram, addComment}) => {

    const [program, setProgram] = useState();
    const [programValue, setProgramValue] = useState();

    const getProgram = (id, value) => {
        setProgram(id);
        setProgramValue(value);
    }

    return (

        <div className={styles.trainProgramContainer}>
            <div className={styles.programsList}>

                <ProgramCreateButton />
                <ProgramsList programs={programs} getProgram={getProgram}/>

            </div>
            <div className={styles.programsContent}>

                <Routes>
                    <Route path={'create/'} element={<CreateProgramForm
                        isEditor={false} addProgram={addProgram}/>}/>

                    <Route path={":id"} element={<ProgramExpand
                        programId={program} programs={programs} addComment={addComment} />} />

                    <Route path={`:id/redactor/`} element={<CreateProgramForm
                        isEditor={true} programValue={programValue} editProgram={editProgram} />}/>
                </Routes>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    programs: getPrograms(state),
})
export default connect (mapStateToProps, {addProgram, addComment, editProgram})(TrainingProgramsContainer);