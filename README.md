# UMS(User Management System)

## Dependancy Installation
`npm install express dotenv express-handlebars body-parser mysql`

***

## Run on Local Server
#### run the following command and the project is ready in `http://localhost:5000/`
`npm start`

***

# Connect your dB to Forms
### **NOTE:-** Do the following in incognito mode so problems like auth for one sheet multiple accounts will not occur.
#### -> Create a form using Google Forms relating to your dB table attributes.
#### -> Goto `responses` and create a spreadsheet.
#### -> In spreadsheet, Goto `add-ons` and click `get add-ons`.
#### -> Search for `Pabbly Connect WebHooks` and install it.
#### -> Refresh the sheet and click on add-ons -> Pabbly Connect webHooks -> Initial Setup

* Triggar Column -> It is the last data entry column of the sheet(like D,E,F...)

* Webhook URL -> visit [Pabbly](https://www.pabbly.com/) WebSite and create an account. (It's free of cost)
* * In Apps Section, access `Pabbly Connect` and create a workflow by entering a name.
  * _Choose App_ as `Google Forms` and _Trigger Event_ as `New Response in SpreadSheet`.
  * There you got your _**Webhook URL**_. COPY it, PASTE it in the Initial Setup of Sheet you are working on. Scroll down a little bit and click on the `Capture Webhook Response` button in pabbly website.

#### Come back to forms and add some data by previewing or by sending the form to anyone.
#### Now Go back to pabbly website and see the `Capture Webhook Response`, it stops Loading.
#### Scroll down and click on `Choose Your Next Application`.
#### --> Choose App as `MySQL` by searching for it.
#### --> Choose Action Event as `Insert Row`. Click on `connect`.
#### --> Click on `Add New Connection` and Enter your dB details of your website connected. and Click save.
#### --> After perfect connection with you dB, it shows your table name in drop down. Select it.
#### --> Leave Id(int) and proceed to next fields.
#### --> Click on the field and select `Google Forms: New Response in Spreadsheet` and select the respect attribute name related to dB.
#### --> Finally scroll down and click on `Save & Send Test Request` button.

***

## Fill the form and check on your dB and as well your website.
## Hola! It's DONE :) :) :)



