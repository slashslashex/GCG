<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {Head, Link, useForm} from '@inertiajs/vue3';


const props = defineProps({
    products: {
        type: Object,
    },
    status: String,
});

const submit = () => {
    form.post(route('products.store'));
};

const productCard = (id) => {
    const routeUrl = route('product.card', { id: id });
    window.location.href = routeUrl;
};

// let showAvailableOnly = false;

</script>

<template>
    <Head title="Добавить продукт"/>

    <AuthenticatedLayout>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="relative p-4 overflow-x-auto shadow-md">
                        <div>
                            <Link :href="route('products.create')"
                                  class="float-left ps-4 py-2 mb-2 fond-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                                Создать продукт
                            </Link>
                            <Link v-if="$page.url.includes('/products')" :href="$page.url.includes('/products/available') ? route('products') : route('products.available')"
                                  class="float-left ps-4 py-2 mb-2 fond-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                                {{ $page.url.includes('/products/available') ? 'Все продукты' : 'Показать только доступные' }}
                            </Link>
                        </div>
                        <div v-if="status"
                             class="flex items-center justify-center w-full p-3 text-sm text-lg font-medium text-green-600 bg-blue-200">
                            {{ status }}
                        </div>
                        <br>
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr >
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

                            <tr v-for="(products, index) in props.products" :key="index" class="bg-white border-b hover:bg-gray-700 cursor-pointer" @click="productCard(products.id)">

                                <td  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {{ products.article }}
                                </td>

                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ products.name }}
                                </td>

                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ products.status }}
                                </td>

                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <template v-if="products.data">
                                        <template v-for="attribute in products.data.attributes">
                                            <p>{{ attribute.name }}: {{ attribute.value }}</p>
                                        </template>
                                    </template>
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
