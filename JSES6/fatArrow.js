//Fat Arrow or Arrow Function Advantanges

// How to write fat Arrow funciton

/*
        ()=>{}
        1.consice code
        2.implicit return
        3.this , will return minimal obj {}
        4.function overriding conflicts - it remove
*/
function App1() {
  console.log(this);
}
App1();
let App = () => {
  console.log(this);
};

App();
