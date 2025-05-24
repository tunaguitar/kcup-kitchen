<template>
  <footer class="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 w-full">
    <div class="w-full flex justify-center absolute -translate-y-[135%] left-0">
      <ArrowUp
        class="text-white w-[50px] h-[50px] rounded-full bg-black cursor-pointer p-3 transition-all hover:-translate-y-0.5"
        :onclick="scrollUp"
      />
    </div>

    <div class="w-full items-center flex-col justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- 1: About / Brand (Placeholder) -->
        <div>
          <h5 class="text-3xl text-white mb-4 font-chelsea font-thin">
            K-Cup Kitchen
          </h5>
          <p class="text-sm text-gray-400 leading-relaxed">
            Located inside Revolving Kitchen at the Fairview Town Center. Come
            in and our staff will assist you with your delicious meal. Thank you
            for joining K-Cup Kitchen!
          </p>
          <NuxtLink href="/order" class="m-5 relative">
            <button
              class="btn flash-slide hover:scale-105 cursor-pointer transition-transform duration-500 flash-slide--green rounded-full"
            >
              Order Online
            </button>
          </NuxtLink>
        </div>

        <!-- 2: Operating Hours -->
        <div>
          <h5 class="text-xl text-white mb-4 font-special font-thin">
            We're Open
          </h5>
          <ul class="space-y-2 text-sm">
            <li class="flex items-start">
              <Clock
                :size="18"
                class="mr-2 mt-0.5 text-gray-400 flex-shrink-0"
              />
              <span>Monday - Wednesday: 11:00 AM - 8:00 PM</span>
            </li>
            <li class="flex items-start">
              <Clock
                :size="18"
                class="mr-2 mt-0.5 text-gray-400 flex-shrink-0"
              />
              <span>Friday - Saturday: 10:00 AM - 10:00 PM</span>
            </li>
            <li class="flex items-start">
              <Clock
                :size="18"
                class="mr-2 mt-0.5 text-gray-400 flex-shrink-0"
              />
              <span>Sunday: 12:00 PM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        <!-- 3: Contact Information -->
        <div>
          <h5 class="text-xl font-special font-thin text-white mb-4">
            Get In Touch
          </h5>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <MapPin
                :size="18"
                class="mr-2 mt-0.5 text-gray-400 flex-shrink-0"
              />
              <a
                href="https://www.google.com/maps/place/Revolving+Kitchen+Fairview/@33.1318532,-96.6544535,17z/data=!3m1!4b1!4m6!3m5!1s0x864c11007077cd75:0x8a62303f868ba57b!8m2!3d33.1318532!4d-96.6518786!16s%2Fg%2F11w3mpwl8h?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >
                146 Town Place Unit 6 Fairview, TX 75069
              </a>
            </li>
            <li class="flex items-center">
              <Phone :size="18" class="mr-2 text-gray-400 flex-shrink-0" />
              <a
                href="tel:310-951-0557"
                class="hover:text-white transition-colors"
                >310-951-0557</a
              >
            </li>
            <li class="flex items-center">
              <Mail :size="18" class="mr-2 text-gray-400 flex-shrink-0" />
              <a
                href="mailto:Contact@k-cupkitchen.com"
                class="hover:text-white transition-colors break-all"
                >Contact@k-cupkitchen.com</a
              >
            </li>
          </ul>
          <p class="mt-4 text-sm text-gray-400">
            For pick-up orders, please message or call us with any questions or
            instructions.
          </p>
        </div>

        <!-- 4: Social Media TODO: Pull from database? -->
        <div>
          <h5 class="text-xl font-special font-thin text-white mb-4">
            Follow Us
          </h5>
          <div class="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook :size="24" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram :size="24" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter :size="24" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"
      >
        © {{ currentYear }} K-Cup Kitchen. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ShoppingCart,
  ArrowUp,
} from "lucide-vue-next";

const currentYear = new Date().getFullYear();

const scrollUp = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
//TODO: Pull social links from database?
</script>

<style scoped></style>
