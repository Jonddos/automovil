import { useState } from "react";
import AutoForm from "./components/AutoForm";
import AutoList from "./components/AutoList";

export default function App() {
    const [reload, setReload] = useState(false);

    return (
        <div>
            <div className="container mt-4">
                <AutoForm onSave={() => setReload(!reload)} />
                <AutoList reload={reload} />
            </div>
        </div>
    );
}