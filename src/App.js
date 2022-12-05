import styles from './App.module.scss';
import Header from "./components/Header/Header";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Training from "./components/Training/Training";
import Friends from "./components/Friends/Friends";

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header />
                <NavigationContainer />
                <div>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer />} />
                        <Route path='/training/*' element={<Training />} />
                        <Route path='/friends/*' element={<Friends />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
