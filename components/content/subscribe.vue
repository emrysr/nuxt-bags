<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
const state = reactive({
    email: undefined,
});
const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.email) errors.push({ path: "email", message: "Required" });
    return errors;
};
function onSubmit() {
    alert(`🧑‍💻 send ${state.email} to server`);
}
</script>

<template>
    <UCard class="content">
        <article class="prose lg:prose-xl antialiased text-gray-400">
            <slot></slot>
        </article>
        <UForm
            :validate="validate"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
        >
            <UFormGroup label="Your Email Address">
                <UInput
                    icon="i-heroicons-envelope"
                    size="sm"
                    :trailing="false"
                    placeholder="Email"
                    type="email"
                    v-model="state.email"
                />
            </UFormGroup>

            <UButton type="submit"> Submit </UButton>
        </UForm>
    </UCard>
</template>
