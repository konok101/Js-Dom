const products= [
    'Dell hardcore i29',
    'my name is konok',
    'my father name is Roshen Chandra majamder',
    'My Mather name is kalpona Rani'
];

const searching= 'konok';
const output=[];
for(const product of products){
    if(product.indexOf(searching) != -1){
        output.push(product);
    }
}
// console.log(output)

for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        console.log(product)
    }
}