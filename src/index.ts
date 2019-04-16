import LinkedList from './classes/LinkedList';


const initData: number[] = [];
for(let i = 1; i <= 10; i++){
    initData.push(i);
}

const list = new LinkedList(initData);
list.logData();

let targetNode = list.find(6);
console.log(targetNode);

list.remove(2);
list.logData();