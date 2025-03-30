import { Routes, Route } from "react-router-dom";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import Home from "../features/games/Home";
import Game from "../features/game/Game";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            } />
            <Route path="/game/:id" element={
                <ProtectedRoute>
                    <Game />
                </ProtectedRoute>
            } />
        </Routes>
    )  
}

export default AppRoutes;


