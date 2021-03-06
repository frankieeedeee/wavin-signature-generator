const html_minifier = require('html-minifier');

const fields = [
    {
        id : "full-name",
        display : "Full Name",
        type : "text"
    },
    
    {
        id : "job-title",
        display : "Job Title at Wavin™",
        type : "text"
    },

    {
        id : "mobile",
        display : "Mobile Number",
        type : "mobile",
        country : "AU"
    },

    {
        id : "email",
        display : "Wavin™ Email Address",
        type : "email",
    },
];

const signatureData = `<table border="0" cellpadding="0" cellspacing="0" class="wavin-signature" style="width: 100%;" width="100%"> <tbody> <tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <table border="0" cellpadding="0" cellspacing="0" class="height-100 logo-person-container" style="margin-bottom: 12px; height: 100%;" height="100%"> <tbody class="height-100" style="height: 100%;"> <tr class="height-100" style="height: 100%;"> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <img src="wavin-logo-emailfooter.png" alt="" class="logo-word" style="width: 115px; position: relative; left: 0;" width="115"> </td><td class="height-100" style="font-family: 'Lato', sans-serif; line-height: 1.21; height: 100%;" height="100%"><div class="logo-divider" style="font-family: 'Lato', sans-serif; line-height: 1.21; width: 2px; height: 100%; background-color: #76b72a; margin: 0 10px; border-radius: 2px;"> </div></td><td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="person-name" style="font-family: 'Lato', sans-serif; margin: 0; font-size: 1.2rem; line-height: 1.4rem; font-weight: 400; color: #000000;">{{full-name}}</p><p class="person-title" style="font-family: 'Lato', sans-serif; line-height: 1.21; margin: 0; font-size: 0.97rem; font-weight: 600; color: #76b72a;">{{job-title}}<span class="person-company" style="font-size: 0.96rem; font-weight: 500; color: rgb(87, 87, 87);">,<br>Wavin Technologies Pty Limited</span></p></td></tr></tbody> </table> </td></tr><tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <table border="0" cellpadding="0" cellspacing="0" class=""> <tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <table border="0" cellpadding="0" cellspacing="0" class=""> <tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="contact-text" style="font-family: 'Lato', sans-serif; line-height: 1.21; margin: 0; font-size: 0.90rem; color: rgb(87, 87, 87); margin-bottom: 4px;"> <span class="contact-hint" style="font-weight: 600; margin-right: 4px; color: rgb(58, 58, 58);">M:</span> <a href="tel:{{mobile-e164}}" style="font-family: 'Lato', sans-serif; line-height: 1.21; color: #76b72a; font-weight: 700;">{{mobile}}</a><span class="contact-spacer" style="font-weight: 500; color: inherit; margin: 0 9px;">|</span><span class="contact-hint" style="font-weight: 600; margin-right: 4px; color: rgb(58, 58, 58);">E:</span> <a href="mailto:{{email}}" style="font-family: 'Lato', sans-serif; line-height: 1.21; color: #76b72a; font-weight: 700;">{{email}}</a> </p></td></tr><tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="contact-text" style="font-family: 'Lato', sans-serif; line-height: 1.21; margin: 0; font-size: 0.90rem; color: rgb(87, 87, 87); margin-bottom: 4px;"> <span class="contact-hint" style="font-weight: 600; margin-right: 4px; color: rgb(58, 58, 58);">W:</span> <a href="http://www.getwavin.com" style="font-family: 'Lato', sans-serif; line-height: 1.21; color: #76b72a; font-weight: 700;">www.getwavin.com</a> </p></td></tr></table> </td></tr><tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="branding-tag" style="font-family: 'Lato', sans-serif; line-height: 1.21; margin: 0; font-size: 0.90rem; color: rgb(58, 58, 58); margin-bottom: 6px;">Don't Just Login. <b>Wavin™</b></p></td></tr></table></td></tr></tbody></table> <tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <table border="0" cellpadding="0" cellspacing="0" class="footer-container" style="margin-top: 18px;"> <tbody> <tr class="height-100" style="height: 100%;"> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"><p class="wave-emoji" style="font-family: 'Lato', sans-serif; line-height: 1.21; margin: 0; font-size: 1.7rem; margin-right: 6px;">&#128075;</p></td><td class="height-100" style="font-family: 'Lato', sans-serif; line-height: 1.21; height: 100%;" height="100%"><div class="footer-divider" style="font-family: 'Lato', sans-serif; line-height: 1.21; width: 2px; height: 70%; background-color: #76b72a; margin: 0 10px; border-radius: 2px;"> </div></td><td style="font-family: 'Lato', sans-serif; line-height: 1.21;"><p class="footer-text" style="font-family: 'Lato', sans-serif; margin: 0; font-size: 0.90rem; line-height: 1.2rem;">Keep your customers, suppliers and patrons safe in a COVID-19 normal world using Wavin™'s patented technology. <span class="contact-text" style="font-size: 0.90rem; color: rgb(87, 87, 87); margin-bottom: 4px;"><a href="http://www.getwavin.com" style="font-family: 'Lato', sans-serif; line-height: 1.21; color: #76b72a; font-weight: 700;">Learn How.</a></span></p></td></tr><tr style="display: none;"> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"></td><td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="footer-text-sm" style="font-family: 'Lato', sans-serif; line-height: 1.21; font-size: 0.90rem; color: rgb(58, 58, 58); margin: 6px 0;">ACN: 642734503 – &copy;2020 Wavin Technologies Pty Limited</p></td></tr></tbody> </table> </td></tr><tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <table border="0" cellpadding="0" cellspacing="0" class="compliance-container" style="margin-top: 18px;"> <tbody> <tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="compliance-text" style="font-family: 'Lato', sans-serif; line-height: 1.21; font-size: 0.8rem; color: rgb(58, 58, 58); margin: 0 0 2px 0;">ACN: 642734503 – &copy;2020 Wavin Technologies Pty Limited</p></td></tr><tr> <td style="font-family: 'Lato', sans-serif; line-height: 1.21;"> <p class="compliance-text" style="font-family: 'Lato', sans-serif; line-height: 1.21; font-size: 0.8rem; color: rgb(58, 58, 58); margin: 0 0 2px 0;">Consider the environment before printing.</p></td></tr></tbody> </table> </td></tr><style>@media screen and (min-width: 480px){.logo-word{width: 160px;}}</style>`;

