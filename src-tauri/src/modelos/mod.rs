use serde::{Deserialize, Serialize};
#[derive(Debug, Deserialize, Serialize)]
pub struct Venta {
    pub num_factura: String,
    pub productos: Vec<ProductoVendido>,
    pub dinero_efectivo: f32,
    pub dinero_tarjeta: f32,
    pub precio_sin_dto: f32,
    pub precio_total: f32,
    pub cambio: f32,
    pub cliente: Cliente,
    pub vendido_por: Empleado,
    pub modificado_por: Empleado,
    pub tipo: String,
    pub descuento_efectivo: f32,
    pub descuento_tarjeta: f32,
    pub tpv: String,
    pub empleado: String,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Producto {
    pub nombre: String,
    pub cantidad: u16,
    pub familia: String,
    pub proveedor: String,
    pub ean: String,
    pub iva: f32,
    pub precio_compra: f32,
    pub precio_venta: f32,
    pub margen: f32,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct ProductoVendido {
    pub nombre: String,
    pub cantidad_vendida: u16,
    pub familia: String,
    pub proveedor: String,
    pub ean: String,
    pub iva: f32,
    pub precio_compra: f32,
    pub precio_venta: f32,
    pub precio_final: f32,
    pub dto: f32,
    pub margen: f32,
}
pub struct ProductoDevuelto {
    pub nombre: String,
    pub cantidad_devuelta: u16,
    pub familia: String,
    pub proveedor: String,
    pub ean: String,
    pub iva: f32,
    pub precio_compra: f32,
    pub precio_venta: f32,
    pub precio_final: f32,
    pub dto: f32,
    pub margen: f32,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Empleado {
    pub nombre: String,
    pub apellidos: String,
    pub email: String,
    pub dni: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Cliente {
    pub nif: String,
    pub nombre: String,
    pub calle: String,
    pub cp: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Cierre {
    pub apertura: String,
    pub cierre: String,
    pub abierto_por: Empleado,
    pub cerrado_por: Empleado,
    pub caja_inicial: u8,
    pub ventas_efectivo: f32,
    pub ventas_tarjeta: f32,
    pub ventas_totales: f32,
    pub dinero_esperado: f32,
    pub dinero_real: f32,
    pub dinero_retirado: f32,
    pub fondo_caja: f32,
    pub nota: String,
    pub tpv: String,
}

pub struct Devoluciones {
    pub productos_devueltos: Vec<ProductoDevuelto>,
    pub dinero_devuelto: f32,
    pub venta_original: Venta,
    pub tpv: String,
    pub cliente: Cliente,
    pub trabajador: Empleado,
    pub modificado_por: Empleado,
    pub created_at: String,
    pub updated_at: String,
}
