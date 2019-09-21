<template>
    <header id="headerCom">
        <h1>{{title}}</h1>
    </header>


</template>
<script>
export default {
    name:"headerCom",
    props:{
        title:{
            type:String,
            default:"喵眼电影"
        }
    }
}
</script>

<style scoped>
    #headerCom{
        width: 100%;height: 1rem;background: #f03d37;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{color: #fff;font-size: .5rem}
</style>