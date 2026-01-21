import Header from "../Ui/Headers"
import Footer from "../Ui/Footers"
import { Outlet } from "react-router-dom"

const  Applayout = () =>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Applayout