import {Link} from "react-router-dom"
const Header=({dataAnyname,name,age})=>{
    return(
        <div>
          <Link to={'/'}>Home</Link> 

              <Link to={'/about'}>About</Link>
              <Link to={'/new-page'}>newPage</Link>   
        </div>
    )
}
export default Header;