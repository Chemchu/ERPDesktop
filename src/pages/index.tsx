import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ConfigurateApp } from "../utils/checkConfig";

function Home() {
  const [configMessage, setConfigMessage] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isConfigurated, setIsConfigurated] = useState<boolean>(false);
  const [configuracionSteps, setConfiguracionSteps] = useState<string>("Comprobando configuración...");

  useEffect(() => {
    const CheckData = async () => {
      try {
        console.log(navigator.onLine);

        const { message, successful } = await ConfigurateApp(setConfiguracionSteps);
        setIsConfigurated(successful);
        setConfigMessage(message);
        setIsLoading(false);
      } catch (err) {

      }
    }
    CheckData()

  }, [])
  const router = useRouter();

  if (isLoading) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col gap-20 justify-center items-center
        bg-gradient-to-r from-blue-700 to-sky-500
        w-screen h-screen text-white">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          className="text-9xl ">
          ERPDesktop
        </motion.span>
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }} exit={{ opacity: 0 }}
            className="flex flex-col gap-1 w-full justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-20 h-20 animate-spin-slow">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </motion.svg>
            <span className="text-xl font-thin">{configuracionSteps}</span>
          </motion.div>
        </AnimatePresence>
      </motion.main>
    );
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col gap-20 justify-center items-center
        bg-gradient-to-r from-blue-700 to-sky-500
        w-screen h-screen text-white">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
        className="text-8xl xl:text-9xl">
        ERPDesktop
      </motion.span>
      <AnimatePresence>
        <div className="flex flex-col gap-1 w-full justify-center items-center">
          {
            isConfigurated ?
              <>
                <button className="w-1/6 min-w-[12rem] max-w-[16rem] text-xl p-2 text-center
                  bg-orange-500 hover:bg-orange-600 text-white rounded-lg
                  ease-in-out hover:scale-105 transform-cpu duration-150"
                  onClick={() => { router.push('/login') }}>
                  Online
                </button>
                <span>o</span>
                <button className="w-1/6 min-w-[12rem] max-w-[16rem] text-xl p-2 text-center
                  bg-red-500 hover:bg-red-600 text-white rounded-lg
                  ease-in-out hover:scale-105 transform-cpu duration-150"
                  onClick={() => { router.push('/dashboard') }}>
                  Offline
                </button>
              </>
              :
              <>
                <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }} exit={{ opacity: 0 }}
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                  className="w-20 h-20 animate-spin-slow">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </motion.svg>
                <span className="text-xl font-thin">{configMessage}</span>
              </>
          }
        </div>
      </AnimatePresence>
    </motion.main>
  );
}

export default Home;