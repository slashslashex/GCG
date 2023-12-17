<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm, Link} from '@inertiajs/vue3';

const props = defineProps({
    product: {
        type: Object,
    },
});


console.log(props.product.article);
</script>

<template>
    <Head title="Product Card" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Product Card</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="relative p-4 overflow-x-auto shadow-md">
                        <br>
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Артикул
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Название
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Статус
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Атрибуты
                                </th>

                            </tr>
                            </thead>
                            <tbody>
<!--                            <p> {{ props.product.article }}</p>-->
                            <tr class="bg-white border-b">
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ props.product.article }}
                                </td>

                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ props.product.name }}
                                </td>

                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ props.product.status }}
                                </td>

                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <template v-if="props.product.data">
                                        <template v-for="attribute in props.product.data.attributes">
                                            <p>{{ attribute.name }}: {{ attribute.value }}</p>
                                        </template>
                                    </template>
                                </td>

                                <td class="px-6 py-3">
                                    <Link :href="route('products.edit', props.product.id)" class="mx-1 font-medium text-blue-600">Edit</Link>
                                    <Link :href="route('products.delete', props.product.id)" class="mx-1 font-medium text-red-600">Delete</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
