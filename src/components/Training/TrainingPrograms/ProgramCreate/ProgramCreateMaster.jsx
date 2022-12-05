import styles from '../TrainingPrograms.module.scss'
import {Field, FieldArray, Form, Formik} from "formik";
import {useNavigate} from "react-router";


const programsCreatorFormValidate = () => {
    const errors = {};
    return errors;
}

const CreateProgramFormMaster = (props) => {

    const navigate = useNavigate();

    const submit = (values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
            props.isEditor
                ? props.editProgram(props.programValue.id, values.name, values.typeOf, values.text)
                : props.addProgram(values.name, values.typeOf, values.text);
            setSubmitting(false);
            resetForm();
            navigate('/training/training_programs/');
        }, 400);
    };


    return (
        <div>
            <Formik
                initialValues={props.isEditor
                    ? {
                        name: `${props.programValue.name}`,
                        typeOf: `${props.programValue.type}`,
                        text: `${props.programValue.text}`
                    }
                    : {
                        name: '', typeOf: 'aerobic', days: [
                            {
                                day: 1, exercises: [
                                    {id: 1, exercise: '1'},
                                    {id: 2, exercise: '2'},
                                    {id: 3, exercise: '3'},
                                ]
                            },
                            {
                                day: 2, exercises: [
                                    {id: 1, exercise: '4'},
                                    {id: 2, exercise: '5'},
                                    {id: 3, exercise: '6'},
                                ]
                            },
                        ]

                    }}

                validate={programsCreatorFormValidate}
                onSubmit={submit}

            >
                {({values, isSubmitting}) => (
                    <Form>
                        <div className={styles.createProgramInfo}>

                            <div className={styles.createProgramInfo_name}>
                                <span>Name:</span>
                                <Field type="text" name="name"/>
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
                            <FieldArray name='days'
                                        render={arrayHelpers => (

                                            <div>
                                                {values.days.map((day, index) => {
                                                    const dayNumber = index;

                                                    return (
                                                        <div key={index}>
                                                            <div>
                                                                <span>Day {day.day}</span>
                                                                {day.exercises.map((item, index) => {

                                                                    return (
                                                                        <div className={styles.field}
                                                                             key={index}>
                                                                            <Field as='input'
                                                                                   name={`days.${dayNumber}.exercises.${index}.exercise`}/>
                                                                            <button
                                                                                className={day.exercises.length !== item.id || day.exercises.length === 1 ? styles.disable : styles.remove}
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    return (
                                                                                        arrayHelpers.pop()
                                                                                    )
                                                                                }}>
                                                                            </button>
                                                                            <button
                                                                                className={day.exercises.length !== item.id ? styles.disable : styles.add}
                                                                                type="button"
                                                                                onClick={() =>  {
                                                                                    return (

                                                                                        values.days[dayNumber].exercises.push({
                                                                                            id: day.exercises.length + 1,
                                                                                            exercise: '',
                                                                                        })
                                                                                    )
                                                                                }

                                                                            }>
                                                                            </button>

                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )}
                                            </div>
                                        )}/>
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

export default CreateProgramFormMaster;