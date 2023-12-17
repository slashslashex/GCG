<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link, useForm, usePage  } from '@inertiajs/vue3';

const props = defineProps({
    product: {
        type: Object,
    }
});

const form = useForm({
    article: props.product.article,
    name: props.product.name,
    status: props.product.status,
    attributesData: props.product.data ? props.product.data : { attributes: [] }
});

const { user } = usePage().props;

const addAttribute = () => {
    form.attributesData.attributes.push({ name: '', value: '' });
};

const removeAttribute = (index) => {
    form.attributesData.attributes.splice(index, 1);
};

const submit = () => {
    form.post(route('products.update', props.product.id));
};

</script>

<template>
    <Head title="Edit Product" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Product</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="py-12">
                        <div class="max-w-2xl py-12 mx-auto sm:px-6 lg:px-8">
                            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <h3 class="text-center my-3 text-bold text-lg">Edit Product</h3>
                                <form @submit.prevent="submit" class="max-w-md mx-auto">
                                    <div>
                                        <InputLabel for="article" value="Product Article" />

                                        <TextInput id="article"
                                                   type="text"
                                                   class="mt-1 block w-full"
                                                   v-model="form.article"
                                                   :disabled="user.isAdmin === false"
                                                   autofocus />

                                        <InputError class="mt-2" :message="form.errors.article" />
                                    </div>
                                    <div>
                                        <InputLabel for="name" value="Product Name" />

                                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autofocus />

                                        <InputError class="mt-2" :message="form.errors.name" />
                                    </div>
                                    <div>
                                        <InputLabel for="status" value="Product Status" />

                                        <select id="status" class="mt-1 block w-full" v-model="form.status" autofocus>
                                            <option value="available">Available</option>
                                            <option value="unavailable">Unavailable</option>
                                        </select>

                                        <InputError class="mt-2" :message="form.errors.status" />
                                    </div>
                                    <div>
                                        <InputLabel for="attributes" value="Атрибуты" />
                                        <button @click.prevent="addAttribute" class="mt-2">+</button>
                                        <div>
                                            <template v-if="form.attributesData">
                                            <template v-for="(attribute, index) in form.attributesData.attributes"  :key="index">
                                                <div class="flex items-center">
                                                    <TextInput
                                                        v-model="attribute.name"
                                                        type="text"
                                                        class="mt-1 block w-full"
                                                        placeholder="Название"
                                                    />
                                                    <TextInput
                                                        v-model="attribute.value"
                                                        type="text"
                                                        class="mt-1 block w-full"
                                                        placeholder="Значение"
                                                    />
                                                    <button @click.prevent="removeAttribute(index)" class="ml-2 text-red-500">-</button>
                                                </div>
                                            </template>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <Link :href="route('products')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                            Cancel
                                        </Link>
                                        <PrimaryButton class="w-42 ml-4 my-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            Save Changes
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
