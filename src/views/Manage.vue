<template>
    <p class="text-base font-light text-[#4E4E4E]">Settings / Manage Account</p>
    <h1 class="mt-5 text-3xl font-extrabold text-[#444444] leading-9">
        Settings

    </h1>

    <div class="mx-14 mt-16">
        <div class="flex justify-center items-center  ">

            <ul class="flex items-center">
                <li class="px-6 py-2.5">
                    <a class=" text-base font-light text-[#444444] " href="#">
                        Profile
                    </a>
                </li>
                <li class="px-6 py-2.5">
                    <a class="text-base font-light text-[#444444]" href="#">
                        Manage Account
                    </a>
                </li>
                <li class="px-6 py-2.5">
                    <a class="text-base font-light text-[#444444]" href="#">
                        Business Profile
                    </a>
                </li>
                <li class="px-6 py-2.5  bg-[#0A244F] text-white rounded-lg">
                    <a class="" href="#">
                        Team
                    </a>
                </li>
                <li class="px-6 py-2.5">
                    <a class=" text-base font-light text-[#444444]" href="#">
                        Security
                    </a>
                </li>
                <li class="px-6 py-2.5">
                    <a class=" text-base font-light text-[#444444]" href="#">
                        Refer
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="mt-10 h-[960px]  w-full border border-red-200 rounded-2xl shadow">
        <div class="p-10">
            <div class="flex justify-between">
                <h1 class="font-normal text-3xl text-[#444444] leading-9">Manage Roles</h1>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.7098 7.29C14.6169 7.19627 14.5063 7.12188 14.3844 7.07111C14.2626 7.02034 14.1318 6.9942 13.9998 6.9942C13.8678 6.9942 13.7371 7.02034 13.6153 7.07111C13.4934 7.12188 13.3828 7.19627 13.2898 7.29L10.9998 9.59L8.70984 7.29C8.52153 7.1017 8.26614 6.99591 7.99984 6.99591C7.73353 6.99591 7.47814 7.1017 7.28983 7.29C7.10153 7.47831 6.99574 7.7337 6.99574 8C6.99574 8.2663 7.10153 8.5217 7.28983 8.71L9.58984 11L7.28983 13.29C7.19611 13.383 7.12171 13.4936 7.07094 13.6154C7.02017 13.7373 6.99404 13.868 6.99404 14C6.99404 14.132 7.02017 14.2627 7.07094 14.3846C7.12171 14.5064 7.19611 14.617 7.28983 14.71C7.3828 14.8037 7.4934 14.8781 7.61526 14.9289C7.73712 14.9797 7.86782 15.0058 7.99984 15.0058C8.13185 15.0058 8.26255 14.9797 8.38441 14.9289C8.50627 14.8781 8.61687 14.8037 8.70984 14.71L10.9998 12.41L13.2898 14.71C13.3828 14.8037 13.4934 14.8781 13.6153 14.9289C13.7371 14.9797 13.8678 15.0058 13.9998 15.0058C14.1318 15.0058 14.2626 14.9797 14.3844 14.9289C14.5063 14.8781 14.6169 14.8037 14.7098 14.71C14.8036 14.617 14.878 14.5064 14.9287 14.3846C14.9795 14.2627 15.0056 14.132 15.0056 14C15.0056 13.868 14.9795 13.7373 14.9287 13.6154C14.878 13.4936 14.8036 13.383 14.7098 13.29L12.4098 11L14.7098 8.71C14.8036 8.61704 14.878 8.50644 14.9287 8.38458C14.9795 8.26272 15.0056 8.13201 15.0056 8C15.0056 7.86799 14.9795 7.73729 14.9287 7.61543C14.878 7.49357 14.8036 7.38297 14.7098 7.29ZM18.0698 3.93C17.1474 2.9749 16.0439 2.21308 14.8239 1.68899C13.6038 1.1649 12.2916 0.889037 10.9638 0.877499C9.63605 0.86596 8.31926 1.11898 7.09029 1.62179C5.86133 2.1246 4.74481 2.86713 3.80589 3.80605C2.86696 4.74498 2.12443 5.8615 1.62162 7.09046C1.11881 8.31943 0.865793 9.63622 0.877331 10.964C0.888869 12.2918 1.16473 13.604 1.68882 14.824C2.21291 16.0441 2.97473 17.1475 3.92984 18.07C4.8523 19.0251 5.95575 19.7869 7.17579 20.311C8.39583 20.8351 9.70803 21.111 11.0358 21.1225C12.3636 21.134 13.6804 20.881 14.9094 20.3782C16.1383 19.8754 17.2549 19.1329 18.1938 18.194C19.1327 17.255 19.8752 16.1385 20.3781 14.9095C20.8809 13.6806 21.1339 12.3638 21.1223 11.036C21.1108 9.7082 20.8349 8.396 20.3109 7.17596C19.7868 5.95592 19.0249 4.85247 18.0698 3.93ZM16.6598 16.66C15.3519 17.9694 13.6304 18.7848 11.7886 18.9673C9.94688 19.1498 8.09884 18.6881 6.55936 17.6608C5.01987 16.6335 3.88419 15.1042 3.34581 13.3335C2.80742 11.5628 2.89964 9.66014 3.60675 7.94979C4.31386 6.23943 5.59211 4.82715 7.22373 3.95356C8.85534 3.07998 10.7394 2.79913 12.5548 3.15888C14.3703 3.51862 16.0049 4.49669 17.1801 5.92646C18.3553 7.35623 18.9984 9.14924 18.9998 11C19.0034 12.0513 18.7984 13.0928 18.3968 14.0644C17.9951 15.0359 17.4047 15.9182 16.6598 16.66Z"
                        fill="#8B8B8B" />
                </svg>

            </div>

            <div class="border-t-2 border-red w-full mt-8  ">

            </div>

            <div class="mt-8 grid grid-cols-4">
                <div class="col-span-1 border-r border-r-[#8B8B8B;]">
                    <ul class="w-[83%]">
                        <li class="pl-3 py-1 bg-[#023C98] text-white text-xs font-normal">DEFAULT ROLES</li>
                        <li class="mx-3 my-5 font-normal text-base text-[#8B8B8B]">Admin</li>
                        <li class="mx-3 my-5 font-normal text-base text-[#8B8B8B]">Assistant</li>
                        <li class="mx-3 my-5 font-normal text-base text-[#8B8B8B]">Auditor</li>
                        <li class="mx-3 my-7 font-normal text-base text-[#444444]">Custom Roles</li>
                        <li class="p-3 bg-[#FFF0EC] text-base font-bold text-[#E4572E]">Head Account</li>
                        <li class="mx-3 my-5 font-medium text-xs text-[#555555]">You can create your own custom roles,
                            and choose exactly what team members can see and do.
                        </li>

                    </ul>
                    <button class="flex create p-3 w-[83%] bg-[#E4572E] text-sm font-medium text-white">
                        <svg class="mr-2 my-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                                fill="white" />
                        </svg>

                        Create New Role
                    </button>
                </div>
                <div class="col-span-3 ml-3 ">
                    <div class="flex justify-between">
                        <h1 class="font-normal text-3xl text-[#E4572E]">Head Account</h1>
                        <button class="flex create px-4 py-1 w-[92px] h-[32px] rounded bg-[#E4572E]   text-white">
                            <span class="leading-7 text-sm font-medium">Edit</span>

                            <svg class="ml-2 " width="20" height="21" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 17H7.24C7.37161 17.0008 7.50207 16.9755 7.62391 16.9258C7.74574 16.876 7.85656 16.8027 7.95 16.71L14.87 9.78L17.71 7C17.8037 6.90704 17.8781 6.79644 17.9289 6.67458C17.9797 6.55272 18.0058 6.42201 18.0058 6.29C18.0058 6.15799 17.9797 6.02728 17.9289 5.90542C17.8781 5.78356 17.8037 5.67296 17.71 5.58L13.47 1.29C13.377 1.19627 13.2664 1.12188 13.1446 1.07111C13.0227 1.02034 12.892 0.994202 12.76 0.994202C12.628 0.994202 12.4973 1.02034 12.3754 1.07111C12.2536 1.12188 12.143 1.19627 12.05 1.29L9.23 4.12L2.29 11.05C2.19732 11.1434 2.12399 11.2543 2.07423 11.3761C2.02446 11.4979 1.99924 11.6284 2 11.76V16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17ZM12.76 3.41L15.59 6.24L14.17 7.66L11.34 4.83L12.76 3.41ZM4 12.17L9.93 6.24L12.76 9.07L6.83 15H4V12.17ZM19 19H1C0.734784 19 0.48043 19.1054 0.292893 19.2929C0.105357 19.4804 0 19.7348 0 20C0 20.2652 0.105357 20.5196 0.292893 20.7071C0.48043 20.8946 0.734784 21 1 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20C20 19.7348 19.8946 19.4804 19.7071 19.2929C19.5196 19.1054 19.2652 19 19 19Z"
                                    fill="white" />
                            </svg>


                        </button>


                    </div>
                    <p class="leading-5 font-normal mt-3 text-base text-[#444444]">Head make sure that financial reports
                        are
                        up-to-date
                        and compliant with standards. They
                        produce periodic activity updates for top management and an annual budget proposal.
                    </p>

                    <p class="text-[#231F1F] mt-10 font-normal text-base">Team members with the role</p>

                    <div class="grid grid-flow-col auto-cols-max gap-2 mt-2">
                        <!-- border border-[#444444] rounded-full -->
                        <div
                            class="border text-center flex h-[50px] border-[#9B9B9B] bg-[#FFF0EC] text-[#444444] text-sm font-normal rounded-lg  px-1 py-2">
                            <img src="../assets/adao.png" class="h-8 w-8 " alt="">
                            <span class="my-1.5 ml-2">Ada
                                Okonye</span>
                        </div>
                        <div
                            class="border text-center flex h-[50px] border-[#9B9B9B] bg-[#FFF0EC] text-[#444444] text-sm  font-normal rounded-lg  px-1 py-2">
                            <img src="../assets/edw.png" class="h-8 w-8 " alt="">
                            <span class="my-1.5 ml-2 ">Edward Makanaki</span>
                        </div>
                        <div
                            class="border text-center flex h-[50px] border-[#9B9B9B] bg-[#FFF0EC] text-[#444444] text-sm font-normal rounded-lg  px-1 py-2">
                            <img src="../assets/ade.png" class="h-8 w-8 " alt="">
                            <span class="my-1.5 ml-2">Adekule Ajasin</span>
                        </div>
                        <div
                            class="border text-center flex h-[50px] border-[#9B9B9B] bg-[#FFF0EC] text-[#444444] text-sm font-normal rounded-lg  px-1 py-2">
                            <img src="../assets/zain.png" class="h-8 w-8 " alt="">
                            <span class="my-1.5 ml-2">Zainab Muhammad</span>
                        </div>

                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div>
                            <h1 class="text-center px-5 py-1 bg-[#0A244F] font-medium text-base text-white">What Role
                                Can
                                Access</h1>

                            <div class="mx-5 flex justify-between my-2" v-for="d in allowed">
                                <p class="text-base font-normal text-[#444444] leading-5">{{ d }}</p>
                                <svg class="my-2" width="16" height="12" viewBox="0 0 16 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.7099 1.21C14.617 1.11627 14.5064 1.04188 14.3845 0.991107C14.2627 0.940338 14.132 0.9142 13.9999 0.9142C13.8679 0.9142 13.7372 0.940338 13.6154 0.991107C13.4935 1.04188 13.3829 1.11627 13.29 1.21L5.83995 8.67L2.70995 5.53C2.61343 5.43676 2.49949 5.36345 2.37463 5.31424C2.24978 5.26504 2.11645 5.24091 1.98227 5.24323C1.84809 5.24555 1.71568 5.27428 1.5926 5.32777C1.46953 5.38126 1.35819 5.45848 1.26495 5.555C1.17171 5.65152 1.0984 5.76546 1.04919 5.89032C0.999989 6.01517 0.975859 6.1485 0.97818 6.28268C0.980502 6.41686 1.00923 6.54927 1.06272 6.67234C1.11622 6.79542 1.19343 6.90676 1.28995 7L5.12995 10.84C5.22291 10.9337 5.33351 11.0081 5.45537 11.0589C5.57723 11.1097 5.70794 11.1358 5.83995 11.1358C5.97196 11.1358 6.10267 11.1097 6.22453 11.0589C6.34639 11.0081 6.45699 10.9337 6.54995 10.84L14.7099 2.68C14.8115 2.58636 14.8925 2.4727 14.9479 2.3462C15.0033 2.21971 15.0319 2.0831 15.0319 1.945C15.0319 1.8069 15.0033 1.67029 14.9479 1.54379C14.8925 1.41729 14.8115 1.30364 14.7099 1.21Z"
                                        fill="#19A301" />
                                </svg>

                            </div>

                        </div>

                        <div>
                            <h1 class="text-center px-5 py-1 bg-[#E4572E] font-medium text-base text-white">What Role
                                Cannot
                                Access</h1>

                            <div class="mx-5 flex justify-between my-2" v-for="d in blocked">
                                <p class="text-base font-normal text-[#444444] leading-5">{{ d }}</p>
                                <svg class="my-2" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.40994 7L12.7099 2.71C12.8982 2.5217 13.004 2.2663 13.004 2C13.004 1.7337 12.8982 1.47831 12.7099 1.29C12.5216 1.1017 12.2662 0.995911 11.9999 0.995911C11.7336 0.995911 11.4782 1.1017 11.2899 1.29L6.99994 5.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L5.58994 7L1.28994 11.29C1.19621 11.383 1.12182 11.4936 1.07105 11.6154C1.02028 11.7373 0.994141 11.868 0.994141 12C0.994141 12.132 1.02028 12.2627 1.07105 12.3846C1.12182 12.5064 1.19621 12.617 1.28994 12.71C1.3829 12.8037 1.4935 12.8781 1.61536 12.9289C1.73722 12.9797 1.86793 13.0058 1.99994 13.0058C2.13195 13.0058 2.26266 12.9797 2.38452 12.9289C2.50638 12.8781 2.61698 12.8037 2.70994 12.71L6.99994 8.41L11.2899 12.71C11.3829 12.8037 11.4935 12.8781 11.6154 12.9289C11.7372 12.9797 11.8679 13.0058 11.9999 13.0058C12.132 13.0058 12.2627 12.9797 12.3845 12.9289C12.5064 12.8781 12.617 12.8037 12.7099 12.71C12.8037 12.617 12.8781 12.5064 12.9288 12.3846C12.9796 12.2627 13.0057 12.132 13.0057 12C13.0057 11.868 12.9796 11.7373 12.9288 11.6154C12.8781 11.4936 12.8037 11.383 12.7099 11.29L8.40994 7Z"
                                        fill="#DE1C10" />
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>

    <div class="mt-20 w-20 h-20"></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Roboto:wght@100;300;400;500;700;900&display=swap');

.create {
    font-family: 'Inter', 'Roboto';
}
</style>

<script setup>
import { ref } from 'vue';
const allowed = ref(['View Employee', 'Add Bonus and Deduction', 'Add Compliance', 'Edit Compliance',
    'Transaction History', 'Fund Wallet', 'Manage Inventory', 'Manage Invoice', 'Manage Receipt',
    'Manage Receipt', 'Book Keeping Settings'
])

const blocked = ref(['Purchase or Change Plan', 'Add Employee', 'Edit Employee', 'Add Salary',
    'Edit Salary', 'Run Payroll', 'Archive Employee', 'Pay Compliance', 'Fund Wallet',
    'Withdraw from Wallet', 'Manage Account', 'Manage Business Profile', 'Manage Team'
])

</script>