import styles from "./Comments.module.scss";


const CommentsList = (props) => {
    return (
        <div>
            {props.comments.map(item => {
                return (
                    <div key={item.id} className={styles.comments}>
                        <div className={styles.comments_text}><span>{item.comment}</span></div>
                        <div className={styles.comments_date}><span>{item.date}</span></div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentsList;