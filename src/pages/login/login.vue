<template>
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
</template>

<script type="text/javascript">
	
</script>

<style lang="scss" scoped>
    <!-- @import '../../style/mine'; -->
</style>