$(document).ready(function () {
    /**
     * Populate Form with Fields
     */
    const form = $("#generator-form");
    const urlParams = new URLSearchParams(window.location.search);
    fields.forEach((field) => {
        const fieldId = "field-" + field.id;
        const fieldGroup = $('<div class="gen-input-group"></div>');
        const fieldLabel = $('<label class="gen-label" for="' + fieldId + '">' + field.display + '</label>');
        const fieldInput = $('<input type="text" class="gen-input" id="' + fieldId + '">');

        $(fieldGroup).append(fieldLabel);
        $(fieldGroup).append(fieldInput);

        $(form).append(fieldGroup);

        /**
         * Determine if prepopulated value present in request
         */
        const prepopValue = urlParams.get(field.id);
        if (prepopValue)
        {
            $(fieldInput).val(prepopValue);
        }
    });

    /**
     * Append Generate Button
     */
    $(form).append($('<button class="gen-button" type="submit">Generate Signature</button>'));

    /**
     * Prepare Copy Listeners
     */
    const copyMarkup = new ClipboardJS("#copy");
    const copyRaw = new ClipboardJS("#copy-raw");

    copyMarkup.on('success', (e) => {
        e.clearSelection();
        alert("Copied! Now, just paste it into the 'signature' setting in Gmail.");
    });

    copyRaw.on('success', (e) => {
        e.clearSelection();
        alert('Copied! Now, you\'ll need to locate the relevant signature file and replace its contents with what you have just copied. Follow the instructions link to find out more.');
    });

    const onFormSubmitContainer = (e) => {
        try {
            return onFormSubmit(e);
        } catch (err) {
            alert(err);
        }
    }
    form.on("submit", onFormSubmitContainer);

    const onFormSubmit = (e) => {
        e.preventDefault();

        // Retrieve Values and validate
        let values = [];
        fields.forEach((field) => {
            let value = $("#field-" + field.id).val();

            if (typeof value === "undefined" || value === "") {
                throw new Error("Please provide a response for the " + field.display + " field");
            }

            let valueObj = {
                key : field.id,
                value : value
            }
            
            if (field.type === "mobile") {
                value = libphonenumber.parsePhoneNumberFromString(value, field.country);

                if (typeof value === "undefined")
                {
                    throw new Error(field.display + " is not a valid mobile for country: " + field.country);
                }

                // Ensure Correct Formatting
                valueObj.value = value.formatInternational();

                // Add an E164 value
                values.push({
                    key : field.id + "-e164",
                    value : value.format('E.164')
                })
            }

            /**
             * Append Value
             */
            values.push(valueObj);
        })

        /**
         * Convert Signature Content
         */
        var sigatureContent = signatureData;
        values.forEach((value) => {
            const search = "{{" + value.key + "}}";

            if (sigatureContent.indexOf(search)) {
                sigatureContent = sigatureContent.split(search).join(value.value);
            }
        })

        /**
         * Minify Signature Content
         */
        sigatureContent = html_minifier.minify(sigatureContent, {
            collapseWhitespace : true
        });

        /**
         * Display Signature Content
         */
        $("#preview").html(sigatureContent);

        /**
         * Fill Raw Code Field
         */
        $("#raw-code-copy").val(sigatureContent);
    }
});