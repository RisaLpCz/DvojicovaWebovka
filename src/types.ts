export type ElementCategory =
    | "alkalické kovy"
    | "kov alkalických zemin"
    | "přechodný kov"
    | "lanthanoid"
    | "aktinoid"
    | "postpřechodný kov"
    | "polokov"
    | "halogen"
    | "vzácný plyn"
    | "nekov";

export type Element = {
    znacka: string;
    nazev: string;
    protonoveCislo: number;
    atomovaHmotnost: number;

    group: number | null;
    period: number;
    category: ElementCategory;

    boilingPoint: number | null;
    meltingPoint: number | null;
    state: string;

    facts: string;
}

export type ElementFilter = {
    category?: ElementCategory;
    search?: string;
};

export type AppState = {
    selectedElement: Element | null;
    filter: ElementFilter;
};

export type ElementTileProps = {
    element: Element;
    isHighlighted: boolean;
    onClick: (element: Element) => void;
};

export type ElementDetailProps = {
    element: Element;
    onBack: () => void;
};

export type SearchBarProps = {
    onSearch: (value: string) => void;
    initialValue?: string;
};
