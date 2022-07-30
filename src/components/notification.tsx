import React, {useEffect, useState} from 'react';
import '../asset/notification.css';

const Notification = () => {

    const [enable,setEnable]=useState<boolean>(true)

    useEffect(()=>{
        setTimeout(()=>{
            setEnable(false)
        },5000)
    },[])

    return (
        <>
            {
                enable &&
                <div className="alert alert-simple alert-danger">
                    Please turn on your vpn
                </div>
            }
        </>


    );
};

export default Notification;