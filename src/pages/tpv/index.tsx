import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../layout";
import { Producto } from "../../tipos/Producto";
import TpvTool from "./tpvTool";

const TPV = () => {
    const router = useRouter();

    const [Productos, setProductos] = useState<Producto[]>([]);
    const [showModalCerrarCaja, setCerrarCajaModal] = useState<boolean>(false);
    const [showModalAbrirCaja, setAbrirCajaModal] = useState<boolean>(false);

    useEffect(() => {
        const GetData = async () => {
            const data = await fetch(``);

            setProductos([]);
        }

        GetData()
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full h-full">
            <TpvTool productos={Productos} setShowModalAbrir={setAbrirCajaModal} setShowModalCerrar={setCerrarCajaModal} />
            {/* <AnimatePresence mode="wait">
                {showModalCerrarCaja && <CerrarCaja setModalOpen={setCerrarCajaModal} setEmpleadoUsandoTPV={setEmpleadoUsandoTPV} />}
                {showModalAbrirCaja && <AbrirCaja setShowModal={setAbrirCajaModal} setEmpleadoUsandoTPV={setEmpleadoUsandoTPV} />}
            </AnimatePresence> */}
        </motion.div>
    )
}

TPV.PageLayout = Layout;
export default TPV;