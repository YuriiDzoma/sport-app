const ADD_PROGRAM = 'ADD_PROGRAM'
const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_PROGRAM = 'EDIT_PROGRAM'

let initialState = {
    programs: [
        {id: 1, name: '3-day Split', type: 'anaerobic', text: '',
            comments: [
                {id: 1, comment: 'This is gooood!', date: '26.11.2022'},
                {id: 2, comment: 'it is a favorite program', date: '27.11.2022'}
            ]},
        {id: 2, name: '2-day Split', type: 'anaerobic', text: '',
            comments: [

            ]},
        {id: 3, name: 'crossfit complex 1', type: 'mixed', text: '',
            comments: [
                {id: 1, comment: 'very strong!', date: '24.11.2022'}
            ]},
        {id: 4, name: 'sprint 3km', type: 'aerobic', text: '',
            comments: [
                {id: 1, comment: 'not bad, not bad.....', date: '12.11.2022'}
            ]},
    ],
    exercises: [
        {id: 1, name: 'Barbell bench press', muscleGroup: 'Pectoral Muscles',
            about: 'The barbell bench press is a classic exercise popular among all weight lifting circles'},
        {id: 2, name: 'Incline bench press', muscleGroup: 'Pectoral Muscles',
            about: ''},
        {id: 3, name: 'Breeding dumbbells lying', muscleGroup: 'Pectoral Muscles',
            about: ''},
        {id: 4, name: 'Pec dec', muscleGroup: 'Pectoral Muscles',
            about: ''},
        {id: 5, name: 'Leg press', muscleGroup: 'Leg Muscles',
            about: ''},
        {id: 6, name: 'Dumbbell Hammer', muscleGroup: 'Biceps Muscles',
            about: ''},
    ]
}

const trainingReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PROGRAM: {

            let newProgram = {
                id: state.programs.length + 1,
                name: action.name,
                type: action.typeOf,
                text: action.text,
                comments: [],
            };
            return {
                ...state,
                programs: [newProgram, ...state.programs]
            };
        }

        case EDIT_PROGRAM: {
            return {
                ...state,
                programs: state.programs.map(program => {
                    if (program.id === action.programId) {
                        return {
                            ...program,
                            name: action.name,
                            type: action.typeOf,
                            text: action.text,
                        }
                    } return program;
                })
            }
        }

        case ADD_COMMENT: {
            return {
                ...state,
                programs: state.programs.map(program => {
                    if (program.id === action.programId) {

                        let newComment = {
                            id: program.comments.length + 1,
                            comment: action.comment,
                            date: new Date().toLocaleDateString(),
                        };
                        return {
                            ...program,
                            comments: [newComment, ...program.comments]
                        }
                    }
                    return program;
                })
            }
        }

        default:
            return state;
    }
}

export const addProgram = (name, typeOf, text) => ({type: ADD_PROGRAM, name, typeOf, text});
export const addComment = (comment, programId) => ({type: ADD_COMMENT, comment, programId});
export const editProgram = (programId, name, typeOf, text) => ({type: EDIT_PROGRAM, programId, name, typeOf, text})

export default trainingReducer;