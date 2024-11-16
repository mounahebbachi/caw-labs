[v1, v2] = [v2, v1];

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

const combinedArray = [...numbers, ...letters, ...foods];

const str = "hello";
const charArray = [...str]; 


function fn(a, b, ...args) {
    //...
}/*
a) Call fn(1, 2, 3, 'A', 'B', 'C'):
args will contain: [3, 'A', 'B', 'C']
b) Call fn(1, 2):
args will contain: [] (an empty array, as there are no additional arguments)
c) Call with let x = ['a', 'b', 'c', 'd']; fn(...x);:
When calling fn(...x), it becomes fn('a', 'b', 'c', 'd'), so:
a will be 'a'
b will be 'b'
args will contain: ['c', 'd']*/