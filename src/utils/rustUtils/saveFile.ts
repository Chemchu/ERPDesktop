import { invoke } from "@tauri-apps/api";
import { save } from "@tauri-apps/api/dialog";
import { notifyError, notifySuccess, notifyWarn } from "../toastify";

const SaveFile = async (contents: String) => {
    try {
        const savePath = await save();
        if (!savePath) { return; }

        const successful = await invoke("save_file", { path: savePath, contents: contents })
        if (successful) {
            notifySuccess("Archivo guardado correctamente.")
        }
        else {
            notifyWarn("No se ha podido guardar el documento.")
        }
    }
    catch (err) {
        notifyError(err);
    }
}

export default SaveFile;