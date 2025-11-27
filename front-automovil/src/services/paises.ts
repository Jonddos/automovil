import { api } from "./api";

export interface Pais {
    code: string;
    name: string;
}

export const getPaises = async (): Promise<Pais[]> => {
    const res = await api.get<Pais[]>("/paises");

    console.log(res.data)
    return res.data;
};