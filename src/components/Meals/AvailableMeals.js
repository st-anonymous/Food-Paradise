import Card from '../UI/Card';

import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Biriyani',
        description: 'Traditionally Cooked a Spiced mix of Rice and Meat!',
        price: 149.99,
    },
    {
        id: 'm2',
        name: 'Butter Chicken',
        description: 'Chicken Curry made with spiced Tomatoes and Butter!',
        price: 189.49,
    },
    {
        id: 'm3',
        name: 'Fish Besar',
        description: 'Indian Style cooked Fish Curry!',
        price: 124.99,
    },
    {
        id: 'm4',
        name: 'Rasgulla',
        description: 'Signature Dessert of Odisha made from Chhena...',
        price: 14.69,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map( (meal) => 
    <MealItem 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price} 
        key={meal.id}
    />)

    return (
        <section className={styles.meals}>
            <Card><ul>{mealsList}</ul></Card>
        </section>
    )
    }
export default AvailableMeals