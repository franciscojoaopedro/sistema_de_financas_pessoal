
import { formatarMoeda } from "../../utils/utils";
import styles from "./card.module.css"

const Card = ({titulo,valor,icons}) => {
  return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.info} >
                <h3>{titulo}</h3>
                <h4>{formatarMoeda(valor)}</h4>
            </div>
            <div>
                {icons}
            </div>
        </div>

  </div>;
};
export default Card;