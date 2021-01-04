class yz {
    constructor() {
        this.arr = []
    }
    // 创建标签函数
    Label(LabelName) {
        return document.createElement(LabelName);
    }
    // 技能卡生成函数
    SkillLabel(cons = '') {
        // 获取this
        let th = this;
        // 创建标签
        let Skill = this.Label('div');
        Skill.setAttribute('class', 'skill');

        let Ione = this.Label('i');
        Ione.setAttribute('class', 'one');
        let Cont = this.Label('div');
        Cont.setAttribute('class', 'cont');
        let Conts = this.Label('div');
        Conts.setAttribute('class', 'conts');
        Conts.innerHTML = cons;
        Cont.appendChild(Conts);

        let Itow = this.Label('i');
        Itow.setAttribute('class', 'tow');
        Itow.innerHTML = 'X';

        // 将创建的标签存入总标签内
        Skill.appendChild(Ione);
        Skill.appendChild(Cont);
        Skill.appendChild(Itow);
        //绑定删除事件 
        Itow.onclick = function () {
            // 获取被点击的标签相应的值
            let value = this.parentNode.querySelector('.conts').innerText;
            let val = localStorage.getItem('arr').split(',');
            val.forEach(function (vals, key) {
                if (vals == value) {
                    // 删除与值对应的本地存储中的值
                    val.splice(key, 1)
                    // 将删除后的本地存储的数组赋值给arr数组
                    th.arr = val;
                    //将arr数组存入本地存储，因为键名相同，为覆盖之前的值，以达到删除本地存储中的对应的值
                    localStorage.setItem('arr', th.arr);
                }
            })
            // 删除被点击的标签相应的技能标签
            this.parentNode.remove();

        }
        return Skill;

    }
    // 设置名字自走函数
    NameGoes(key, executionTime = 30, delayTime = 1000) {
        // 获取当前标签的名字显示标签
        let c = document.getElementsByClassName('cont')[key];
        // 获取当前名字显示标签下的名字标签
        let cs = c.getElementsByClassName('conts')[0];
       // 设置变量接收名字显示标签与名字标签的差值
        let cc = cs.offsetWidth - c.offsetWidth;
        // 设置变量充当名字自走时的位移值
        let jl = 0;
        // 设置变量接收定时器
        let time;
        // 判断差值有没有大过5像素
        if (cc > 5) {
            // 每次执行完后短暂停止后继续执行名字自走
            setTimeout(function () {
                time = setInterval(ss, executionTime)
            }, delayTime)
            // 名字自走函数
            function ss() {
                // 如果位移值小于差值
                if (jl <= cc) {
                    // 就继续增加位移值
                    jl++
                    // 将值赋值给标签
                    cs.style.transform = `translateX(-${jl}px)`;
                } else {
                    // 如果位移值大于差值后，就清除定时器
                    clearInterval(time)
                    // 短暂停止后将名字返回第一个字
                    setTimeout(function () {
                        jl = 0;
                        cs.style.transform = `translateX(0px)`;
                    }, delayTime)
                    // 然后再次启动定时器继续自走
                    setTimeout(function () {
                        time = setInterval(ss, executionTime)
                    }, delayTime * 2)

                }
            }
        }
    }

    // 点击事件函数
    click() {
        // 判断有没有输入值
        if (text.value.trim() != '') {
            //判断本地存储是否有当前键值
            if (localStorage.getItem('arr')) {
                let val = localStorage.getItem('arr');
                this.arr = val.split(',');
            }
            // 判断当前输入的值是否已经存在
            let s = 0;
            //console.log(Object.prototype.toString.call(this.arr))
            for (let w = 0; w < this.arr.length; w++) {
                let vals = this.arr[w];
                // 当输入的值与数组内的值不相等的时候s加一
                if (vals != text.value.trim()) {
                    s++
                } else {
                    // 只要有一个相同就弹出对话框并结束循环
                    alert(`对不起，${text.value.trim()}技能已经存在`);
                    break;
                }
            }
            // 当s的值与数组的值相等后说明没有重复的值
            if (s == this.arr.length) {
                // 将值存入数组
                this.arr.push(text.value.trim())
                //保存进浏览器本地存储
                localStorage.setItem('arr', this.arr);
                // 调用创建标签函数
                let skill = this.SkillLabel(text.value.trim());
                // 将创建的标签放入指定标签内
                Deposit.appendChild(skill);
                // 标签创建完成后调用名字自走函数
                this.NameGoes(this.arr.length - 1)
            }
            // 文本框清零
            text.value = '';
        } else {
            alert('请输入值')
        }
    }
}

//创建实例
var index = new yz();

// 获取标签
// 输入框
var text = document.getElementsByClassName('text')[0];
// 按钮
var btn = document.getElementsByClassName('btn')[0];
// 技能卡存放标签
var Deposit = document.getElementsByClassName('Deposit')[0];
//当浏览器加载完成后
window.onload = function () {
    //判断本地存储是否有当前键值，如果有就在浏览器创建相应的标签
    if (localStorage.getItem('arr')) {
        //获取本地存储
        let val = localStorage.getItem('arr').split(',');
        // 遍历本地存储的数组，创建相应的标签
        val.forEach(function (vals, key) {
            // 调用创建标签函数
            let skill = index.SkillLabel(vals);
            // 将创建的标签放入指定标签内
            Deposit.appendChild(skill);
            // 调用名字自走函数
            index.NameGoes(key)

        })
    }

    // 绑定点击事件
    btn.onclick = function () {
        index.click()
    }
    // 绑定回车键事件
    // 当鼠标聚焦到输入框时触发键盘事件
    text.onfocus = function () {
        window.onkeyup = function (e) {
            let ev = e || window.event;
            if (ev.keyCode == 13) {
                index.click()
            }
        }
    }
    // 当鼠标失焦后取消键盘事件
    text.onblur = function () {
        window.onkeyup = null;
    }


}
