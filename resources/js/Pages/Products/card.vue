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
    <Head title="Карточка продукта"/>

    <AuthenticatedLayout>
        <div class="py-12 bg-gray">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-gray-700 overflow-hidden max-w-2xl py-4 mx-auto sm:px-6 lg:px-4 pb-20">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-lg text-white py-2">{{ props.product.name }}</h3>
                        <div class="flex space-x-2">
                            <Link :href="route('products.edit', props.product.id)" class="font-medium text-blue-600">
                                <img src="/img/Edit_fill.png" alt="Редактировать" class="block h-10 w-auto m-auto"/>
                            </Link>
                            <Link :href="route('products.delete', props.product.id)" class="font-medium text-red-600">
                                <img src="/img/Trash.png" alt="Удалить" class="block h-10 w-auto m-auto"/>
                            </Link>
                            <Link :href="route('products')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <img src="/img/Close_round.png"  alt="Отмена" class="block h-10 w-auto m-auto" />
                            </Link>
                        </div>
                    </div>
                    <div class="grid grid-cols-5 max-w-md ">
                        <div>
                            <table class="w-full text-sm text-left px-6">
                                <tbody class="text-white">
                                <p class="py-4 font-medium whitespace-nowrap">
                                    Артикул
                                </p>
                                <p class="py-4 font-medium whitespace-nowrap">
                                    Название
                                </p>
                                <p class="py-4 font-medium  whitespace-nowrap">
                                    Статус
                                </p>
                                <p class="py-4 font-medium whitespace-nowrap">
                                    Атрибуты
                                </p>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table class="w-full text-sm text-left text-white">
                                <tbody class="text-white">
                                <p class="px-6 py-4 font-medium whitespace-nowrap">
                                    {{ props.product.article }}
                                </p>
                                <p class="px-6 py-4 font-medium whitespace-nowrap">
                                    {{ props.product.name }}
                                </p>
                                <p class="px-6 py-4 font-medium whitespace-nowrap">
                                    {{ props.product.status }}
                                </p>
                                <span class="px-6 py-4 font-medium whitespace-nowrap">
                                        <template v-if="props.product.data">
                                            <template v-for="attribute in props.product.data.attributes">
                                                <p class="px-6 font-medium whitespace-nowrap">{{attribute.name }}: {{ attribute.value }}</p>
                                            </template>
                                        </template>
                                    </span>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

