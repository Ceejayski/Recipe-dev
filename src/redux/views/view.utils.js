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
  if (prevRecipeItems.length === 6) {
    const arr = prevRecipeItems.slice(1, 6);
    return [
      ...arr,
      {
        ...nextRecipeItem,
      },
    ];
  }
  if (RecipeExists) {
    return [
      ...prevRecipeItems,
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
