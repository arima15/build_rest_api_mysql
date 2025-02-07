import { Product, UnitProduct } from "./product.interface";
import { v4 as random } from "uuid";
import pool from '../config/db.config';

export const findAll = async (): Promise<UnitProduct[]> => {
    try {
        const [rows] = await pool.execute('SELECT * FROM products');
        return rows as UnitProduct[];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const findOne = async (id: string): Promise<UnitProduct | null> => {
    try {
        const [rows] = await pool.execute(
            'SELECT * FROM products WHERE id = ?',
            [id]
        );
        const products = rows as UnitProduct[];
        return products[0] || null;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export const create = async (productInfo: Product): Promise<UnitProduct | null> => {
    try {
        const id = random();
        await pool.execute(
            'INSERT INTO products (id, name, price, quantity, image) VALUES (?, ?, ?, ?, ?)',
            [id, productInfo.name, productInfo.price, productInfo.quantity, productInfo.image]
        );
        
        return {
            id,
            ...productInfo
        };
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
};

export const update = async (id: string, updateValues: Product): Promise<UnitProduct | null> => {
    try {
        await pool.execute(
            'UPDATE products SET name = ?, price = ?, quantity = ?, image = ? WHERE id = ?',
            [updateValues.name, updateValues.price, updateValues.quantity, updateValues.image, id]
        );
        
        return {
            id,
            ...updateValues
        };
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
};

export const remove = async (id: string): Promise<null | void> => {
    try {
        await pool.execute('DELETE FROM products WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error deleting product:', error);
        return null;
    }
};