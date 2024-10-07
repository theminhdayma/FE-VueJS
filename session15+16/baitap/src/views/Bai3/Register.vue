<template>
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
        Đăng Ký
        </h2>
        <form>
        <div className="mb-4">
            <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
            >
            Your email
            </label>
            <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="email"
            placeholder="name@company.com"
            type="email"
            />
        </div>
        <div className="mb-4">
            <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
            >
            Password
            </label>
            <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="password"
            placeholder="********"
            type="password"
            />
        </div>
        <div className="mb-6">
            <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="confirm-password"
            >
            Confirm password
            </label>
            <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            id="confirm-password"
            placeholder="********"
            type="password"
            />
        </div>
        <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
        >
            Create an account
        </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/login"
            className="text-blue-600 hover:underline"
        >
            Login here
        </router-link>
        </p>
    </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>