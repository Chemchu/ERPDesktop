#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod modelos;
// use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[tauri::command]
fn guardar_venta(compra: &modelos::Venta) -> bool {
    // modelos::add()
    true
}

// #[tauri::command]
// async fn close_splashscreen(window: tauri::Window) {
//   // Close splashscreen
//   if let Some(splashscreen) = window.get_window("splashscreen") {
//     splashscreen.close().unwrap();
//   }
//   // Show main window
//   window.get_window("main").unwrap().show().unwrap();
// }

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![guardar_venta])
        // .invoke_handler(tauri::generate_handler![close_splashscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
