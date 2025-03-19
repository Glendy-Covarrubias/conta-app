import styles from '../PackageComponent/PackageComponent.module.css';

/**
 * Componente PackageComponent: Muestra una lista de paquetes estáticos con precios y descripciones.
 * 
 * Este componente fue desarrollado para demostrar mi capacidad para crear interfaces de usuario
 * estáticas y dinámicas utilizando React. Aunque los datos son estáticos en este caso, el componente
 * está diseñado de manera modular y escalable, lo que permitiría fácilmente integrar datos dinámicos
 * provenientes de una API o un estado global en el futuro.
 * 
 * Características clave:
 * - Renderizado de una lista de paquetes con títulos, precios y descripciones.
 * - Manejo condicional de estilos y contenido basado en propiedades específicas (como `textButton`).
 * - Uso de CSS Modules para estilos encapsulados y evitación de conflictos de clases.
 * 
 * Este componente es un ejemplo de cómo puedo estructurar y desarrollar interfaces reutilizables
 * y mantenibles, siguiendo buenas prácticas de desarrollo.
 * 
 * @returns {JSX.Element} Una sección que muestra una lista de paquetes con detalles y botones de acción.
 */
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