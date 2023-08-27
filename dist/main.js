/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 
#E7717D
#C2CAD0
#C2B9B0
#7E685A
#AFD275
  #EDCBD2, #80C4B7, #E3856B
 */


@keyframes rotateSpin {
    0%   {rotate: 0deg;}
    10%   {rotate: 25deg;}
    20%   {rotate: 45eg;}
    30%   {rotate: 55deg;}
    40%   {rotate: 65deg;}
    50%   {rotate: 90deg;}
    60%   {rotate: 110deg;}
    70%   {rotate: 130deg;}
    80%   {rotate: 150deg;}
    90%   {rotate: 170deg;}
    100%   {rotate: 180deg;}
}

@keyframes rotateSmall {
    0%   {rotate: 0deg;}
    10%   {rotate: 25deg;}
    20%   {rotate: 45eg;}
    30%   {rotate: 55deg;}
    40%   {rotate: 65deg;}
    50%   {rotate: 90deg;}
    60%   {rotate: 110deg;}
    70%   {rotate: 130deg;}
    80%   {rotate: 150deg;}
    90%   {rotate: 170deg;}
    100%   {rotate: 180deg;}
}
  

* {
    padding:0px;
    margin:0px;
    font-family:'Work Sans', sans-serif;
}

body {
    background-color:#AFD275; /* #7E685A; */ /* #AFD275; */;
}

button {
    font-family:'Work Sans', sans-serif;
}

input {
    font-family:'Work Sans', sans-serif;
}

.carddiv {
    border: 1px solid  #E7717D; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */
    padding: 10px 20px;
    display:grid;
    gap:15px;
    grid-template-columns: auto 2fr repeat(4, auto);
    align-items: center;
    justify-items: center;
}

.header {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px 30px;
    gap:20px;
    color:white;
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 3vh;
    background-color:#EDCBD2, /* #7E685A; */ /* #AFD275; */;

}

#body {
    display: grid;
    grid-template-columns: 1fr 6fr;
}

#sidebar {
    padding: 10px;
    padding-top: 10vh;

    display: grid;
    justify-content: center;
    gap:5vh;
    align-items: center;
    align-content: start;
    background-color:#80C4B7; /* #AFD275; */;;
}

#sidebar > button {
    border:none;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 3vw;
}

.alllists {
    padding: 30px;
    display: grid;
    gap:2vh;
    align-content: start;
    background-color: #AFD275;
}

.alllists > div {
    opacity: 0.7;
    background-color:#E3856B; 
    font-size: 2vh;
}

.alllists > div:hover {
    box-shadow:rgba(83, 77, 77, 0.215) 0px 19px 38px, rgba(119, 109, 109, 0.22) 0px 7px 5px;;
    transform: scale(1.01);
    font-weight: bold;
    opacity: 1;
}



.hascompletedbutton {
    background-color: rgb(24, 223, 24);
}

.hasnotcompletedbutton {
    background-color: rgb(238, 24, 24);
}

.detailBtn {
    padding:5px 10px;
    border-radius: 5px 5px 5px 5px;
    border: none;
}

.detailBtn:hover {
    background-color:#C2CAD0;
  
    transform: scale(1.1);
    font-weight: bold;

}

.deleteicon {
    display: inline;
    width:3vh;
    height:auto;
}

.editicon {
    display: inline;
    height:2.5vh;
    width:auto;
}

#favdialog::backdrop, #notedialog::backdrop {
    background-color: rgba(194, 202, 208,0.3); /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;
}

.notebookicon {
    display: inline;
    width:5vh;
    height:auto;
}

#favdialog {
    border-radius: 10%;
    border: none;
    padding:10px;
    margin: auto;
    display:grid;
    gap:5px;
}

#notedialog {
    border-radius: 10%;
    border: none;
    padding:10px;
    margin: auto;
    display: grid;
}

#notedialog > form {
    justify-self: end;
}

#favdialog > form {
    justify-self: end;
}

#deatilcancelbtn, #addNotesCancelBtn {
    border-radius: 80%;
    padding:10px;
    margin:auto;
    border: none;
    background-color: transparent;
}

#deatilcancelbtn:hover , #addNotesCancelBtn:hover{
    transform: scale(1.07);
    animation-name: rotateSpin;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}

.detailsDiv {
    display:grid;
    gap:7px;
    letter-spacing: 2px;
    padding: 20px 30px;
}

.highpriority {
    border-left: 10px solid  rgba(231, 113, 125,0.8); /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;;;
}

.mediumpriority {
    border-left: 10px solid rgba(21, 218, 21,0.8);
}

.lowpriority {
    border-left: 10px solid rgba(235, 235, 34,0.8);
}

#sidebar {
    padding: 30px 10px;
}

#sidebar > button:hover {
    transform: scale(1.1);
}

#projectBtn {
    display: grid;
    gap:15px;
}

#projectBtn > button {
    background-color: transparent;

    border:none;
}

#projectBtn > button:hover {
    transform: scale(1.01);
    font-weight: bold;
}

.projectBtnDiv {
    margin: auto;
    text-align: center;
}

.projectBtnDiv > button {
    background-color: transparent;
    font-size:2.5vh;
    border:none;
    color:white;
    margin:1vh 0px;
    padding:0.5vw;
}

.projectBtnDiv > button:hover {
    transform: scale(1.1);
    font-weight: 100;
}


.notecard {
    background-color: #C2B9B0; /* #7E685A; */ /* #AFD275; */;;
    border: 1px solid #C2B9B0;  /* #7E685A; */ /* #AFD275; */;;
}

.allNotes {
    display:grid;
    padding: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.allNotes > div {
    border-radius: 5%;
    opacity: 0.7;
    display:grid;
    gap:10px;
    padding:10px;
    background-color: #E7717D; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;
}

.allNotes div > p {
    padding: 10px 20px;
}

.allNotes > div > button {
    background-color: transparent;
    border: none;
    justify-self: end;
}

.allNotes > div > button:hover {
    transform: scale(1.1);
    animation-name: rotateSpin;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}

.allNotes > div:hover {
    box-shadow:rgba(83, 77, 77, 0.215) 0px 19px 38px, rgba(119, 109, 109, 0.22) 0px 7px 5px;
    transform: scale(1.01);
    font-weight:100;
    opacity: 1;
}

#addNotesDiv {
    box-shadow:none;
    margin: auto;
    padding:10px;
    margin-bottom: 50px;
    background-color: transparent;
}

#addNotesDiv:hover {
    transform: scale(1);
}

#addNewNotesBtn {

}


#addNewNotesBtn > img {
    width:7vw;
 
    height: auto;
}

#addNewNotesBtn > img:hover {
    animation-name: rotateSmall;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.addNewNotesBtn {
    background-color: transparent;
    border:none;
    font-size: 2vh !important;
}

.addNewNotesBtn:hover {
    transform: scale(1.1);
    font-weight: 100;
    margin: auto;
}

.noteInput {
    -webkit-appearance: none;
    border: none;
    border-bottom: 5px solid  #C2B9B0; /* #7E685A; */ /* #AFD275; */;
    outline:white;
}

.noteInput::placeholder {
    text-align: center;
    letter-spacing: 2px;
}

.noteInput:focus {
    border:none;
    outline:none;
    transform: scale(1.03);
}

.noteInputsDiv {
    text-align: center;
    display:grid;
    justify-items: stretch;
    padding: 0px 10px;
}

.noteSaveBtn {
    margin-top: 8px;
    margin-bottom: 10px;
    display: block;
    padding:5px;
    background-color: rgba(127, 255, 212,0.6);
    border:none;
    letter-spacing: 3px;

}

.noteSaveBtn:hover {
    transform: scale(1.05);
    font-weight: bold;
    background-color: rgba(127, 255, 212,0.8);
}

.noteForm {
    display: grid;
    gap:10px;
}

#notedialog {
    padding:10px;
    display:grid;
    gap:10px;
}


/* To DO List FOrm Styles */
.plusIconDiv {
    text-align: center;
}

.plusToDo {
    width: 6vh;
    margin:auto;
    height:auto;
}

.plusToDo:hover {
    transform: scale(1.07);
    animation-name: rotateSpin;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}



#toDoDialog {
    border-radius: 10%;
    border: none;
    padding:20px;
    margin: auto;
    display: grid;
    gap:15px;

}

#editToDoDialog {
    border-radius: 10%;
    border: none;
    padding:20px;
    margin: auto;
    display: grid;
    gap:15px;

}

#toDoDialog::backdrop {
    background-color:  rgba(194, 202, 208,0.3);
}

#editToDoDialog::backdrop {
    background-color:  rgba(194, 202, 208,0.3);
}

.cancelToDoFormDiv {
    justify-self: end;
}

#toDoCancelBtn {
    border: none;
    outline: none;
    background-color: transparent;
}

.addNewNotesBtn {
    width:2vh;
    height: auto;
}

#toDoCancelBtn:hover {
    transform: scale(1.07);
    font-weight: bolder;
    animation-name: rotateSpin;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}

.toDoForm {
    padding: 15px;
}

.toDoForm > div > input {
    /* -webkit-appearance: none; */
    margin:10px 0px;
    outline: none;  
    border:none;
    border-bottom: 3px solid aquamarine;
    opacity: 0.6;

}
.toDoForm > div > input:focus {
    transform: scale(1.03);
    opacity: 1;
    font-weight: bolder;
    letter-spacing: 4px;
    margin: 15px 0px;

}
.toDoForm > div > input::placeholder {
    text-align:center;
    outline: none;
    font-weight: bold;
}

.toDoSaveBtn, .edittoDoSaveBtn {
    width: 100%;
    padding: 5px;
    border: none;
    background-color: rgba(0, 255, 255,0.3);
}

.toDoSaveBtn:hover, .edittoDoSaveBtn:hover {
    transform: scale(1.03);
    font-weight: 100;
    background-color: rgba(0, 255, 255,0.6);
}

.calendarInput {
    width:100%;
}


.priorityDiv {
    margin-top:10px;
    text-align: center;
    margin:auto;
}
.deleteicon {
    height:2.5vh;
    width:auto;
}

.deleteicon:hover {
    transform: scale(1.1);
    fill:red!important;
}

