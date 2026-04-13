import type { ElementDetailProps } from "./types.ts";

function ElementDetail({ element, onBack }: ElementDetailProps) {
    return (
        <div style={{ padding: "24px" }}>
            <h1>
                {element.nazev} ({element.znacka})
            </h1>

            <p><strong>Protonové číslo:</strong> {element.protonoveCislo}</p>
            <p><strong>Atomová hmotnost:</strong> {element.atomovaHmotnost}</p>
            <p><strong>Skupina:</strong> {element.group}</p>
            <p><strong>Perioda:</strong> {element.period}</p>
            <p><strong>Kategorie:</strong> {element.category}</p>
            <p><strong>Teplota varu:</strong> {element.boilingPoint ?? "Neznámá"} °C</p>
            <p><strong>Teplota tání:</strong> {element.meltingPoint ?? "Neznámá"} °C</p>
            <p><strong>Skupenství:</strong> {element.state}</p>
            <p><strong>Zajímavost:</strong> {element.facts}</p>

            <button onClick={onBack}>Go back</button>
        </div>
    );
}

export default ElementDetail;
