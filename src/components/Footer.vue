<template>
    <footer class="footer text-center mb-2">
        <div>
            <span>
                <!-- &copy; -->
                {{ $t('developedBy') }}
                <a href="https://github.com/barux" target="_blank">
                    {{ $t('author') }}
                </a>
                <!-- {{ new Date().getFullYear() }} -->
                - v{{ version }}
            </span>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    computed: {
        version() {
            return __APP_VERSION__;
        }
    }
})
</script>