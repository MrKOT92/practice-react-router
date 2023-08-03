import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Light from "../Light/Light";
import Example2 from "../Example2/Example2";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function MyApplication():JSX.Element {

    return(

        <Routes>
            <Route path="/" element = {<Layout />}>
                <Route path="light" element ={<Light/>}/>
                <Route path="example2" element ={<Example2/>}/>
                <Route path="themeswitcher" element ={<ThemeSwitcher/>}/>

                
            </Route>
        </Routes>
    )
}