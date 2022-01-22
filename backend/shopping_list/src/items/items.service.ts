import { Item } from "./item.interface";

let items: Array<Item> = [
    {
        id: 1,
        nome: "arroz",
        preco: 150,
    },
    {
        id: 2,
        nome: "feijao",
        preco: 300,
    },
    {
        id: 3,
        nome: "carne",
        preco: 1200,
    },
];

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> =>
    items.filter((e) => e.id == id)[0];

export const create = async (newItem: Item): Promise<Item> => {
    const id = new Date().valueOf();

    newItem.id = id;

    items.push(newItem);

    return newItem;
};

export const update = async (itemUpdate: Item): Promise<Item[] | null> => {
    let found = await find(itemUpdate.id);

    if (!found) return null;

    found.nome = itemUpdate.nome;
    found.preco = itemUpdate.preco;

    return items;
};

export const remove = async (id: number): Promise<null | void> => {
    const item = await items.filter((e) => e.id == id)[0];

    if (!item) return null;

    items.splice(items.indexOf(item), 1);
};
