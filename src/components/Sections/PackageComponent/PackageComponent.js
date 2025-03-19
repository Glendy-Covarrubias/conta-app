import styles from '../PackageComponent/PackageComponent.module.css';

export default function PackageComponent() {

    const dataPackage = [
        { title: 'Emprendedor', price: '1,000', description: '1 - 30 movimientos bancarios al mes' },
        { title: 'Emprendedor Plus', price: '2,000', description: '31 - 100 movimientos bancarios al mes' },
        { title: 'Empresarial', price: '3,000', description: '101 - 300 movimientos bancarios al mes' },
        { title: 'Select', price: 'Contactanos para hacer un paquete a tus necesidades', description: '+300 movimientos bancarios al mes', textButton: "Cotizar paquete" }
    ];

    return (
        <div className={styles.packages}>
            {
                dataPackage.map((service, index) => {

                    return <div key={index} className={styles.package}>
                        <h3>{service.title}</h3>
                        <hr color={'#c6dfed'} />
                        <p>
                            <span className={styles.miniText}>
                            {
                                service.textButton === undefined ? '$ ' : ''
                            }
                            </span>
                            <strong className={styles.maxText}>{service.price}</strong> <span className={styles.miniText}>{
                                service.textButton === undefined ? ' + IVA/mes' : ''
                            }</span></p>
                        <p>{service.description}</p>
                        <button className={`${service.textButton === undefined ? styles.chooseButton : styles.chooseButtonDinamic }`}>{
                            service.textButton === undefined ? "Elegir" : service.textButton
                        }</button>
                    </div>;
                })
            }
        </div>
    );
}