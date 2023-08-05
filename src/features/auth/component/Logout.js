import { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Logout = () => {

    const user = useSelector(selectLoggedInUser);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(signOutAsync());
    });

    return (
        <>
            {!user && <Navigate to='/login' replace={true}></Navigate>}
        </>
    );
};


export default Logout;
