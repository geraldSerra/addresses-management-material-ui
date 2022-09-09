import { GridColDef } from '@mui/x-data-grid';

export interface Client {
  id: number;
  name: string;
  lastName: string;
  addresses: string[];
  age: number;
  email: string;
}

export const clients = [
  {
    id: 1,
    name: 'Gerald',
    lastName: 'Serra',
    addresses: [
      'Santo Domingo Este, La Isabelita',
      'Samaná, Malecón',
      'Distrito Nacional, Quisueya',
    ],
    age: 22,
    email:'Gerald@gmail.com',
  },
  {
    id: 2,
    name: 'Robert',
    lastName: 'De La Cruz',
    addresses: [
      'Santo Domingo Este, Invivienda',
      'Distrito nacional, Piantini',
    ],
    age: 21,
    email:'Robert@gmail.com',
  },
  {
    id: 3,
    name: 'Smerling',
    lastName: 'Valera',
    addresses: ['San Cristobal, Haina'],
    age: 24,
    email:'Smerling@gmail.com',
  },
  {
    id: 4,
    name: 'Pedro',
    lastName: 'Santana',
    addresses: [
      'San Pedro, Los Coquitos',
      'Santo Domingo Este, Los Mina',
      'Barahona, La Caña',
    ],
    age: 19,
    email:'Pedro@gmail.com',
  },
  {
    id: 5,
    name: 'Juan',
    lastName: 'Torres',
    addresses: [
      'Elías Piña, Los Montes',
      'Sabana De La Mar, Piedra Blanca',
      'Santo Domingo Este, Las Palmas de Herrera',
      'Distrito Nacional, El Millón',
    ],
    age: 29,
    email:'Juan@gmail.com',
  },
  {
    id: 6,
    name: 'Margarita',
    lastName: 'Rodríguez',
    addresses: [
      'Santo Domingo Este, Los Frailes',
      'San José De Ocoa, Montes del Sur',
    ],
    age: 32,
    email:'Margarita@gmail.com',
  },
  {
    id: 7,
    name: 'Ramón',
    lastName: 'Franco',
    addresses: ['Santo Domingo Este, Villa Mella'],
    age: 35,
    email:'Ramón@gmail.com',
  },
  {
    id: 8,
    name: 'Omar',
    lastName: 'Mendez',
    addresses: ['Distrito Nacional', 'Km 8 de la Independencia'],
    age: 25,
    email:'Omar@gmail.com',
  },
  {
    id: 9,
    name: 'Matías',
    lastName: 'Mella',
    addresses: ['Santo Domingo Este, Los Mameyes'],
    age: 24,
    email:'Matías@gmail.com',
  },
  {
    id: 10,
    name: 'Esmeralda',
    lastName: 'Peralta',
    addresses: [
      'Azua, Los Primos II',
      'Pedernales, Las Matas',
      'Santo Domingo Este, La Cañita',
    ],
    age: 20,
    email:'Esmeralda@gmail.com',
  },
];

export const columns: GridColDef[] = [
  {
    field: 'id',
    hide: true,
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'name',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'e-mail',
    width: 190,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'Address',
    headerName: 'Addresses',
    renderCell: () => 'Loading...',
  },
];
