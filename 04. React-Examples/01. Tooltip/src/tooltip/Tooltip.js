import { generateStyles } from '../helpers/index';
import styles from './Tooltip.module.css';

export default function Tooltip({ children, arrowPlace, ...params }) {
    const result = generateStyles(params);

    const content = (
        <div className={styles['children-container']}>
            {children}
            {params.text && (
                <span style={result} className={styles[arrowPlace]}>
                    {params.text}
                </span>
            )}
        </div>
    );

    return content;
}
