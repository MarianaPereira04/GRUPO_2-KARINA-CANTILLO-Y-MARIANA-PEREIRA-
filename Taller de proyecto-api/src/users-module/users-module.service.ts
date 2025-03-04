import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
    private users = [];

    constructor() {
        try {
            const filePath = path.join(process.cwd(), 'src/Api/users.json'); 
            console.log('Leyendo archivo JSON desde:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf8');

            if (!jsonData) {
                throw new Error('El archivo JSON está vacío');
            }

            this.users = JSON.parse(jsonData);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
            this.users = [];
        }
    }

    findAll() {
        return this.users;
    }

    findOneById(id: number) {
        return this.users.find(user => Number(user.id) === Number(id));
    }
}

