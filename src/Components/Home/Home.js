import { MainContext } from "../Contexts/MainContext";
import { useContext } from "react";

const Home = () => {
    const contextUse = useContext(MainContext);
    return (
        <div>
            {contextUse}
        </div>
    )
}

export default Home
