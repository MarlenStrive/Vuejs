<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-content></app-content>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Content from './Content.vue'
    
    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-content': Content
        }
    }
</script>

<style>
</style>