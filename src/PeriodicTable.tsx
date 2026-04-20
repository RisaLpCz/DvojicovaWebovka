import type { Element } from "./types";
import ElementTile from "./ElementTile";

type PeriodicTableProps = {
    elements: Element[];
    search: string;
    onElementClick: (element: Element) => void;
};

function PeriodicTable({ elements, search, onElementClick }: PeriodicTableProps) {
    return (
        <div className="periodic-table">
            {elements.map((element) => {
                const isHighlighted =
                    search.trim() !== "" &&
                    (
                        element.nazev.toLowerCase().includes(search.toLowerCase()) ||
                        element.znacka.toLowerCase().includes(search.toLowerCase())
                    );

                return (
                    <div
                        key={element.protonoveCislo}
                        style={{
                            gridColumn: element.group ?? undefined,
                            gridRow: element.period ?? undefined,
                        }}
                    >
                        <ElementTile
                            element={element}
                            onClick={onElementClick}
                            isHighlighted={isHighlighted}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default PeriodicTable;