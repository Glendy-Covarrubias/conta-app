import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../Benefit/Benefit.module.css';

/**
 *Componente Benefit: Muestra una lista de beneficios dinámicos obtenidos desde una API simulada.
 * 
 * Este componente fue desarrollado para demostrar mi capacidad para consumir y manejar datos 
 * provenientes de un servicio API en una aplicación React. Utilicé los hooks `useState` y `useEffect` 
 * para gestionar el estado de los datos y realizar la solicitud HTTP de manera asíncrona. 
 * 
 * Además, el componente está diseñado para ser reutilizable y escalable, ya que los datos 
 * se cargan dinámicamente y se renderizan en una lista de beneficios. Esto permite que, 
 * en un entorno real, el contenido pueda actualizarse sin necesidad de modificar el código del componente.
 * 
 * @returns {JSX.Element} Una sección que muestra una lista de beneficios con iconos y descripciones.
 */
export default function Benefit() {

    const [dataBenefits, setDataBenefits] = useState([]);

    useEffect(() => {
        // Función asíncrona para obtener los datos
        const fetchData = async () => {
            try {
                const response = await fetch('/api/benefit'); // Hacer la solicitud a la API
                const data = await response.json(); // Convertir la respuesta a JSON
                setDataBenefits(data.data); // Actualizar el estado con los datos
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData(); // Llamar a la función
    }, []);

    return (
        <div className={styles.benefitList}>
            {
                dataBenefits.map((service, index) => {
                    return (
                        <div key={index} className={styles.benefitItem}>
                            <label>
                                <span><FaCheckCircle color="#3253c3" /></span>
                                {service.title}
                            </label>
                            <p>{service.text}</p>
                        </div>
                    );
                })
            }

        </div>
    );
}