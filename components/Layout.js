import Nav from "./Nav";
import Footer from "./Footer"
const Layout = ({children})=>{
    return (
        <div className="content">
        <Nav/>
        <div>
        {children}
        </div>
        <Footer/>
        </div>
    );
}
export default Layout;