# AMSAttendance
Express JS app to automate teacher attendance and staff covereages.

- Staff texts number to request sick days
- App receives messages and populates an admin dashboard with requested days off
- Admin approves/denies days off --> staff then receive confirmation message
- App uses database of teacher schedules to generate a list of what teachers can cover absent teachers' classes

# Basic features
- Live, deployed app
- App can receive/send messages
- DB of teacher schedules
- Be able to assign coverages from the app
- App sends text messages to teachers covering classes?

# To receive messages on Express App
- Using Twilio API andd ngrok webhooks

# Next steps
- Need to configure Twilio command line to set up phone number URL
- run 'twilio profiles:list to see all Twilio profiles'
- https://www.twilio.com/docs/sms/quickstart/node
- https://www.twilio.com/docs/twilio-cli/general-usage/profiles#use-multiple-profiles
- https://www.google.com/search?q=overlapping+time+schedule+coding+problem&sxsrf=ALiCzsY6Q-cJwSv1ogGZoC2z8MdtTI1-aw:1671752527678&source=lnms&tbm=vid&sa=X&ved=2ahUKEwji5cG8s478AhXUGlkFHS0tC5kQ_AUoAnoECAEQBA&biw=1920&bih=1088&dpr=1#fpstate=ive&vld=cid:db17f444,vid:pirT3bDXXLE