import { useContext } from "react";
import { Context } from "./context";

const Progress = () => {
    const progress = useContext(Context)
    return ( 
        <div className={`bg-red-600 w-screen lg:w-full sticky top-0 z-20 h-1`} style={{width:`${String(progress)}%`}}>
        </div>
     );
}
 
export default Progress;