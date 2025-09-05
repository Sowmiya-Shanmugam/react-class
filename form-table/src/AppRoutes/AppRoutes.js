import { AboutPage,HomePage,PageNotFound } from '.../Pages'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../Components/Header'
const AppRoutes=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage />} /> 
            <Route path='/about' element={<AboutPage/> }/>
            <Route path='*' element={<PageNotFound/> }/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;