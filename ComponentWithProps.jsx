import ReactDOM from 'react-dom';
const ComponentWithProps = props => {
    return (
        <div>
            <h1>{props.headerProp}</h1>
            <p>{props.contentProp}</p>
            <p>Value of numberProp is: {props.numberProp}</p>
        </div>
    )
}

ComponentWithProps.defaultProps = {
    headerProp: "This is the default heading", contentProp: "This is default content"
}

ReactDOM.render(
    <ComponentWithProps headerProp = "Header from attribute here" />, document.querySelector('#ComponentWithProps')
);

export default ComponentWithProps;