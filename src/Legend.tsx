import { colors } from "./theme";

const categories: { label: string; color: string }[] = [
    { label: "Alkalické kovy", color: colors.alkaliMetal },
    { label: "Kovy alkalických zemin", color: colors.alkalineEarth },
    { label: "Přechodné kovy", color: colors.transitionMetal },
    { label: "Lanthanoidů", color: colors.lanthanide },
    { label: "Aktinoidů", color: colors.actinide },
    { label: "Polokovy", color: colors.metalloid },
    { label: "Halogeny", color: colors.halogen },
    { label: "Vzácné plyny", color: colors.nobleGas },
    { label: "Nekovy", color: colors.nonMetal },
];

function Legend() {
    return (
        <div className="legend">
            {categories.map((cat) => (
                <div key={cat.label} className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: cat.color }} />
                    <span className="legend-label">{cat.label}</span>
                </div>
            ))}
        </div>
    );
}

export default Legend;