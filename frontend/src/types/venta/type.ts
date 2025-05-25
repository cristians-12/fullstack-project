export interface SaleType {
    id?: number;
    created_at?: Date | string; 
    name: string;
    production_value: number;
    public_sale_value: number;
    cuantity: number;
    gross_sale?: number;
    investment_value: number;
    profit?: number;
    profit_percentage?: number;
}