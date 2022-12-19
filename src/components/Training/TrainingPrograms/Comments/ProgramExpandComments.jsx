import styles from './Comments.module.scss'
import CommentsForm from "./CommentsForm";
import CommentsSubtitle from "./CommentsSubtitle";
import CommentsList from "./CommentsList";


const ProgramExpandComments = ({program, addComment}) => {

    return (
        <div className={styles.commentsContainer}>
            <CommentsForm programId={program.id} addComment={addComment}/>
            {program.comments.length > 0 ? <CommentsSubtitle /> : null}
            <CommentsList comments={program.comments} />
        </div>
    )
}

export default ProgramExpandComments;