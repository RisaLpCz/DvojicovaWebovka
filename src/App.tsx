import {useEffect, useState} from "react";
import PeriodicTable from "./PeriodicTable";
import SearchBar from "./SearchBar";
import ElementDetail from "./ElementDetail.tsx";
import type { Element } from "./types";

function App() {
    const [elements, setElements] = useState<Element[]>([]);
    const [selectedElement, setSelectedElement] = useState<Element | null>(null);
    const [search, setSearch] = useState<string>(() => {
        return localStorage.getItem("search") || "";
    });

    useEffect(() => {
        const loadElements = async () => {
            try {
                const response = await fetch("/data/elements.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch elements");
                }

                const data: Element[] = await response.json();
                setElements(data);
            } catch (error) {
                console.error("chyba pri nacitani prvku ", error);
            }
        };

        loadElements();
    }, []);

    useEffect(() => {
        localStorage.setItem("search", search)
    }, [search]);

    if (selectedElement) {
        return (
            <ElementDetail
                element={selectedElement}
                onBack={() => setSelectedElement(null)}
            />
        );
    }

    return (
        <div>
            <h1>Periodická tabulka prvků</h1>

            <SearchBar onSearch={setSearch} initialValue={search} />

            <PeriodicTable
                elements={elements}
                search={search}
                onElementClick={setSelectedElement}
            />
        </div>
    );
}

export default App;