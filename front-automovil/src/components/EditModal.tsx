import { useEffect, useState } from "react";
import { api } from "../services/api";
import type {Auto} from "../interfaces/Auto.ts";

interface Props {
    auto: Auto | null;
    onClose: () => void;
    onUpdate: () => void;
}

export default function EditModal({ auto, onClose, onUpdate }: Props) {
    const [form, setForm] = useState<Auto>({
        auto_id: 0,
        auto_name: "",
        auto_modelo: "",
        auto_marca: "",
        auto_pais: "",
    });

    useEffect(() => {
        if (auto) setForm(auto);
    }, [auto]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const updateAuto = async () => {
        if (!form.auto_id) return;

        const { auto_id, ...data } = form;

        await api.put(`/autos/${auto_id}`, data);

        onUpdate();
        onClose();
    };

    if (!auto) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <h3>Editar Automóvil</h3>

                <input
                    className="form-control mb-2"
                    name="auto_name"
                    value={form.auto_name}
                    onChange={handleInput}
                    placeholder="Nombre"
                />

                <input
                    className="form-control mb-2"
                    name="auto_modelo"
                    value={form.auto_modelo}
                    onChange={handleInput}
                    placeholder="Modelo"
                />

                <input
                    className="form-control mb-2"
                    name="auto_marca"
                    value={form.auto_marca}
                    onChange={handleInput}
                    placeholder="Marca"
                />

                <input
                    className="form-control mb-2"
                    name="auto_pais"
                    value={form.auto_pais}
                    onChange={handleInput}
                    placeholder="País"
                />

                <button className="btn btn-primary w-100" onClick={updateAuto}>
                    Guardar cambios
                </button>

                <button className="btn btn-secondary w-100 mt-2" onClick={onClose}>
                    Cancelar
                </button>
            </div>
        </div>
    );
}
