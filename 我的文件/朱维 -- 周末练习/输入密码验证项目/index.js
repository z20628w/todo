class paws {

    constructor() {
        // 定义装有数字的数组
        this.number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // 定义装有大写字母的数组
        this.large = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 定义装有小写字母的数组
        this.Small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'];
        // 创建数组接收验证码原本
        this.arr = [];
        // 创建数组接收点击键盘的值
        this.arr1 = [];
        // 设置变量充当小黑点父级标签下标
        this.index = 0;
        // 设置变量让密码输入框只创建一次
        this.srk = 0;
        // 设置变量控制显示隐藏密码按钮的点击频率
        this.frequency = 0;
        // 设置变量接收鼠标移入按键前的按键颜色
        this.color = null;
        // 获取box标签
        this.box = document.getElementsByClassName('box')[0];
        // 获取隐藏的标签
        this.none = document.getElementsByClassName('none');
        // 获取显示密码按钮标签
        this.Ex = document.getElementsByClassName('ExhaledPassword')[0].getElementsByTagName('span')[0];
        // 获取隐藏密码按钮标签
        this.Hi = document.getElementsByClassName('HiddenPassword')[0].getElementsByTagName('span')[0];
        // 获取清空密码按钮标签
        this.Em = document.getElementsByClassName('EmptyPassword')[0].getElementsByTagName('span')[0];
        // 获取测试验证码标签
        this.Ve = document.getElementsByClassName('ver')[0];
        // 获取更换验证码按钮标签
        this.btn = document.getElementsByClassName('btn')[0];
        // 获取密码输入框
        this.Pa = document.getElementsByClassName('paw')[0];
        // 获取密码输入框组
        this.Pas = null;
        // 获取键盘标签
        this.Dig = document.getElementsByClassName('DigitalKeyboard')[0];
        // 获取数字键盘
        this.Num = null;
        // 获取数字键盘下的数字标签组
        this.Nums = null;
        // 获取功能键盘
        this.Fun = null;
        //  获取功能键盘下的按键组
        this.Funs = null;
        // 获取所有的按键
        this.key = null;
    }

    // 创建标签生成函数
    Label(LabelName) {
        return document.createElement(LabelName);
    }

    // 生成随机验证码函数(code为创建的随机验证码的位数，也控制标签的生成个数，最大为7)
    VerificationCodes(code = 4) {
        code = code > 7 ? 7 : code = code <=0 ? 1 : code;
        // 每次创建新验证码时先清空前面的验证码
        this.arr = [];
        // 循环要生成的验证码的位数，随机生成相应位数的验证码
        for (let i = 0; i < code; i++) {
            // 获取随机的数字
            let num = this.number[Math.floor(Math.random() * this.number.length)];
            // 获取随机的小写英文字母
            // let lar = this.large[Math.floor(Math.random()*this.large.length)];
            // 获取随机的大写英文字母
            // let sm = this.Small[Math.floor(Math.random()*this.Small.length)];
            // 将三个值存入一个临时数组内
            let arrs = [num];
            // 随机获取随机数组内的一个值
            let z = arrs[Math.floor(Math.random() * arrs.length)];
            // 将这个值压入随机验证码数组内
            this.arr.push(z);
        }
        // 返回这个数组
        return this.arr;
    }

    // 生成测试验证码标签（参数为获取生成的随机验证码）,还有密码显示框标签
    VerificationCodeLabel(arr = this.VerificationCodes()) {
        // 先删除之前生成的验证码标签
        this.Ve.innerHTML = '';
        // 创建验证码标签
        for (let i = 0; i < arr.length; i++) {
            let Is = this.Label('i');
            // 录入验证码
            Is.innerText = arr[i];
            // 将Is标签存放显示
            this.Ve.appendChild(Is);
            // 确保密码输入框只生成一次
            if (this.srk == 0) {
                // 创建标签
                let spans = this.Label('span');
                spans.setAttribute('class', 'paws');
                let I2s = this.Label('i');
                spans.appendChild(I2s);
                // 将spans标签存放显示
                this.Pa.appendChild(spans);
            }
        }
        this.srk = 1;
        this.Pas = this.Pa.getElementsByClassName('paws');
    }
    // 生成键盘
    keyboard(number = 9, fun = 3) {
        // 生成数字键盘
        // 创建数字键盘大标签
        let nums = this.Label('div');
        // 给大标签添加类名
        nums.setAttribute('class', 'numbers');
        // 循环创建每个数字按键
        for (let i = 0; i < number; i++) {
            // 创建数字按键
            let num = this.Label('span');
            // 给每个数字按键添加类名
            num.setAttribute('class', 'number');
            // 把每个数字按键逐一添加进大标签
            nums.appendChild(num);
        }
        // 将数字大标签添加进键盘标签
        this.Dig.appendChild(nums);
        //获取数字大标签
        this.Num = document.getElementsByClassName('numbers')[0];
        // 获取数字标签组
        this.Nums = this.Num.getElementsByClassName('number');
        // 生成功能键盘
        // 创建功能键盘大标签
        let funs = this.Label('div');
        // 给大标签添加类名
        funs.setAttribute('class', 'function');
        // 循环创建每个功能按键
        for (let i = 0; i < fun; i++) {
            // 创建功能按键
            let num2 = this.Label('span');
            // 给每个功能按键添加类名
            num2.setAttribute('class', 'number');
            // 把每个功能按键逐一添加进大标签
            funs.appendChild(num2);
        }
        // 将功能大标签添加进键盘标签
        this.Dig.appendChild(funs);
        //获取功能大标签
        this.Fun = document.getElementsByClassName('function')[0];
        // 获取功能标签组
        this.Funs = this.Fun.getElementsByClassName('number');
    }
    // 给键盘赋值
    numbers() {
        // 赋值数字键
        for (let i = 0; i < this.Nums.length; i++) {
            this.Nums[i].innerText = i + 1;
        }
        // 赋值功能键
        let arr = ['X', '0', 'AC'];
        for (let i = 0; i < this.Funs.length; i++) {
            this.Funs[i].innerText = arr[i];
        }
        // 获取所有按键
        this.key = document.getElementsByClassName('number');
    }

    // 数字键盘点击事件
    click(keys) {
        // 显示一个小黑点，从第一个开始
        this.Pas[this.index].getElementsByTagName('i')[0].style.display = 'block';
        // 每点击一次，充当小黑点父级标签下标的变量加一
        this.index++;
        // 将键入的值存入数组
        this.arr1.push(keys.innerText);
        // 当index等于随机数数组的长度后，说明输入的位数到了
        if (this.arr1.length == this.arr.length) {
            setTimeout(() => {
                if (this.arr.join('') == this.arr1.join('')) {
                    alert('密码正确')
                } else {
                    alert('密码错误')
                }
                // 创建一个随机数组
                this.VerificationCodeLabel();
                // 将获取的点击键盘值的数组清零
                this.arr1 = [];
                // 将小黑点隐藏
                for (let t = 0; t < this.Pas.length; t++) {
                    this.Pas[t].getElementsByTagName('i')[0].style.display = 'none';
                }
                // 当判断完成后当前值返回0
                this.index = 0;
            }, 100)
        }
    }

    // 获取背景颜色的兼容代码函数
    currentStyle() {
        HTMLElement.prototype.__defineGetter__("currentStyle", function () {
            return this.ownerDocument.defaultView.getComputedStyle(this, null);
        });
    }

    // 删除按钮事件
    delectable() {
        // 判断有没有输入值
        if (this.arr1.length > 0) {
            // 将最后一位数删除
            this.arr1.splice(this.arr1.length - 1, 1);
            // 把当前最后一个小黑点隐藏
            this.Pas[this.arr1.length].getElementsByTagName('i')[0].style.display = 'none';
            // 每点击一次，充当小黑点父级标签下标的变量减一
            this.index--;
        }
    }

    // 全清除按钮事件
    Eliminate() {
        // 输入的值全部清除
        this.arr1 = [];
        // 每点击一次，充当小黑点父级标签下标的变量还原
        this.index = 0;
        // 所有小黑点全部隐藏
        for (let t = 0; t < this.Pas.length; t++) {
            this.Pas[t].getElementsByTagName('i')[0].style.display = 'none';
        }
    }

}

