<template>
  <form @submit="onSubmit">
    <div
      class="md:p-6 p-4 border border-neutral-200 dark:border-neutral-800 rounded-sm md:shadow-md shadow bg-neutral-100 dark:bg-[#191919]"
    >
      <div class="grid md:grid-cols-2 md:gap-6 gap-4">
        <div class="flex flex-col gap-2">
          <label
            for="name"
            class="md:text-lg text-base font-normal text-neutral-500 dark:text-neutral-400"
          >
            Name<span class="text-red-500">*</span>
          </label>
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Your Name"
            class="border border-neutral-200 dark:border-neutral-800 md:py-1.5 py-2 px-3 rounded-sm bg-neutral-50 dark:bg-neutral-900 md:text-base text-sm dark:text-white"
          />
          <p class="text-red-500 md:text-sm text-xs">{{ nameError }}</p>
        </div>

        <div class="flex flex-col gap-2">
          <label
            for="email"
            class="md:text-lg text-base font-normal text-neutral-500 dark:text-neutral-400"
          >
            Email<span class="text-red-500">*</span>
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="jone@deo.com"
            class="border border-neutral-200 dark:border-neutral-800 md:py-1.5 py-2 px-3 rounded-sm bg-neutral-50 dark:bg-neutral-900 md:text-base text-sm dark:text-white"
          />
          <p class="text-red-500 md:text-sm text-xs">{{ emailError }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-2 mt-4">
        <label
          for="message"
          class="md:text-lg text-base font-normal text-neutral-500 dark:text-neutral-400"
        >
          Message<span class="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          placeholder="Hello there, I would like to ask you about..."
          class="border border-neutral-200 dark:border-neutral-800 md:py-1.5 py-2 px-3 rounded-sm bg-neutral-50 dark:bg-neutral-900 md:text-base text-sm dark:text-white"
        ></textarea>
        <p class="text-red-500 md:text-sm text-xs">{{ messageError }}</p>
      </div>

      <div class="flex lg:flex-row flex-col lg:items-center gap-6 mt-6">
        <div>
          <button
            type="submit"
            class="flex gap-2 items-center md:text-lg text-base text-neutral-500 rounded-sm border hover:bg-neutral-100 bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-800 transition-all md:py-1 py-1.5 px-3"
          >
            <Send class="md:w-5 w-4" />
            Send
          </button>
        </div>
        <transition name="fade">
          <p
            class="md:text-base dark:text-neutral-200 text-neutral-800 text-sm tracking-tight flex items-center gap-3"
            v-show="responseBadge.show"
          >
            <CircleX
              v-if="responseBadge.type == 'error'"
              class="sm:w-5 w-10 text-red-500"
            />
            <CircleCheckBig v-else class="sm:w-5 w-10 text-green-600" />
            <span>{{ responseBadge.message }}</span>
          </p>
        </transition>
      </div>
    </div>
  </form>
</template>

<script setup>
const schema = object({
  name: string().required("Name is required"),
  email: string().required("Email is required").email("Invalid email"),
  message: string().required("Message is required"),
});

const responseBadge = ref({
  type: "error",
  message: "",
  show: false,
});

const { handleSubmit, resetForm } = useForm({ validationSchema: schema });

const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");
const { value: message, errorMessage: messageError } = useField("message");

const handleResponseBadge = (message, type = "error") => {
  responseBadge.value.type = type;
  responseBadge.value.message = message;
  responseBadge.value.show = true;

  setTimeout(() => {
    responseBadge.value.show = false;
  }, 5000);
};

const onSubmit = handleSubmit(async (values) => {
  try {
    const url = `https://formspree.io/f/${
      useRuntimeConfig().public.formSubmitKey
    }`;
    await $fetch(url, {
      method: "POST",
      body: values,
    });

    handleResponseBadge(
      "Got it! I’ll reach out to you as soon as possible.",
      "success"
    );
    resetForm();
  } catch (error) {
    handleResponseBadge("Something went wrong. Please try again later.");
  }
});
</script>
