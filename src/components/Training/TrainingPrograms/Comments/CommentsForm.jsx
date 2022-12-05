import styles from './Comments.module.scss'
import {Field, Form, Formik} from "formik";

const programsCreatorFormValidate = (values) => {
    const errors = {};
    return errors;
}

const CommentsForm = (props) => {

    const submit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            props.addComment(values.comment, props.programId);
            setSubmitting(false);
            resetForm();
        }, 400);
    };

    return (
        <div>
            <Formik
                initialValues={{comment: ''}}
                validate={programsCreatorFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (

                    <Form>
                        <div className={styles.writeComments}>
                            <div className={styles.writeComments_area}>
                                <Field as='textarea' name='comment' />
                            </div>
                            <div className={styles.writeComments_send}>
                                <button type="submit" disabled={isSubmitting}>
                                    <span>Add comment</span>
                                </button>
                            </div>
                        </div>
                    </Form>

                )}
            </Formik>
        </div>
    )
}

export default CommentsForm;