! function () {

  let code = `
/*
* 开始画一个可爱的皮卡丘
*/  
    .code-wrapper{
      flex: 1;
      height: 50%;
    }  
    .preview-wrapper{
      flex: 1;
      height: 50%;
    }
/*
* 首先需要准备皮卡丘的皮
*/
    .preview {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: yellow;
    }
    .wrapper {
      width: 100%;
      height: 165px;
      position: relative;
    }
    .wrapper > :not(:last-child){    
      z-index: 1;
    }
/*
* 接下来画皮卡丘的鼻子
*/
    .nose {
      border-style: solid;
      border-radius: 50%;
      border-width: 15px;
      border-color: black transparent transparent transparent;
      left: 50%;
      position: absolute;
      top: 28px;
      transform: translateX(-50%);
    }
/*
* 接下来是眼睛
*/
    .eye {
      width: 49px;
      height: 49px;
      background: #2e2e2e;
      position: absolute;
      border-radius: 50%;
      border: 3px solid black;
    }
/*
* 眼珠子不能少
*/
    .eye::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: white;
      position: absolute;
      border-radius: 50%;
      left: 6px;
      top: -1px;
      border: 2px solid black;
    }
/*
* 左眼不能在右边（废话）
*/ 
    .eye.left {
      right: 50%;
      margin-right: 90px;
    }
/*
* 右眼不能在左边（废话）
*/     
    .eye.right {
      left: 50%;
      margin-left: 90px;
    }
/*
* 红脸蛋也该准备了
*/
    .face {
      width: 68px;
      height: 68px;
      background: #fc0d1c;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top: 80px;
    }
/*
* 左面的红脸蛋
*/ 
    .face.left {
      right: 50%;
      margin-right: 116px;
    }
/*
* 右面的红脸蛋
*/   
    .face.right {
      left: 50%;
      margin-left: 116px;
    }
/*
* 接下来是上嘴唇
*/
    .upperLip {
      width: 80px;
      height: 25px;
      border: 3px solid black;
      border-top: none;
      top: 55px;
      position: absolute;
      background: yellow;
    }
    .upperLip.left {
      border-bottom-left-radius: 40px 20px;
      border-right: none;
      transform: rotate(-20deg);
      right: 50%;
    }
    
    .upperLip.right {
      border-bottom-right-radius: 40px 20px;
      border-left: none;
      transform: rotate(20deg);
      left: 50%;
    }
/*
* 然后就是下嘴唇了
*/
    .lowerLip-wrapper {
      bottom: 0;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      
      /* border: 1px solid red; */
      height: 100px;
      width: 300px;
      overflow: hidden;
    }
    
    .lowerLip {
      width: 300px;
      height: 3000px;
      background: #990513;
      border-radius: 300px/2000px;
      border: 2px solid black;
      position: absolute;
      bottom: 0;
      overflow: hidden;
    }
/*
* 最后是舌头
*/
    .lowerLip::after {
      content: '';
      position: absolute;
      bottom: -30px;
      width: 100px;
      height: 100px;
      background: #fc4a62;
      border-radius: 50px;
      left: 50%;
      margin-left: -50px;
  
    }
/*
* 好了，皮卡丘画完了~！
*/
    `
  var duration = 50

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')

    let n = 0

    let id = setTimeout(function run() {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call()
      }
    }, 50);
  }
  writeCode('', code)
  $('.actions').on('click', 'button', (e) => {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break;
      case 'normal':
        duration = 50
        break;
      case 'fast':
        duration = 10
        break;

    }

  })
}.call()