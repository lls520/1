var ptdl=document.getElementsByClassName('ptdl')[0];
var yzmdl=document.getElementsByClassName('yzmdl')[0];
var phone1=document.getElementsByClassName('phone1');
var kuaijie=document.getElementsByClassName('kuaijie'),
    dianhua=document.getElementsByClassName('dianhua')[0],
    mima=document.getElementsByClassName('mima')[0],
    ljzc=document.getElementsByClassName('ljzc')[0],
    phone=document.getElementsByClassName('phone')[0],
    yzm=document.getElementsByClassName('yzm')[0],
    yzmm=document.getElementsByClassName('yzmm')[0];


ptdl.ontouchstart=function(){
    phone1[0].style.display="block";
    phone1[1].style.display="block";
    kuaijie[0].style.display="none";
    kuaijie[1].style.display="none";
    ptdl.style.borderColor="rgb(255,138,0)";
    yzmdl.style.borderColor="rgb(204, 200, 200)";
}
yzmdl.ontouchstart=function(){
    phone1[0].style.display="none";
    phone1[1].style.display="none";
    kuaijie[0].style.display="block";
    kuaijie[1].style.display="block";
    ptdl.style.borderColor="rgb(204, 200, 200)";
    yzmdl.style.borderColor="rgb(255,138,0)";
}
var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
var reg1=/^[a-z0-9]+$/i;
mima.onblur=function(){
    if(reg.test(dianhua.value) && reg1.test(mima.value)){
        ljzc.style.backgroundColor=" rgb(255,138,0)"; 
    }else{
        ljzc.style.backgroundColor=" rgb(204, 200, 200)"; 
    }
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
        ljzc.style.backgroundColor=" rgb(255,138,0)"; 
    }else{
        yzmm.value="请重新输入验证码";
        ljzc.style.backgroundColor=" rgb(204, 200, 200)"; 
    }
}