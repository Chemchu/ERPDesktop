import { Dispatch, SetStateAction } from "react";
import { FetchCierres } from "./fetches/cierresFetches";
import { FetchClientes } from "./fetches/clienteFetches";
import { FetchProductos } from "./fetches/productosFetches";
import { FetchVentas } from "./fetches/ventasFetches";
import { createDataFile, createDataFolder, fileExists } from "./io";

const folderName = "localDatabase"
const productosPath = `${folderName}/productos.json`
const ventasPath = `${folderName}/ventas.json`
const clientesPath = `${folderName}/clientes.json`
const cierresPath = `${folderName}/cierres.json`

export const ConfigurateApp = async (setStep?: Dispatch<SetStateAction<string>>): Promise<{ message: string, successful: boolean }> => {
    setStep("Comprobando la conexión a internet...");
    await createDataFolder(folderName);
    const hasNetwork = await CheckInternetConnection();

    if (!hasNetwork) { return { message: "El ordenador no tiene conexión a internet o el servidor no está disponible", successful: false } }

    setStep("Actualizando el registro de productos...");
    const productos = await FetchProductos();
    if (productos.length > 0) {
        await createDataFile(productosPath, JSON.stringify(productos))
    }

    setStep("Actualizando el registro de ventas...");
    const ventas = await FetchVentas()
    if (ventas.length > 0) {
        await createDataFile(ventasPath, JSON.stringify(ventas))
    }

    setStep("Actualizando el registro de clientes...");
    const clientes = await FetchClientes()
    if (clientes.length > 0) {
        await createDataFile(clientesPath, JSON.stringify(clientes))
    }

    setStep("Actualizando el registro de cierres...");
    const cierres = await FetchCierres()
    if (cierres.length > 0) {
        await createDataFile(cierresPath, JSON.stringify(cierres))
    }

    return { message: "Datos actualizados correctamente", successful: true }
}

const CheckInternetConnection = async (): Promise<boolean> => {
    const res = await fetch(`/api/status`);
    return (await res.json()).isOnline
}