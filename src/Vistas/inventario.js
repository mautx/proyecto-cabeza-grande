import ButtonAppBar from "../components/menu";
import BasicTable from "../components/tabla";
import Footer from "../components/footer";
import {useLocation} from "react-router-dom";
import SimpleDialogDemo from "../components/popop";

export default function Inventario(){
    const location = useLocation()
    return(
        <>
        <ButtonAppBar texto={"Inventario"}></ButtonAppBar>
        <BasicTable></BasicTable>


            <Footer></Footer>
        </>
    )
}