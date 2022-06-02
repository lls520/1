var phone = document.getElementById('phone');
// 验证码
var yanzheng = document.getElementsByClassName('butt')[0];
var aa = 15783

function fn() {
    var i = 5;
    var ar = setInterval(function() {
        yanzheng.disabled = true
        yanzheng.innerHTML = "正在获取(" + i + ")"
        i--;
        if (i == -2) {
            clearInterval(ar);
            yanzheng.innerHTML = '重新获取'
            yanzheng.disabled = false;
            alert(aa)
        }
    }, 1000)
}


// 注册按钮
var butt = document.getElementById('is');