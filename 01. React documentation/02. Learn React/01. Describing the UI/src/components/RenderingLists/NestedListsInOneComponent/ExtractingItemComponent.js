import { recipes } from "./recipesData";

export default function ExtractingItemComponent() {
  return (
    <>
      <h2>Challenge 3 of 4: Extracting a list item component</h2>
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
  return recipes.map((recipe) => <Recipe key={recipe.id} {...recipe} />);
}

function Recipe({ id, name, ingredients }) {
  return (
    <article style={articleStyles()} key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </article>
  );
}
