var testjson = '{ "nome": "Lona Frontlight 0","option": {"0": {"tiragem": "1000","cor": "4/0"}, "1": {"tiragem": "2000","cor": "4/4"}}}';
var otherjson = JSON.parse(testjson);
test = [
    ["10004/0","50,00"],
    ["10004/4","60,00"],
    ["20004/0","70,00"],
    ["20004/4","80,00"],
    ["30004/0","90,00"],
    ["30004/4","100,00"],
    ["50004/0","110,00"],
    ["50004/4","120,00"]
];

preco = document.getElementsByClassName('preco');
//preco.addEventListener('change', fazeralgo);

elm1 = document.getElementById('edit1');
elm1.addEventListener('change', fazeralgo);

elm2 = document.getElementById('edit2');
elm2.addEventListener('change', fazeralgo);

fazeralgo();

function fazeralgo(){
    //console.log(testelm1.value+elm2.value);
    var i;
    for (i = 0; i < test.length; i++) {
        if (test[i][0] == elm1.value+elm2.value) {
            //console.log(test[i][1]);
            //console.log(preco[0].in);
            preco[0].innerHTML = 'R$ '+test[i][1];
            break;
        }
    } 
}
//console.log(test);