


const obj=[{name:'neeraj', class:'mca'}]
console.log('this is the obj', obj);

const obj1=JSON.parse(JSON.stringify(obj))
console.log('this is the obj1', obj1);
obj1[0].name='rawat'

console.log('this is obj',obj);
console.log('this is th obj1', obj1);

