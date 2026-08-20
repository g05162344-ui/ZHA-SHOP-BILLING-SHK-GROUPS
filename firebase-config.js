/* ============================================================
   ZHA BILL — Firebase Cloud Config
   ============================================================
   This ONE file is used by BOTH admin_panel.html and
   kadai_bill.html, so they connect to the SAME cloud database
   and share the same Products / Bills / Customers data on
   every device.

   Keep this file in the SAME FOLDER as admin_panel.html and
   kadai_bill.html at all times, and upload/host all of them
   together.
============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyAZyVIxsQOECMQoiJJHrJDtMz2m2b8vvqY",
  authDomain: "zha-bill-shop.firebaseapp.com",
  projectId: "zha-bill-shop",
  storageBucket: "zha-bill-shop.firebasestorage.app",
  messagingSenderId: "343119460195",
  appId: "1:343119460195:web:789072df876c9ea8768556"
};
