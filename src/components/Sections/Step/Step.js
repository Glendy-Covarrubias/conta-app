import styles from '../Step/Step.module.css';

export default function Step() {
    const dataSteps = [
        { icon: "FaPenNib", title: "PASO 1", text: 'Agrega tu FIEL' },
        { icon: "FaCoins", title: "PASO 2", text: 'Sincroniza tus cuentas bancarias' },
        { icon: "FaFileInvoiceDollar", title: "PASO 3", text: 'Recibe mensualmente tu declaración de impuestos' }
    ];

    return (
        <div className={styles.stepList}>
            {
                dataSteps.map((service, index) => {
                    const IconComponent = require('react-icons/fa')[service.icon]; // Importa el ícono dinámicamente
                    return (
                        <div key={index} className={styles.stepItem}>
                            {IconComponent && <IconComponent size={50} color='#f4f4f4' />}
                            <h4>{service.title}</h4>
                            <p>{service.text}</p>
                        </div>
                    );
                })
            }

        </div>
    );
}