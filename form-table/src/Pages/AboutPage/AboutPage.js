
import { useLocation,useNavigate } from 'react-router-dom';
const AboutPage=()=>{
    const MyNavigate=useNavigate();
     const Location=useLocation();
     console.log(Location.state);
     const JustNavigate=()=>{
      MyNavigate('/',{state:{name:'john',age:30}});
     }
    return(
        <div>
            <h1 onClick={JustNavigate}>Login</h1>
        </div>
    )
    
}
export default AboutPage;