const terpeneStyles = {
    Linalool: { backgroundColor: "#9B59B6", color: "#ffffff" }, // lavender / purple
    Limonene: { backgroundColor: "#F5E6A3", color: "#1a1a1a" }, // pale yellow
    Myrcene: { backgroundColor: "#7CB342", color: "#1a1a1a" }, // earthy green
    Caryophyllene: { backgroundColor: "#C0392B", color: "#ffffff" }, // peppery red
    Pinene: { backgroundColor: "#2E7D32", color: "#ffffff" }, // pine green
    Humulene: { backgroundColor: "#8D6E63", color: "#ffffff" }, // woody brown
};

const FALLBACK_STYLE = { backgroundColor: "#9CA3AF", color: "#1a1a1a" };

export function getTerpeneStyle(terpene) {
    return terpeneStyles[terpene] ?? FALLBACK_STYLE;
}

export default terpeneStyles;
