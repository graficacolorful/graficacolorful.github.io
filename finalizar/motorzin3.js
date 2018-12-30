var itensinit = '{ "A": { "cat": "Cartão DuoDesign 300g/m²", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "stock": "99", "amount": "1" }, "B": { "cat": "Cartão DuoDesign 300g/m²", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "stock": "99", "amount": "1" }, "C": { "cat": "Cartão DuoDesign 300g/m²", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "stock": "99", "amount": "1" }, "D": { "cat": "Cartão DuoDesign 300g/m²", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "stock": "99", "amount": "1" }, "E": { "cat": "Cartão DuoDesign 300g/m²", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "stock": "99", "amount": "1" }, "F": { "cat": "Cartão DuoDesign 300g/m²", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "stock": "99", "amount": "1" }}';

var json = JSON.parse(itensinit);
select = '';
name = '';
email = '';
cep = '';
nr = '';
fp = '';
function decode(string){ /////// SE VIRA AQUI MULA
    var haha = {};
    if (string != ''){
        itensd = string.split(',');
        for (d in itensd){
            ref = itensd[d];
            patt1 = /[^0-9]/g;
            patt2 = /[^A-Z]/g;
            refLetter = String(ref.match(patt1));
            refNumber = String(ref.match(patt2));
            refLetter = refLetter.replace(",", "");
            refNumber = refNumber.replace(",", "");
            camm = json[refLetter];
            cat = camm['cat'];
            brand = camm['brand'];
            image = camm['image'];
            size = camm['size'];
            color = camm['color'];
            price = camm['price'];
            stock = camm['stock'];
            amount = refNumber;
            haha[refLetter] = {cat, brand, image, size, color, price, stock, amount};
        }
    }
    //console.log(haha)
    return haha;
    //console.log(jsonss);
}

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);
 
    if (begin == -1) {
 
        begin = cookies.indexOf(prefix);
         
        if (begin != 0) {
            return null;
        }
 
    } else {
        begin += 2;
    }
 
    var end = cookies.indexOf(";", begin);
     
    if (end == -1) {
        end = cookies.length;                        
    }
 
    return unescape(cookies.substring(begin + prefix.length, end));
}

function finalizarpedido(){
    elmname = document.getElementById("name");
    elmemail = document.getElementById("email");
    elmcep = document.getElementById("cep");
    elmnr = document.getElementById("residnumber");
    name = elmname.value;
    email = elmemail.value;
    cep = elmcep.value;
    nr = elmnr.value;
    if (name != '' && email != '' && cep != '' && nr != ''){
        fp = select;
        //console.log(ntc);
        elmchart = document.getElementById("chart");
        elmchartimage = document.getElementById("chartimage");
        elmchartimage.src = 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='+getCookie('lista')+'|'+name+','+email+','+cep+','+nr+','+fp+'&choe=UTF-8';
        elmchart.style.display = 'table';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
        document.getElementById('labeltxt').innerHTML = 'Moonk store';
    }
}

elmfinalizar = document.getElementById("b-finalizar");

elmfinalizar.addEventListener('click', finalizarpedido);

if (getCookie('lista')){
    if (Object.keys(decode(getCookie('lista'))).length > 0){
        document.getElementById('main').style.display = 'block';
    }else{
        location.assign('index.html');
    }
}else{
    location.assign('index.html');
}

element = document.getElementsByClassName('item');
function step2(event){
    for (i = 0; i < Object.keys(element).length; i++) {
        element[i].childNodes[1].style.display = 'none';
        element[i].childNodes[3].style.display = 'block';
    }
    select = this.childNodes[5].innerHTML;
    this.childNodes[1].style.display = 'block';
    this.childNodes[3].style.display = 'none';
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('labeltxt').innerHTML = 'Preencha seus dados';
}

function chamar(){
    whats = '';
    mobilewhats = 'whatsapp://';
    pcwhats = 'https://web.whatsapp.com/';
    function detectar_mobile() {
        var check = false; //wrapper no check
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }
    if (detectar_mobile() === false){
        whats = pcwhats;
    }else{
        whats = mobilewhats;
    }
    location.href = whats+'send?phone=5521984251829&text='+getCookie('lista')+'|'+btoa(name+','+email+','+cep+','+nr+','+fp);
}

for (i = 0; i < Object.keys(element).length; i++) {
    element[i].addEventListener('click', step2);
}
elmchamar = document.getElementById('chamar');
elmchamar.addEventListener('click', chamar);
