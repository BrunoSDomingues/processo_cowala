import { Item } from "./item.interface";

let items: Array<Item> = [
    {
        id: 1,
        item: "arroz",
        price: 150,
    },
    {
        id: 2,
        item: "feijao",
        price: 300,
    },
    {
        id: 3,
        item: "carne",
        price: 1200,
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
    const item = await items.filter((e) => e.id == itemUpdate.id)[0];

    if (!item) return null;

    items.push(itemUpdate);

    return items;
};

export const remove = async (id: number): Promise<null | void> => {
    const item = await items.filter((e) => e.id == id)[0];

    if (!item) return null;

    items.splice(items.indexOf(item), 1);
};
