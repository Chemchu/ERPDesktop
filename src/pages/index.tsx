import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return (
      <div className="">
        Hola
      </div>
    )
  }

  return (
    <main>
      <div>Eyy</div>
    </main>
  );
}

export default App;
