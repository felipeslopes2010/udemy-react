import styles from './CarComponent.module.css'

const CarComponent = ({brand, km, price}) => (
    <div className={styles.car_details}>
        <p>Marca: {brand}</p>
        <p>KM: {km}</p>
        <p>Preço: {price}</p>
    </div>
)

export { CarComponent }