<template>
    <PostInfo/>
    <PostContent/>
    <PostFooter/>
</template>

<script>
import PostInfo from './PostInfo.vue';
import PostContent from './PostContent.vue';
import PostFooter from './PostFooter.vue';

export default {
    components: {
        PostInfo,
        PostContent,
        PostFooter
    }
}
</script>