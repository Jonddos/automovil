import { useEffect, useState } from "react";
import { api } from "../services/api";
import type {Auto} from "../interfaces/Auto.ts";

interface Props {
    reload: boolean;
    onEdit: (auto: Auto) => void;
}

export default function AutoList({ reload, onEdit }: Props) {
    const [autos, setAutos] = useState<Auto[]>([]);

    const load = async () => {
        const res = await api.get<Auto[]>("/autos");
        setAutos(res.data);
    };

    const deleteAuto = async (id: number | undefined) => {
        if (!id) return;

        const confirmDelete = window.confirm("¿Seguro que quieres eliminar?");
        if (!confirmDelete) return;

        await api.delete(`/autos/${id}`);
        load();
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
                    <th>Acciones</th>
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
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => onEdit(a)}
                            >
                                Editar
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteAuto(a.auto_id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
