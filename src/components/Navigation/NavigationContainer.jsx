import {connect} from "react-redux";
import Navigation from "./Navigation";


const NavigationContainer = ({navigation}) => {

 return (
     <Navigation navigation={navigation} />
 )
}

const mapStateToProps = (state) => ({
        navigation: state.navigation.navbar,
})

export default connect (mapStateToProps)(NavigationContainer)

