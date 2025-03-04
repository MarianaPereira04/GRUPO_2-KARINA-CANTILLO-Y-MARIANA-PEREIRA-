import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CategoriesService {
    private categories = [];

    constructor() {
        try {
            const filePath = path.join(process.cwd(), 'src/Api/categories.json'); 
            console.log('Leyendo archivo JSON desde:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf8');

            if (!jsonData) {
                throw new Error('El archivo JSON está vacío');
            }

            this.categories = JSON.parse(jsonData);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
            this.categories = [];
        }
    }

    findAll() {
        return this.categories;
    }

    findOneById(id: number) {
        return this.categories.find(categorie => Number(categorie.id) === Number(id));
    }
}

