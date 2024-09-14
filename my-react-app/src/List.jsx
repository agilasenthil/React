
// import propTypes from "prop-types";

// function List(props){
//     const category = props.category;
//     const itemList = props.items;

//     const listItems = itemList.map(item => <li key = {item.id}>
//                                             {item.name}: &nbsp;
//                                             {item.calories}</li>);

//     return(
//         <>
//             <h3>{category}</h3>
//             <ul>{listItems}</ul>
//         </>);
// }
// List.propTypes = {
//     category: propTypes.string,
//     items: propTypes.arrayOf(propTypes.shape({id:propTypes.number,
//                                               name:propTypes.string,
//                                               calories:propTypes.number})),
// }
// List.defaultProps = {
//     category: "Category",
//     items: [],
// }
// export default List

// From App.jsx
// import List from "./List.jsx"

// function App() {
//   const fruits = [{id: 1, name: "apple", calories:20}, 
//                   {id: 2, name: "orange", calories:30}, 
//                   {id:3, name: "banana", calories:40}, 
//                   {id:4, name: "coconut", calories:50}, 
//                   {id:5, name: "pineapple", calories:60}];
//   const vegetables = [{id: 6, name: "potatoes", calories:70}, 
//                   {id: 7, name: "celery", calories:80}, 
//                   {id: 8, name: "carrots", calories:90}, 
//                   {id: 9, name: "corn", calories:100}, 
//                   {id: 10, name: "broccoli", calories:110}];

//   return(
//       <>
//         <List items={fruits} category="Fruits"></List>
//         <List items={vegetables} category="Vegetables"></List>
//       </>
//   );
// }

// export default App
