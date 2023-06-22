import { recipes } from "./recipesData";

export default function NestedListsInOneComponent() {
  return (
    <>
      <h2>Challenge 2 of 4: Nested lists in one component</h2>
      <RecipeList />
    </>
  );
}

const articleStyles = () => ({
  borderRadius: "12px",
  border: "2px solid grey",
  padding: "12px 24px",
});

function RecipeList() {
  return recipes.map((recipe) => (
    <article style={articleStyles()} key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </article>
  ));
}
