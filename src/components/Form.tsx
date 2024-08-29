import { useState, FormEvent } from 'react';
import styles from './Form.module.css'
import Calculate from './Calculate.tsx';
import Result from './Result.tsx';

function Form() {
    const [priceAlcool, setpriceAlcool] = useState<string>('');
    const [priceGasolina, setpriceGasolina] = useState<string>('');
    const [conclusion, setconclusion] = useState<string>('');
    
    const resultProps = {
        gasolinaValue: parseFloat(priceGasolina),
        alcoolValue: parseFloat(priceAlcool),
        conclusion: conclusion
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const alcoolValue = parseFloat(priceAlcool);
        const gasolinaValue = parseFloat(priceGasolina);
        const conclusionCalculo = Calculate(alcoolValue, gasolinaValue);
        setconclusion(conclusionCalculo);
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="priceAlcool">Álcool (preço por litro R$)</label>
                <input
                    id="priceAlcool"
                    name="priceAlcool"
                    className={styles.input}
                    type="number"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    value={priceAlcool}
                    onChange={(e) => setpriceAlcool(e.target.value)}
                    required
                />
                <label htmlFor="priceGasolina">Gasolina (preço por litro R$)</label>
                <input
                    id="priceGasolina"
                    name="priceGasolina"
                    className={styles.input}
                    type="number"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    value={priceGasolina}
                    onChange={(e) => setpriceGasolina(e.target.value)}
                    required
                />
                <input className={styles.submitForm} type="submit" value="Calcular" />
            </form>


            {conclusion && (
                <Result {...resultProps} />
            )}
        </>
    );
}

export default Form;