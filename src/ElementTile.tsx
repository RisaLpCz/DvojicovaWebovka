import type { ElementTileProps } from "./types";

const categoryClassMap: Record<string, string> = {
    "alkalické kovy": "cat-alkali-metal",
    "kov alkalických zemin": "cat-alkaline-earth",
    "přechodný kov": "cat-transition-metal",
    "lanthanoid": "cat-lanthanide",
    "aktinoid": "cat-actinide",
    "postpřechodný kov": "cat-transition-metal",
    "polokov": "cat-metalloid",
    "halogen": "cat-halogen",
    "vzácný plyn": "cat-noble-gas",
    "nekov": "cat-non-metal",
};

function ElementTile({ element, isHighlighted, onClick }: ElementTileProps) {
    const catClass = categoryClassMap[element.category] ?? "cat-unknown";

    return (
        <div
            onClick={() => onClick(element)}
            className={`element-tile ${catClass} ${isHighlighted ? "highlighted" : ""}`}
        >
            <div className="atomic-number">{element.protonoveCislo}</div>
            <div className="symbol">{element.znacka}</div>
            <div className="name">{element.nazev}</div>
        </div>
    );
}

export default ElementTile;