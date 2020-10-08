export interface Detallealquiler{
    PKId?:number;
    FKId_TblAlquiler: number;
    FKid_TblJuegos:number;
    Precio:number;
    Fecha_Alquiler:String;
    Fecha_Fin_alquiler:string;
    Subtotal:number;
    Iva :number;
    Total:number;
}