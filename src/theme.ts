export const colors = {
    // Base
    primary: "#4A9EFF",
    background: "#0F1117",
    surface: "#1E2130",

    // Text
    textPrimary: "#F0F0F0",
    textSecondary: "#8A8FA8",

    // States
    loading: "#F5C518",
    error: "#FF4D4D",
    success: "#3DDC84",

    // Element groups
    alkaliMetal: "#FF6B6B",
    alkalineEarth: "#FFA94D",
    transitionMetal: "#74C0FC",
    nonMetal: "#8CE99A",
    nobleGas: "#DA77F2",
    metalloid: "#FFD43B",
    halogen: "#63E6BE",
    lanthanide: "#F783AC",
    actinide: "#FF8787",
    unknown: "#868E96",
} as const;

export type ColorKey = keyof typeof colors;