.editicon:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 600x) {
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* \n#E7717D\n#C2CAD0\n#C2B9B0\n#7E685A\n#AFD275\n  #EDCBD2, #80C4B7, #E3856B\n */\n\n\n@keyframes rotateSpin {\n    0%   {rotate: 0deg;}\n    10%   {rotate: 25deg;}\n    20%   {rotate: 45eg;}\n    30%   {rotate: 55deg;}\n    40%   {rotate: 65deg;}\n    50%   {rotate: 90deg;}\n    60%   {rotate: 110deg;}\n    70%   {rotate: 130deg;}\n    80%   {rotate: 150deg;}\n    90%   {rotate: 170deg;}\n    100%   {rotate: 180deg;}\n}\n\n@keyframes rotateSmall {\n    0%   {rotate: 0deg;}\n    10%   {rotate: 25deg;}\n    20%   {rotate: 45eg;}\n    30%   {rotate: 55deg;}\n    40%   {rotate: 65deg;}\n    50%   {rotate: 90deg;}\n    60%   {rotate: 110deg;}\n    70%   {rotate: 130deg;}\n    80%   {rotate: 150deg;}\n    90%   {rotate: 170deg;}\n    100%   {rotate: 180deg;}\n}\n  \n\n* {\n    padding:0px;\n    margin:0px;\n    font-family:'Work Sans', sans-serif;\n}\n\nbody {\n    background-color:#AFD275; /* #7E685A; */ /* #AFD275; */;\n}\n\nbutton {\n    font-family:'Work Sans', sans-serif;\n}\n\ninput {\n    font-family:'Work Sans', sans-serif;\n}\n\n.carddiv {\n    border: 1px solid  #E7717D; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */\n    padding: 10px 20px;\n    display:grid;\n    gap:15px;\n    grid-template-columns: auto 2fr repeat(4, auto);\n    align-items: center;\n    justify-items: center;\n}\n\n.header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 20px 30px;\n    gap:20px;\n    color:white;\n    font-weight: bold;\n    letter-spacing: 4px;\n    font-size: 3vh;\n    background-color:#EDCBD2, /* #7E685A; */ /* #AFD275; */;\n\n}\n\n#body {\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n#sidebar {\n    padding: 10px;\n    padding-top: 10vh;\n\n    display: grid;\n    justify-content: center;\n    gap:5vh;\n    align-items: center;\n    align-content: start;\n    background-color:#80C4B7; /* #AFD275; */;;\n}\n\n#sidebar > button {\n    border:none;\n    background-color: transparent;\n    color: white;\n    font-weight: bold;\n    font-size: 3vw;\n}\n\n.alllists {\n    padding: 30px;\n    display: grid;\n    gap:2vh;\n    align-content: start;\n    background-color: #AFD275;\n}\n\n.alllists > div {\n    opacity: 0.7;\n    background-color:#E3856B; \n    font-size: 2vh;\n}\n\n.alllists > div:hover {\n    box-shadow:rgba(83, 77, 77, 0.215) 0px 19px 38px, rgba(119, 109, 109, 0.22) 0px 7px 5px;;\n    transform: scale(1.01);\n    font-weight: bold;\n    opacity: 1;\n}\n\n\n\n.hascompletedbutton {\n    background-color: rgb(24, 223, 24);\n}\n\n.hasnotcompletedbutton {\n    background-color: rgb(238, 24, 24);\n}\n\n.detailBtn {\n    padding:5px 10px;\n    border-radius: 5px 5px 5px 5px;\n    border: none;\n}\n\n.detailBtn:hover {\n    background-color:#C2CAD0;\n  \n    transform: scale(1.1);\n    font-weight: bold;\n\n}\n\n.deleteicon {\n    display: inline;\n    width:3vh;\n    height:auto;\n}\n\n.editicon {\n    display: inline;\n    height:2.5vh;\n    width:auto;\n}\n\n#favdialog::backdrop, #notedialog::backdrop {\n    background-color: rgba(194, 202, 208,0.3); /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;\n}\n\n.notebookicon {\n    display: inline;\n    width:5vh;\n    height:auto;\n}\n\n#favdialog {\n    border-radius: 10%;\n    border: none;\n    padding:10px;\n    margin: auto;\n    display:grid;\n    gap:5px;\n}\n\n#notedialog {\n    border-radius: 10%;\n    border: none;\n    padding:10px;\n    margin: auto;\n    display: grid;\n}\n\n#notedialog > form {\n    justify-self: end;\n}\n\n#favdialog > form {\n    justify-self: end;\n}\n\n#deatilcancelbtn, #addNotesCancelBtn {\n    border-radius: 80%;\n    padding:10px;\n    margin:auto;\n    border: none;\n    background-color: transparent;\n}\n\n#deatilcancelbtn:hover , #addNotesCancelBtn:hover{\n    transform: scale(1.07);\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n.detailsDiv {\n    display:grid;\n    gap:7px;\n    letter-spacing: 2px;\n    padding: 20px 30px;\n}\n\n.highpriority {\n    border-left: 10px solid  rgba(231, 113, 125,0.8); /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;;;\n}\n\n.mediumpriority {\n    border-left: 10px solid rgba(21, 218, 21,0.8);\n}\n\n.lowpriority {\n    border-left: 10px solid rgba(235, 235, 34,0.8);\n}\n\n#sidebar {\n    padding: 30px 10px;\n}\n\n#sidebar > button:hover {\n    transform: scale(1.1);\n}\n\n#projectBtn {\n    display: grid;\n    gap:15px;\n}\n\n#projectBtn > button {\n    background-color: transparent;\n\n    border:none;\n}\n\n#projectBtn > button:hover {\n    transform: scale(1.01);\n    font-weight: bold;\n}\n\n.projectBtnDiv {\n    margin: auto;\n    text-align: center;\n}\n\n.projectBtnDiv > button {\n    background-color: transparent;\n    font-size:2.5vh;\n    border:none;\n    color:white;\n    margin:1vh 0px;\n    padding:0.5vw;\n}\n\n.projectBtnDiv > button:hover {\n    transform: scale(1.1);\n    font-weight: 100;\n}\n\n\n.notecard {\n    background-color: #C2B9B0; /* #7E685A; */ /* #AFD275; */;;\n    border: 1px solid #C2B9B0;  /* #7E685A; */ /* #AFD275; */;;\n}\n\n.allNotes {\n    display:grid;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 20px;\n}\n\n.allNotes > div {\n    border-radius: 5%;\n    opacity: 0.7;\n    display:grid;\n    gap:10px;\n    padding:10px;\n    background-color: #E7717D; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;\n}\n\n.allNotes div > p {\n    padding: 10px 20px;\n}\n\n.allNotes > div > button {\n    background-color: transparent;\n    border: none;\n    justify-self: end;\n}\n\n.allNotes > div > button:hover {\n    transform: scale(1.1);\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n.allNotes > div:hover {\n    box-shadow:rgba(83, 77, 77, 0.215) 0px 19px 38px, rgba(119, 109, 109, 0.22) 0px 7px 5px;\n    transform: scale(1.01);\n    font-weight:100;\n    opacity: 1;\n}\n\n#addNotesDiv {\n    box-shadow:none;\n    margin: auto;\n    padding:10px;\n    margin-bottom: 50px;\n    background-color: transparent;\n}\n\n#addNotesDiv:hover {\n    transform: scale(1);\n}\n\n#addNewNotesBtn {\n\n}\n\n\n#addNewNotesBtn > img {\n    width:7vw;\n \n    height: auto;\n}\n\n#addNewNotesBtn > img:hover {\n    animation-name: rotateSmall;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.addNewNotesBtn {\n    background-color: transparent;\n    border:none;\n    font-size: 2vh !important;\n}\n\n.addNewNotesBtn:hover {\n    transform: scale(1.1);\n    font-weight: 100;\n    margin: auto;\n}\n\n.noteInput {\n    -webkit-appearance: none;\n    border: none;\n    border-bottom: 5px solid  #C2B9B0; /* #7E685A; */ /* #AFD275; */;\n    outline:white;\n}\n\n.noteInput::placeholder {\n    text-align: center;\n    letter-spacing: 2px;\n}\n\n.noteInput:focus {\n    border:none;\n    outline:none;\n    transform: scale(1.03);\n}\n\n.noteInputsDiv {\n    text-align: center;\n    display:grid;\n    justify-items: stretch;\n    padding: 0px 10px;\n}\n\n.noteSaveBtn {\n    margin-top: 8px;\n    margin-bottom: 10px;\n    display: block;\n    padding:5px;\n    background-color: rgba(127, 255, 212,0.6);\n    border:none;\n    letter-spacing: 3px;\n\n}\n\n.noteSaveBtn:hover {\n    transform: scale(1.05);\n    font-weight: bold;\n    background-color: rgba(127, 255, 212,0.8);\n}\n\n.noteForm {\n    display: grid;\n    gap:10px;\n}\n\n#notedialog {\n    padding:10px;\n    display:grid;\n    gap:10px;\n}\n\n\n/* To DO List FOrm Styles */\n.plusIconDiv {\n    text-align: center;\n}\n\n.plusToDo {\n    width: 6vh;\n    margin:auto;\n    height:auto;\n}\n\n.plusToDo:hover {\n    transform: scale(1.07);\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n\n\n#toDoDialog {\n    border-radius: 10%;\n    border: none;\n    padding:20px;\n    margin: auto;\n    display: grid;\n    gap:15px;\n\n}\n\n#editToDoDialog {\n    border-radius: 10%;\n    border: none;\n    padding:20px;\n    margin: auto;\n    display: grid;\n    gap:15px;\n\n}\n\n#toDoDialog::backdrop {\n    background-color:  rgba(194, 202, 208,0.3);\n}\n\n#editToDoDialog::backdrop {\n    background-color:  rgba(194, 202, 208,0.3);\n}\n\n.cancelToDoFormDiv {\n    justify-self: end;\n}\n\n#toDoCancelBtn {\n    border: none;\n    outline: none;\n    background-color: transparent;\n}\n\n.addNewNotesBtn {\n    width:2vh;\n    height: auto;\n}\n\n#toDoCancelBtn:hover {\n    transform: scale(1.07);\n    font-weight: bolder;\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n.toDoForm {\n    padding: 15px;\n}\n\n.toDoForm > div > input {\n    /* -webkit-appearance: none; */\n    margin:10px 0px;\n    outline: none;  \n    border:none;\n    border-bottom: 3px solid aquamarine;\n    opacity: 0.6;\n\n}\n.toDoForm > div > input:focus {\n    transform: scale(1.03);\n    opacity: 1;\n    font-weight: bolder;\n    letter-spacing: 4px;\n    margin: 15px 0px;\n\n}\n.toDoForm > div > input::placeholder {\n    text-align:center;\n    outline: none;\n    font-weight: bold;\n}\n\n.toDoSaveBtn, .edittoDoSaveBtn {\n    width: 100%;\n    padding: 5px;\n    border: none;\n    background-color: rgba(0, 255, 255,0.3);\n}\n\n.toDoSaveBtn:hover, .edittoDoSaveBtn:hover {\n    transform: scale(1.03);\n    font-weight: 100;\n    background-color: rgba(0, 255, 255,0.6);\n}\n\n.calendarInput {\n    width:100%;\n}\n\n\n.priorityDiv {\n    margin-top:10px;\n    text-align: center;\n    margin:auto;\n}\n.deleteicon {\n    height:2.5vh;\n    width:auto;\n}\n\n.deleteicon:hover {\n    transform: scale(1.1);\n    fill:red!important;\n}\n\n.editicon:hover {\n    transform: scale(1.1);\n}\n\n@media screen and (max-width: 600x) {\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ProjectBtnShow.js":
/*!*******************************!*\
  !*** ./src/ProjectBtnShow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showProjectBtnFunc: () => (/* binding */ showProjectBtnFunc)
/* harmony export */ });
let showProjectBtnFunc = () => {
    let showProjectBtn = document.querySelector('#showProjectBtn');
    let allProjectDivs = document.querySelector('#projectBtn');
    showProjectBtn.addEventListener('click', function() {
        if (allProjectDivs.style.display === 'block') {
            allProjectDivs.style.display = 'none';
        }
        else {
            allProjectDivs.style.display = 'block';
        }
    })
};



/***/ }),

/***/ "./src/addCheckFunc.js":
/*!*****************************!*\
  !*** ./src/addCheckFunc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCheckBoxFunctionality: () => (/* binding */ addCheckBoxFunctionality)
/* harmony export */ });
let checkTheDo = (checkBoxId) => {
    console.log(checkBoxId);
    let objs = JSON.parse(localStorage.getItem('toDoList'));
    objs[checkBoxId].completed = true;
    console.log(objs[checkBoxId]);
    localStorage.setItem('toDoList', JSON.stringify(objs));

};

let addCheckBoxFunctionality = () => {
  let allCheckBox = document.querySelectorAll('.checkBox');
  allCheckBox.forEach((checkBox) => {
    checkBox.addEventListener('click', function() {
        checkTheDo(checkBox.id);
    })
  })  
};


/***/ }),

/***/ "./src/addnotes.js":
/*!*************************!*\
  !*** ./src/addnotes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewNote: () => (/* binding */ addNewNote),
/* harmony export */   addNotesFunctionality: () => (/* binding */ addNotesFunctionality)
/* harmony export */ });
/* harmony import */ var _showNotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNotes */ "./src/showNotes.js");


class NoteConstructor {
    constructor(task) {
      this.task = task;
    }
}

let addNewNote = (value) => {
    let allNotesObj = JSON.parse(localStorage.getItem('notes'));
    let keys;
    if (allNotesObj === null ) {
        allNotesObj = {};
        keys = [];
    }
    else {
        keys = Object.keys(allNotesObj);
    };
    let newIndex;
    if (keys.length === 0) {
        newIndex = 1;
    }
    else {
        newIndex = Number(keys[keys.length - 1]) + 1;
    };
    allNotesObj[newIndex] = new NoteConstructor(value);
    localStorage.setItem('notes', JSON.stringify(allNotesObj));
    (0,_showNotes__WEBPACK_IMPORTED_MODULE_0__.showAllNotes)();
};

let addNotesFunctionality = () => {

    let noteForm = document.querySelector('#notedialog');
    let confirmBtn = document.querySelector('.noteSaveBtn');
    let noteInput = document.querySelector('.noteInput');


    noteForm.addEventListener("close", (e) => {
    if (noteForm.returnValue !== 'cancel') {
        addNewNote(noteInput.value);
    };
    });

    confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    noteForm.close(noteInput.value); 
    });

};



/***/ }),

/***/ "./src/deleteToDoFunc.js":
/*!*******************************!*\
  !*** ./src/deleteToDoFunc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDeleteToDoFunctionality: () => (/* binding */ addDeleteToDoFunctionality)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


let deleteToDo = (ToDoId) => {
    let allObj = JSON.parse(localStorage.getItem('toDoList'));
    delete allObj[ToDoId];
    localStorage.setItem('toDoList', JSON.stringify(allObj));
    (0,___WEBPACK_IMPORTED_MODULE_0__.checkIfAnyToDoLists)();
};

let addDeleteToDoFunctionality = () => {
    let allToDoDeleteBtn = document.querySelectorAll('.deleteicon');
    allToDoDeleteBtn.forEach((btn) => {
        btn.addEventListener('click', function() {
            deleteToDo(btn.id);
        })
    })

};



/***/ }),

/***/ "./src/editToDo.js":
/*!*************************!*\
  !*** ./src/editToDo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEditSaveToDoFunc: () => (/* binding */ addEditSaveToDoFunc),
/* harmony export */   addEditToDoFunc: () => (/* binding */ addEditToDoFunc),
/* harmony export */   getEditToDoAnswers: () => (/* binding */ getEditToDoAnswers),
/* harmony export */   saveNewEditToDo: () => (/* binding */ saveNewEditToDo),
/* harmony export */   showEditForm: () => (/* binding */ showEditForm)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");


let toChangeId;


let saveNewEditToDo = (project, task, note, date, hasCompleted, priority) => {
    let allToDoObj = JSON.parse(localStorage.getItem('toDoList'));
    console.log({project, task, note, date, hasCompleted, priority})
    console.log(toChangeId);
    allToDoObj[toChangeId] = new _showDoList__WEBPACK_IMPORTED_MODULE_1__.DoListConstructor(project, task, note, date, hasCompleted, priority);
    localStorage.setItem('toDoList', JSON.stringify(allToDoObj));
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.checkIfAnyToDoLists)();
};      

let getEditToDoAnswers = () => {
    let projectName = document.querySelector('.editprojectName');
    let taskName = document.querySelector('.edittaskName');
    let note = document.querySelector('.edittoDoNote');
    let date = document.querySelector('.editcalendarInput');
    let hasCompleted = document.querySelector('.hiddenHasCompleted');
    let priority = document.querySelector('input[name="priority"]:checked');
    if (projectName.value !== "" || taskName.value !== "" || note.value !== "" || date.value !== "") {
         saveNewEditToDo(projectName.value, taskName.value, note.value, date.value, hasCompleted.value, priority.value);
    };
    projectName.value = '';
    taskName.value = '';
    note.value = '';
    date.value = '';
    if (priority) {
         priority.checked = false;
    };
    hasCompleted.value = '';
};



