<template>
    <div class="quote" @click="removeQuoteFn(index)">
        {{ text }}
    </div>
</template>

<script>
    export default {
        props: ['text', 'index', 'removeQuoteFn']
    }
</script>

<style scoped>
    div.quote {
        margin: 20px;
        padding: 20px;
        float: left;
        border: 1px solid grey;
        font-style: italic;
        font-size: 3em;
        font-weight: 500;
        font-family: Arizonia, Verdana, sans-serif;
        cursor: pointer;
    }
</style>
