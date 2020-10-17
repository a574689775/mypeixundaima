<template>
    <header :style="{background:$store.state.color}">
        {{$store.state.title}}
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

header{
    height: 1rem;
    background-color: #f00;
    width: 100%;
    position: fixed;
    top: 0;
    color: white;
    text-align: center;
    line-height: 1rem;
    font-size: 25px;
   
}
</style>