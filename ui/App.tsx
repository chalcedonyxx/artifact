import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Test from "./Menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                </Route>
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
