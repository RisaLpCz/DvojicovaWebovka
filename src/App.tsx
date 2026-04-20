import { useEffect, useState } from "react";
import Layout from "./Layout";
import PeriodicTable from "./PeriodicTable";
import SearchBar from "./SearchBar";
import ElementDetail from "./ElementDetail";
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
                console.error("chyba pri nacitani prvku", error);
            }
        };

        loadElements();
    }, []);

    useEffect(() => {
        localStorage.setItem("search", search);
    }, [search]);

    if (selectedElement) {
        return (
            <Layout>
                <ElementDetail
                    element={selectedElement}
                    onBack={() => setSelectedElement(null)}
                />
            </Layout>
        );
    }

    return (
        <Layout>
            <SearchBar onSearch={setSearch} initialValue={search} />

            <PeriodicTable
                elements={elements}
                search={search}
                onElementClick={setSelectedElement}
            />
        </Layout>
    );
}

export default App;