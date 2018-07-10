const appRoot = document.getElementById('app');
let visibility = false;

const onVisibilityToggle = () => {
    visibility = !visibility;
    renderApp();
};
const renderApp = () => {
    const template = (
        <section>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibilityToggle}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <p>Hey. These are some details you can now see!</p>
            )}
        </section>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();