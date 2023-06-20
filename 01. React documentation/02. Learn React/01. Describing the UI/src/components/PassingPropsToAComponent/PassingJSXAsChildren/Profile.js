import Avatar from "./Avatar";
import styles from "./Profile.module.css";

function Card({ children }) {
//   console.log(children);
  /*
Array [ {…}, {…} ]
​0: Object { "$$typeof": Symbol("react.element"), type: "p", key: null, … }
​1: Object { "$$typeof": Symbol("react.element"), type: Avatar(_ref), key: null, … }​
length: 2​
<prototype>: Array []
*/
//   console.log("children.props", children.props);

  return <div className={styles["card"]}>{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <p>
        Try replacing the &lt;Avatar&gt; inside &lt;Card&gt; with some text to
        see how the Card component can wrap any nested content.
      </p>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
