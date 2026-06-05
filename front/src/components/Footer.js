import React from "react";

function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900 p-10 lg:px-52 ">
      <div class="mx-auto w-full  p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src="/logo.png" class="h-25" alt="FlowBite Logo" />
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Информация
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">
                    Наши услуги
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    О нас
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Присоединяйтесь к нам
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:underline">
                    Max
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Правовая информация
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Условия возврата
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2026{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              BUBA™
            </a>
            . Все права защищены.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            ></a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            ></a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            ></a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            ></a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
