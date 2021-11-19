const existingViewRecipe = ({
  prevRecipeItems,
  nextRecipeItem,
}) => prevRecipeItems.find((cartItem) => cartItem.id === nextRecipeItem.id);

const handleAddtoView = ({
  prevRecipeItems,
  nextRecipeItem,
}) => {
  const RecipeExists = existingViewRecipe({
    prevRecipeItems,
    nextRecipeItem,
  });
  if (RecipeExists) {
    return [
      ...prevRecipeItems,
    ];
  }
  if (prevRecipeItems.length === 6) {
    const arr = prevRecipeItems.slice(1, 5);
    return [
      ...arr,
      {
        ...nextRecipeItem,
      },
    ];
  }

  return [
    ...prevRecipeItems,
    {
      ...nextRecipeItem,
    },
  ];
};

export default handleAddtoView;
