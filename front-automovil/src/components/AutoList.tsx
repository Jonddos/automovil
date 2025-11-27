import { useEffect, useState } from "react";
import { api } from "../services/api";
import type {Auto} from "../interfaces/Auto.ts";

export default function AutoList({ reload }: { reload: boolean }) {
    const [autos, setAutos] = useState<Auto[]>([]);

    const load = async () => {
        const res = await api.get<Auto[]>("/autos");
        setAutos(res.data);
    };

    useEffect(() => {
        load();
    }, [reload]);

    return (
        <div className="card-custom section-space">
            <h3 className="card-title">Lista de Automóviles</h3>

            <table className="table table-custom mt-3">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>País</th>
                </tr>
                </thead>

                <tbody>
                {autos.map((a) => (
                    <tr key={a.auto_id}>
                        <td>{a.auto_id}</td>
                        <td>{a.auto_name}</td>
                        <td>{a.auto_modelo}</td>
                        <td>{a.auto_marca}</td>
                        <td>{a.auto_pais}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