let addEditSaveToDoFunc = () => {
    let toDoDialogForm = document.querySelector('#editToDoDialog');
    toDoDialogForm.addEventListener('close', function() {
        getEditToDoAnswers();
    });
};


let showEditForm = (currentId) => {
    let allObjs = JSON.parse(localStorage.getItem('toDoList'));
    let toEditObj = allObjs[currentId];

    let editForm = document.querySelector('#editToDoDialog');
    
    let projectName = document.querySelector('.editprojectName');
    let taskName = document.querySelector('.edittaskName');
    let note = document.querySelector('.edittoDoNote');
    let date = document.querySelector('.editcalendarInput');


    projectName.value = toEditObj.project;
    taskName.value = toEditObj.taskname;
    note.value = toEditObj.notes;
    let priority = toEditObj.priority;
    let choosedId = `#editmedium`;
    let toCheckPriority = document.querySelector(`#edit${priority}`);
    toCheckPriority.checked = true;
    date.value = toEditObj.dueDate;
    let hiddenHasDone = document.querySelector('.hiddenHasCompleted');
    hiddenHasDone.value = toEditObj.completed;
    editForm.showModal();
    addEditSaveToDoFunc();
}

let addEditToDoFunc = () => {
    let allEditBtns = document.querySelectorAll('.editicon');
    allEditBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            showEditForm(btn.id);
            toChangeId = btn.id
        });
    });
};



/***/ }),

/***/ "./src/fillProjectBtn.js":
/*!*******************************!*\
  !*** ./src/fillProjectBtn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillProjectBtnNames: () => (/* binding */ fillProjectBtnNames)
/* harmony export */ });
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");
/* harmony import */ var _deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteToDoFunc */ "./src/deleteToDoFunc.js");
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editToDo */ "./src/editToDo.js");
/* harmony import */ var _addCheckFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addCheckFunc */ "./src/addCheckFunc.js");





let addSearchFunc = (btn) => {
  btn.addEventListener('click', function() {
    let currentProjectName = btn.innerText;
    let storageItemObject = JSON.parse(localStorage.getItem('toDoList'));
    let allKeys = Object.keys(storageItemObject);
    let filteredObj = {};
    for (let key of allKeys) {
      if (storageItemObject[key].project === currentProjectName) {
        filteredObj[key] = storageItemObject[key];
      };
    };
    (0,_showDoList__WEBPACK_IMPORTED_MODULE_0__.showAllToDo)(filteredObj);
    (0,_deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__.addDeleteToDoFunctionality)();
    (0,_addCheckFunc__WEBPACK_IMPORTED_MODULE_3__.addCheckBoxFunctionality)();
    // addEditToDoFunc();
  });

}


let fillProjectBtnNames = () => {
    let allProjectNames = [];
    let storageItemObject = JSON.parse(localStorage.getItem('toDoList'));
    let index = Object.keys(storageItemObject);
    for (let i of index) {
      allProjectNames.push(storageItemObject[i].project);
    };
    allProjectNames = [...new Set(allProjectNames)];
  
    // adding these butttons to in DOM
  
    let projectBtn = document.querySelector('#projectBtn');
    projectBtn.innerHTML = ``;
    allProjectNames.forEach((button) => {
      let projectBtnDiv = document.createElement('div');
      projectBtnDiv.classList.add('projectBtnDiv')
      let newBtn = document.createElement('button');
      newBtn.innerText = button;
      addSearchFunc(newBtn);
      projectBtnDiv.appendChild(newBtn);
      projectBtn.appendChild(projectBtnDiv);
    })
  };



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfAnyToDoLists: () => (/* binding */ checkIfAnyToDoLists)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _showDetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showDetails.js */ "./src/showDetails.js");
/* harmony import */ var _showNotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showNotes */ "./src/showNotes.js");
/* harmony import */ var _addnotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addnotes */ "./src/addnotes.js");
/* harmony import */ var _plusToDo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plusToDo */ "./src/plusToDo.js");
/* harmony import */ var _fillProjectBtn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fillProjectBtn.js */ "./src/fillProjectBtn.js");
/* harmony import */ var _deleteToDoFunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deleteToDoFunc */ "./src/deleteToDoFunc.js");
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editToDo */ "./src/editToDo.js");
/* harmony import */ var _showToday__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showToday */ "./src/showToday.js");
/* harmony import */ var _showMonth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./showMonth */ "./src/showMonth.js");
/* harmony import */ var _showWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./showWeek */ "./src/showWeek.js");
/* harmony import */ var _ProjectBtnShow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProjectBtnShow */ "./src/ProjectBtnShow.js");
/* harmony import */ var _addCheckFunc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addCheckFunc */ "./src/addCheckFunc.js");




















let checkIfAnyToDoLists = () => {
  if ((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)('localStorage') && localStorage.getItem('toDoList') !== null ) {
    let storageItemObject = JSON.parse(localStorage.getItem('toDoList'));
    (0,_showDoList__WEBPACK_IMPORTED_MODULE_1__.showAllToDo)(storageItemObject);
    (0,_fillProjectBtn_js__WEBPACK_IMPORTED_MODULE_7__.fillProjectBtnNames)();
    (0,_ProjectBtnShow__WEBPACK_IMPORTED_MODULE_13__.showProjectBtnFunc)();
    (0,_deleteToDoFunc__WEBPACK_IMPORTED_MODULE_8__.addDeleteToDoFunctionality)();
    (0,_addCheckFunc__WEBPACK_IMPORTED_MODULE_14__.addCheckBoxFunctionality)();

    let homeBtn = document.querySelector('#homeBtn');
    homeBtn.addEventListener('click', function() {
      checkIfAnyToDoLists();
    });
      // adding timeAlgo functions
    let todayBtn = document.querySelector('#todayBtn');
    let monthBtn = document.querySelector('#monthBtn');
    let weekBtn = document.querySelector('#weekBtn');

    todayBtn.addEventListener('click', _showToday__WEBPACK_IMPORTED_MODULE_10__.showTodayToDo);
    monthBtn.addEventListener('click', _showMonth__WEBPACK_IMPORTED_MODULE_11__.showMonthToDo);
    weekBtn.addEventListener('click', _showWeek__WEBPACK_IMPORTED_MODULE_12__.showWeekToDo);

  }
  else {
    console.log('no local storage to display');
  };

};

(0,_plusToDo__WEBPACK_IMPORTED_MODULE_6__.addPlusToDoFunc)();

checkIfAnyToDoLists();

let shownoteBtn = document.querySelector('.notesBtn');
shownoteBtn.addEventListener('click', _showNotes__WEBPACK_IMPORTED_MODULE_4__.showAllNotes);

(0,_addnotes__WEBPACK_IMPORTED_MODULE_5__.addNotesFunctionality)();

(0,_plusToDo__WEBPACK_IMPORTED_MODULE_6__.addPlusToDoFunc)();























/***/ }),

/***/ "./src/plusToDo.js":
/*!*************************!*\
  !*** ./src/plusToDo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlusToDoFunc: () => (/* binding */ addPlusToDoFunc),
/* harmony export */   addSaveToDoFunc: () => (/* binding */ addSaveToDoFunc),
/* harmony export */   getToDoAnswers: () => (/* binding */ getToDoAnswers),
/* harmony export */   saveNewToDo: () => (/* binding */ saveNewToDo)
/* harmony export */ });
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



let saveNewToDo = (project, task, note, date, hasCompleted, priority) => {
    let allToDoObj = JSON.parse(localStorage.getItem('toDoList'));
    let newIndex;

    if (allToDoObj === null) {
        newIndex = 1;
        allToDoObj = {};
    }
    else {
        let allKeys = Object.keys(allToDoObj);
        if (allKeys.length === 0) {
            newIndex = 1;
        }
        else {
            let lastIndex = allKeys[allKeys.length - 1]; 
            newIndex = Number(lastIndex) + 1;
        };
    }      


    console.log(newIndex);
    // adding the new obj in the allToDo
    allToDoObj[newIndex] = new _showDoList__WEBPACK_IMPORTED_MODULE_0__.DoListConstructor(project, task, note, date, hasCompleted, priority);
    localStorage.setItem('toDoList', JSON.stringify(allToDoObj));
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.checkIfAnyToDoLists)();
};

let getToDoAnswers = () => {
    let projectName = document.querySelector('.projectName');
    let taskName = document.querySelector('.taskName');
    let note = document.querySelector('.toDoNote');
    let date = document.querySelector('.calendarInput');
    let hasCompleted = false;
    let priority = document.querySelector('input[name="priority"]:checked');
    if (projectName.value !== "" || taskName.value !== "" || note.value !== "" || date.value !== "") {
        saveNewToDo(projectName.value, taskName.value, note.value, date.value, hasCompleted, priority.value);
    };
    projectName.value = '';
    taskName.value = '';
    note.value = '';
    date.value = '';
    if (priority) {
        priority.checked = false;
    };
};



let addSaveToDoFunc = () => {
    let saveBtn = document.querySelector('.toDoSaveBtn');
    let toDoDialogForm = document.querySelector('#toDoDialog');
    toDoDialogForm.addEventListener('close', getToDoAnswers);
};


let addPlusToDoFunc = () => {
    

    let toDoDialog = document.querySelector('#toDoDialog');
    let showToDoForm = () => {
        toDoDialog.showModal();
    };

    // Add + toDO functionality
    let PlusSign = document.querySelector('.plusToDo');
    PlusSign.addEventListener('click', showToDoForm);
    addSaveToDoFunc();
};



/***/ }),

/***/ "./src/showDetails.js":
/*!****************************!*\
  !*** ./src/showDetails.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDetails: () => (/* binding */ showDetails)
/* harmony export */ });
let showDetails = (e) => {
    let index = e.target.id;
    let favDialog = document.querySelector('#favdialog');
    let divForDetails = document.querySelector('.detailsDiv');
    let AllCards = JSON.parse(localStorage.getItem('toDoList'));
    let currentCard = AllCards[index];
    let completeStatus;
    if (currentCard.completed) {
      completeStatus = `Completed`;
    }
    else {
      completeStatus = `Left To Be Done`;
    }
    divForDetails.innerHTML = `
    <h2>${currentCard.taskname}</h2>
    <br>
    <h5>Project: ${currentCard.project}</h5>
    <h5>Due Date: ${currentCard.dueDate}</h5>
    <h5>Status: ${completeStatus}</h5>
    <h5>Notes: ${currentCard.notes}</h5>
    <h5>Prority: ${currentCard.priority}</h5>
    `;
    favDialog.showModal();
  }

  

/***/ }),

/***/ "./src/showDoList.js":
/*!***************************!*\
  !*** ./src/showDoList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoListConstructor: () => (/* binding */ DoListConstructor),
/* harmony export */   addDetailFunc: () => (/* binding */ addDetailFunc),
/* harmony export */   showAllToDo: () => (/* binding */ showAllToDo)
/* harmony export */ });
/* harmony import */ var _delete_empty_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-empty-outline.svg */ "./src/delete-empty-outline.svg");
/* harmony import */ var _square_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square-edit-outline.svg */ "./src/square-edit-outline.svg");
/* harmony import */ var _showDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showDetails */ "./src/showDetails.js");
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editToDo */ "./src/editToDo.js");





class DoListConstructor {
    constructor(project, taskname,notes, dueDate, completed, priority) {
      this.project = project;
      this.taskname = taskname;
      this.dueDate = dueDate;
      this.completed = completed;
      this.notes = notes;
      this.priority = priority;
  
    }
}

let addDetailFunc = () => {
  let detailButtons = document.querySelectorAll('.detailBtn');
  detailButtons.forEach((button) => {
  button.addEventListener('click', _showDetails__WEBPACK_IMPORTED_MODULE_2__.showDetails);
})
};

let showAllToDo = (storageItemObject) => {
    let allLIstDivs = document.querySelector('.alllists');
    let notesList = document.querySelector('.allNotes');
    notesList.innerHTML = ``;
    allLIstDivs.innerHTML = ``;
    let index = Object.keys(storageItemObject);
    if (storageItemObject !== null) {
      for (let i of index) {
        let currentItem = storageItemObject[i];
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('carddiv');
        // let projectName = document.createElement('h1');
        // projectName.innerText = currentItem.project;
        let taskName= document.createElement('h4');
        taskName.innerText =currentItem.taskname;
        // let notes = document.createElement('h4');
        // notes.innerText = currentItem.notes;
        let dueDate = document.createElement('h6');
        dueDate.innerHTML = currentItem.dueDate;
        let detailButton = document.createElement('button');
        detailButton.classList.add('detailBtn');
        detailButton.id = i;
        detailButton.innerText = `Details`;
        let checkBox = document.createElement('INPUT');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('checkBox');
        checkBox.id = i;
        let hasCompleted = currentItem.completed;
        checkBox.checked = hasCompleted;
    
        let deleteicon = new Image();
        deleteicon.src = _delete_empty_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
        deleteicon.classList.add('deleteicon');
        deleteicon.id = i;
    
        let editIcon = new Image();
        editIcon.src = _square_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        editIcon.classList.add('editicon');
        editIcon.id = i;
    
        cardDiv.appendChild(checkBox);
        cardDiv.appendChild(taskName);
        cardDiv.appendChild(detailButton);
        cardDiv.appendChild(dueDate);
        cardDiv.appendChild(deleteicon);
        cardDiv.append(editIcon);
  
        if (currentItem.priority === 'high') {
          cardDiv.classList.add('highpriority');
        }
        else if (currentItem.priority === 'medium') {
          cardDiv.classList.add('mediumpriority');
        }
        else if (currentItem.priority === 'low') {
          cardDiv.classList.add('lowpriority');
        };
    
        allLIstDivs.appendChild(cardDiv);
    
      };
      // add details functionality
      addDetailFunc();
      (0,_editToDo__WEBPACK_IMPORTED_MODULE_3__.addEditToDoFunc)();
    };

};



