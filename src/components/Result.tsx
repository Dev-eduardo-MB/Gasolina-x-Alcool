import styles from './Result.module.css';

interface ResultProps {
    gasolinaValue: number;
    alcoolValue: number;
    conclusion: string;
  }

const Result: React.FC<ResultProps> = ({ gasolinaValue, alcoolValue, conclusion }) => {
    return (
        <section className={styles.result}>
            <h2>{conclusion}</h2>
            <samp>Preço do Álcool: R$ {alcoolValue.toFixed(2)}</samp>
            <samp>Preço da Gasolina: R$ {gasolinaValue.toFixed(2)}</samp>
        </section>
    );
}

export default Result;