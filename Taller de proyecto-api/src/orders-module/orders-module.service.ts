import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class OrdersService {
    private orders = [];

    constructor() {
        try {
            const filePath = path.join(process.cwd(), 'src/Api/orders.json'); 
            console.log('Leyendo archivo JSON desde:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf8');

            if (!jsonData) {
                throw new Error('El archivo JSON está vacío');
            }

            this.orders = JSON.parse(jsonData);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
            this.orders = [];
        }
    }

    findAll() {
        return this.orders;
    }

    findOneById(id: number) {
        return this.orders.find(order => Number(order.id) === Number(id));
    }
}