// 生成实例
var total = new paws();
// 浏览器刷新先创建一个随机数组
total.VerificationCodeLabel();
// 创建键盘
total.keyboard();
// 给键盘写值
total.numbers();
// 调用获取背景颜色的兼容代码函数
total.currentStyle();
window.onload = function () {

    // 给更换验证码按钮绑定点击事件
    total.btn.onclick = function () {
        // 随机生成一个验证码
        total.VerificationCodeLabel();
    }

    // 给数字标签绑定点击事件
    for (let i = 0; i < total.Nums.length; i++) {
        total.Nums[i].onclick = function () {
            total.click(this);
        }
    }

    // 给0绑定点击事件
    total.Funs[1].onclick = function () {
        total.click(this);
    }

    // 给所有按键绑定样式事件
    for (let i = 0; i < total.key.length; i++) {
        // 鼠标按下事件
        total.key[i].onmousedown = function () {
            this.style.background = 'orange';
        }
        // 鼠标抬起事件
        total.key[i].onmouseup = function () {
            this.style.background = 'rgba(255,165,0,.5)';
        }
        // 鼠标移入事件
        total.key[i].onmouseover = function () {
            // 获取移入前的背景颜色
            total.color = this.currentStyle.backgroundColor;
            this.style.background = 'rgba(255,165,0,.5)';
        }
        // 鼠标移出事件
        total.key[i].onmouseout = function () {
            this.style.background = total.color;
        }
    }

    //给删除按钮绑定事件
    total.Funs[0].onclick = function () {
        total.delectable();
    }

    //给清除按钮(AC)绑定事件
    total.Funs[2].onclick = function () {
        total.Eliminate();
    }

    // 给清空输入框按钮绑定点击事件
    total.Em.onclick = function () {
        total.Eliminate();
    }

    // 给打开输入框按钮绑定点击事件
    total.Ex.onclick = function () {
        // 控制点击频率
        if (total.frequency == 0) {
            // 每次打开都重新生成新验证码
            total.VerificationCodeLabel();
            // 设置内补白
            total.box.style.paddingTop = '0%';
            // 设置背景颜色
            total.box.style.background = 'rgba(0,255,0,.1)';
            // 设置三个按钮的字体颜色
            total.Ex.style.color = 'rgba(0,0,0,.8)';
            total.Hi.style.color = 'rgba(0,0,0,.8)';
            total.Em.style.color = 'rgba(0,0,0,.8)';
            // 设置标签的显示
            setTimeout(function () {
                for (let s = 0; s < total.none.length; s++) {
                    total.none[s].style.display = 'block';
                }
                setTimeout(function () {
                    for (let s = 0; s < total.none.length; s++) {
                        total.none[s].style.transform = 'scale(1)';
                    }
                }, 300)
            }, 500)
            total.frequency = 1;
        }
    }

    // 给关闭输入框按钮绑定点击事件
    total.Hi.onclick = function () {
         // 控制点击频率
        if (total.frequency == 1) {
            // 先缩小
            for (let s = 0; s < total.none.length; s++) {
                total.none[s].style.transform = 'scale(0)';
            }
            // 然后隐藏
            setTimeout(function () {
                for (let s = 0; s < total.none.length; s++) {
                    total.none[s].style.display = 'none';
                }
            }, 300)
            //    最后样式还原
            setTimeout(function () {
                // 设置内补白
                total.box.style.paddingTop = '13%';
                // 设置背景颜色
                total.box.style.background = ' url(./卡特.jpg) no-repeat 0 0/100% 100%';
                // 设置三个按钮的字体颜色
                total.Ex.style.color = 'rgba(255,255,255,1)';
                total.Hi.style.color = 'rgba(255,255,255,1)';
                total.Em.style.color = 'rgba(255,255,255,1)';
            }, 500)
            total.frequency = 0;
        }
    }
}

