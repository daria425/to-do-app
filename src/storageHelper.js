import { logicController, logicControllerCl, project } from "./createToDo";
import { DOMcontroller } from "./DOMmanipulation";
import { toDo } from "./createToDo";

const storedObj = JSON.parse(localStorage.getItem("data"));
const controllers = [logicController, DOMcontroller];

export { storedObj };
//When we `JSON.stringify()` our class/constructor/factory objects, they are no longer connected. They become generic objects.

//```js
//class Foo {
// constructor( name, age, id=/* generate an id somehow */ ){
// define the object properties from those
//  }
// all my class methods, and one for generic objects:
// static of({name, age, id=/* same generator */}){
//  return new Foo(name, age id);
//  }
//}

// and later, I can simply:
//const myFoo = Foo.of({name: "bar", age:37});

//make a new toDO item with all of the todos listed in each of the projects in the allProjects array