/***/ }),

/***/ "./src/showMonth.js":
/*!**************************!*\
  !*** ./src/showMonth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMonthToDo: () => (/* binding */ showMonthToDo)
/* harmony export */ });
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");
/* harmony import */ var _deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteToDoFunc */ "./src/deleteToDoFunc.js");
/* harmony import */ var _addCheckFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCheckFunc */ "./src/addCheckFunc.js");




let showMonthToDo = () => {
    let today = new Date();
    let thisMonth = today.getMonth();
    let thisYear = today.getFullYear();
    let sortedObj = {};
    let allObj = JSON.parse(localStorage.getItem('toDoList'));
    let keys = Object.keys(allObj);
    for (let index of keys) {
        let currentObj = allObj[index];
        let indexDate = new Date(currentObj.dueDate);
        let indexDay = indexDate.getDay();
        let indexMonth = indexDate.getMonth();
        let indexYear =  indexDate.getFullYear();
        if (indexMonth === thisMonth && indexYear === thisYear) {
            sortedObj[index] = currentObj;
        };
        (0,_showDoList__WEBPACK_IMPORTED_MODULE_0__.showAllToDo)(sortedObj);
        (0,_deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__.addDeleteToDoFunctionality)();
        (0,_addCheckFunc__WEBPACK_IMPORTED_MODULE_2__.addCheckBoxFunctionality)();
    }

};



/***/ }),

/***/ "./src/showNotes.js":
/*!**************************!*\
  !*** ./src/showNotes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNotesFunc: () => (/* binding */ addNotesFunc),
/* harmony export */   addRemoveNoteFunctionality: () => (/* binding */ addRemoveNoteFunctionality),
/* harmony export */   showAllNotes: () => (/* binding */ showAllNotes)
/* harmony export */ });
/* harmony import */ var _pluss_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluss.svg */ "./src/pluss.svg");



let addNotesFunc = () => {
    let addNoteBtn = document.querySelector('.addNewNotesBtn');
    let noteForm = document.querySelector('#notedialog');
    let noteInput = document.querySelector('.noteInput');
    addNoteBtn.addEventListener('click', function() {
        noteInput.value = ``;
        noteForm.showModal();
    });

}

let addRemoveNoteFunctionality = () => {

    let removeNote = (e) => {
        let toDeleteIndex = e.target.id;
        let allNOtes = JSON.parse(localStorage.getItem('notes'));
        delete allNOtes[toDeleteIndex];
        localStorage.setItem('notes', JSON.stringify(allNOtes));
        showAllNotes();
        
    };

    let AllDeleteNoteBtn = document.querySelectorAll('.deleteNote');
    AllDeleteNoteBtn.forEach((button) => {
        button.addEventListener("click", removeNote)
    })
};


let showAllNotes = () => {
    let allNOtesObj = JSON.parse(localStorage.getItem('notes'));
    let allListsDiv = document.querySelector('.alllists');
    // allListsDiv.style.display = 'none';
    // complete this
    let allNotesContainer = document.querySelector('.allNotes');
    allListsDiv.innerHTML = ``;
    allNotesContainer.innerHTML = ``;
  
    let addNotesDiv = document.createElement('div');
    addNotesDiv.id = 'addNotesDiv';
    let addNewNotesBtn = document.createElement('div');
    addNewNotesBtn.classList.add('addNewNotesBtn');
    addNewNotesBtn.id = "addNewNotesBtn";
    addNewNotesBtn.innerHTML = `<img src="${_pluss_svg__WEBPACK_IMPORTED_MODULE_0__}">`
    addNotesDiv.appendChild(addNewNotesBtn);
    allNotesContainer.appendChild(addNotesDiv);
    if (allNOtesObj === null ) {
        addNotesFunc();
    }
    else {
        let keys = Object.keys(allNOtesObj);
        for (let index of keys) {
        let noteDiv = document.createElement('div');
        noteDiv.classList.add('notecard');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteNote');
        deleteBtn.innerHTML = `X`;
        deleteBtn.id = index;
        let para = document.createElement('p');
        para.innerText = `${allNOtesObj[index].task}`;
        noteDiv.appendChild(deleteBtn);
        noteDiv.append(para);
        allNotesContainer.appendChild(noteDiv);
        };
        addNotesFunc();
        addRemoveNoteFunctionality();
    };
    

};





/***/ }),

/***/ "./src/showToday.js":
/*!**************************!*\
  !*** ./src/showToday.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTodayToDo: () => (/* binding */ showTodayToDo)
/* harmony export */ });
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");
/* harmony import */ var _deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteToDoFunc */ "./src/deleteToDoFunc.js");
/* harmony import */ var _addCheckFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCheckFunc */ "./src/addCheckFunc.js");




let showTodayToDo = () => {
    let today = new Date();
    let thisDay = today.getDate();

    let thisMonth = today.getMonth();
    let thisYear = today.getFullYear();
    let sortedObj = {};
    let allObj = JSON.parse(localStorage.getItem('toDoList'));
    let keys = Object.keys(allObj);
    for (let index of keys) {
        let currentObj = allObj[index];
        let indexDate = new Date(currentObj.dueDate);
        let indexDay = indexDate.getDate();
        let indexMonth = indexDate.getMonth();
        let indexYear =  indexDate.getFullYear();
        if (indexDay === thisDay && indexMonth === thisMonth && indexYear === thisYear) {
            sortedObj[index] = currentObj;

        };
        (0,_showDoList__WEBPACK_IMPORTED_MODULE_0__.showAllToDo)(sortedObj);
        (0,_deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__.addDeleteToDoFunctionality)();
        (0,_addCheckFunc__WEBPACK_IMPORTED_MODULE_2__.addCheckBoxFunctionality)();
    }

};



/***/ }),

/***/ "./src/showWeek.js":
/*!*************************!*\
  !*** ./src/showWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showWeekToDo: () => (/* binding */ showWeekToDo)
/* harmony export */ });
/* harmony import */ var _showDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showDoList */ "./src/showDoList.js");
/* harmony import */ var _deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteToDoFunc */ "./src/deleteToDoFunc.js");
/* harmony import */ var _addCheckFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCheckFunc */ "./src/addCheckFunc.js");




let showWeekToDo = () => {
    let today = new Date();
    let thisDay = today.getDate();
    let thisMonth = today.getMonth();
    let thisYear = today.getFullYear();
    let sortedObj = {};
    let allObj = JSON.parse(localStorage.getItem('toDoList'));
    let keys = Object.keys(allObj);
    for (let index of keys) {
        let currentObj = allObj[index];
        let indexDate = new Date(currentObj.dueDate);
        let indexDay = indexDate.getDate();
        let indexMonth = indexDate.getMonth();
        let indexYear =  indexDate.getFullYear();
        let diff;
        if (indexMonth === thisMonth && indexYear === thisYear) {
            let numIndexDay = Number(indexDay);
            let numThisDay = Number(thisDay);
            if (numIndexDay > numThisDay) {
                diff = numIndexDay - numThisDay;

            }
            else {
                diff = numThisDay - numIndexDay; 
            };
            if (diff < 7) {

                sortedObj[index] = currentObj;
            };
        };
        (0,_showDoList__WEBPACK_IMPORTED_MODULE_0__.showAllToDo)(sortedObj);
        (0,_deleteToDoFunc__WEBPACK_IMPORTED_MODULE_1__.addDeleteToDoFunctionality)();
        (0,_addCheckFunc__WEBPACK_IMPORTED_MODULE_2__.addCheckBoxFunctionality)();
    }

};


/***/ }),

/***/ "./src/storageAvailable.js":
/*!*********************************!*\
  !*** ./src/storageAvailable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
 function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

/***/ }),

/***/ "./src/delete-empty-outline.svg":
/*!**************************************!*\
  !*** ./src/delete-empty-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82aee49300bf56d4b9c3.svg";

/***/ }),

/***/ "./src/pluss.svg":
/*!***********************!*\
  !*** ./src/pluss.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "675744bcaf4d9c6261fc.svg";

/***/ }),

