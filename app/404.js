import useRouter from 'next/router';
import { useEffect } from 'react';
const router = useRouter();
const NotFound = () => {
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },3000)
    },[])
    return ( 
        <div> <h1>Oooops</h1>
        <p> this page not found </p>
        </div>
     );
}
 
export default NotFound;