import styles from '../TrainingPrograms.module.scss'
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";


const programsCreatorFormValidate = () => {
    const errors = {};
    return errors;
}

const CreateProgramForm = (props) => {

    const navigate = useNavigate();

    const submit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            props.isEditor
                ? props.editProgram(props.programValue.id, values.name, values.typeOf, values.text)
                :  props.addProgram(values.name, values.typeOf, values.text);
            setSubmitting(false);
            resetForm();
            navigate('/training/training_programs/');
        }, 400);
    };

    return (
        <div>
            <Formik
                initialValues={ props.isEditor
                    ? {name: `${props.programValue.name}`, typeOf: `${props.programValue.type}`, text: `${props.programValue.text}` }
                    : {name: '', typeOf: 'aerobic', text: '' }}

                validate={programsCreatorFormValidate}
                onSubmit={submit}
            >
                {({values, isSubmitting}) => (
                    <Form>
                        <div className={styles.createProgramInfo}>

                            <div className={styles.createProgramInfo_name}>
                                <span>Name:</span>
                                <Field type="text" name="name" />
                            </div>

                            <div className={styles.createProgramInfo_type}>
                                <span>Type:</span>
                                <Field as="select" name="typeOf">
                                    <option value={'aerobic'}>Aerobic</option>
                                    <option value={'anaerobic'}>Anaerobic</option>
                                    <option value={'mixed'}>Mixed</option>
                                </Field>
                            </div>

                        </div>
                        <div className={styles.createProgramWrite}>

                            <div>
                                <Field as='input' name='text' />
                            </div>

                            <div className={styles.createProgramWrite_create}>
                                <button type="submit" disabled={isSubmitting}>
                                    {props.isEditor
                                        ? <span>confirm changes</span>
                                        : <span>Create</span>}
                                </button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default CreateProgramForm;