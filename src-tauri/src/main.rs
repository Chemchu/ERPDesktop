#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;

#[tauri::command]
fn minimize_screen(path: String, contents: String) -> bool {
    let result = fs::write(path, contents);

    match result {
        Ok(_) => true,
        Err(_) => false,
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![minimize_screen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