/***/ "./src/square-edit-outline.svg":
/*!*************************************!*\
  !*** ./src/square-edit-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8421b7fc701a0f1a93be.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZLGVBQWU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLE9BQU8sc0ZBQXNGLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssZ0NBQWdDLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxvREFBb0QsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLG9EQUFvRCxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssb0RBQW9ELE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLGdDQUFnQyxpQ0FBaUMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxvREFBb0QsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxnQ0FBZ0MsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUHJvamVjdEJ0blNob3cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRDaGVja0Z1bmMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRub3Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZVRvRG9GdW5jLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9maWxsUHJvamVjdEJ0bi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGx1c1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93RGV0YWlscy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Nob3dEb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93TW9udGguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93Tm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93VG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93V2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBcbiNFNzcxN0RcbiNDMkNBRDBcbiNDMkI5QjBcbiM3RTY4NUFcbiNBRkQyNzVcbiAgI0VEQ0JEMiwgIzgwQzRCNywgI0UzODU2QlxuICovXG5cblxuQGtleWZyYW1lcyByb3RhdGVTcGluIHtcbiAgICAwJSAgIHtyb3RhdGU6IDBkZWc7fVxuICAgIDEwJSAgIHtyb3RhdGU6IDI1ZGVnO31cbiAgICAyMCUgICB7cm90YXRlOiA0NWVnO31cbiAgICAzMCUgICB7cm90YXRlOiA1NWRlZzt9XG4gICAgNDAlICAge3JvdGF0ZTogNjVkZWc7fVxuICAgIDUwJSAgIHtyb3RhdGU6IDkwZGVnO31cbiAgICA2MCUgICB7cm90YXRlOiAxMTBkZWc7fVxuICAgIDcwJSAgIHtyb3RhdGU6IDEzMGRlZzt9XG4gICAgODAlICAge3JvdGF0ZTogMTUwZGVnO31cbiAgICA5MCUgICB7cm90YXRlOiAxNzBkZWc7fVxuICAgIDEwMCUgICB7cm90YXRlOiAxODBkZWc7fVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVNtYWxsIHtcbiAgICAwJSAgIHtyb3RhdGU6IDBkZWc7fVxuICAgIDEwJSAgIHtyb3RhdGU6IDI1ZGVnO31cbiAgICAyMCUgICB7cm90YXRlOiA0NWVnO31cbiAgICAzMCUgICB7cm90YXRlOiA1NWRlZzt9XG4gICAgNDAlICAge3JvdGF0ZTogNjVkZWc7fVxuICAgIDUwJSAgIHtyb3RhdGU6IDkwZGVnO31cbiAgICA2MCUgICB7cm90YXRlOiAxMTBkZWc7fVxuICAgIDcwJSAgIHtyb3RhdGU6IDEzMGRlZzt9XG4gICAgODAlICAge3JvdGF0ZTogMTUwZGVnO31cbiAgICA5MCUgICB7cm90YXRlOiAxNzBkZWc7fVxuICAgIDEwMCUgICB7cm90YXRlOiAxODBkZWc7fVxufVxuICBcblxuKiB7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBmb250LWZhbWlseTonV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQUZEMjc1OyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLztcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTonV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OidXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgICNFNzcxN0Q7IC8qICNDMkNBRDA7ICovIC8qICNDMkI5QjA7ICovIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBnYXA6MTVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMmZyIHJlcGVhdCg0LCBhdXRvKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGdhcDoyMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRURDQkQyLCAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLztcblxufVxuXG4jYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XG59XG5cbiNzaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6NXZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojODBDNEI3OyAvKiAjQUZEMjc1OyAqLzs7XG59XG5cbiNzaWRlYmFyID4gYnV0dG9uIHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzdnc7XG59XG5cbi5hbGxsaXN0cyB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDoydmg7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGRDI3NTtcbn1cblxuLmFsbGxpc3RzID4gZGl2IHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTM4NTZCOyBcbiAgICBmb250LXNpemU6IDJ2aDtcbn1cblxuLmFsbGxpc3RzID4gZGl2OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OnJnYmEoODMsIDc3LCA3NywgMC4yMTUpIDBweCAxOXB4IDM4cHgsIHJnYmEoMTE5LCAxMDksIDEwOSwgMC4yMikgMHB4IDdweCA1cHg7O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5oYXNjb21wbGV0ZWRidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjIzLCAyNCk7XG59XG5cbi5oYXNub3Rjb21wbGV0ZWRidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI0LCAyNCk7XG59XG5cbi5kZXRhaWxCdG4ge1xuICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmRldGFpbEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzJDQUQwO1xuICBcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuLmRlbGV0ZWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDozdmg7XG4gICAgaGVpZ2h0OmF1dG87XG59XG5cbi5lZGl0aWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGhlaWdodDoyLjV2aDtcbiAgICB3aWR0aDphdXRvO1xufVxuXG4jZmF2ZGlhbG9nOjpiYWNrZHJvcCwgI25vdGVkaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMjAyLCAyMDgsMC4zKTsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XG59XG5cbi5ub3RlYm9va2ljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDo1dmg7XG4gICAgaGVpZ2h0OmF1dG87XG59XG5cbiNmYXZkaWFsb2cge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjVweDtcbn1cblxuI25vdGVkaWFsb2cge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4jbm90ZWRpYWxvZyA+IGZvcm0ge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jZmF2ZGlhbG9nID4gZm9ybSB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbiNkZWF0aWxjYW5jZWxidG4sICNhZGROb3Rlc0NhbmNlbEJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogODAlO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNkZWF0aWxjYW5jZWxidG46aG92ZXIgLCAjYWRkTm90ZXNDYW5jZWxCdG46aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5kZXRhaWxzRGl2IHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLmhpZ2hwcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIHJnYmEoMjMxLCAxMTMsIDEyNSwwLjgpOyAvKiAjQzJDQUQwOyAqLyAvKiAjQzJCOUIwOyAqLyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLzs7O1xufVxuXG4ubWVkaXVtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYmEoMjEsIDIxOCwgMjEsMC44KTtcbn1cblxuLmxvd3ByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDIzNSwgMjM1LCAzNCwwLjgpO1xufVxuXG4jc2lkZWJhciB7XG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuXG4jc2lkZWJhciA+IGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4jcHJvamVjdEJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6MTVweDtcbn1cblxuI3Byb2plY3RCdG4gPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgYm9yZGVyOm5vbmU7XG59XG5cbiNwcm9qZWN0QnRuID4gYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdEJ0bkRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3RCdG5EaXYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZToyLjV2aDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW46MXZoIDBweDtcbiAgICBwYWRkaW5nOjAuNXZ3O1xufVxuXG4ucHJvamVjdEJ0bkRpdiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cblxuLm5vdGVjYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCOUIwOyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLzs7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MyQjlCMDsgIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovOztcbn1cblxuLmFsbE5vdGVzIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uYWxsTm90ZXMgPiBkaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjEwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzcxN0Q7IC8qICNDMkNBRDA7ICovIC8qICNDMkI5QjA7ICovIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xufVxuXG4uYWxsTm90ZXMgZGl2ID4gcCB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uYWxsTm90ZXMgPiBkaXYgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmFsbE5vdGVzID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNwaW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uYWxsTm90ZXMgPiBkaXY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6cmdiYSg4MywgNzcsIDc3LCAwLjIxNSkgMHB4IDE5cHggMzhweCwgcmdiYSgxMTksIDEwOSwgMTA5LCAwLjIyKSAwcHggN3B4IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIGZvbnQtd2VpZ2h0OjEwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4jYWRkTm90ZXNEaXYge1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNhZGROb3Rlc0Rpdjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuI2FkZE5ld05vdGVzQnRuIHtcblxufVxuXG5cbiNhZGROZXdOb3Rlc0J0biA+IGltZyB7XG4gICAgd2lkdGg6N3Z3O1xuIFxuICAgIGhlaWdodDogYXV0bztcbn1cblxuI2FkZE5ld05vdGVzQnRuID4gaW1nOmhvdmVyIHtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU21hbGw7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uYWRkTmV3Tm90ZXNCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjpub25lO1xuICAgIGZvbnQtc2l6ZTogMnZoICFpbXBvcnRhbnQ7XG59XG5cbi5hZGROZXdOb3Rlc0J0bjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubm90ZUlucHV0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAgI0MyQjlCMDsgLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XG4gICAgb3V0bGluZTp3aGl0ZTtcbn1cblxuLm5vdGVJbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4ubm90ZUlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLm5vdGVJbnB1dHNEaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLm5vdGVTYXZlQnRuIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsMC42KTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuXG59XG5cbi5ub3RlU2F2ZUJ0bjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsMC44KTtcbn1cblxuLm5vdGVGb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDoxMHB4O1xufVxuXG4jbm90ZWRpYWxvZyB7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBnYXA6MTBweDtcbn1cblxuXG4vKiBUbyBETyBMaXN0IEZPcm0gU3R5bGVzICovXG4ucGx1c0ljb25EaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsdXNUb0RvIHtcbiAgICB3aWR0aDogNnZoO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGhlaWdodDphdXRvO1xufVxuXG4ucGx1c1RvRG86aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNwaW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5cblxuI3RvRG9EaWFsb2cge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzoyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDoxNXB4O1xuXG59XG5cbiNlZGl0VG9Eb0RpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOjE1cHg7XG5cbn1cblxuI3RvRG9EaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxOTQsIDIwMiwgMjA4LDAuMyk7XG59XG5cbiNlZGl0VG9Eb0RpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDE5NCwgMjAyLCAyMDgsMC4zKTtcbn1cblxuLmNhbmNlbFRvRG9Gb3JtRGl2IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuI3RvRG9DYW5jZWxCdG4ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWRkTmV3Tm90ZXNCdG4ge1xuICAgIHdpZHRoOjJ2aDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbiN0b0RvQ2FuY2VsQnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNwaW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4udG9Eb0Zvcm0ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0IHtcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICovXG4gICAgbWFyZ2luOjEwcHggMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7ICBcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYXF1YW1hcmluZTtcbiAgICBvcGFjaXR5OiAwLjY7XG5cbn1cbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIG1hcmdpbjogMTVweCAwcHg7XG5cbn1cbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRvRG9TYXZlQnRuLCAuZWRpdHRvRG9TYXZlQnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsMC4zKTtcbn1cblxuLnRvRG9TYXZlQnRuOmhvdmVyLCAuZWRpdHRvRG9TYXZlQnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwwLjYpO1xufVxuXG4uY2FsZW5kYXJJbnB1dCB7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuXG4ucHJpb3JpdHlEaXYge1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOmF1dG87XG59XG4uZGVsZXRlaWNvbiB7XG4gICAgaGVpZ2h0OjIuNXZoO1xuICAgIHdpZHRoOmF1dG87XG59XG5cbi5kZWxldGVpY29uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgZmlsbDpyZWQhaW1wb3J0YW50O1xufVxuXG4uZWRpdGljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAweCkge1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0VBT0U7OztBQUdGO0lBQ0ksTUFBTSxZQUFZLENBQUM7SUFDbkIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxZQUFZLENBQUM7SUFDcEIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxjQUFjLENBQUM7SUFDdEIsT0FBTyxjQUFjLENBQUM7SUFDdEIsT0FBTyxjQUFjLENBQUM7SUFDdEIsT0FBTyxjQUFjLENBQUM7SUFDdEIsUUFBUSxjQUFjLENBQUM7QUFDM0I7O0FBRUE7SUFDSSxNQUFNLFlBQVksQ0FBQztJQUNuQixPQUFPLGFBQWEsQ0FBQztJQUNyQixPQUFPLFlBQVksQ0FBQztJQUNwQixPQUFPLGFBQWEsQ0FBQztJQUNyQixPQUFPLGFBQWEsQ0FBQztJQUNyQixPQUFPLGFBQWEsQ0FBQztJQUNyQixPQUFPLGNBQWMsQ0FBQztJQUN0QixPQUFPLGNBQWMsQ0FBQztJQUN0QixPQUFPLGNBQWMsQ0FBQztJQUN0QixPQUFPLGNBQWMsQ0FBQztJQUN0QixRQUFRLGNBQWMsQ0FBQztBQUMzQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHdCQUF3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LG1DQUFtQztJQUNuQyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxuI0U3NzE3RFxcbiNDMkNBRDBcXG4jQzJCOUIwXFxuIzdFNjg1QVxcbiNBRkQyNzVcXG4gICNFRENCRDIsICM4MEM0QjcsICNFMzg1NkJcXG4gKi9cXG5cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZVNwaW4ge1xcbiAgICAwJSAgIHtyb3RhdGU6IDBkZWc7fVxcbiAgICAxMCUgICB7cm90YXRlOiAyNWRlZzt9XFxuICAgIDIwJSAgIHtyb3RhdGU6IDQ1ZWc7fVxcbiAgICAzMCUgICB7cm90YXRlOiA1NWRlZzt9XFxuICAgIDQwJSAgIHtyb3RhdGU6IDY1ZGVnO31cXG4gICAgNTAlICAge3JvdGF0ZTogOTBkZWc7fVxcbiAgICA2MCUgICB7cm90YXRlOiAxMTBkZWc7fVxcbiAgICA3MCUgICB7cm90YXRlOiAxMzBkZWc7fVxcbiAgICA4MCUgICB7cm90YXRlOiAxNTBkZWc7fVxcbiAgICA5MCUgICB7cm90YXRlOiAxNzBkZWc7fVxcbiAgICAxMDAlICAge3JvdGF0ZTogMTgwZGVnO31cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVTbWFsbCB7XFxuICAgIDAlICAge3JvdGF0ZTogMGRlZzt9XFxuICAgIDEwJSAgIHtyb3RhdGU6IDI1ZGVnO31cXG4gICAgMjAlICAge3JvdGF0ZTogNDVlZzt9XFxuICAgIDMwJSAgIHtyb3RhdGU6IDU1ZGVnO31cXG4gICAgNDAlICAge3JvdGF0ZTogNjVkZWc7fVxcbiAgICA1MCUgICB7cm90YXRlOiA5MGRlZzt9XFxuICAgIDYwJSAgIHtyb3RhdGU6IDExMGRlZzt9XFxuICAgIDcwJSAgIHtyb3RhdGU6IDEzMGRlZzt9XFxuICAgIDgwJSAgIHtyb3RhdGU6IDE1MGRlZzt9XFxuICAgIDkwJSAgIHtyb3RhdGU6IDE3MGRlZzt9XFxuICAgIDEwMCUgICB7cm90YXRlOiAxODBkZWc7fVxcbn1cXG4gIFxcblxcbioge1xcbiAgICBwYWRkaW5nOjBweDtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgZm9udC1mYW1pbHk6J1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBRkQyNzU7IC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTonV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LWZhbWlseTonV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNhcmRkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAgI0U3NzE3RDsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi9cXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDoxNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMmZyIHJlcGVhdCg0LCBhdXRvKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBnYXA6MjBweDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICBmb250LXNpemU6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRURDQkQyLCAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLztcXG5cXG59XFxuXFxuI2JvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6NXZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojODBDNEI3OyAvKiAjQUZEMjc1OyAqLzs7XFxufVxcblxcbiNzaWRlYmFyID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDN2dztcXG59XFxuXFxuLmFsbGxpc3RzIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOjJ2aDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRkQyNzU7XFxufVxcblxcbi5hbGxsaXN0cyA+IGRpdiB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTM4NTZCOyBcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbi5hbGxsaXN0cyA+IGRpdjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6cmdiYSg4MywgNzcsIDc3LCAwLjIxNSkgMHB4IDE5cHggMzhweCwgcmdiYSgxMTksIDEwOSwgMTA5LCAwLjIyKSAwcHggN3B4IDVweDs7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG4uaGFzY29tcGxldGVkYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyMjMsIDI0KTtcXG59XFxuXFxuLmhhc25vdGNvbXBsZXRlZGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI0LCAyNCk7XFxufVxcblxcbi5kZXRhaWxCdG4ge1xcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRldGFpbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0MyQ0FEMDtcXG4gIFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbn1cXG5cXG4uZGVsZXRlaWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgd2lkdGg6M3ZoO1xcbiAgICBoZWlnaHQ6YXV0bztcXG59XFxuXFxuLmVkaXRpY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBoZWlnaHQ6Mi41dmg7XFxuICAgIHdpZHRoOmF1dG87XFxufVxcblxcbiNmYXZkaWFsb2c6OmJhY2tkcm9wLCAjbm90ZWRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMjAyLCAyMDgsMC4zKTsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XFxufVxcblxcbi5ub3RlYm9va2ljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHdpZHRoOjV2aDtcXG4gICAgaGVpZ2h0OmF1dG87XFxufVxcblxcbiNmYXZkaWFsb2cge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjVweDtcXG59XFxuXFxuI25vdGVkaWFsb2cge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNub3RlZGlhbG9nID4gZm9ybSB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jZmF2ZGlhbG9nID4gZm9ybSB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jZGVhdGlsY2FuY2VsYnRuLCAjYWRkTm90ZXNDYW5jZWxCdG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA4MCU7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNkZWF0aWxjYW5jZWxidG46aG92ZXIgLCAjYWRkTm90ZXNDYW5jZWxCdG46aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVTcGluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uZGV0YWlsc0RpdiB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG5cXG4uaGlnaHByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIHJnYmEoMjMxLCAxMTMsIDEyNSwwLjgpOyAvKiAjQzJDQUQwOyAqLyAvKiAjQzJCOUIwOyAqLyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLzs7O1xcbn1cXG5cXG4ubWVkaXVtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDIxLCAyMTgsIDIxLDAuOCk7XFxufVxcblxcbi5sb3dwcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYmEoMjM1LCAyMzUsIDM0LDAuOCk7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbn1cXG5cXG4jc2lkZWJhciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3Byb2plY3RCdG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6MTVweDtcXG59XFxuXFxuI3Byb2plY3RCdG4gPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbiNwcm9qZWN0QnRuID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0QnRuRGl2IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0QnRuRGl2ID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZToyLjV2aDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBtYXJnaW46MXZoIDBweDtcXG4gICAgcGFkZGluZzowLjV2dztcXG59XFxuXFxuLnByb2plY3RCdG5EaXYgPiBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcblxcbi5ub3RlY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkI5QjA7IC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovOztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MyQjlCMDsgIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovOztcXG59XFxuXFxuLmFsbE5vdGVzIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmFsbE5vdGVzID4gZGl2IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MTBweDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTc3MTdEOyAvKiAjQzJDQUQwOyAqLyAvKiAjQzJCOUIwOyAqLyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLztcXG59XFxuXFxuLmFsbE5vdGVzIGRpdiA+IHAge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5hbGxOb3RlcyA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYWxsTm90ZXMgPiBkaXYgPiBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVTcGluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uYWxsTm90ZXMgPiBkaXY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OnJnYmEoODMsIDc3LCA3NywgMC4yMTUpIDBweCAxOXB4IDM4cHgsIHJnYmEoMTE5LCAxMDksIDEwOSwgMC4yMikgMHB4IDdweCA1cHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2FkZE5vdGVzRGl2IHtcXG4gICAgYm94LXNoYWRvdzpub25lO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNhZGROb3Rlc0Rpdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbiNhZGROZXdOb3Rlc0J0biB7XFxuXFxufVxcblxcblxcbiNhZGROZXdOb3Rlc0J0biA+IGltZyB7XFxuICAgIHdpZHRoOjd2dztcXG4gXFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI2FkZE5ld05vdGVzQnRuID4gaW1nOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNtYWxsO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uYWRkTmV3Tm90ZXNCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnZoICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hZGROZXdOb3Rlc0J0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubm90ZUlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAgI0MyQjlCMDsgLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XFxuICAgIG91dGxpbmU6d2hpdGU7XFxufVxcblxcbi5ub3RlSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubm90ZUlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLm5vdGVJbnB1dHNEaXYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbi5ub3RlU2F2ZUJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsMC42KTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuXFxufVxcblxcbi5ub3RlU2F2ZUJ0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsMC44KTtcXG59XFxuXFxuLm5vdGVGb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOjEwcHg7XFxufVxcblxcbiNub3RlZGlhbG9nIHtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG5cXG4vKiBUbyBETyBMaXN0IEZPcm0gU3R5bGVzICovXFxuLnBsdXNJY29uRGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGx1c1RvRG8ge1xcbiAgICB3aWR0aDogNnZoO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgaGVpZ2h0OmF1dG87XFxufVxcblxcbi5wbHVzVG9Ebzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVTcGluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5cXG5cXG4jdG9Eb0RpYWxvZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOjE1cHg7XFxuXFxufVxcblxcbiNlZGl0VG9Eb0RpYWxvZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOjE1cHg7XFxuXFxufVxcblxcbiN0b0RvRGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDE5NCwgMjAyLCAyMDgsMC4zKTtcXG59XFxuXFxuI2VkaXRUb0RvRGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDE5NCwgMjAyLCAyMDgsMC4zKTtcXG59XFxuXFxuLmNhbmNlbFRvRG9Gb3JtRGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiN0b0RvQ2FuY2VsQnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFkZE5ld05vdGVzQnRuIHtcXG4gICAgd2lkdGg6MnZoO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiN0b0RvQ2FuY2VsQnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNwaW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi50b0RvRm9ybSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0IHtcXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAqL1xcbiAgICBtYXJnaW46MTBweCAwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7ICBcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuXFxufVxcbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG5cXG59XFxuLnRvRG9Gb3JtID4gZGl2ID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9Eb1NhdmVCdG4sIC5lZGl0dG9Eb1NhdmVCdG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsMC4zKTtcXG59XFxuXFxuLnRvRG9TYXZlQnRuOmhvdmVyLCAuZWRpdHRvRG9TYXZlQnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwwLjYpO1xcbn1cXG5cXG4uY2FsZW5kYXJJbnB1dCB7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcblxcbi5wcmlvcml0eURpdiB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuLmRlbGV0ZWljb24ge1xcbiAgICBoZWlnaHQ6Mi41dmg7XFxuICAgIHdpZHRoOmF1dG87XFxufVxcblxcbi5kZWxldGVpY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBmaWxsOnJlZCFpbXBvcnRhbnQ7XFxufVxcblxcbi5lZGl0aWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAweCkge1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgc2hvd1Byb2plY3RCdG5GdW5jID0gKCkgPT4ge1xuICAgIGxldCBzaG93UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93UHJvamVjdEJ0bicpO1xuICAgIGxldCBhbGxQcm9qZWN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XG4gICAgc2hvd1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGFsbFByb2plY3REaXZzLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3REaXZzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0RGl2cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5leHBvcnQge3Nob3dQcm9qZWN0QnRuRnVuY30iLCJsZXQgY2hlY2tUaGVEbyA9IChjaGVja0JveElkKSA9PiB7XG4gICAgY29uc29sZS5sb2coY2hlY2tCb3hJZCk7XG4gICAgbGV0IG9ianMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBvYmpzW2NoZWNrQm94SWRdLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2cob2Jqc1tjaGVja0JveElkXSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkob2JqcykpO1xuXG59O1xuXG5sZXQgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICBsZXQgYWxsQ2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tCb3gnKTtcbiAgYWxsQ2hlY2tCb3guZm9yRWFjaCgoY2hlY2tCb3gpID0+IHtcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjaGVja1RoZURvKGNoZWNrQm94LmlkKTtcbiAgICB9KVxuICB9KSAgXG59O1xuZXhwb3J0IHthZGRDaGVja0JveEZ1bmN0aW9uYWxpdHl9IiwiaW1wb3J0IHsgc2hvd0FsbE5vdGVzIH0gZnJvbSBcIi4vc2hvd05vdGVzXCI7XG5cbmNsYXNzIE5vdGVDb25zdHJ1Y3RvciB7XG4gICAgY29uc3RydWN0b3IodGFzaykge1xuICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB9XG59XG5cbmxldCBhZGROZXdOb3RlID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IGFsbE5vdGVzT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XG4gICAgbGV0IGtleXM7XG4gICAgaWYgKGFsbE5vdGVzT2JqID09PSBudWxsICkge1xuICAgICAgICBhbGxOb3Rlc09iaiA9IHt9O1xuICAgICAgICBrZXlzID0gW107XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoYWxsTm90ZXNPYmopO1xuICAgIH07XG4gICAgbGV0IG5ld0luZGV4O1xuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuZXdJbmRleCA9IDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuZXdJbmRleCA9IE51bWJlcihrZXlzW2tleXMubGVuZ3RoIC0gMV0pICsgMTtcbiAgICB9O1xuICAgIGFsbE5vdGVzT2JqW25ld0luZGV4XSA9IG5ldyBOb3RlQ29uc3RydWN0b3IodmFsdWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KGFsbE5vdGVzT2JqKSk7XG4gICAgc2hvd0FsbE5vdGVzKCk7XG59O1xuXG5sZXQgYWRkTm90ZXNGdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuXG4gICAgbGV0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVkaWFsb2cnKTtcbiAgICBsZXQgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlU2F2ZUJ0bicpO1xuICAgIGxldCBub3RlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUlucHV0Jyk7XG5cblxuICAgIG5vdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoZSkgPT4ge1xuICAgIGlmIChub3RlRm9ybS5yZXR1cm5WYWx1ZSAhPT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgYWRkTmV3Tm90ZShub3RlSW5wdXQudmFsdWUpO1xuICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICBub3RlRm9ybS5jbG9zZShub3RlSW5wdXQudmFsdWUpOyBcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IHthZGROb3Rlc0Z1bmN0aW9uYWxpdHksIGFkZE5ld05vdGV9IiwiaW1wb3J0IHsgY2hlY2tJZkFueVRvRG9MaXN0cyB9IGZyb20gXCIuXCI7XG5cbmxldCBkZWxldGVUb0RvID0gKFRvRG9JZCkgPT4ge1xuICAgIGxldCBhbGxPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBkZWxldGUgYWxsT2JqW1RvRG9JZF07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsT2JqKSk7XG4gICAgY2hlY2tJZkFueVRvRG9MaXN0cygpO1xufTtcblxubGV0IGFkZERlbGV0ZVRvRG9GdW5jdGlvbmFsaXR5ID0gKCkgPT4ge1xuICAgIGxldCBhbGxUb0RvRGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZWljb24nKTtcbiAgICBhbGxUb0RvRGVsZXRlQnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvRG8oYnRuLmlkKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG59O1xuXG5leHBvcnQge2FkZERlbGV0ZVRvRG9GdW5jdGlvbmFsaXR5fSIsImltcG9ydCB7IGNoZWNrSWZBbnlUb0RvTGlzdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5pbXBvcnQgeyBEb0xpc3RDb25zdHJ1Y3RvciB9IGZyb20gXCIuL3Nob3dEb0xpc3RcIjtcbmxldCB0b0NoYW5nZUlkO1xuXG5cbmxldCBzYXZlTmV3RWRpdFRvRG8gPSAocHJvamVjdCwgdGFzaywgbm90ZSwgZGF0ZSwgaGFzQ29tcGxldGVkLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBhbGxUb0RvT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgY29uc29sZS5sb2coe3Byb2plY3QsIHRhc2ssIG5vdGUsIGRhdGUsIGhhc0NvbXBsZXRlZCwgcHJpb3JpdHl9KVxuICAgIGNvbnNvbGUubG9nKHRvQ2hhbmdlSWQpO1xuICAgIGFsbFRvRG9PYmpbdG9DaGFuZ2VJZF0gPSBuZXcgRG9MaXN0Q29uc3RydWN0b3IocHJvamVjdCwgdGFzaywgbm90ZSwgZGF0ZSwgaGFzQ29tcGxldGVkLCBwcmlvcml0eSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsVG9Eb09iaikpO1xuICAgIGNoZWNrSWZBbnlUb0RvTGlzdHMoKTtcbn07ICAgICAgXG5cbmxldCBnZXRFZGl0VG9Eb0Fuc3dlcnMgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRwcm9qZWN0TmFtZScpO1xuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0dGFza05hbWUnKTtcbiAgICBsZXQgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0dG9Eb05vdGUnKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Y2FsZW5kYXJJbnB1dCcpO1xuICAgIGxldCBoYXNDb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuSGFzQ29tcGxldGVkJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKTtcbiAgICBpZiAocHJvamVjdE5hbWUudmFsdWUgIT09IFwiXCIgfHwgdGFza05hbWUudmFsdWUgIT09IFwiXCIgfHwgbm90ZS52YWx1ZSAhPT0gXCJcIiB8fCBkYXRlLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICBzYXZlTmV3RWRpdFRvRG8ocHJvamVjdE5hbWUudmFsdWUsIHRhc2tOYW1lLnZhbHVlLCBub3RlLnZhbHVlLCBkYXRlLnZhbHVlLCBoYXNDb21wbGV0ZWQudmFsdWUsIHByaW9yaXR5LnZhbHVlKTtcbiAgICB9O1xuICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgdGFza05hbWUudmFsdWUgPSAnJztcbiAgICBub3RlLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgICAgcHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgaGFzQ29tcGxldGVkLnZhbHVlID0gJyc7XG59O1xuXG5cblxubGV0IGFkZEVkaXRTYXZlVG9Eb0Z1bmMgPSAoKSA9PiB7XG4gICAgbGV0IHRvRG9EaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb0RvRGlhbG9nJyk7XG4gICAgdG9Eb0RpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2V0RWRpdFRvRG9BbnN3ZXJzKCk7XG4gICAgfSk7XG59O1xuXG5cbmxldCBzaG93RWRpdEZvcm0gPSAoY3VycmVudElkKSA9PiB7XG4gICAgbGV0IGFsbE9ianMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBsZXQgdG9FZGl0T2JqID0gYWxsT2Jqc1tjdXJyZW50SWRdO1xuXG4gICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb0RvRGlhbG9nJyk7XG4gICAgXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRwcm9qZWN0TmFtZScpO1xuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0dGFza05hbWUnKTtcbiAgICBsZXQgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0dG9Eb05vdGUnKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Y2FsZW5kYXJJbnB1dCcpO1xuXG5cbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IHRvRWRpdE9iai5wcm9qZWN0O1xuICAgIHRhc2tOYW1lLnZhbHVlID0gdG9FZGl0T2JqLnRhc2tuYW1lO1xuICAgIG5vdGUudmFsdWUgPSB0b0VkaXRPYmoubm90ZXM7XG4gICAgbGV0IHByaW9yaXR5ID0gdG9FZGl0T2JqLnByaW9yaXR5O1xuICAgIGxldCBjaG9vc2VkSWQgPSBgI2VkaXRtZWRpdW1gO1xuICAgIGxldCB0b0NoZWNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdCR7cHJpb3JpdHl9YCk7XG4gICAgdG9DaGVja1ByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xuICAgIGRhdGUudmFsdWUgPSB0b0VkaXRPYmouZHVlRGF0ZTtcbiAgICBsZXQgaGlkZGVuSGFzRG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW5IYXNDb21wbGV0ZWQnKTtcbiAgICBoaWRkZW5IYXNEb25lLnZhbHVlID0gdG9FZGl0T2JqLmNvbXBsZXRlZDtcbiAgICBlZGl0Rm9ybS5zaG93TW9kYWwoKTtcbiAgICBhZGRFZGl0U2F2ZVRvRG9GdW5jKCk7XG59XG5cbmxldCBhZGRFZGl0VG9Eb0Z1bmMgPSAoKSA9PiB7XG4gICAgbGV0IGFsbEVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXRpY29uJyk7XG4gICAgYWxsRWRpdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2hvd0VkaXRGb3JtKGJ0bi5pZCk7XG4gICAgICAgICAgICB0b0NoYW5nZUlkID0gYnRuLmlkXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHthZGRFZGl0VG9Eb0Z1bmMsIHNob3dFZGl0Rm9ybSwgYWRkRWRpdFNhdmVUb0RvRnVuYywgZ2V0RWRpdFRvRG9BbnN3ZXJzLCBzYXZlTmV3RWRpdFRvRG99IiwiaW1wb3J0IHsgc2hvd0FsbFRvRG8gfSBmcm9tIFwiLi9zaG93RG9MaXN0XCI7XG5pbXBvcnQgeyBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2RlbGV0ZVRvRG9GdW5jXCI7XG5pbXBvcnQgeyBhZGRFZGl0VG9Eb0Z1bmMgfSBmcm9tIFwiLi9lZGl0VG9Eb1wiO1xuaW1wb3J0IHsgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vYWRkQ2hlY2tGdW5jXCI7XG5cbmxldCBhZGRTZWFyY2hGdW5jID0gKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3ROYW1lID0gYnRuLmlubmVyVGV4dDtcbiAgICBsZXQgc3RvcmFnZUl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBsZXQgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JhZ2VJdGVtT2JqZWN0KTtcbiAgICBsZXQgZmlsdGVyZWRPYmogPSB7fTtcbiAgICBmb3IgKGxldCBrZXkgb2YgYWxsS2V5cykge1xuICAgICAgaWYgKHN0b3JhZ2VJdGVtT2JqZWN0W2tleV0ucHJvamVjdCA9PT0gY3VycmVudFByb2plY3ROYW1lKSB7XG4gICAgICAgIGZpbHRlcmVkT2JqW2tleV0gPSBzdG9yYWdlSXRlbU9iamVjdFtrZXldO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHNob3dBbGxUb0RvKGZpbHRlcmVkT2JqKTtcbiAgICBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSgpO1xuICAgIGFkZENoZWNrQm94RnVuY3Rpb25hbGl0eSgpO1xuICAgIC8vIGFkZEVkaXRUb0RvRnVuYygpO1xuICB9KTtcblxufVxuXG5cbmxldCBmaWxsUHJvamVjdEJ0bk5hbWVzID0gKCkgPT4ge1xuICAgIGxldCBhbGxQcm9qZWN0TmFtZXMgPSBbXTtcbiAgICBsZXQgc3RvcmFnZUl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBsZXQgaW5kZXggPSBPYmplY3Qua2V5cyhzdG9yYWdlSXRlbU9iamVjdCk7XG4gICAgZm9yIChsZXQgaSBvZiBpbmRleCkge1xuICAgICAgYWxsUHJvamVjdE5hbWVzLnB1c2goc3RvcmFnZUl0ZW1PYmplY3RbaV0ucHJvamVjdCk7XG4gICAgfTtcbiAgICBhbGxQcm9qZWN0TmFtZXMgPSBbLi4ubmV3IFNldChhbGxQcm9qZWN0TmFtZXMpXTtcbiAgXG4gICAgLy8gYWRkaW5nIHRoZXNlIGJ1dHR0b25zIHRvIGluIERPTVxuICBcbiAgICBsZXQgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XG4gICAgcHJvamVjdEJ0bi5pbm5lckhUTUwgPSBgYDtcbiAgICBhbGxQcm9qZWN0TmFtZXMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBsZXQgcHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QnRuRGl2JylcbiAgICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIG5ld0J0bi5pbm5lclRleHQgPSBidXR0b247XG4gICAgICBhZGRTZWFyY2hGdW5jKG5ld0J0bik7XG4gICAgICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKG5ld0J0bik7XG4gICAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKHByb2plY3RCdG5EaXYpO1xuICAgIH0pXG4gIH07XG5cbmV4cG9ydCB7ZmlsbFByb2plY3RCdG5OYW1lc30iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBzaG93QWxsVG9EbywgRG9MaXN0Q29uc3RydWN0b3IsIGFkZERldGFpbEZ1bmMgfSBmcm9tICcuL3Nob3dEb0xpc3QnXG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9zdG9yYWdlQXZhaWxhYmxlJ1xuaW1wb3J0IHtzaG93RGV0YWlsc30gZnJvbSAnLi9zaG93RGV0YWlscy5qcydcbmltcG9ydCB7IHNob3dBbGxOb3RlcywgYWRkTm90ZXNGdW5jIH0gZnJvbSAnLi9zaG93Tm90ZXMnXG5pbXBvcnQgeyBhZGROb3Rlc0Z1bmN0aW9uYWxpdHksIGFkZE5ld05vdGUsIGFkZFJlbW92ZU5vdGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9hZGRub3RlcydcbmltcG9ydCB7YWRkUGx1c1RvRG9GdW5jLCBhZGRTYXZlVG9Eb0Z1bmMsIGdldFRvRG9BbnN3ZXJzLCBzYXZlTmV3VG9Eb30gZnJvbSAnLi9wbHVzVG9EbydcbmltcG9ydCB7ZmlsbFByb2plY3RCdG5OYW1lc30gZnJvbSAnLi9maWxsUHJvamVjdEJ0bi5qcydcbmltcG9ydCB7IGFkZERlbGV0ZVRvRG9GdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9kZWxldGVUb0RvRnVuYydcbmltcG9ydCB7IGFkZEVkaXRUb0RvRnVuYyB9IGZyb20gJy4vZWRpdFRvRG8nXG5pbXBvcnQge3Nob3dUb2RheVRvRG99IGZyb20gJy4vc2hvd1RvZGF5J1xuaW1wb3J0IHtzaG93TW9udGhUb0RvfSBmcm9tICcuL3Nob3dNb250aCdcbmltcG9ydCB7c2hvd1dlZWtUb0RvfSBmcm9tICcuL3Nob3dXZWVrJ1xuaW1wb3J0IHsgc2hvd1Byb2plY3RCdG5GdW5jIH0gZnJvbSAnLi9Qcm9qZWN0QnRuU2hvdydcbmltcG9ydCB7IGFkZENoZWNrQm94RnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vYWRkQ2hlY2tGdW5jJ1xuXG5cblxuXG5sZXQgY2hlY2tJZkFueVRvRG9MaXN0cyA9ICgpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpICE9PSBudWxsICkge1xuICAgIGxldCBzdG9yYWdlSXRlbU9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIHNob3dBbGxUb0RvKHN0b3JhZ2VJdGVtT2JqZWN0KTtcbiAgICBmaWxsUHJvamVjdEJ0bk5hbWVzKCk7XG4gICAgc2hvd1Byb2plY3RCdG5GdW5jKCk7XG4gICAgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkoKTtcblxuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVCdG4nKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjaGVja0lmQW55VG9Eb0xpc3RzKCk7XG4gICAgfSk7XG4gICAgICAvLyBhZGRpbmcgdGltZUFsZ28gZnVuY3Rpb25zXG4gICAgbGV0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5QnRuJyk7XG4gICAgbGV0IG1vbnRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbnRoQnRuJyk7XG4gICAgbGV0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vla0J0bicpO1xuXG4gICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kYXlUb0RvKTtcbiAgICBtb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb250aFRvRG8pO1xuICAgIHdlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93V2Vla1RvRG8pO1xuXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UgdG8gZGlzcGxheScpO1xuICB9O1xuXG59O1xuXG5hZGRQbHVzVG9Eb0Z1bmMoKTtcblxuY2hlY2tJZkFueVRvRG9MaXN0cygpO1xuXG5sZXQgc2hvd25vdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXNCdG4nKTtcbnNob3dub3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbE5vdGVzKTtcblxuYWRkTm90ZXNGdW5jdGlvbmFsaXR5KCk7XG5cbmFkZFBsdXNUb0RvRnVuYygpO1xuXG5cblxuXG5cblxuXG5leHBvcnQge2NoZWNrSWZBbnlUb0RvTGlzdHN9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IERvTGlzdENvbnN0cnVjdG9yLCBzaG93QWxsVG9EbyB9IGZyb20gXCIuL3Nob3dEb0xpc3RcIjtcbmltcG9ydCB7Y2hlY2tJZkFueVRvRG9MaXN0c30gZnJvbSAnLi9pbmRleC5qcydcblxubGV0IHNhdmVOZXdUb0RvID0gKHByb2plY3QsIHRhc2ssIG5vdGUsIGRhdGUsIGhhc0NvbXBsZXRlZCwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgYWxsVG9Eb09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGxldCBuZXdJbmRleDtcblxuICAgIGlmIChhbGxUb0RvT2JqID09PSBudWxsKSB7XG4gICAgICAgIG5ld0luZGV4ID0gMTtcbiAgICAgICAgYWxsVG9Eb09iaiA9IHt9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhhbGxUb0RvT2JqKTtcbiAgICAgICAgaWYgKGFsbEtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGFzdEluZGV4ID0gYWxsS2V5c1thbGxLZXlzLmxlbmd0aCAtIDFdOyBcbiAgICAgICAgICAgIG5ld0luZGV4ID0gTnVtYmVyKGxhc3RJbmRleCkgKyAxO1xuICAgICAgICB9O1xuICAgIH0gICAgICBcblxuXG4gICAgY29uc29sZS5sb2cobmV3SW5kZXgpO1xuICAgIC8vIGFkZGluZyB0aGUgbmV3IG9iaiBpbiB0aGUgYWxsVG9Eb1xuICAgIGFsbFRvRG9PYmpbbmV3SW5kZXhdID0gbmV3IERvTGlzdENvbnN0cnVjdG9yKHByb2plY3QsIHRhc2ssIG5vdGUsIGRhdGUsIGhhc0NvbXBsZXRlZCwgcHJpb3JpdHkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFsbFRvRG9PYmopKTtcbiAgICBjaGVja0lmQW55VG9Eb0xpc3RzKCk7XG59O1xuXG5sZXQgZ2V0VG9Eb0Fuc3dlcnMgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lJyk7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tOYW1lJyk7XG4gICAgbGV0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb05vdGUnKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcklucHV0Jyk7XG4gICAgbGV0IGhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyk7XG4gICAgaWYgKHByb2plY3ROYW1lLnZhbHVlICE9PSBcIlwiIHx8IHRhc2tOYW1lLnZhbHVlICE9PSBcIlwiIHx8IG5vdGUudmFsdWUgIT09IFwiXCIgfHwgZGF0ZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICBzYXZlTmV3VG9Ebyhwcm9qZWN0TmFtZS52YWx1ZSwgdGFza05hbWUudmFsdWUsIG5vdGUudmFsdWUsIGRhdGUudmFsdWUsIGhhc0NvbXBsZXRlZCwgcHJpb3JpdHkudmFsdWUpO1xuICAgIH07XG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgICB0YXNrTmFtZS52YWx1ZSA9ICcnO1xuICAgIG5vdGUudmFsdWUgPSAnJztcbiAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgaWYgKHByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9O1xufTtcblxuXG5cbmxldCBhZGRTYXZlVG9Eb0Z1bmMgPSAoKSA9PiB7XG4gICAgbGV0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb1NhdmVCdG4nKTtcbiAgICBsZXQgdG9Eb0RpYWxvZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb0RpYWxvZycpO1xuICAgIHRvRG9EaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgZ2V0VG9Eb0Fuc3dlcnMpO1xufTtcblxuXG5sZXQgYWRkUGx1c1RvRG9GdW5jID0gKCkgPT4ge1xuICAgIFxuXG4gICAgbGV0IHRvRG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb0RpYWxvZycpO1xuICAgIGxldCBzaG93VG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIHRvRG9EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfTtcblxuICAgIC8vIEFkZCArIHRvRE8gZnVuY3Rpb25hbGl0eVxuICAgIGxldCBQbHVzU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzVG9EbycpO1xuICAgIFBsdXNTaWduLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvRG9Gb3JtKTtcbiAgICBhZGRTYXZlVG9Eb0Z1bmMoKTtcbn07XG5cbmV4cG9ydCB7YWRkUGx1c1RvRG9GdW5jLCBhZGRTYXZlVG9Eb0Z1bmMsIGdldFRvRG9BbnN3ZXJzLCBzYXZlTmV3VG9Eb30iLCJsZXQgc2hvd0RldGFpbHMgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCBmYXZEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2ZGlhbG9nJyk7XG4gICAgbGV0IGRpdkZvckRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc0RpdicpO1xuICAgIGxldCBBbGxDYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGxldCBjdXJyZW50Q2FyZCA9IEFsbENhcmRzW2luZGV4XTtcbiAgICBsZXQgY29tcGxldGVTdGF0dXM7XG4gICAgaWYgKGN1cnJlbnRDYXJkLmNvbXBsZXRlZCkge1xuICAgICAgY29tcGxldGVTdGF0dXMgPSBgQ29tcGxldGVkYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21wbGV0ZVN0YXR1cyA9IGBMZWZ0IFRvIEJlIERvbmVgO1xuICAgIH1cbiAgICBkaXZGb3JEZXRhaWxzLmlubmVySFRNTCA9IGBcbiAgICA8aDI+JHtjdXJyZW50Q2FyZC50YXNrbmFtZX08L2gyPlxuICAgIDxicj5cbiAgICA8aDU+UHJvamVjdDogJHtjdXJyZW50Q2FyZC5wcm9qZWN0fTwvaDU+XG4gICAgPGg1PkR1ZSBEYXRlOiAke2N1cnJlbnRDYXJkLmR1ZURhdGV9PC9oNT5cbiAgICA8aDU+U3RhdHVzOiAke2NvbXBsZXRlU3RhdHVzfTwvaDU+XG4gICAgPGg1Pk5vdGVzOiAke2N1cnJlbnRDYXJkLm5vdGVzfTwvaDU+XG4gICAgPGg1PlByb3JpdHk6ICR7Y3VycmVudENhcmQucHJpb3JpdHl9PC9oNT5cbiAgICBgO1xuICAgIGZhdkRpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxuXG4gIGV4cG9ydCB7c2hvd0RldGFpbHN9IiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9kZWxldGUtZW1wdHktb3V0bGluZS5zdmcnXG5pbXBvcnQgZWRpdGljb24gZnJvbSAnLi9zcXVhcmUtZWRpdC1vdXRsaW5lLnN2ZydcbmltcG9ydCB7IHNob3dEZXRhaWxzIH0gZnJvbSAnLi9zaG93RGV0YWlscyc7XG5pbXBvcnQgeyBhZGRFZGl0VG9Eb0Z1bmMgfSBmcm9tICcuL2VkaXRUb0RvJztcblxuY2xhc3MgRG9MaXN0Q29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIHRhc2tuYW1lLG5vdGVzLCBkdWVEYXRlLCBjb21wbGV0ZWQsIHByaW9yaXR5KSB7XG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgdGhpcy50YXNrbmFtZSA9IHRhc2tuYW1lO1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICBcbiAgICB9XG59XG5cbmxldCBhZGREZXRhaWxGdW5jID0gKCkgPT4ge1xuICBsZXQgZGV0YWlsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXRhaWxCdG4nKTtcbiAgZGV0YWlsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0RldGFpbHMpO1xufSlcbn07XG5cbmxldCBzaG93QWxsVG9EbyA9IChzdG9yYWdlSXRlbU9iamVjdCkgPT4ge1xuICAgIGxldCBhbGxMSXN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxsaXN0cycpO1xuICAgIGxldCBub3Rlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsTm90ZXMnKTtcbiAgICBub3Rlc0xpc3QuaW5uZXJIVE1MID0gYGA7XG4gICAgYWxsTElzdERpdnMuaW5uZXJIVE1MID0gYGA7XG4gICAgbGV0IGluZGV4ID0gT2JqZWN0LmtleXMoc3RvcmFnZUl0ZW1PYmplY3QpO1xuICAgIGlmIChzdG9yYWdlSXRlbU9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgZm9yIChsZXQgaSBvZiBpbmRleCkge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBzdG9yYWdlSXRlbU9iamVjdFtpXTtcbiAgICAgICAgbGV0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkZGl2Jyk7XG4gICAgICAgIC8vIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIC8vIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IGN1cnJlbnRJdGVtLnByb2plY3Q7XG4gICAgICAgIGxldCB0YXNrTmFtZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID1jdXJyZW50SXRlbS50YXNrbmFtZTtcbiAgICAgICAgLy8gbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgLy8gbm90ZXMuaW5uZXJUZXh0ID0gY3VycmVudEl0ZW0ubm90ZXM7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBjdXJyZW50SXRlbS5kdWVEYXRlO1xuICAgICAgICBsZXQgZGV0YWlsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRldGFpbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxCdG4nKTtcbiAgICAgICAgZGV0YWlsQnV0dG9uLmlkID0gaTtcbiAgICAgICAgZGV0YWlsQnV0dG9uLmlubmVyVGV4dCA9IGBEZXRhaWxzYDtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrQm94Jyk7XG4gICAgICAgIGNoZWNrQm94LmlkID0gaTtcbiAgICAgICAgbGV0IGhhc0NvbXBsZXRlZCA9IGN1cnJlbnRJdGVtLmNvbXBsZXRlZDtcbiAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IGhhc0NvbXBsZXRlZDtcbiAgICBcbiAgICAgICAgbGV0IGRlbGV0ZWljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZGVsZXRlaWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICBkZWxldGVpY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWljb24nKTtcbiAgICAgICAgZGVsZXRlaWNvbi5pZCA9IGk7XG4gICAgXG4gICAgICAgIGxldCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBlZGl0SWNvbi5zcmMgPSBlZGl0aWNvbjtcbiAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdGljb24nKTtcbiAgICAgICAgZWRpdEljb24uaWQgPSBpO1xuICAgIFxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGV0YWlsQnV0dG9uKTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkZWxldGVpY29uKTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmQoZWRpdEljb24pO1xuICBcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZ2hwcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRJdGVtLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnbWVkaXVtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50SXRlbS5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2xvd3ByaW9yaXR5Jyk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGFsbExJc3REaXZzLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIFxuICAgICAgfTtcbiAgICAgIC8vIGFkZCBkZXRhaWxzIGZ1bmN0aW9uYWxpdHlcbiAgICAgIGFkZERldGFpbEZ1bmMoKTtcbiAgICAgIGFkZEVkaXRUb0RvRnVuYygpO1xuICAgIH07XG5cbn07XG5cbmV4cG9ydCB7c2hvd0FsbFRvRG8sIERvTGlzdENvbnN0cnVjdG9yLCBhZGREZXRhaWxGdW5jfSIsImltcG9ydCB7IHNob3dBbGxUb0RvIH0gZnJvbSBcIi4vc2hvd0RvTGlzdFwiXG5pbXBvcnQgeyBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2RlbGV0ZVRvRG9GdW5jXCI7XG5pbXBvcnQgeyBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9hZGRDaGVja0Z1bmNcIjtcblxubGV0IHNob3dNb250aFRvRG8gPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGhpc01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgdGhpc1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBzb3J0ZWRPYmogPSB7fTtcbiAgICBsZXQgYWxsT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhhbGxPYmopO1xuICAgIGZvciAobGV0IGluZGV4IG9mIGtleXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRPYmogPSBhbGxPYmpbaW5kZXhdO1xuICAgICAgICBsZXQgaW5kZXhEYXRlID0gbmV3IERhdGUoY3VycmVudE9iai5kdWVEYXRlKTtcbiAgICAgICAgbGV0IGluZGV4RGF5ID0gaW5kZXhEYXRlLmdldERheSgpO1xuICAgICAgICBsZXQgaW5kZXhNb250aCA9IGluZGV4RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgaW5kZXhZZWFyID0gIGluZGV4RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZiAoaW5kZXhNb250aCA9PT0gdGhpc01vbnRoICYmIGluZGV4WWVhciA9PT0gdGhpc1llYXIpIHtcbiAgICAgICAgICAgIHNvcnRlZE9ialtpbmRleF0gPSBjdXJyZW50T2JqO1xuICAgICAgICB9O1xuICAgICAgICBzaG93QWxsVG9Ebyhzb3J0ZWRPYmopO1xuICAgICAgICBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkoKTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7c2hvd01vbnRoVG9Eb30iLCJpbXBvcnQgcGx1c1NpZ24gZnJvbSAnLi9wbHVzcy5zdmcnXG5cblxubGV0IGFkZE5vdGVzRnVuYyA9ICgpID0+IHtcbiAgICBsZXQgYWRkTm90ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGROZXdOb3Rlc0J0bicpO1xuICAgIGxldCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlZGlhbG9nJyk7XG4gICAgbGV0IG5vdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlSW5wdXQnKTtcbiAgICBhZGROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5vdGVJbnB1dC52YWx1ZSA9IGBgO1xuICAgICAgICBub3RlRm9ybS5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxufVxuXG5sZXQgYWRkUmVtb3ZlTm90ZUZ1bmN0aW9uYWxpdHkgPSAoKSA9PiB7XG5cbiAgICBsZXQgcmVtb3ZlTm90ZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB0b0RlbGV0ZUluZGV4ID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGxldCBhbGxOT3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykpO1xuICAgICAgICBkZWxldGUgYWxsTk90ZXNbdG9EZWxldGVJbmRleF07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KGFsbE5PdGVzKSk7XG4gICAgICAgIHNob3dBbGxOb3RlcygpO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgbGV0IEFsbERlbGV0ZU5vdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlTm90ZScpO1xuICAgIEFsbERlbGV0ZU5vdGVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlTm90ZSlcbiAgICB9KVxufTtcblxuXG5sZXQgc2hvd0FsbE5vdGVzID0gKCkgPT4ge1xuICAgIGxldCBhbGxOT3Rlc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykpO1xuICAgIGxldCBhbGxMaXN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxsaXN0cycpO1xuICAgIC8vIGFsbExpc3RzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gY29tcGxldGUgdGhpc1xuICAgIGxldCBhbGxOb3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxOb3RlcycpO1xuICAgIGFsbExpc3RzRGl2LmlubmVySFRNTCA9IGBgO1xuICAgIGFsbE5vdGVzQ29udGFpbmVyLmlubmVySFRNTCA9IGBgO1xuICBcbiAgICBsZXQgYWRkTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROb3Rlc0Rpdi5pZCA9ICdhZGROb3Rlc0Rpdic7XG4gICAgbGV0IGFkZE5ld05vdGVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3Tm90ZXNCdG4uY2xhc3NMaXN0LmFkZCgnYWRkTmV3Tm90ZXNCdG4nKTtcbiAgICBhZGROZXdOb3Rlc0J0bi5pZCA9IFwiYWRkTmV3Tm90ZXNCdG5cIjtcbiAgICBhZGROZXdOb3Rlc0J0bi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3BsdXNTaWdufVwiPmBcbiAgICBhZGROb3Rlc0Rpdi5hcHBlbmRDaGlsZChhZGROZXdOb3Rlc0J0bik7XG4gICAgYWxsTm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTm90ZXNEaXYpO1xuICAgIGlmIChhbGxOT3Rlc09iaiA9PT0gbnVsbCApIHtcbiAgICAgICAgYWRkTm90ZXNGdW5jKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGFsbE5PdGVzT2JqKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggb2Yga2V5cykge1xuICAgICAgICBsZXQgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVjYXJkJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZU5vdGUnKTtcbiAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IGBYYDtcbiAgICAgICAgZGVsZXRlQnRuLmlkID0gaW5kZXg7XG4gICAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhLmlubmVyVGV4dCA9IGAke2FsbE5PdGVzT2JqW2luZGV4XS50YXNrfWA7XG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgbm90ZURpdi5hcHBlbmQocGFyYSk7XG4gICAgICAgIGFsbE5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVEaXYpO1xuICAgICAgICB9O1xuICAgICAgICBhZGROb3Rlc0Z1bmMoKTtcbiAgICAgICAgYWRkUmVtb3ZlTm90ZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICB9O1xuICAgIFxuXG59O1xuXG5cbmV4cG9ydCB7c2hvd0FsbE5vdGVzLCBhZGROb3Rlc0Z1bmMsIGFkZFJlbW92ZU5vdGVGdW5jdGlvbmFsaXR5fVxuIiwiaW1wb3J0IHsgc2hvd0FsbFRvRG8gfSBmcm9tIFwiLi9zaG93RG9MaXN0XCJcbmltcG9ydCB7IGFkZERlbGV0ZVRvRG9GdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vZGVsZXRlVG9Eb0Z1bmNcIjtcbmltcG9ydCB7IGFkZENoZWNrQm94RnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2FkZENoZWNrRnVuY1wiO1xuXG5sZXQgc2hvd1RvZGF5VG9EbyA9ICgpID0+IHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aGlzRGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xuXG4gICAgbGV0IHRoaXNNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IHRoaXNZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgc29ydGVkT2JqID0ge307XG4gICAgbGV0IGFsbE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoYWxsT2JqKTtcbiAgICBmb3IgKGxldCBpbmRleCBvZiBrZXlzKSB7XG4gICAgICAgIGxldCBjdXJyZW50T2JqID0gYWxsT2JqW2luZGV4XTtcbiAgICAgICAgbGV0IGluZGV4RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRPYmouZHVlRGF0ZSk7XG4gICAgICAgIGxldCBpbmRleERheSA9IGluZGV4RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBpbmRleE1vbnRoID0gaW5kZXhEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGxldCBpbmRleFllYXIgPSAgaW5kZXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmIChpbmRleERheSA9PT0gdGhpc0RheSAmJiBpbmRleE1vbnRoID09PSB0aGlzTW9udGggJiYgaW5kZXhZZWFyID09PSB0aGlzWWVhcikge1xuICAgICAgICAgICAgc29ydGVkT2JqW2luZGV4XSA9IGN1cnJlbnRPYmo7XG5cbiAgICAgICAgfTtcbiAgICAgICAgc2hvd0FsbFRvRG8oc29ydGVkT2JqKTtcbiAgICAgICAgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkoKTtcbiAgICAgICAgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5KCk7XG4gICAgfVxuXG59O1xuXG5leHBvcnQge3Nob3dUb2RheVRvRG99IiwiaW1wb3J0IHsgc2hvd0FsbFRvRG8gfSBmcm9tIFwiLi9zaG93RG9MaXN0XCJcbmltcG9ydCB7IGFkZERlbGV0ZVRvRG9GdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vZGVsZXRlVG9Eb0Z1bmNcIjtcbmltcG9ydCB7IGFkZENoZWNrQm94RnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2FkZENoZWNrRnVuY1wiO1xuXG5sZXQgc2hvd1dlZWtUb0RvID0gKCkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRoaXNEYXkgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IHRoaXNNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IHRoaXNZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgc29ydGVkT2JqID0ge307XG4gICAgbGV0IGFsbE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoYWxsT2JqKTtcbiAgICBmb3IgKGxldCBpbmRleCBvZiBrZXlzKSB7XG4gICAgICAgIGxldCBjdXJyZW50T2JqID0gYWxsT2JqW2luZGV4XTtcbiAgICAgICAgbGV0IGluZGV4RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRPYmouZHVlRGF0ZSk7XG4gICAgICAgIGxldCBpbmRleERheSA9IGluZGV4RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBpbmRleE1vbnRoID0gaW5kZXhEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGxldCBpbmRleFllYXIgPSAgaW5kZXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBkaWZmO1xuICAgICAgICBpZiAoaW5kZXhNb250aCA9PT0gdGhpc01vbnRoICYmIGluZGV4WWVhciA9PT0gdGhpc1llYXIpIHtcbiAgICAgICAgICAgIGxldCBudW1JbmRleERheSA9IE51bWJlcihpbmRleERheSk7XG4gICAgICAgICAgICBsZXQgbnVtVGhpc0RheSA9IE51bWJlcih0aGlzRGF5KTtcbiAgICAgICAgICAgIGlmIChudW1JbmRleERheSA+IG51bVRoaXNEYXkpIHtcbiAgICAgICAgICAgICAgICBkaWZmID0gbnVtSW5kZXhEYXkgLSBudW1UaGlzRGF5O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaWZmID0gbnVtVGhpc0RheSAtIG51bUluZGV4RGF5OyBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZGlmZiA8IDcpIHtcblxuICAgICAgICAgICAgICAgIHNvcnRlZE9ialtpbmRleF0gPSBjdXJyZW50T2JqO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc2hvd0FsbFRvRG8oc29ydGVkT2JqKTtcbiAgICAgICAgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkoKTtcbiAgICAgICAgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5KCk7XG4gICAgfVxuXG59O1xuZXhwb3J0IHtzaG93V2Vla1RvRG99IiwiIGV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=