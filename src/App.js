
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";

import './css/style.scss';
import { Route, Routes } from "react-router-dom";
import MainVisual from "./pages/MainVisual";
import MainContent from "./pages/MainContent";
import MainEvent from "./pages/MainEvent";

const App = () => {
    const DATA = '김규리';
    return (
        <div className="wrap">
            <Header DATA={DATA} />
            <Routes>
                <Route path="/" element={<MainVisual />}></Route>
                <Route path="/:id" element={<MainVisual />}></Route>
                <Route path="/content" element={<MainContent />}></Route>
                <Route path="/event" element={<MainEvent />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;