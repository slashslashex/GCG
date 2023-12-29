<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {Head, Link, useForm} from '@inertiajs/vue3';

const form = useForm({
    article: '',
    name: '',
    status: '',
    attributesData: {
        attributes: [],
    },
});

const addAttribute = () => {
    form.attributesData.attributes.push({name: '', value: ''});
};

const removeAttribute = (index) => {
    form.attributesData.attributes.splice(index, 1);
};

const submit = () => {
    form.post(route('products.store'));
};

</script>

<template>
    <Head title="Добавить продукт"/>

    <AuthenticatedLayout>

        <div class="py-12 bg-gray">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                <!--                <div class="bg-black dark:bg-gray-800 overflow-hidden shadow-sm ">-->
                <!--                    <div class="py-12 bg-black">-->
                <!--                        <div class="max-w-2xl py-12 mx-auto sm:px-6 lg:px-8 bg-black">-->
                <div class="bg-gray-700 overflow-hidden shadow-sm max-w-2xl py-4 mx-auto sm:px-6 lg:px-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-lg text-white">Добавить продукт</h3>
                        <div class="flex space-x-2">
                            <Link :href="route('products')"
                                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                <img src="/img/Close_round.png" alt="Отмена" class="block h-10 w-auto m-auto"/>
                            </Link>
                        </div>
                    </div>

                    <form @submit.prevent="submit" class="max-w-md flex flex-col">
                        <div>
                            <InputLabel for="article" value="Артикул" class="text-white mt-6"/>

                            <TextInput id="article" type="text" class="block w-full" v-model="form.article" autofocus/>

                            <InputError class="mt-2" :message="form.errors.article"/>
                        </div>
                        <div>
                            <InputLabel for="name" value="Название" class="text-white mt-4"/>

                            <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autofocus/>

                            <InputError class="mt-2" :message="form.errors.name"/>
                        </div>
                        <div>
                            <InputLabel for="status" value="Статус" class="text-white mt-4"/>

                            <select id="status" class="mt-1 block w-full" v-model="form.status" autofocus>
                                <option value="available">Доступен</option>
                                <option value="unavailable">Недоступен</option>
                            </select>

                            <InputError class="mt-2" :message="form.errors.status"/>
                        </div>
                        <div>
                            <InputLabel for="attributes" value="Атрибуты" class="text-white mt-3 mb-5"/>
                            <div>
                                <template v-for="(attribute, index) in form.attributesData.attributes" :key="index">
                                    <div class="flex items-center mb-4">
                                        <div>
                                            <InputLabel for="attributes" value="Название" class="text-white"/>
                                            <TextInput
                                                v-model="attribute.name"
                                                type="text"
                                                class="mt-1 block w-full"
                                                placeholder="Название"
                                            />
                                        </div>
                                        <div class="ml-4">
                                            <InputLabel for="attributes" value="Значение" class="text-white"/>
                                            <TextInput
                                                v-model="attribute.value"
                                                type="text"
                                                class="mt-1 block w-full"
                                                placeholder="Значение"
                                            />
                                        </div>
                                        <button @click.prevent="removeAttribute(index)" class="ml-2 text-red-500 mt-6">
                                            <img src="/img/Trash.png" alt="-" class="block h-10 "/>
                                        </button>
                                    </div>
                                </template>
                            </div>
                            <button @click.prevent="addAttribute" class="mt-2 text-blue-400">+ Добавить атрибут</button>
                        </div>
                        <div class="flex float-left ">
                            <PrimaryButton class="w-42  my-3" :class="{ 'opacity-25': form.processing }"
                                           :disabled="form.processing">
                                Добавить
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
    </AuthenticatedLayout>
</template>
