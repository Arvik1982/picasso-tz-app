import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

export default function AppRouts(){



    return(
        <Routes>
            <Route path ='/' element={<MainPage/>}/>
            <Route path ='/post/:id' element={<PostPage/>}/>
        </Routes>
    )
}