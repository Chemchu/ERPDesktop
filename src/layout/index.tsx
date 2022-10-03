import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NextProgress from "next-progress";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../components/sidebar";
import { SidebarOption } from "../enums/SidebarOptions";

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
    exit: {
        y: '-100vh',
        opacity: 0,
        transition: {
            ease: [0.87, 0, 0.13, 1],
            duration: 1
        }
    },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [IndexSidebar, setSidebarIndex] = useState<SidebarOption>(SidebarOption.Inicio);

    const router = useRouter();
    return (
        <div className="dark:bg-gray-800 h-screen w-screen overflow-hidden bg_food">
            <NextProgress />
            <div className="flex flex-col items-start w-full h-full justify-start">
                <motion.div key={router.route} className="w-full h-full" initial={variants.initial} animate={variants.animate} exit={variants.exit}>
                    {children}
                </motion.div>
                <Sidebar setIndex={setSidebarIndex} IndexSeleccionado={IndexSidebar} />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover={false}
            />
        </div >
    );
}

export default Layout;