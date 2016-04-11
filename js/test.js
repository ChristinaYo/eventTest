setTimeout(function(){
for(var i = 0; i < 100000000; i++){}
console.log('timer a');
}, 0)

for(var j = 0; j < 10; j++){
console.log(j);
}

setTimeout(function(){
console.log('timer b');
}, 0)

function waitFiveSeconds(){
var now = (new Date()).getTime();
while(((new Date()).getTime() - now) < 5000){}
console.log('wait over');
}

document.addEventListener('click', function(){
console.log('click');
})

console.log('click begin');
waitFiveSeconds();