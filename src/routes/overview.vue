<template>
    <div v-highlightjs>
        <pre><code v-html="code"></code></pre>
    </div>
</template>

<script>
import codes from './codes';
export default {
    data(){
        return {
            code: ''
        }
    },
    created(){
        let _codes = codes.split('\n').map((item, idx, arr) => {
            return item ? ['<li>', item, '</li>'].join('') : '';
        });

        this.code = ['<ol class="code">', _codes.join(''), '</ol>'].join('');
        console.log(this.code);
    }
}
</script>