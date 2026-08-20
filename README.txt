ZHA BILL - Admin Panel + Cloud Sync Package
=============================================

Files:
1. admin_panel.html    -> The Admin Panel (open this to manage the shop)
2. kadai_bill.html      -> Your shop billing page (staff use this for daily billing)
3. firebase-config.js   -> Cloud database settings (fill this in - see below)
4. README.txt           -> This file

IMPORTANT: Keep all 4 files together in the SAME folder, always.
firebase-config.js is loaded by both HTML files, so editing it once
connects BOTH apps to the same cloud database.

====================================================================
STEP 1: Set up your free Firebase cloud database (one-time, ~5 min)
====================================================================
1. Go to https://console.firebase.google.com and sign in with Google.
2. "Add project" -> give it a name (e.g. zha-bill-shop) -> Create
   (Google Analytics: you can disable it, not needed).
3. In the project: Build -> Firestore Database -> Create database ->
   choose a nearby region (e.g. asia-south1, Mumbai) -> "Start in
   test mode".
4. Project settings (gear icon top-left) -> "Your apps" -> click the
   </> (Web) icon -> give it a nickname (e.g. zha-bill) -> Register app.
5. Firebase will show you a block of code with a `firebaseConfig`
   object (apiKey, authDomain, projectId, storageBucket,
   messagingSenderId, appId). Copy those 6 values.
6. Open firebase-config.js in a text editor and replace the
   PASTE_YOUR_... placeholders with your real values. Save.

That's it - both admin_panel.html and kadai_bill.html will now
automatically load and sync Products, Bills, and Customers from
the SAME cloud database, on ANY device, in real time. No manual
"save"/"load" needed - it happens automatically in the background.
(If firebase-config.js is left with the placeholder values, both
apps keep working fine using only that browser's local storage,
same as before - just without cross-device sync.)

====================================================================
STEP 2 (recommended): Secure your database
====================================================================
"Test mode" allows anyone with your config to read/write your data,
and it expires after 30 days. Before that happens, go to Firestore
Database -> Rules tab in the Firebase console and tighten the rules
(or extend the test period while you finish setup). This matters
because your Firebase config will be visible to anyone who views
your website's source code.

====================================================================
Admin Panel login
====================================================================
  Username: admin
  Password: admin123
Change this immediately from Settings after your first login.
Note: this login is a simple check stored in THIS BROWSER only -
it is not part of the cloud database, and is not real server-side
security. It just keeps casual users out on a shared device.

====================================================================
Admin Panel sections (via the menu)
====================================================================
  - Dashboard: sales, stock, profit, and payment-method stats
  - Billing: create/edit bills (same as the shop page)
  - Products / Stock: add, edit, delete, adjust stock, barcode
  - Bill History: view, edit, delete, print, WhatsApp bills
  - Customers: customer list + purchase history
  - Sales & Reports: daily sales, top products, profit report,
    stock value report, customer purchase report
  - Backup & Data: JSON backup/restore, Excel export, clear data
  - Settings: change admin username/password
