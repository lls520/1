var phone=document.getElementsByClassName('phone')[0];
var yzm=document.getElementsByClassName('yzm')[0];
var yzmm=document.getElementsByClassName('yzmm')[0];
var password=document.getElementsByClassName('password')[0];
var ljzc=document.getElementsByClassName('ljzc')[0];
phone.onfocus=function(){
    phone.placeholder="";
}
phone.onblur=function(){
    var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if(!reg.test(phone.value)){
        phone.placeholder="请重新输入电话号码";
        phone.value="";
    }else{
        yzm.style.backgroundColor=" rgb(255,138,0)";
        yzm.style.color="white";
    }
}
var number=60;
var a="";
var body=document.getElementsByTagName('body')[0];
var div=document.createElement('div');
body.appendChild(div);
yzm.onclick=function(){
    clearInterval(timer);
    var timer=setInterval(function(){
            number--;
            yzm.innerHTML = number; 
            
            if(number==50){
                for(var i=0;i<4;i++){
				var num=Math.floor(Math.random()*9);
			    a+=num;
			    };
                div.className="ddd";
                div.innerHTML="您的验证码为："+a; 
            }
            if(number == 0){
                number=60
                clearInterval(timer);
                yzm.innerHTML="重新发送";
                div.innerHTML=""
                a="";
            }
    },1000)
}
yzmm.onfocus=function(){
    yzmm.placeholder="";
}
yzmm.onblur=function(){
    if(a==yzmm.value){

    }else{
        yzmm.value="请重新输入验证码";
    }
}
password.onfocus=function(){
    password.placeholder=""
}
password.onblur=function(){
    var reg=/^[a-z0-9]+$/i;
    if(!reg.test(password.value)){
         password.placeholder="密码只能用英文和字母组成"
    }else{
        ljzc.style.backgroundColor=" rgb(255,138,0)";

    }
}