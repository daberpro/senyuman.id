import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useObserver } from "./App";

export function Alert({_message,_color,_close}) {
    
    const [message, setMessage] = useState(_message);
    const [color, setColor] = useState(_color || "green");
    const [close, setClose] = useState(_close);

    useEffect(()=>{
        setTimeout(()=>{
            setClose(true);
            setMessage("");
        },5000);
    },[]);

    return (
        <>
            {
                !close &&
                <div className={`z-[9999999] gap-5 fixed top-[20px] right-[20px] p-5 w-[fit-content] h-[fit-content] rounded-lg bg-${color}-100 flex items-center flex-wrap justify-between`}>
                    <h1 className={`text-${color}-500`}>{message}</h1>
                    <span className="text-white">
                        x
                    </span>
                </div>
            }
        </>
    );
}

export function AlertSet(){

    const _Observer = useObserver();
    const [sets,setSets] = useState([]);

    useMemo(()=>{
        _Observer.Unsubscribe("Alert");
        _Observer.Subscribe("Alert", ({ message, color }) => {
            console.log(message);
            setSets(d => [...d,{ message, color, close: false }]);
        });
    });

    return (
        <>
            {
                sets.map((d,i)=>{
                    return <Alert key={i} _color={d.color} _message={d.message} _close={d.close} />
                })
            }
        </>
    );

}