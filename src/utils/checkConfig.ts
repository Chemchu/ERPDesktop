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

export const ConfigurateApp = async () => {
    await createDataFolder(folderName);

    if (!await fileExists(productosPath)) {
        const productos = await FetchProductos();
        await createDataFile(productosPath, JSON.stringify(productos))
    }

    if (!await fileExists(ventasPath)) {
        const ventas = await FetchVentas()
        await createDataFile(ventasPath, JSON.stringify(ventas))
    }

    if (!await fileExists(clientesPath)) {
        const clientes = await FetchClientes()
        await createDataFile(clientesPath, JSON.stringify(clientes))
    }

    if (!await fileExists(cierresPath)) {
        const cierres = await FetchCierres()
        await createDataFile(cierresPath, JSON.stringify(cierres))
    }
}
