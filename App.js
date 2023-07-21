// const heading = React.createElement(
//     "h1",{id:"heading",xyz:"abc"},
//     "Hello Jagadeesh"
// );
// console.log(heading)
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h1>I'm h2 tag</h1>
    </div>
</div> */}
const parent = React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:"child"},[
        React.createElement("h2",{},"I'm H2 Tag"),
        React.createElement("h3",{},"I'm H3 Tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h2",{},"I'm H2 Tag"),
        React.createElement("h3",{},"I'm H3 Tag"),
    ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);