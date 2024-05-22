import './App.css';
import Tooltip from './tooltip/Tooltip';
import {
    directions,
    firstTooltipConfigurations,
    secondTooltipConfigurations,
} from './tooltip/toolTipConfigurations';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Tooltip</h1>
            </header>
            <main>
                <section className="section">
                    <article>
                        <h3>Article</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit a id ducimus, facere amet
                            blanditiis voluptatibus perspiciatis provident
                            tenetur aliquid tempora quos molestias distinctio!
                            Officiis odio aspernatur quia placeat doloribus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit a id ducimus, facere amet
                            blanditiis voluptatibus perspiciatis provident
                            tenetur aliquid tempora quos molestias distinctio!
                            Officiis odio aspernatur quia placeat doloribus!
                        </p>
                        <Tooltip
                            arrowPlace={directions.topStart}
                            {...firstTooltipConfigurations}
                        >
                            <button>Click me</button>
                        </Tooltip>
                    </article>

                    <article className="hover-article">
                        <h3>Article</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit a id ducimus, facere amet
                            blanditiis voluptatibus perspiciatis provident
                            tenetur aliquid tempora quos molestias distinctio!
                            Officiis odio aspernatur quia placeat doloribus!
                        </p>

                        <Tooltip
                            arrowPlace={directions.topEnd}
                            {...secondTooltipConfigurations}
                        >
                            <button>Click me</button>
                        </Tooltip>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default App;
