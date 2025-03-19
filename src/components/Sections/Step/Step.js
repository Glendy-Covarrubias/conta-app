import { useDispatch, useSelector } from 'react-redux';
import { steps } from '../../../store/stepSlice'; // Importa la acción
import styles from '../Step/Step.module.css';

/**
 * Componente Step: Muestra una lista de pasos dinámicos obtenidos desde el estado global de Redux.
 * 
 * Este componente fue desarrollado para demostrar mi capacidad para consumir y manejar datos
 * provenientes de un estado global en una aplicación React con Redux. Utilicé los hooks
 * `useDispatch` y `useSelector` para interactuar con el store de Redux, acceder a los datos
 * y despachar acciones cuando sea necesario.
 * 
 * Además, el componente está diseñado para ser reutilizable y escalable, ya que los datos
 * se cargan dinámicamente desde el estado global y se renderizan en una lista de pasos.
 * Esto permite que, en un entorno real, el contenido pueda actualizarse sin necesidad de
 * modificar el código del componente.
 * 
 * Características clave:
 * - Uso de Redux para manejo de estado global.
 * - Renderizado dinámico de íconos y contenido basado en datos.
 * - Estructura modular y fácil de mantener.
 * 
 * @returns {JSX.Element} Una sección que muestra una lista de pasos con íconos, títulos y descripciones.
 */
export default function Step() {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.step.data);

    return (
        <div className={styles.stepList}>
            {steps.map((service, index) => {
                const IconComponent = require('react-icons/fa')[service.icon]; // Importa el ícono dinámicamente
                return (
                    <div key={index} className={styles.stepItem}>
                        {IconComponent && <IconComponent size={50} color='#f4f4f4' />}
                        <h4>{service.title}</h4>
                        <p>{service.text}</p>
                    </div>
                );
            })}
        </div>
    );
}