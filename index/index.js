// table切换
var on = document.getElementsByClassName('ding')[0].children;

function array(a, b) {
    for (var i = 0; i < a.length; i++) {
        a[i].index = i;
        a[i].onclick = function() {
            for (var j = 0; j < a.length; j++) {
                a[j].classList.remove('oncli');
                b[j].classList.remove('on');
            }
            this.classList.add('oncli');
            b[this.index].classList.add('on');
        }
    }
}
var fn = document.getElementsByTagName('table')[0].children;
console.log(fn);

array(on, fn)