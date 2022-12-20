import ProgramExpandInfo from "./ProgramExpandInfo/ProgramExpandInfo";
import ProgramExpandComments from "./ProgramExpandComments/ProgramExpandComments";
import {ProgramExpandProps} from "./ProgramExpand.types";
import React from "react";

const ProgramExpand: React.FC<ProgramExpandProps> = ({programs, programId, addComment}) => {

    return (
        <div>
            {programs.map((item) => {
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