import {CustomLink} from "./CustomLink";


const trainingNavbar = (props) => {
    return (
            props.trainingNavigation.map((item) => (
                <div key={item.id}>
                    <CustomLink to={item.url}><span>{item.tittle}</span></CustomLink>
                </div>
            ))
    )
}

export default trainingNavbar;