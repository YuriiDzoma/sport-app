import {getExercises} from "../../../redux/training-selectors";
import {connect} from "react-redux";


const ListOfExercisesContainer = ({exercises, type}) => {


    return (
        <div>
            {exercises.map(item => {
                if (type === item.muscleGroup) {

                    return (
                        <div key={item.id}>
                            <span>{item.name}</span>
                        </div>
                        )
                }
            }) }
        </div>
    )
}

const mapStateToProps = (state) => ({
    exercises: getExercises(state),
})

export default connect (mapStateToProps, {}) (ListOfExercisesContainer);