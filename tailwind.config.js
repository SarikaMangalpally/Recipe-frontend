/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
    xs: "648px",
    sm: '768px',
    md: "920px",
    lg: "1024px",
    xl: "1280px"
  },
    extend: {
      fontSize: {
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
        40: "40px",
        44: "44px",
        46: "46px",
        48: "48px",
        54: "54px",
        60: "60px",
        64: "64px",
        72: "72px",
        80: "80px",
        90: "90px",
        100: "100px",
      },
      fontFamily: {
        inspiration: ['Inspiration', 'sans'], 
        poppins: ['Poppins', 'sans'],
        "poppins-bold": ['Poppins Bold', 'sans'],
        "poppins-bold-italic": ['Poppins Bold Italic', 'sans'],
        "poppins-extralight": ['Poppins Extra Light', 'sans'],
        "poppins-extraLight-italic": ['Poppins Extralight Italic', 'sans'],
        "poppins-light": ['Poppins Light', 'sans'],
        "poppins-light-italic": ['Poppins Light Italic', 'sans'],
        "poppins-regular": ['Poppins Regular', 'sans'],
        "poppins-semibold": ['Poppins Semibold', 'sans'],
        "poppins-semibold-italic": ['Poppins Semibold Italic', 'sans'],
      }
    },
  },
  plugins: [],
}

