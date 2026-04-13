import type { ElementTileProps } from "./types";

function ElementTile({ element, isHighlighted, onClick }: ElementTileProps) {
    return (
        <div
            onClick={() => onClick(element)}
            className={`element-tile ${isHighlighted ? "highlighted" : ""}`}
            style={{backgroundColor: isHighlighted ? "green" : "white",}}
        >
            <div className="atomic-number">{element.protonoveCislo}</div>
            <div className="symbol">{element.znacka}</div>
            <div className="name">{element.nazev}</div>
        </div>
    );
}

export default ElementTile;