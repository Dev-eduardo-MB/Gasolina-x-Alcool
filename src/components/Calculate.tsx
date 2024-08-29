

function Calculate(priceAlcool: number, priceGasolina: number): string {
    const Relation = priceAlcool / priceGasolina;

    if (Relation < 0.7) {
        return "É mais vantajoso usar Álcool.";
    } else {
        return "É mais vantajoso usar Gasolina.";
    }
}

export default Calculate;