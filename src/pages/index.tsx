import { motion } from "framer-motion";
import { useRouter } from "next/router";

function App() {
  const router = useRouter();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="w-screen h-screen bg-white p-4">
      <div className="flex flex-col gap-10 w-full h-full justify-center items-center rounded-2xl bg-blue-400">
        <span className="text-9xl text-white">ERPDesktop</span>
        <button className="bg-white cursor-pointer rounded-lg p-2"
          onClick={() => { router.push('/home') }}>
          Click!
        </button>
      </div>
    </motion.main>
  );
}

export default App;
