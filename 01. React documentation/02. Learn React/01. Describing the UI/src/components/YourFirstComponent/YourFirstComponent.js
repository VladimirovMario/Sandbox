import Profile from "./ExportTheComponent/ExportTheComponent";
import FixTheReturnStatement from "./FixTheReturnStatement/FixTheReturnStatement";
import SpotTheMistake from "./SpotTheMistake/SpotTheMistake";
import Congratulations from "./YourOwnComponent/YourOwnComponent";

export default function YourFirstComponent() {
  return (
    <>
      <h1>Your First Component</h1>
      <Congratulations />
      <SpotTheMistake />
      <FixTheReturnStatement />
      <Profile />
    </>
  );
}

/*
Recap

You’ve just gotten your first taste of React! Let’s recap some key points.

    React lets you create components, reusable UI elements for your app.

    In a React app, every piece of UI is a component.

    React components are regular JavaScript functions except:
        Their names always begin with a capital letter.
        They return JSX markup.
*/
