/*
This file will define the datatype we are using in our app
We will also create the array DATA here and then
export both so we can import wherever we need them
*/

type dataType = {
  id: string;
  title: string;
};

const DATA: dataType[] = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
];

//when exporting multiple things, use the curly braces instead of default
export { DATA, dataType };
