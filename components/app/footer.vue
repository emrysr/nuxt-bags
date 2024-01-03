<template>
    <footer>
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <slot></slot>
            <hr
                class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
            />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span
                    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    >© 2024
                    <a href="https://croeso.emrys.cymru" class="hover:underline"
                        >emrysr</a
                    >. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
</template>
