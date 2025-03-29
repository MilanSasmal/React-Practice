// const reactHeading = React.createElement("h2", {id:"heading"}, "Hello from React!");
// const container = ReactDOM.createRoot(document.getElementById("root"));
// container.render(reactHeading);

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("h1", {id:"child"}, [
        React.createElement("h2", {id:"child_01"}, "Hello from React child1!"),
    ]),
    React.createElement("h2", {id:"child1"}, "Hello from React child2!")
    
]);


const container = ReactDOM.createRoot(document.getElementById("parent"));
container.render(parent);
console.log(parent);