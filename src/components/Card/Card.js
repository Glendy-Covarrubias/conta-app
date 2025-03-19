import stylesCard from '../Card/Card.module.css';

export default function Card({ icon: Icon = null, text = "Texto por defecto" }) {
    return (
        <div className={stylesCard.card}>
            {Icon && <Icon size={60} className={'mb-6'} color='#3253c3' />}
            <p>{text}</p>
        </div>
    );
}