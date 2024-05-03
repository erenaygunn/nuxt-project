<template>
    <IntroSingle title="Book Cover Design" breadcrumb="Book Cover Design" text="News Single."/>
    <section class="news-single nav-arrow-b">
        <div class="container">
            <div class="row">
                <ImageBox/>
                <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <Post/>
                </div>
                <div class="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                    <Comments/>
                    <CommentForm/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import IntroSingle from '@/components/IntroSingle.vue'
import ImageBox from '@/components/BlogSingle/ImageBox.vue'
import Post from '@/components/BlogSingle/Post.vue'
import Comments from '@/components/BlogSingle/Comments.vue'
import CommentForm from '@/components/BlogSingle/CommentForm.vue'

export default {
    components: {
        IntroSingle,
        ImageBox,
        Post,
        Comments,
        CommentForm
    }
}
</script>