<template>
<div>
	<header>登录</header>
	<div class="warp">
        <div class="padding10">
            <form action="" onsubmit="return login();" method="post">
                <ul class="enterUl">
                    <li><input type="text" name="code" placeholder="账号" class="text-input" value="goldpalm-b" /></li>
                    <li><input type="password" name="password" placeholder="密码" class="text-input" value="aaaaaaaa" /></li>
                </ul>
                <div class="padding10 overHide">
                    <input type="checkbox" name="remember" value="true" class="checkbox f_r" id="remember_me" />
                     <label class="choice f_r" for="remember_me">记住我</label>
                </div>
                <input type="submit" class="subBut" value="登录" />
            </form>
        </div>
	</div>
</div>
</template>

<script type="text/javascript">
    export default{
      name: 'login',
      data () {
        return {
          aaa: true
        }
      }
    }
</script>

<style type="text/css">
    html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

body, h1, h2, h3, p, img, ul, li, dl, dt, dd {
    margin: 0;
    padding: 0;
}

body {
    background: #f8f8f8;
    color: #797979;
    font: normal 16px "microsoft yahei","Arial";
    max-width: 960px;
    margin: 0 auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

li {
    list-style: none;
}

a {
    color: #797979;
    text-decoration: none;
}

input, textarea, select {
    border: 0;
    font-family: inherit;
    font-size: 16px;
    font-weight: inherit;
    resize: none;
    outline: 0;
    box-shadow: none;
}

header {
    background: #5c6bc2;
    height: 45px;
    color: #fff;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 99;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 86px;
}

header a.back {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 8px;
    top: 12px;
    background-size: 18px;
}

.backBox {
    height: 45px;
    width: 45px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
}

.posR {
    position: absolute;
    right: 10px;
    top: 0;
}

.posR .search2 {
    color: #fff;
    font-size: 12px;
    width: 72px;
    display: block;
    position: static;
}
</style>
