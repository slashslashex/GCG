<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    username: '',
    fullName: '',
    password: '',
    password_confirmation: '',
});

defineProps({
    status: {
        type: String,
    },
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Регистрация" />
        <div v-if="status"
             class="flex items-center justify-center w-full p-3 text-sm text-lg font-medium text-green-600 bg-blue-200">
            {{ status }}
        </div>
        <form @submit.prevent="submit">
            <div>
                <InputLabel for="username" value="Имя пользователя" />

                <TextInput
                    id="username"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.username"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.username" />
            </div>

            <div>
                <InputLabel for="fullName" value="ФИО" />

                <TextInput
                    id="fullName"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.fullName"
                    required
                    autofocus
                    autocomplete="fullName"
                />

                <InputError class="mt-2" :message="form.errors.fullName" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Пароль" />

                <TextInput
                    id="password"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Подтвердить пароль" />

                <TextInput
                    id="password_confirmation"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center justify-end mt-4">

                <Link
                    :href="route('products')"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Назад
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Зарегистрировать
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
