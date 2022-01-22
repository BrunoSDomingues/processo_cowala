import axios from "axios";
import { Item } from "./item.interface";

let items: Array<Item> = [
    {
        id: 1,
        moedaOriginal: "BRL",
        moedaDaConversao: "USD",
        valorEnviado: 10,
        valorConvertido: 50,
    },
    {
        id: 2,
        moedaOriginal: "USD",
        moedaDaConversao: "BRL",
        valorEnviado: 50,
        valorConvertido: 10,
    },
    {
        id: 3,
        moedaOriginal: "BRL",
        moedaDaConversao: "USD",
        valorEnviado: 100,
        valorConvertido: 500,
    },
];

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> =>
    items.filter((e) => e.id == id)[0];

export const create = async (newItem: Item): Promise<Item> => {
    const id = new Date().valueOf();
    newItem.id = id;

    // if converting to same currency, no need to convert value
    if (newItem.moedaDaConversao === newItem.moedaOriginal)
        newItem.valorConvertido = newItem.valorEnviado;
    else {
        try {
            // get data from specified API
            const response = await axios.get("https://economia.awesomeapi.com.br/last/USD-BRL");

            // select data from response
            let data : any = response.data["USDBRL"];
            let bid : number = parseFloat(data["bid"]);
            let ask : number = parseFloat(data["ask"]);

            // calculate te average
            let convertValue : number = (bid + ask) / 2;

            if (newItem.moedaDaConversao == "BRL") {
                newItem.valorConvertido = Number((newItem.valorEnviado * convertValue).toFixed(4));
            }

            else newItem.valorConvertido = Number((newItem.valorEnviado / convertValue).toFixed(4));
        }
        catch (e : any) {
            console.log(e.message);
        }        
    }

    items.push(newItem);

    return newItem;
};

export const remove = async (id: number): Promise<null | void> => {
    const item = await items.filter((e) => e.id == id)[0];

    if (!item) return null;

    items.splice(items.indexOf(item), 1);
};
