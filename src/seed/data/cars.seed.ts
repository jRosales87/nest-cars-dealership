import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/cars.interface";


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Fiesta',
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Focus',
    },
    {
        id: uuid(),
        brand: 'Tesla',
        model: 'Model S',
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'M3',
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'M4',
    },
    {
        id: uuid(),
        brand: 'Porsche',
        model: '911',
    }
]