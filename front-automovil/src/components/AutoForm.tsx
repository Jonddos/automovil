import { useEffect, useState } from "react";
import { getPaises } from "../services/paises";
import { api } from "../services/api";
import type { Pais } from "../interfaces/Pais";
import type { Auto } from "../interfaces/Auto";

interface Props {
    onSave: () => void;
}

export default function AutoForm({ onSave }: Props) {
    const [paises, setPaises] = useState<Pais[]>([]);
    const [form, setForm] = useState<Auto>({
        auto_name: "",
        auto_modelo: "",
        auto_marca: "",
        auto_pais: "",
    });

    useEffect(() => {
        getPaises().then(setPaises).then(()=>{
            console.log("Paises cargados:", paises);
        });
    }, []);

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        await api.post("/autos", form);
        onSave();

        setForm({
            auto_name: "",
            auto_modelo: "",
            auto_marca: "",
            auto_pais: "",
        });
    };

    return (
        <div className="card-custom mb-4">
            <h3 className="card-title">Registrar Automóvil</h3>
            <form onSubmit={submit}>
                <input
                    className="form-control mb-2"
                    name="auto_name"
                    placeholder="Nombre"
                    value={form.auto_name}
                    onChange={handleInput}
                />

                <input
                    className="form-control mb-2"
                    name="auto_modelo"
                    placeholder="Modelo"
                    value={form.auto_modelo}
                    onChange={handleInput}
                />

                <input
                    className="form-control mb-2"
                    name="auto_marca"
                    placeholder="Marca"
                    value={form.auto_marca}
                    onChange={handleInput}
                />

                <select
                    className="form-control mb-2"
                    name="auto_pais"
                    value={form.auto_pais}
                    onChange={handleInput}
                >
                    <option value="">Seleccione un país</option>
                    {paises.map((p) => (
                        <option key={p.code} value={p.name}>
                            {p.name}
                        </option>
                    ))}
                </select>

                <button className="btn-primary-custom">Guardar</button>
            </form>
        </div>
    );
}
