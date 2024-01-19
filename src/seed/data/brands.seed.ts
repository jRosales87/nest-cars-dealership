import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';


export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'ford',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'tesla',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'bmw',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'porsche',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'audi',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'mercedes',
        createAt: new Date().getTime(),
    }
]