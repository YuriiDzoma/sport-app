

const ProgramExpandExercises = ({item}) => (
    <div>

        {item.days.map(item => (

                <div key={item.day}>
                    <span>Day {item.day}</span>

                    {item.exercises.map(exercise => (

                            <div key={exercise.id}>
                                <span>{exercise.id}: </span>
                                <span>{exercise.name}</span>
                            </div>
                        )
                    )}
                </div>
            )
        )}
    </div>
)

export default ProgramExpandExercises;