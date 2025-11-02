//BRAND
export const appName = import.meta.env.VITE_APP_NAME || 'AiCourse';
export const companyName = import.meta.env.VITE_COMPANY_NAME || 'Spacester';
export const websiteURL = import.meta.env.VITE_WEBSITE_URL || window.location.origin;
export const serverURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';
export const appLogo = 'https://firebasestorage.googleapis.com/v0/b/aicourse-81b42.appspot.com/o/aicouse.png?alt=media&token=7175cdbe-64b4-4fe4-bb6d-b519347ad8af';
export const razorpayEnabled = import.meta.env.VITE_RAZORPAY_ENABLED !== 'false';
export const paypalEnabled = import.meta.env.VITE_PAYPAL_ENABLED !== 'false';
export const stripeEnabled = import.meta.env.VITE_STRIPE_ENABLED !== 'false';
export const paystackEnabled = import.meta.env.VITE_PAYSTACK_ENABLED !== 'false';
export const flutterwaveEnabled = import.meta.env.VITE_FLUTTERWAVE_ENABLED !== 'false';

//PRICING :-

//FREE 
export const FreeType = 'Free Plan';
export const FreeCost = 0;
export const FreeTime = '';

//MONTHLY 
export const MonthType = 'Monthly Plan';
export const MonthCost = 9;
export const MonthTime = 'month';

//YEARLY 
export const YearType = 'Yearly Plan';
export const YearCost = 99;
export const YearTime = 'year';

//TESTIMONIAL
export const review = "The AI Course Generator revolutionized my content creation process, providing accurate and relevant topics effortlessly. It's a time-saving powerhouse that enhances the quality and relevance of my courses. A must-have tool for educators seeking efficiency and impactful online learning experiences.";
export const from = "Anam Meena Sharif";
export const profession = 'CFO at Spacester';
export const photoURL = 'https://firebasestorage.googleapis.com/v0/b/aicourse-81b42.appspot.com/o/aicouse.png?alt=media&token=7175cdbe-64b4-4fe4-bb6d-b519347ad8af';

//PAYPAL
export const paypalPlanIdOne = import.meta.env.VITE_PAYPAL_PLAN_ID_MONTHLY || "P-1EM732768S920784HMWKW3OA";
export const paypalPlanIdTwo = import.meta.env.VITE_PAYPAL_PLAN_ID_YEARLY || "P-8T744865W27080359MWOCE5Q";

//RAZORPAY
export const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_uqALjZHyTyuiOm";
export const razorpayPlanIdOne = import.meta.env.VITE_RAZORPAY_PLAN_ID_MONTHLY || "plan_NMvvtDfznbRp6V";
export const razorpayPlanIdTwo = import.meta.env.VITE_RAZORPAY_PLAN_ID_YEARLY || "plan_NMRc9HARBQRLWA";

//STRIPE
export const stripePlanIdOne = import.meta.env.VITE_STRIPE_PLAN_ID_MONTHLY || "price_1OTo7CSDXmLtVnVeaHIHxqCj";
export const stripePlanIdTwo = import.meta.env.VITE_STRIPE_PLAN_ID_YEARLY || "price_1OTo7eSDXmLtVnVeBbn82U5B";

//PAYSTACK
export const paystackPlanIdOne = import.meta.env.VITE_PAYSTACK_PLAN_ID_MONTHLY || "PLN_ouqmm8eo6i2k9k8";
export const paystackPlanIdTwo = import.meta.env.VITE_PAYSTACK_PLAN_ID_YEARLY || "PLN_1v1xqb8io9t5lis";
export const amountInZarOne = '170';
export const amountInZarTwo = '1871';

//FLUTTERWAVE
export const flutterwavePlanIdOne = import.meta.env.VITE_FLUTTERWAVE_PLAN_ID_MONTHLY || "67960";
export const flutterwavePlanIdTwo = import.meta.env.VITE_FLUTTERWAVE_PLAN_ID_YEARLY || "67961";
export const flutterwavePublicKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY || "FLWPUBK_TEST-6ee1faf6460ea587f510a024ac4c2b23-X";

//SOCIAL SIGNIN
export const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "150644331076-flt197jvuqg9ohlf6q9rsjk3e3qomjd2.apps.googleusercontent.com";
export const facebookClientId = import.meta.env.VITE_FACEBOOK_CLIENT_ID || "8065327730213158";

//SOCIAL MEDIA
export const facebookSocialLink = import.meta.env.VITE_FACEBOOK_LINK || "https://www.youtube.com/@spacester-codecanyon";
export const twitterSocialLink = import.meta.env.VITE_TWITTER_LINK || "https://www.youtube.com/@spacester-codecanyon";
export const instagramSocialLink = import.meta.env.VITE_INSTAGRAM_LINK || "https://www.youtube.com/@spacester-codecanyon";
