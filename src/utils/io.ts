import { BaseDirectory, createDir, readTextFile, writeFile } from "@tauri-apps/api/fs";

export const createDataFolder = async (folderName: string): Promise<boolean> => {
    try {
        await createDir(folderName, {
            dir: BaseDirectory.App,
            recursive: true,
        });
        return true;
    }
    catch (err) {
        return false
    }
};

export const createDataFile = async (fileName: string, contents: string): Promise<boolean> => {
    try {
        await writeFile(
            {
                contents: contents,
                path: fileName,
            },
            {
                dir: BaseDirectory.App,
            }
        );
        return true;
    } catch (err) {
        return false
    }
};

export const readDataFile = async (fileName: string): Promise<{ successful: boolean, text: string }> => {
    try {
        const text = await readTextFile(fileName, {
            dir: BaseDirectory.App
        })
        return { successful: true, text: text };
    }
    catch (err) {
        return { successful: false, text: "" };
    }
}

export const fileExists = async (fileName: string): Promise<boolean> => {
    try {
        const text = await readTextFile(fileName, {
            dir: BaseDirectory.App,
        });
        return Boolean(text);
    } catch (err) {
        return false
    }
};