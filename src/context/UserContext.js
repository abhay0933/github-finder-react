import axios from "axios";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");

    const searchUser = async (username) => {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const data = res.data;
            setUserData(data);
            setError("");
        } catch (error) {
            setUserData(null);
            setError("Enter a valid username");
        }
    };

    const clearUserData = () => {
        setUserData(null);
        // setUserName("");
        setError("");
    };

    return (
        <UserContext.Provider value={{ userName, setUserName, userData, error, searchUser, clearUserData }}>
            {props.children}
        </UserContext.Provider>
    );
};

export const User = () => {
    const ctx = useContext(UserContext);
    return ctx;
};
