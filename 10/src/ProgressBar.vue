<template>
    <div class="progress">
        <div class="progress-bar" :style="{width: count * 100 / maxCount + '%'}">
            {{ count }} / {{ maxCount }}
        </div>
    </div>


</template>

<script>
    export default {
        props: ['count', 'maxCount']
    }
</script>

<style>
</style>
