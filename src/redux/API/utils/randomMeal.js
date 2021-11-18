const existingMealItem = ({
  prevMealItems,
  nextMealItem,
}) => prevMealItems.find((MealItem) => MealItem.idMeal === nextMealItem.idMeal);

const handleToAddMeal = ({ prevMealItems, nextMealItem }) => {
  const MealItemExists = existingMealItem({ prevMealItems, nextMealItem });

  if (MealItemExists || prevMealItems.size >= 10) {
    return [
      ...prevMealItems,
    ];
  }

  return [
    ...prevMealItems,
    {
      ...nextMealItem,
    },
  ];
};

export default handleToAddMeal;
