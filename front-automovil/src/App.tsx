import { useState } from "react";
import AutoForm from "./components/AutoForm";
import AutoList from "./components/AutoList";
import EditModal from "./components/EditModal";
import type {Auto} from "./interfaces/Auto.ts";

export default function App() {
    const [reload, setReload] = useState(false);
    const [autoEdit, setAutoEdit] = useState<Auto | null>(null);

    return (
        <div className="container-custom">
            <AutoForm onSave={() => setReload(!reload)} />
            <AutoList
                reload={reload}
                onEdit={(auto) => setAutoEdit(auto)}
            />

            {autoEdit && (
                <EditModal
                    auto={autoEdit}
                    onClose={() => setAutoEdit(null)}
                    onUpdate={() => setReload(!reload)}
                />
            )}
        </div>
    );
}
