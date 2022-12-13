import ProgramExpandInfo from "../ProgramExpandInfo";
import ProgramExpandComments from "../Comments/ProgramExpandComments";

const ProgramExpand = ({programs, programId, addComment}) => {

    return (
        <div>
            {programs.map(item => {
                if (item.id === programId) {

                    return (
                        <div key={item.id}>
                            <ProgramExpandInfo item={item}/>
                            <ProgramExpandComments addComment={addComment} program={item}/>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default ProgramExpand;