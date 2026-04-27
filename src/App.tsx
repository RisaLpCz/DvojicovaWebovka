import { useEffect, useState } from "react";
import Layout from "./Layout";
import PeriodicTable from "./PeriodicTable";
import SearchBar from "./SearchBar";
import ElementDetail from "./ElementDetail";
import Legend from "./Legend";
import type { Element } from "./types";

const ELEMENT_QUERY_PARAM = "element";

const getElementSymbolFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get(ELEMENT_QUERY_PARAM);
};

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
        if (elements.length === 0) {
            return;
        }

        const syncSelectedElementFromUrl = () => {
            const selectedSymbol = getElementSymbolFromUrl();
            const elementFromUrl = selectedSymbol
                ? elements.find((element) => element.znacka.toLowerCase() === selectedSymbol.toLowerCase())
                : null;

            setSelectedElement(elementFromUrl ?? null);
        };

        syncSelectedElementFromUrl();
        window.addEventListener("popstate", syncSelectedElementFromUrl);

        return () => {
            window.removeEventListener("popstate", syncSelectedElementFromUrl);
        };
    }, [elements]);

    useEffect(() => {
        localStorage.setItem("search", search);
    }, [search]);

    const selectElement = (element: Element) => {
        const params = new URLSearchParams(window.location.search);
        params.set(ELEMENT_QUERY_PARAM, element.znacka);

        window.history.pushState(null, "", `${window.location.pathname}?${params.toString()}`);
        setSelectedElement(element);
    };

    const clearSelectedElement = () => {
        const params = new URLSearchParams(window.location.search);
        params.delete(ELEMENT_QUERY_PARAM);

        const searchParams = params.toString();
        const nextUrl = searchParams
            ? `${window.location.pathname}?${searchParams}`
            : window.location.pathname;

        window.history.pushState(null, "", nextUrl);
        setSelectedElement(null);
    };

    if (selectedElement) {
        return (
            <Layout>
                <ElementDetail
                    element={selectedElement}
                    onBack={clearSelectedElement}
                />
            </Layout>
        );
    }

    return (
        <Layout>
            <SearchBar onSearch={setSearch} initialValue={search} />
            <Legend />
            <PeriodicTable
                elements={elements}
                search={search}
                onElementClick={selectElement}
            />
        </Layout>
    );
}

export default App;
