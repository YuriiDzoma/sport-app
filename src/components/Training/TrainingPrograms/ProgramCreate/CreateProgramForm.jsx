import {useFormik} from "formik";
import {useNavigate} from "react-router";
import styles from "../TrainingPrograms.module.scss";
import CreateName from "./CreateName";
import CreateType from "./CreateType";
import CreateExercises from "./CreateExercises";
import CreateDay from "./CreateDay";


const CreateProgramForm = (props) => {

    const navigate = useNavigate();

    const formValues = props.isEditor
        ? {
            title: `${props.programValue.title}`, typeOf: `${props.programValue.typeOf}`, days: props.programValue.days
        }
        : {
            title: '', typeOf: 'aerobic', days: [
                {day: 1, exercises: [{id: 1, name: ''}, {id: 2, name: ''}, {id: 3, name: ''}]}
            ],
        }


    const formik = useFormik({

        initialValues: formValues,

        onSubmit: values => {
            setTimeout(() => {
                props.isEditor
                    ? props.editProgram(props.programValue.id, values)
                    :  props.addProgram(values);
                navigate('/training/training_programs/');
                formik.setSubmitting(false);
            }, 400);
        },

    });

    return (
        <form onSubmit={formik.handleSubmit}>

            <div className={styles.createProgramInfo}>
                <CreateName formik={formik} />
                <CreateType formik={formik} />
            </div>

            <div className={styles.createProgramWrite}>

                <CreateExercises formik={formik} />
                <CreateDay formik={formik} />

            </div>
            <div className={styles.createProgramWrite_create}>
                <button type="submit" disabled={formik.isSubmitting}>
                    <span>{props.isEditor
                        ? <span>confirm changes</span>
                        : <span>Create</span>}</span>
                </button>
            </div>
        </form>)
}

export default CreateProgramForm;