import { useState } from 'react';
import Card from '../components/Card/Card';
import Benefit from '../components/Sections/Benefit/Benefit';
import Step from '../components/Sections/Step/Step';
import Modal from '../components/Modal/Modal';
import PackageComponent from '../components/Sections/PackageComponent/PackageComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dataServices = [
    { icon: 'FaCalculator', text: 'Hacemos tu contabilidad mensual' },
    { icon: 'FaFileInvoice', text: 'Calculamos tus impuestos' },
    { icon: 'FaMoneyCheckAlt', text: 'Presentamos tus declaraciones SAT' },
    { icon: 'FaChartLine', text: 'Cálculo, timbrado y envío de nómina' }
  ];

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <h1 className={styles.title}>
          tu
          <span className={`${styles.titleText} color-blue`}>Conta</span>
        </h1>
        <p className={styles.subTitle}>Tu Contador en línea</p>
      </header>

      <section className={styles.descriptionTitle}>
        <p>¡Nuevo servicio!</p>
        <p>Encárgate de tu negocio, nosotros de tu contabilidad.</p>
      </section>

      <section className={styles.services}>
        {
          dataServices.map((service, index) => {
            const IconComponent = require('react-icons/fa')[service.icon]; // Importa el ícono dinámicamente
            return <Card key={index} icon={IconComponent} text={service.text} />;
          })
        }
      </section>

      <section className={styles.benefits}>
        <div className={styles.video}>
          <iframe
            width="425"
            height="280"
            src="https://www.youtube.com/embed/AD6y8kzPc-U?si=d5802TLUXfqvGben"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.description}>
          <label className={styles.titleSection}>Beneficios</label>
          <Benefit />
        </div>
      </section>

      <section className={styles.steps}>
        <Step />
      </section>

      <section className={styles.cta}>
        <p>
          ¿Quieres cambiar a tu Conta? Nosotros nos encargamos de llevar a cabo la transición de toda tu contabilidad hasta el día de hoy.
        </p>
      </section>

      <section className={styles.btns}>
        <button className={`${styles.button} bg-greenLime`} onClick={openModal}>Ver Paquetes</button>
        <button className={`${styles.button} bg-greenBlue`}>Agenda una cita con un contador experto</button>
      </section>

      {
        isModalOpen &&
        (
          <Modal onClose={closeModal} title="Paquetes">
            <PackageComponent />
          </Modal>
        )
      }

    </div>
  );
}