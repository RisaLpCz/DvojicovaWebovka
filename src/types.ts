export type Element = {
    znacka: string;
    nazev: string;
    protonoveCislo: number;
    atomovaHmotnost: number;

    group: number;
    period: number | null;
    category: ElementCategory;

    boilingPoint: number;
    meltingPoint: number;
    state: string;

    facts: string;
}

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
    onClick: (element: Element) => void;
};

export type ElementDetailProps = {
    element: Element | null;
};
