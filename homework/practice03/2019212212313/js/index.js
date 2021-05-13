/**
 * 
 * @authors 陶珂冶
 * @date    2021-03-25 13:12:43
 * @version 1.0.0
 */

// 1 Turn red
document.getElementById("p1").addEventListener('click', function (e) 
{
    this.style = "color:red";
});

// 2 date
document.getElementsByTagName("li")[1].addEventListener('click', function (e) 
{
    var a = new Date();
    document.getElementsByTagName('h1')[0].innerHTML = a.getFullYear().toString() + '-' + (a.getMonth() + 1).toString() + '-' + a.getDate().toString();
});

// 3 add "fn-active"
document.getElementsByTagName("li")[2].addEventListener('click', function (e) 
{
    var a = this.parentElement.children;
    for (let i = 0; i < a.length; i++) 
    {
        a[i].classList.add("fn-active");
    }
});

// 4 delete  p8
document.getElementsByTagName("li")[3].addEventListener('click', function (e) 
{
    var a = this.parentElement.children;
    for (let i = 0; i < a.length; i++) 
    {
        if ("p8" === a[i].innerHTML) 
        {
            a[i].remove();
        }
    }
});

// 5 open tao
document.getElementsByTagName("li")[4].addEventListener('click', function (e) 
{
    window.open("https://www.taobao.com/");
});

// 6 add  p9
document.getElementsByTagName("li")[5].addEventListener('click', function (e) 
{
    var ul = document.getElementsByTagName("ul")[0];
    var li = document.createElement("li");
    li.innerHTML = "p9";
    ul.appendChild(li);
});

// 7 show the number
    var ul = document.getElementsByTagName("ul")[0];
    var li = ul.children;
    for (let i = 0; i < li.length; i++)
     {
        li[i].addEventListener('click', function (e) 
        {
            window.alert(this.innerHTML.charAt(1));
        })
    }


// 8 adjust  width
    var ul = document.getElementsByTagName("ul")[0];
    var li = ul.children;
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) 
        {
            if ("p7" === li[i].innerHTML) {
                document.getElementsByClassName("m-box")[0].style.width = document.body.clientWidth.toString() + "px";
            }
        })
    }


//函数调用
    const eleName=(e)=>{return document.getElementsByTagName(e)[0]}

    var ul=eleName('nl')
    var li=eleName('li')

//日期转换
const formatData=(e)=>{return e.toString().padStart(2,'0')}

day=formatData(day)