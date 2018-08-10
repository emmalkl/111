<template>
    <div>
        <header>
            <span>首页</span>
            <h3>电影</h3>
        </header>
        <nav>
            <ul>
                <li>电影</li>
                <li>音乐</li>
                <li>书籍</li>
                <li>图片</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header,nav{
        height: 1rem;
        width: 100%;
        position: fixed;
        background-color: rgb(33, 150, 243);
    }
    header{
        top:0;
    }
    nav{
        bottom: 0;
    }
</style>

