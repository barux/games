<template>
    <Teleport to="body">
        <div class="modal bgShadowModal" @click="ifOuterClose" @mousedown="startClick"
            @mouseup="endClick" style="display: block;">
            <div class="modal-dialog modal-dialog-centered customModal"
                :style="`min-width: ${minWidth}; max-width: ${maxWidth};`">
                <div class="modal-content border-0 overflow-hidden ">
                    <div class="modal-header">
                        <h3 class="modal-title mb-0">{{ title }}</h3>
                        <button @click="$emit('close')" type="button" class="btn">
                            <i class="ri-close-line text-light"></i>
                        </button>
                    </div>
                    <div v-if="$slots.body" class="modal-body">
                        <slot name="body"> </slot>
                    </div>
                    <div v-if="$slots.footer" class="modal-footer">
                        <slot name="footer"> </slot>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">

export default {
    emits: ['close'],
    props: {
        title: {
            type: String,
            required: true
        },
        minWidth: {
            type: String,
            default: "30%"
        },
        maxWidth: {
            type: String,
            default: "75%"
        }
    },
    data() {
        return {
            isClicking: false
        }
    },
    methods: {
        ifOuterClose(e: any) {
            if (this.isClicking) {
                this.$emit('close');
                this.isClicking = false;
            }
        },
        startClick(e: any) {
            if (e.target.classList.contains('modal') || e.target.classList.contains('modal-dialog')) {
                this.isClicking = true;
            }
        },
        endClick(e: any) {
            if (!(e.target.classList.contains('modal') || e.target.classList.contains('modal-dialog'))) {
                this.isClicking = false;
            }
        }
    },
    mounted() {
        document.body.style.overflow = "hidden";
    },
    unmounted() {
        document.body.style.overflow = "auto";
    }
}
</script>

<style scoped>
.customModal {
    width: fit-content;

    border-radius: 8px;
    color: white !important;

    .modal-header {
        display: flex;
        justify-content: space-between;
        border: 0 !important;
    }

    .modal-footer {
        border-top: 0 !important;
    }
}

.bgShadowModal {
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(5px);
}

.modal-content {
    height: fit-content;
    background-color: #21242D;
}
</style>