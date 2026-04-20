import type { ElementDetailProps } from "./types.ts";

function ElementDetail({ element, onBack }: ElementDetailProps) {
    return (
        <div className="element-detail-wrapper">
            <button className="detail-back-btn" onClick={onBack}>← Zpět</button>
            <div className="detail-header">
                <div className="detail-symbol-big">{element.znacka}</div>
                <div className="detail-title">
                    <h1>{element.nazev}</h1>
                    <span>{element.category}</span>
                </div>
            </div>
            <div className="detail-grid">
                <div className="detail-card"><div className="detail-card-label">Protonové číslo</div><div className="detail-card-value">{element.protonoveCislo}</div></div>
                <div className="detail-card"><div className="detail-card-label">Atomová hmotnost</div><div className="detail-card-value">{element.atomovaHmotnost} u</div></div>
                <div className="detail-card"><div className="detail-card-label">Skupina</div><div className="detail-card-value">{element.group}</div></div>
                <div className="detail-card"><div className="detail-card-label">Perioda</div><div className="detail-card-value">{element.period}</div></div>
                <div className="detail-card"><div className="detail-card-label">Bod tání</div><div className="detail-card-value">{element.meltingPoint ?? "?"} °C</div></div>
                <div className="detail-card"><div className="detail-card-label">Bod varu</div><div className="detail-card-value">{element.boilingPoint ?? "?"} °C</div></div>
                <div className="detail-card"><div className="detail-card-label">Skupenství</div><div className="detail-card-value">{element.state}</div></div>
            </div>
            <div className="detail-facts">{element.facts}</div>
        </div>
    );
}

export default ElementDetail;
