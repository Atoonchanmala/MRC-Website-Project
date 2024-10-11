/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:"#1B3355",     // ລອງ ປັບສີໃຫ້ມັນເບິ່ງສົມດຸນຂື້ນ
        LightCyan:"#5AC8D1"
      }
    },
  },
  plugins: [],
}

// #1B3355