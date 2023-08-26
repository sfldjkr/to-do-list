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
  

* {
    padding:0px;
    margin:0px;
    font-family:'Work Sans', sans-serif;
}

body {
    background-color:#C2B9B0; /* #7E685A; */ /* #AFD275; */;
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
    background-color: #C2B9B0; /* #7E685A; */ /* #AFD275; */;

}

#body {
    display: grid;
    grid-template-columns: 1fr 4fr;
}

#sidebar {
    padding: 10px;
    padding-top: 10vh;

    display: grid;
    justify-content: center;
    gap:5vh;
    align-items: center;
    align-content: start;
    background-color: #C2B9B0;/* #7E685A; */ /* #AFD275; */;;
}

#sidebar > button {
    border:none;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 3vh;
}

.alllists {
    padding: 30px;
    display: grid;
    gap:2vh;
    align-content: start;
    background-color: #7E685A; /* #AFD275; */ ;
}

.alllists > div {
    opacity: 0.7;
    background-color: rgba(175, 210, 117,0.7); 
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
    background-color: #C2CAD0; /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;
    transform: scale(1.01);
    font-weight: bold;

}

.deleteicon {
    display: inline;
    width:3vh;
    height:auto;
}

.editicon {
    display: inline;
    width:3vh;
    height:auto;
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

#sidebar > button:hover {
    transform: scale(1.1);
}

#projectBtn {
    display: grid;
    gap:15px;
}

#projectBtn > button {
    background-color: transparent;
    font-size: 2vh;
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
    font-size: 2vh;
    border:none;
    margin:2vh 0px;
}

.projectBtnDiv > button:hover {
    transform: scale(1.1);
    font-weight: 100;
}


.notecard {
    border: 1px solid grey; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;;
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

.addNewNotesBtn {
    background-color: transparent;
    border:none;
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
    width: 8vh;
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

.deleteicon:hover {
    transform: scale(1.1);
    fill:red!important;
}

.editicon:hover {
    transform: scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* \n#E7717D\n#C2CAD0\n#C2B9B0\n#7E685A\n#AFD275\n */\n\n\n@keyframes rotateSpin {\n    0%   {rotate: 0deg;}\n    10%   {rotate: 25deg;}\n    20%   {rotate: 45eg;}\n    30%   {rotate: 55deg;}\n    40%   {rotate: 65deg;}\n    50%   {rotate: 90deg;}\n    60%   {rotate: 110deg;}\n    70%   {rotate: 130deg;}\n    80%   {rotate: 150deg;}\n    90%   {rotate: 170deg;}\n    100%   {rotate: 180deg;}\n}\n  \n\n* {\n    padding:0px;\n    margin:0px;\n    font-family:'Work Sans', sans-serif;\n}\n\nbody {\n    background-color:#C2B9B0; /* #7E685A; */ /* #AFD275; */;\n}\n\nbutton {\n    font-family:'Work Sans', sans-serif;\n}\n\ninput {\n    font-family:'Work Sans', sans-serif;\n}\n\n.carddiv {\n    border: 1px solid  #E7717D; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */\n    padding: 10px 20px;\n    display:grid;\n    gap:15px;\n    grid-template-columns: auto 2fr repeat(4, auto);\n    align-items: center;\n    justify-items: center;\n}\n\n.header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 20px 30px;\n    gap:20px;\n    color:white;\n    font-weight: bold;\n    letter-spacing: 4px;\n    font-size: 3vh;\n    background-color: #C2B9B0; /* #7E685A; */ /* #AFD275; */;\n\n}\n\n#body {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#sidebar {\n    padding: 10px;\n    padding-top: 10vh;\n\n    display: grid;\n    justify-content: center;\n    gap:5vh;\n    align-items: center;\n    align-content: start;\n    background-color: #C2B9B0;/* #7E685A; */ /* #AFD275; */;;\n}\n\n#sidebar > button {\n    border:none;\n    background-color: transparent;\n    color: white;\n    font-weight: bold;\n    font-size: 3vh;\n}\n\n.alllists {\n    padding: 30px;\n    display: grid;\n    gap:2vh;\n    align-content: start;\n    background-color: #7E685A; /* #AFD275; */ ;\n}\n\n.alllists > div {\n    opacity: 0.7;\n    background-color: rgba(175, 210, 117,0.7); \n}\n\n.alllists > div:hover {\n    box-shadow:rgba(83, 77, 77, 0.215) 0px 19px 38px, rgba(119, 109, 109, 0.22) 0px 7px 5px;;\n    transform: scale(1.01);\n    font-weight: bold;\n    opacity: 1;\n}\n\n\n\n.hascompletedbutton {\n    background-color: rgb(24, 223, 24);\n}\n\n.hasnotcompletedbutton {\n    background-color: rgb(238, 24, 24);\n}\n\n.detailBtn {\n    padding:5px 10px;\n    border-radius: 5px 5px 5px 5px;\n    border: none;\n}\n\n.detailBtn:hover {\n    background-color: #C2CAD0; /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;\n    transform: scale(1.01);\n    font-weight: bold;\n\n}\n\n.deleteicon {\n    display: inline;\n    width:3vh;\n    height:auto;\n}\n\n.editicon {\n    display: inline;\n    width:3vh;\n    height:auto;\n}\n\n#favdialog::backdrop, #notedialog::backdrop {\n    background-color: rgba(194, 202, 208,0.3); /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;\n}\n\n.notebookicon {\n    display: inline;\n    width:5vh;\n    height:auto;\n}\n\n#favdialog {\n    border-radius: 10%;\n    border: none;\n    padding:10px;\n    margin: auto;\n    display:grid;\n    gap:5px;\n}\n\n#notedialog {\n    border-radius: 10%;\n    border: none;\n    padding:10px;\n    margin: auto;\n    display: grid;\n}\n\n#notedialog > form {\n    justify-self: end;\n}\n\n#favdialog > form {\n    justify-self: end;\n}\n\n#deatilcancelbtn, #addNotesCancelBtn {\n    border-radius: 80%;\n    padding:10px;\n    margin:auto;\n    border: none;\n    background-color: transparent;\n}\n\n#deatilcancelbtn:hover , #addNotesCancelBtn:hover{\n    transform: scale(1.07);\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n.detailsDiv {\n    display:grid;\n    gap:7px;\n    letter-spacing: 2px;\n    padding: 20px 30px;\n}\n\n.highpriority {\n    border-left: 10px solid  rgba(231, 113, 125,0.8); /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;;;\n}\n\n.mediumpriority {\n    border-left: 10px solid rgba(21, 218, 21,0.8);\n}\n\n.lowpriority {\n    border-left: 10px solid rgba(235, 235, 34,0.8);\n}\n\n#sidebar > button:hover {\n    transform: scale(1.1);\n}\n\n#projectBtn {\n    display: grid;\n    gap:15px;\n}\n\n#projectBtn > button {\n    background-color: transparent;\n    font-size: 2vh;\n    border:none;\n}\n\n#projectBtn > button:hover {\n    transform: scale(1.01);\n    font-weight: bold;\n}\n\n.projectBtnDiv {\n    margin: auto;\n    text-align: center;\n}\n\n.projectBtnDiv > button {\n    background-color: transparent;\n    font-size: 2vh;\n    border:none;\n    margin:2vh 0px;\n}\n\n.projectBtnDiv > button:hover {\n    transform: scale(1.1);\n    font-weight: 100;\n}\n\n\n.notecard {\n    border: 1px solid grey; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;;\n}\n\n.allNotes {\n    display:grid;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 20px;\n}\n\n.allNotes > div {\n    border-radius: 5%;\n    opacity: 0.7;\n    display:grid;\n    gap:10px;\n    padding:10px;\n    background-color: #E7717D; /* #C2CAD0; */ /* #C2B9B0; */ /* #7E685A; */ /* #AFD275; */;\n}\n\n.allNotes div > p {\n    padding: 10px 20px;\n}\n\n.allNotes > div > button {\n    background-color: transparent;\n    border: none;\n    justify-self: end;\n}\n\n.allNotes > div > button:hover {\n    transform: scale(1.1);\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n.allNotes > div:hover {\n    box-shadow:rgba(83, 77, 77, 0.215) 0px 19px 38px, rgba(119, 109, 109, 0.22) 0px 7px 5px;\n    transform: scale(1.01);\n    font-weight:100;\n    opacity: 1;\n}\n\n#addNotesDiv {\n    box-shadow:none;\n    margin: auto;\n    padding:10px;\n    margin-bottom: 50px;\n    background-color: transparent;\n}\n\n#addNotesDiv:hover {\n    transform: scale(1);\n}\n\n.addNewNotesBtn {\n    background-color: transparent;\n    border:none;\n}\n\n.addNewNotesBtn:hover {\n    transform: scale(1.1);\n    font-weight: 100;\n    margin: auto;\n}\n\n.noteInput {\n    -webkit-appearance: none;\n    border: none;\n    border-bottom: 5px solid  #C2B9B0; /* #7E685A; */ /* #AFD275; */;\n    outline:white;\n}\n\n.noteInput::placeholder {\n    text-align: center;\n    letter-spacing: 2px;\n}\n\n.noteInput:focus {\n    border:none;\n    outline:none;\n    transform: scale(1.03);\n}\n\n.noteInputsDiv {\n    text-align: center;\n    display:grid;\n    justify-items: stretch;\n    padding: 0px 10px;\n}\n\n.noteSaveBtn {\n    margin-top: 8px;\n    margin-bottom: 10px;\n    display: block;\n    padding:5px;\n    background-color: rgba(127, 255, 212,0.6);\n    border:none;\n    letter-spacing: 3px;\n\n}\n\n.noteSaveBtn:hover {\n    transform: scale(1.05);\n    font-weight: bold;\n    background-color: rgba(127, 255, 212,0.8);\n}\n\n.noteForm {\n    display: grid;\n    gap:10px;\n}\n\n#notedialog {\n    padding:10px;\n    display:grid;\n    gap:10px;\n}\n\n\n/* To DO List FOrm Styles */\n.plusIconDiv {\n    text-align: center;\n}\n\n.plusToDo {\n    width: 8vh;\n    margin:auto;\n    height:auto;\n}\n\n.plusToDo:hover {\n    transform: scale(1.07);\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n\n\n#toDoDialog {\n    border-radius: 10%;\n    border: none;\n    padding:20px;\n    margin: auto;\n    display: grid;\n    gap:15px;\n\n}\n\n#editToDoDialog {\n    border-radius: 10%;\n    border: none;\n    padding:20px;\n    margin: auto;\n    display: grid;\n    gap:15px;\n\n}\n\n#toDoDialog::backdrop {\n    background-color:  rgba(194, 202, 208,0.3);\n}\n\n#editToDoDialog::backdrop {\n    background-color:  rgba(194, 202, 208,0.3);\n}\n\n.cancelToDoFormDiv {\n    justify-self: end;\n}\n\n#toDoCancelBtn {\n    border: none;\n    outline: none;\n    background-color: transparent;\n}\n\n#toDoCancelBtn:hover {\n    transform: scale(1.07);\n    font-weight: bolder;\n    animation-name: rotateSpin;\n    animation-duration: 0.4s;\n    animation-fill-mode: forwards;\n}\n\n.toDoForm {\n    padding: 15px;\n}\n\n.toDoForm > div > input {\n    /* -webkit-appearance: none; */\n    margin:10px 0px;\n    outline: none;  \n    border:none;\n    border-bottom: 3px solid aquamarine;\n    opacity: 0.6;\n\n}\n.toDoForm > div > input:focus {\n    transform: scale(1.03);\n    opacity: 1;\n    font-weight: bolder;\n    letter-spacing: 4px;\n    margin: 15px 0px;\n\n}\n.toDoForm > div > input::placeholder {\n    text-align:center;\n    outline: none;\n    font-weight: bold;\n}\n\n.toDoSaveBtn, .edittoDoSaveBtn {\n    width: 100%;\n    padding: 5px;\n    border: none;\n    background-color: rgba(0, 255, 255,0.3);\n}\n\n.toDoSaveBtn:hover, .edittoDoSaveBtn:hover {\n    transform: scale(1.03);\n    font-weight: 100;\n    background-color: rgba(0, 255, 255,0.6);\n}\n\n.calendarInput {\n    width:100%;\n}\n\n\n.priorityDiv {\n    margin-top:10px;\n    text-align: center;\n    margin:auto;\n}\n\n.deleteicon:hover {\n    transform: scale(1.1);\n    fill:red!important;\n}\n\n.editicon:hover {\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
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
    let addNewNotesBtn = document.createElement('button');
    addNewNotesBtn.classList.add('addNewNotesBtn');
    addNewNotesBtn.innerText = `Add Notes`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0MsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLG9EQUFvRCxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsaUNBQWlDLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsaUNBQWlDLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSywwQ0FBMEMsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLG9EQUFvRCxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssb0RBQW9ELE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxvREFBb0QsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxvREFBb0QsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxnQ0FBZ0MsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQixRQUFRLDJFQUEwQjtBQUNsQyxRQUFRLHVFQUF3QjtBQUNoQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLENBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUHJvamVjdEJ0blNob3cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRDaGVja0Z1bmMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRub3Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZVRvRG9GdW5jLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9maWxsUHJvamVjdEJ0bi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGx1c1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93RGV0YWlscy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Nob3dEb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93TW9udGguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93Tm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93VG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93V2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBcbiNFNzcxN0RcbiNDMkNBRDBcbiNDMkI5QjBcbiM3RTY4NUFcbiNBRkQyNzVcbiAqL1xuXG5cbkBrZXlmcmFtZXMgcm90YXRlU3BpbiB7XG4gICAgMCUgICB7cm90YXRlOiAwZGVnO31cbiAgICAxMCUgICB7cm90YXRlOiAyNWRlZzt9XG4gICAgMjAlICAge3JvdGF0ZTogNDVlZzt9XG4gICAgMzAlICAge3JvdGF0ZTogNTVkZWc7fVxuICAgIDQwJSAgIHtyb3RhdGU6IDY1ZGVnO31cbiAgICA1MCUgICB7cm90YXRlOiA5MGRlZzt9XG4gICAgNjAlICAge3JvdGF0ZTogMTEwZGVnO31cbiAgICA3MCUgICB7cm90YXRlOiAxMzBkZWc7fVxuICAgIDgwJSAgIHtyb3RhdGU6IDE1MGRlZzt9XG4gICAgOTAlICAge3JvdGF0ZTogMTcwZGVnO31cbiAgICAxMDAlICAge3JvdGF0ZTogMTgwZGVnO31cbn1cbiAgXG5cbioge1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgZm9udC1mYW1pbHk6J1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0MyQjlCMDsgLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6J1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0IHtcbiAgICBmb250LWZhbWlseTonV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmNhcmRkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICAjRTc3MTdEOyAvKiAjQzJDQUQwOyAqLyAvKiAjQzJCOUIwOyAqLyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqL1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDJmciByZXBlYXQoNCwgYXV0byk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBnYXA6MjBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkI5QjA7IC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xuXG59XG5cbiNib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuI3NpZGViYXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDo1dmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCOUIwOy8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovOztcbn1cblxuI3NpZGViYXIgPiBidXR0b24ge1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDN2aDtcbn1cblxuLmFsbGxpc3RzIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOjJ2aDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U2ODVBOyAvKiAjQUZEMjc1OyAqLyA7XG59XG5cbi5hbGxsaXN0cyA+IGRpdiB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMTAsIDExNywwLjcpOyBcbn1cblxuLmFsbGxpc3RzID4gZGl2OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OnJnYmEoODMsIDc3LCA3NywgMC4yMTUpIDBweCAxOXB4IDM4cHgsIHJnYmEoMTE5LCAxMDksIDEwOSwgMC4yMikgMHB4IDdweCA1cHg7O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5oYXNjb21wbGV0ZWRidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjIzLCAyNCk7XG59XG5cbi5oYXNub3Rjb21wbGV0ZWRidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI0LCAyNCk7XG59XG5cbi5kZXRhaWxCdG4ge1xuICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmRldGFpbEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQ0FEMDsgLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4uZGVsZXRlaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOjN2aDtcbiAgICBoZWlnaHQ6YXV0bztcbn1cblxuLmVkaXRpY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6M3ZoO1xuICAgIGhlaWdodDphdXRvO1xufVxuXG4jZmF2ZGlhbG9nOjpiYWNrZHJvcCwgI25vdGVkaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMjAyLCAyMDgsMC4zKTsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XG59XG5cbi5ub3RlYm9va2ljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDo1dmg7XG4gICAgaGVpZ2h0OmF1dG87XG59XG5cbiNmYXZkaWFsb2cge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjVweDtcbn1cblxuI25vdGVkaWFsb2cge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4jbm90ZWRpYWxvZyA+IGZvcm0ge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jZmF2ZGlhbG9nID4gZm9ybSB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbiNkZWF0aWxjYW5jZWxidG4sICNhZGROb3Rlc0NhbmNlbEJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogODAlO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNkZWF0aWxjYW5jZWxidG46aG92ZXIgLCAjYWRkTm90ZXNDYW5jZWxCdG46aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5kZXRhaWxzRGl2IHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLmhpZ2hwcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIHJnYmEoMjMxLCAxMTMsIDEyNSwwLjgpOyAvKiAjQzJDQUQwOyAqLyAvKiAjQzJCOUIwOyAqLyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLzs7O1xufVxuXG4ubWVkaXVtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYmEoMjEsIDIxOCwgMjEsMC44KTtcbn1cblxuLmxvd3ByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDIzNSwgMjM1LCAzNCwwLjgpO1xufVxuXG4jc2lkZWJhciA+IGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4jcHJvamVjdEJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6MTVweDtcbn1cblxuI3Byb2plY3RCdG4gPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIGJvcmRlcjpub25lO1xufVxuXG4jcHJvamVjdEJ0biA+IGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2plY3RCdG5EaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0QnRuRGl2ID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBtYXJnaW46MnZoIDBweDtcbn1cblxuLnByb2plY3RCdG5EaXYgPiBidXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5cbi5ub3RlY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87O1xufVxuXG4uYWxsTm90ZXMge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5hbGxOb3RlcyA+IGRpdiB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBnYXA6MTBweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3NzE3RDsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XG59XG5cbi5hbGxOb3RlcyBkaXYgPiBwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5hbGxOb3RlcyA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uYWxsTm90ZXMgPiBkaXYgPiBidXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5hbGxOb3RlcyA+IGRpdjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzpyZ2JhKDgzLCA3NywgNzcsIDAuMjE1KSAwcHggMTlweCAzOHB4LCByZ2JhKDExOSwgMTA5LCAxMDksIDAuMjIpIDBweCA3cHggNXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgZm9udC13ZWlnaHQ6MTAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNhZGROb3Rlc0RpdiB7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2FkZE5vdGVzRGl2OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uYWRkTmV3Tm90ZXNCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjpub25lO1xufVxuXG4uYWRkTmV3Tm90ZXNCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm5vdGVJbnB1dCB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgICNDMkI5QjA7IC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xuICAgIG91dGxpbmU6d2hpdGU7XG59XG5cbi5ub3RlSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLm5vdGVJbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5ub3RlSW5wdXRzRGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5ub3RlU2F2ZUJ0biB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLDAuNik7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcblxufVxuXG4ubm90ZVNhdmVCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLDAuOCk7XG59XG5cbi5ub3RlRm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6MTBweDtcbn1cblxuI25vdGVkaWFsb2cge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ2FwOjEwcHg7XG59XG5cblxuLyogVG8gRE8gTGlzdCBGT3JtIFN0eWxlcyAqL1xuLnBsdXNJY29uRGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbHVzVG9EbyB7XG4gICAgd2lkdGg6IDh2aDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBoZWlnaHQ6YXV0bztcbn1cblxuLnBsdXNUb0RvOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVTcGluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuXG5cbiN0b0RvRGlhbG9nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6MTVweDtcblxufVxuXG4jZWRpdFRvRG9EaWFsb2cge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzoyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDoxNXB4O1xuXG59XG5cbiN0b0RvRGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMTk0LCAyMDIsIDIwOCwwLjMpO1xufVxuXG4jZWRpdFRvRG9EaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxOTQsIDIwMiwgMjA4LDAuMyk7XG59XG5cbi5jYW5jZWxUb0RvRm9ybURpdiB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbiN0b0RvQ2FuY2VsQnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3RvRG9DYW5jZWxCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi50b0RvRm9ybSB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLnRvRG9Gb3JtID4gZGl2ID4gaW5wdXQge1xuICAgIC8qIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgKi9cbiAgICBtYXJnaW46MTBweCAwcHg7XG4gICAgb3V0bGluZTogbm9uZTsgIFxuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xuICAgIG9wYWNpdHk6IDAuNjtcblxufVxuLnRvRG9Gb3JtID4gZGl2ID4gaW5wdXQ6Zm9jdXMge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxufVxuLnRvRG9Gb3JtID4gZGl2ID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9Eb1NhdmVCdG4sIC5lZGl0dG9Eb1NhdmVCdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwwLjMpO1xufVxuXG4udG9Eb1NhdmVCdG46aG92ZXIsIC5lZGl0dG9Eb1NhdmVCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LDAuNik7XG59XG5cbi5jYWxlbmRhcklucHV0IHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG5cbi5wcmlvcml0eURpdiB7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmRlbGV0ZWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBmaWxsOnJlZCFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0aWNvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0VBTUU7OztBQUdGO0lBQ0ksTUFBTSxZQUFZLENBQUM7SUFDbkIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxZQUFZLENBQUM7SUFDcEIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxhQUFhLENBQUM7SUFDckIsT0FBTyxjQUFjLENBQUM7SUFDdEIsT0FBTyxjQUFjLENBQUM7SUFDdEIsT0FBTyxjQUFjLENBQUM7SUFDdEIsT0FBTyxjQUFjLENBQUM7SUFDdEIsUUFBUSxjQUFjLENBQUM7QUFDM0I7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsYUFBYTtBQUMxRDs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFF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Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxuI0U3NzE3RFxcbiNDMkNBRDBcXG4jQzJCOUIwXFxuIzdFNjg1QVxcbiNBRkQyNzVcXG4gKi9cXG5cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZVNwaW4ge1xcbiAgICAwJSAgIHtyb3RhdGU6IDBkZWc7fVxcbiAgICAxMCUgICB7cm90YXRlOiAyNWRlZzt9XFxuICAgIDIwJSAgIHtyb3RhdGU6IDQ1ZWc7fVxcbiAgICAzMCUgICB7cm90YXRlOiA1NWRlZzt9XFxuICAgIDQwJSAgIHtyb3RhdGU6IDY1ZGVnO31cXG4gICAgNTAlICAge3JvdGF0ZTogOTBkZWc7fVxcbiAgICA2MCUgICB7cm90YXRlOiAxMTBkZWc7fVxcbiAgICA3MCUgICB7cm90YXRlOiAxMzBkZWc7fVxcbiAgICA4MCUgICB7cm90YXRlOiAxNTBkZWc7fVxcbiAgICA5MCUgICB7cm90YXRlOiAxNzBkZWc7fVxcbiAgICAxMDAlICAge3JvdGF0ZTogMTgwZGVnO31cXG59XFxuICBcXG5cXG4qIHtcXG4gICAgcGFkZGluZzowcHg7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIGZvbnQtZmFtaWx5OidXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzJCOUIwOyAvKiAjN0U2ODVBOyAqLyAvKiAjQUZEMjc1OyAqLztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6J1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6J1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYXJkZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgICNFNzcxN0Q7IC8qICNDMkNBRDA7ICovIC8qICNDMkI5QjA7ICovIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MTVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDJmciByZXBlYXQoNCwgYXV0byk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkI5QjA7IC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xcblxcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDo1dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCOUIwOy8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovOztcXG59XFxuXFxuI3NpZGViYXIgPiBidXR0b24ge1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uYWxsbGlzdHMge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6MnZoO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdFNjg1QTsgLyogI0FGRDI3NTsgKi8gO1xcbn1cXG5cXG4uYWxsbGlzdHMgPiBkaXYge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMTAsIDExNywwLjcpOyBcXG59XFxuXFxuLmFsbGxpc3RzID4gZGl2OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzpyZ2JhKDgzLCA3NywgNzcsIDAuMjE1KSAwcHggMTlweCAzOHB4LCByZ2JhKDExOSwgMTA5LCAxMDksIDAuMjIpIDBweCA3cHggNXB4OztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcblxcbi5oYXNjb21wbGV0ZWRidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDIyMywgMjQpO1xcbn1cXG5cXG4uaGFzbm90Y29tcGxldGVkYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQsIDI0KTtcXG59XFxuXFxuLmRldGFpbEJ0biB7XFxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGV0YWlsQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQ0FEMDsgLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbn1cXG5cXG4uZGVsZXRlaWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgd2lkdGg6M3ZoO1xcbiAgICBoZWlnaHQ6YXV0bztcXG59XFxuXFxuLmVkaXRpY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB3aWR0aDozdmg7XFxuICAgIGhlaWdodDphdXRvO1xcbn1cXG5cXG4jZmF2ZGlhbG9nOjpiYWNrZHJvcCwgI25vdGVkaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDIwMiwgMjA4LDAuMyk7IC8qICNDMkNBRDA7ICovIC8qICNDMkI5QjA7ICovIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xcbn1cXG5cXG4ubm90ZWJvb2tpY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB3aWR0aDo1dmg7XFxuICAgIGhlaWdodDphdXRvO1xcbn1cXG5cXG4jZmF2ZGlhbG9nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDo1cHg7XFxufVxcblxcbiNub3RlZGlhbG9nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jbm90ZWRpYWxvZyA+IGZvcm0ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI2ZhdmRpYWxvZyA+IGZvcm0ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI2RlYXRpbGNhbmNlbGJ0biwgI2FkZE5vdGVzQ2FuY2VsQnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogODAlO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jZGVhdGlsY2FuY2VsYnRuOmhvdmVyICwgI2FkZE5vdGVzQ2FuY2VsQnRuOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU3BpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmRldGFpbHNEaXYge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDo3cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuXFxuLmhpZ2hwcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICByZ2JhKDIzMSwgMTEzLCAxMjUsMC44KTsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87OztcXG59XFxuXFxuLm1lZGl1bXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiYSgyMSwgMjE4LCAyMSwwLjgpO1xcbn1cXG5cXG4ubG93cHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2JhKDIzNSwgMjM1LCAzNCwwLjgpO1xcbn1cXG5cXG4jc2lkZWJhciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3Byb2plY3RCdG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6MTVweDtcXG59XFxuXFxuI3Byb2plY3RCdG4gPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG4jcHJvamVjdEJ0biA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdEJ0bkRpdiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdEJ0bkRpdiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIG1hcmdpbjoydmggMHB4O1xcbn1cXG5cXG4ucHJvamVjdEJ0bkRpdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuXFxuLm5vdGVjYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgLyogI0MyQ0FEMDsgKi8gLyogI0MyQjlCMDsgKi8gLyogIzdFNjg1QTsgKi8gLyogI0FGRDI3NTsgKi87O1xcbn1cXG5cXG4uYWxsTm90ZXMge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWxsTm90ZXMgPiBkaXYge1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDoxMHB4O1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzcxN0Q7IC8qICNDMkNBRDA7ICovIC8qICNDMkI5QjA7ICovIC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xcbn1cXG5cXG4uYWxsTm90ZXMgZGl2ID4gcCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmFsbE5vdGVzID4gZGl2ID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5hbGxOb3RlcyA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNwaW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5hbGxOb3RlcyA+IGRpdjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6cmdiYSg4MywgNzcsIDc3LCAwLjIxNSkgMHB4IDE5cHggMzhweCwgcmdiYSgxMTksIDEwOSwgMTA5LCAwLjIyKSAwcHggN3B4IDVweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgZm9udC13ZWlnaHQ6MTAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jYWRkTm90ZXNEaXYge1xcbiAgICBib3gtc2hhZG93Om5vbmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI2FkZE5vdGVzRGl2OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmFkZE5ld05vdGVzQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG4uYWRkTmV3Tm90ZXNCdG46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5vdGVJbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgICNDMkI5QjA7IC8qICM3RTY4NUE7ICovIC8qICNBRkQyNzU7ICovO1xcbiAgICBvdXRsaW5lOndoaXRlO1xcbn1cXG5cXG4ubm90ZUlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm5vdGVJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5ub3RlSW5wdXRzRGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5cXG4ubm90ZVNhdmVCdG4ge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLDAuNik7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcblxcbn1cXG5cXG4ubm90ZVNhdmVCdG46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLDAuOCk7XFxufVxcblxcbi5ub3RlRm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4jbm90ZWRpYWxvZyB7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MTBweDtcXG59XFxuXFxuXFxuLyogVG8gRE8gTGlzdCBGT3JtIFN0eWxlcyAqL1xcbi5wbHVzSWNvbkRpdiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsdXNUb0RvIHtcXG4gICAgd2lkdGg6IDh2aDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIGhlaWdodDphdXRvO1xcbn1cXG5cXG4ucGx1c1RvRG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlU3BpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuXFxuXFxuI3RvRG9EaWFsb2cge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDoxNXB4O1xcblxcbn1cXG5cXG4jZWRpdFRvRG9EaWFsb2cge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDoxNXB4O1xcblxcbn1cXG5cXG4jdG9Eb0RpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxOTQsIDIwMiwgMjA4LDAuMyk7XFxufVxcblxcbiNlZGl0VG9Eb0RpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxOTQsIDIwMiwgMjA4LDAuMyk7XFxufVxcblxcbi5jYW5jZWxUb0RvRm9ybURpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jdG9Eb0NhbmNlbEJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiN0b0RvQ2FuY2VsQnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVNwaW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi50b0RvRm9ybSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0IHtcXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAqL1xcbiAgICBtYXJnaW46MTBweCAwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7ICBcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuXFxufVxcbi50b0RvRm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG5cXG59XFxuLnRvRG9Gb3JtID4gZGl2ID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9Eb1NhdmVCdG4sIC5lZGl0dG9Eb1NhdmVCdG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsMC4zKTtcXG59XFxuXFxuLnRvRG9TYXZlQnRuOmhvdmVyLCAuZWRpdHRvRG9TYXZlQnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwwLjYpO1xcbn1cXG5cXG4uY2FsZW5kYXJJbnB1dCB7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcblxcbi5wcmlvcml0eURpdiB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuLmRlbGV0ZWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGZpbGw6cmVkIWltcG9ydGFudDtcXG59XFxuXFxuLmVkaXRpY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IHNob3dQcm9qZWN0QnRuRnVuYyA9ICgpID0+IHtcbiAgICBsZXQgc2hvd1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd1Byb2plY3RCdG4nKTtcbiAgICBsZXQgYWxsUHJvamVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpO1xuICAgIHNob3dQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhbGxQcm9qZWN0RGl2cy5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0RGl2cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxsUHJvamVjdERpdnMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9KVxufTtcblxuZXhwb3J0IHtzaG93UHJvamVjdEJ0bkZ1bmN9IiwibGV0IGNoZWNrVGhlRG8gPSAoY2hlY2tCb3hJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNoZWNrQm94SWQpO1xuICAgIGxldCBvYmpzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgb2Jqc1tjaGVja0JveElkXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKG9ianNbY2hlY2tCb3hJZF0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG9ianMpKTtcblxufTtcblxubGV0IGFkZENoZWNrQm94RnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgbGV0IGFsbENoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrQm94Jyk7XG4gIGFsbENoZWNrQm94LmZvckVhY2goKGNoZWNrQm94KSA9PiB7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2hlY2tUaGVEbyhjaGVja0JveC5pZCk7XG4gICAgfSlcbiAgfSkgIFxufTtcbmV4cG9ydCB7YWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5fSIsImltcG9ydCB7IHNob3dBbGxOb3RlcyB9IGZyb20gXCIuL3Nob3dOb3Rlc1wiO1xuXG5jbGFzcyBOb3RlQ29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhc2spIHtcbiAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgfVxufVxuXG5sZXQgYWRkTmV3Tm90ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBhbGxOb3Rlc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykpO1xuICAgIGxldCBrZXlzO1xuICAgIGlmIChhbGxOb3Rlc09iaiA9PT0gbnVsbCApIHtcbiAgICAgICAgYWxsTm90ZXNPYmogPSB7fTtcbiAgICAgICAga2V5cyA9IFtdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGFsbE5vdGVzT2JqKTtcbiAgICB9O1xuICAgIGxldCBuZXdJbmRleDtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmV3SW5kZXggPSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmV3SW5kZXggPSBOdW1iZXIoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSArIDE7XG4gICAgfTtcbiAgICBhbGxOb3Rlc09ialtuZXdJbmRleF0gPSBuZXcgTm90ZUNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShhbGxOb3Rlc09iaikpO1xuICAgIHNob3dBbGxOb3RlcygpO1xufTtcblxubGV0IGFkZE5vdGVzRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcblxuICAgIGxldCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlZGlhbG9nJyk7XG4gICAgbGV0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVNhdmVCdG4nKTtcbiAgICBsZXQgbm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVJbnB1dCcpO1xuXG5cbiAgICBub3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKGUpID0+IHtcbiAgICBpZiAobm90ZUZvcm0ucmV0dXJuVmFsdWUgIT09ICdjYW5jZWwnKSB7XG4gICAgICAgIGFkZE5ld05vdGUobm90ZUlucHV0LnZhbHVlKTtcbiAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgbm90ZUZvcm0uY2xvc2Uobm90ZUlucHV0LnZhbHVlKTsgXG4gICAgfSk7XG5cbn07XG5cbmV4cG9ydCB7YWRkTm90ZXNGdW5jdGlvbmFsaXR5LCBhZGROZXdOb3RlfSIsImltcG9ydCB7IGNoZWNrSWZBbnlUb0RvTGlzdHMgfSBmcm9tIFwiLlwiO1xuXG5sZXQgZGVsZXRlVG9EbyA9IChUb0RvSWQpID0+IHtcbiAgICBsZXQgYWxsT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgZGVsZXRlIGFsbE9ialtUb0RvSWRdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFsbE9iaikpO1xuICAgIGNoZWNrSWZBbnlUb0RvTGlzdHMoKTtcbn07XG5cbmxldCBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcbiAgICBsZXQgYWxsVG9Eb0RlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVpY29uJyk7XG4gICAgYWxsVG9Eb0RlbGV0ZUJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkZWxldGVUb0RvKGJ0bi5pZCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxufTtcblxuZXhwb3J0IHthZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eX0iLCJpbXBvcnQgeyBjaGVja0lmQW55VG9Eb0xpc3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuaW1wb3J0IHsgRG9MaXN0Q29uc3RydWN0b3IgfSBmcm9tIFwiLi9zaG93RG9MaXN0XCI7XG5sZXQgdG9DaGFuZ2VJZDtcblxuXG5sZXQgc2F2ZU5ld0VkaXRUb0RvID0gKHByb2plY3QsIHRhc2ssIG5vdGUsIGRhdGUsIGhhc0NvbXBsZXRlZCwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgYWxsVG9Eb09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0LCB0YXNrLCBub3RlLCBkYXRlLCBoYXNDb21wbGV0ZWQsIHByaW9yaXR5fSlcbiAgICBjb25zb2xlLmxvZyh0b0NoYW5nZUlkKTtcbiAgICBhbGxUb0RvT2JqW3RvQ2hhbmdlSWRdID0gbmV3IERvTGlzdENvbnN0cnVjdG9yKHByb2plY3QsIHRhc2ssIG5vdGUsIGRhdGUsIGhhc0NvbXBsZXRlZCwgcHJpb3JpdHkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFsbFRvRG9PYmopKTtcbiAgICBjaGVja0lmQW55VG9Eb0xpc3RzKCk7XG59OyAgICAgIFxuXG5sZXQgZ2V0RWRpdFRvRG9BbnN3ZXJzID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0cHJvamVjdE5hbWUnKTtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdHRhc2tOYW1lJyk7XG4gICAgbGV0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdHRvRG9Ob3RlJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGNhbGVuZGFySW5wdXQnKTtcbiAgICBsZXQgaGFzQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbkhhc0NvbXBsZXRlZCcpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyk7XG4gICAgaWYgKHByb2plY3ROYW1lLnZhbHVlICE9PSBcIlwiIHx8IHRhc2tOYW1lLnZhbHVlICE9PSBcIlwiIHx8IG5vdGUudmFsdWUgIT09IFwiXCIgfHwgZGF0ZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgc2F2ZU5ld0VkaXRUb0RvKHByb2plY3ROYW1lLnZhbHVlLCB0YXNrTmFtZS52YWx1ZSwgbm90ZS52YWx1ZSwgZGF0ZS52YWx1ZSwgaGFzQ29tcGxldGVkLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgfTtcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgIHRhc2tOYW1lLnZhbHVlID0gJyc7XG4gICAgbm90ZS52YWx1ZSA9ICcnO1xuICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICBpZiAocHJpb3JpdHkpIHtcbiAgICAgICAgIHByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIGhhc0NvbXBsZXRlZC52YWx1ZSA9ICcnO1xufTtcblxuXG5cbmxldCBhZGRFZGl0U2F2ZVRvRG9GdW5jID0gKCkgPT4ge1xuICAgIGxldCB0b0RvRGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9Eb0RpYWxvZycpO1xuICAgIHRvRG9EaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGdldEVkaXRUb0RvQW5zd2VycygpO1xuICAgIH0pO1xufTtcblxuXG5sZXQgc2hvd0VkaXRGb3JtID0gKGN1cnJlbnRJZCkgPT4ge1xuICAgIGxldCBhbGxPYmpzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgbGV0IHRvRWRpdE9iaiA9IGFsbE9ianNbY3VycmVudElkXTtcblxuICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9Eb0RpYWxvZycpO1xuICAgIFxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0cHJvamVjdE5hbWUnKTtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdHRhc2tOYW1lJyk7XG4gICAgbGV0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdHRvRG9Ob3RlJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGNhbGVuZGFySW5wdXQnKTtcblxuXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSB0b0VkaXRPYmoucHJvamVjdDtcbiAgICB0YXNrTmFtZS52YWx1ZSA9IHRvRWRpdE9iai50YXNrbmFtZTtcbiAgICBub3RlLnZhbHVlID0gdG9FZGl0T2JqLm5vdGVzO1xuICAgIGxldCBwcmlvcml0eSA9IHRvRWRpdE9iai5wcmlvcml0eTtcbiAgICBsZXQgY2hvb3NlZElkID0gYCNlZGl0bWVkaXVtYDtcbiAgICBsZXQgdG9DaGVja1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQke3ByaW9yaXR5fWApO1xuICAgIHRvQ2hlY2tQcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcbiAgICBkYXRlLnZhbHVlID0gdG9FZGl0T2JqLmR1ZURhdGU7XG4gICAgbGV0IGhpZGRlbkhhc0RvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuSGFzQ29tcGxldGVkJyk7XG4gICAgaGlkZGVuSGFzRG9uZS52YWx1ZSA9IHRvRWRpdE9iai5jb21wbGV0ZWQ7XG4gICAgZWRpdEZvcm0uc2hvd01vZGFsKCk7XG4gICAgYWRkRWRpdFNhdmVUb0RvRnVuYygpO1xufVxuXG5sZXQgYWRkRWRpdFRvRG9GdW5jID0gKCkgPT4ge1xuICAgIGxldCBhbGxFZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0aWNvbicpO1xuICAgIGFsbEVkaXRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNob3dFZGl0Rm9ybShidG4uaWQpO1xuICAgICAgICAgICAgdG9DaGFuZ2VJZCA9IGJ0bi5pZFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7YWRkRWRpdFRvRG9GdW5jLCBzaG93RWRpdEZvcm0sIGFkZEVkaXRTYXZlVG9Eb0Z1bmMsIGdldEVkaXRUb0RvQW5zd2Vycywgc2F2ZU5ld0VkaXRUb0RvfSIsImltcG9ydCB7IHNob3dBbGxUb0RvIH0gZnJvbSBcIi4vc2hvd0RvTGlzdFwiO1xuaW1wb3J0IHsgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9kZWxldGVUb0RvRnVuY1wiO1xuaW1wb3J0IHsgYWRkRWRpdFRvRG9GdW5jIH0gZnJvbSBcIi4vZWRpdFRvRG9cIjtcbmltcG9ydCB7IGFkZENoZWNrQm94RnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2FkZENoZWNrRnVuY1wiO1xuXG5sZXQgYWRkU2VhcmNoRnVuYyA9IChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IGJ0bi5pbm5lclRleHQ7XG4gICAgbGV0IHN0b3JhZ2VJdGVtT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgbGV0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhzdG9yYWdlSXRlbU9iamVjdCk7XG4gICAgbGV0IGZpbHRlcmVkT2JqID0ge307XG4gICAgZm9yIChsZXQga2V5IG9mIGFsbEtleXMpIHtcbiAgICAgIGlmIChzdG9yYWdlSXRlbU9iamVjdFtrZXldLnByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0TmFtZSkge1xuICAgICAgICBmaWx0ZXJlZE9ialtrZXldID0gc3RvcmFnZUl0ZW1PYmplY3Rba2V5XTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBzaG93QWxsVG9EbyhmaWx0ZXJlZE9iaik7XG4gICAgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkoKTtcbiAgICAvLyBhZGRFZGl0VG9Eb0Z1bmMoKTtcbiAgfSk7XG5cbn1cblxuXG5sZXQgZmlsbFByb2plY3RCdG5OYW1lcyA9ICgpID0+IHtcbiAgICBsZXQgYWxsUHJvamVjdE5hbWVzID0gW107XG4gICAgbGV0IHN0b3JhZ2VJdGVtT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgbGV0IGluZGV4ID0gT2JqZWN0LmtleXMoc3RvcmFnZUl0ZW1PYmplY3QpO1xuICAgIGZvciAobGV0IGkgb2YgaW5kZXgpIHtcbiAgICAgIGFsbFByb2plY3ROYW1lcy5wdXNoKHN0b3JhZ2VJdGVtT2JqZWN0W2ldLnByb2plY3QpO1xuICAgIH07XG4gICAgYWxsUHJvamVjdE5hbWVzID0gWy4uLm5ldyBTZXQoYWxsUHJvamVjdE5hbWVzKV07XG4gIFxuICAgIC8vIGFkZGluZyB0aGVzZSBidXR0dG9ucyB0byBpbiBET01cbiAgXG4gICAgbGV0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpO1xuICAgIHByb2plY3RCdG4uaW5uZXJIVE1MID0gYGA7XG4gICAgYWxsUHJvamVjdE5hbWVzLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgbGV0IHByb2plY3RCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ0bkRpdicpXG4gICAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBuZXdCdG4uaW5uZXJUZXh0ID0gYnV0dG9uO1xuICAgICAgYWRkU2VhcmNoRnVuYyhuZXdCdG4pO1xuICAgICAgcHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChuZXdCdG4pO1xuICAgICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuRGl2KTtcbiAgICB9KVxuICB9O1xuXG5leHBvcnQge2ZpbGxQcm9qZWN0QnRuTmFtZXN9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgc2hvd0FsbFRvRG8sIERvTGlzdENvbnN0cnVjdG9yLCBhZGREZXRhaWxGdW5jIH0gZnJvbSAnLi9zaG93RG9MaXN0J1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vc3RvcmFnZUF2YWlsYWJsZSdcbmltcG9ydCB7c2hvd0RldGFpbHN9IGZyb20gJy4vc2hvd0RldGFpbHMuanMnXG5pbXBvcnQgeyBzaG93QWxsTm90ZXMsIGFkZE5vdGVzRnVuYyB9IGZyb20gJy4vc2hvd05vdGVzJ1xuaW1wb3J0IHsgYWRkTm90ZXNGdW5jdGlvbmFsaXR5LCBhZGROZXdOb3RlLCBhZGRSZW1vdmVOb3RlRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vYWRkbm90ZXMnXG5pbXBvcnQge2FkZFBsdXNUb0RvRnVuYywgYWRkU2F2ZVRvRG9GdW5jLCBnZXRUb0RvQW5zd2Vycywgc2F2ZU5ld1RvRG99IGZyb20gJy4vcGx1c1RvRG8nXG5pbXBvcnQge2ZpbGxQcm9qZWN0QnRuTmFtZXN9IGZyb20gJy4vZmlsbFByb2plY3RCdG4uanMnXG5pbXBvcnQgeyBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vZGVsZXRlVG9Eb0Z1bmMnXG5pbXBvcnQgeyBhZGRFZGl0VG9Eb0Z1bmMgfSBmcm9tICcuL2VkaXRUb0RvJ1xuaW1wb3J0IHtzaG93VG9kYXlUb0RvfSBmcm9tICcuL3Nob3dUb2RheSdcbmltcG9ydCB7c2hvd01vbnRoVG9Eb30gZnJvbSAnLi9zaG93TW9udGgnXG5pbXBvcnQge3Nob3dXZWVrVG9Eb30gZnJvbSAnLi9zaG93V2VlaydcbmltcG9ydCB7IHNob3dQcm9qZWN0QnRuRnVuYyB9IGZyb20gJy4vUHJvamVjdEJ0blNob3cnXG5pbXBvcnQgeyBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuL2FkZENoZWNrRnVuYydcblxuXG5cblxubGV0IGNoZWNrSWZBbnlUb0RvTGlzdHMgPSAoKSA9PiB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSAhPT0gbnVsbCApIHtcbiAgICBsZXQgc3RvcmFnZUl0ZW1PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBzaG93QWxsVG9EbyhzdG9yYWdlSXRlbU9iamVjdCk7XG4gICAgZmlsbFByb2plY3RCdG5OYW1lcygpO1xuICAgIHNob3dQcm9qZWN0QnRuRnVuYygpO1xuICAgIGFkZERlbGV0ZVRvRG9GdW5jdGlvbmFsaXR5KCk7XG4gICAgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5KCk7XG5cbiAgICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lQnRuJyk7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY2hlY2tJZkFueVRvRG9MaXN0cygpO1xuICAgIH0pO1xuICAgICAgLy8gYWRkaW5nIHRpbWVBbGdvIGZ1bmN0aW9uc1xuICAgIGxldCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheUJ0bicpO1xuICAgIGxldCBtb250aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb250aEJ0bicpO1xuICAgIGxldCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWtCdG4nKTtcblxuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZGF5VG9Ebyk7XG4gICAgbW9udGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9udGhUb0RvKTtcbiAgICB3ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1dlZWtUb0RvKTtcblxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdubyBsb2NhbCBzdG9yYWdlIHRvIGRpc3BsYXknKTtcbiAgfTtcblxufTtcblxuYWRkUGx1c1RvRG9GdW5jKCk7XG5cbmNoZWNrSWZBbnlUb0RvTGlzdHMoKTtcblxubGV0IHNob3dub3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzQnRuJyk7XG5zaG93bm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxOb3Rlcyk7XG5cbmFkZE5vdGVzRnVuY3Rpb25hbGl0eSgpO1xuXG5hZGRQbHVzVG9Eb0Z1bmMoKTtcblxuXG5cblxuXG5cblxuZXhwb3J0IHtjaGVja0lmQW55VG9Eb0xpc3RzfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBEb0xpc3RDb25zdHJ1Y3Rvciwgc2hvd0FsbFRvRG8gfSBmcm9tIFwiLi9zaG93RG9MaXN0XCI7XG5pbXBvcnQge2NoZWNrSWZBbnlUb0RvTGlzdHN9IGZyb20gJy4vaW5kZXguanMnXG5cbmxldCBzYXZlTmV3VG9EbyA9IChwcm9qZWN0LCB0YXNrLCBub3RlLCBkYXRlLCBoYXNDb21wbGV0ZWQsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IGFsbFRvRG9PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBsZXQgbmV3SW5kZXg7XG5cbiAgICBpZiAoYWxsVG9Eb09iaiA9PT0gbnVsbCkge1xuICAgICAgICBuZXdJbmRleCA9IDE7XG4gICAgICAgIGFsbFRvRG9PYmogPSB7fTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBhbGxLZXlzID0gT2JqZWN0LmtleXMoYWxsVG9Eb09iaik7XG4gICAgICAgIGlmIChhbGxLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbmV3SW5kZXggPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IGFsbEtleXNbYWxsS2V5cy5sZW5ndGggLSAxXTsgXG4gICAgICAgICAgICBuZXdJbmRleCA9IE51bWJlcihsYXN0SW5kZXgpICsgMTtcbiAgICAgICAgfTtcbiAgICB9ICAgICAgXG5cblxuICAgIGNvbnNvbGUubG9nKG5ld0luZGV4KTtcbiAgICAvLyBhZGRpbmcgdGhlIG5ldyBvYmogaW4gdGhlIGFsbFRvRG9cbiAgICBhbGxUb0RvT2JqW25ld0luZGV4XSA9IG5ldyBEb0xpc3RDb25zdHJ1Y3Rvcihwcm9qZWN0LCB0YXNrLCBub3RlLCBkYXRlLCBoYXNDb21wbGV0ZWQsIHByaW9yaXR5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhbGxUb0RvT2JqKSk7XG4gICAgY2hlY2tJZkFueVRvRG9MaXN0cygpO1xufTtcblxubGV0IGdldFRvRG9BbnN3ZXJzID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZScpO1xuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTmFtZScpO1xuICAgIGxldCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9Ob3RlJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXJJbnB1dCcpO1xuICAgIGxldCBoYXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpO1xuICAgIGlmIChwcm9qZWN0TmFtZS52YWx1ZSAhPT0gXCJcIiB8fCB0YXNrTmFtZS52YWx1ZSAhPT0gXCJcIiB8fCBub3RlLnZhbHVlICE9PSBcIlwiIHx8IGRhdGUudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgc2F2ZU5ld1RvRG8ocHJvamVjdE5hbWUudmFsdWUsIHRhc2tOYW1lLnZhbHVlLCBub3RlLnZhbHVlLCBkYXRlLnZhbHVlLCBoYXNDb21wbGV0ZWQsIHByaW9yaXR5LnZhbHVlKTtcbiAgICB9O1xuICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgdGFza05hbWUudmFsdWUgPSAnJztcbiAgICBub3RlLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eS5jaGVja2VkID0gZmFsc2U7XG4gICAgfTtcbn07XG5cblxuXG5sZXQgYWRkU2F2ZVRvRG9GdW5jID0gKCkgPT4ge1xuICAgIGxldCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9TYXZlQnRuJyk7XG4gICAgbGV0IHRvRG9EaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9EaWFsb2cnKTtcbiAgICB0b0RvRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIGdldFRvRG9BbnN3ZXJzKTtcbn07XG5cblxubGV0IGFkZFBsdXNUb0RvRnVuYyA9ICgpID0+IHtcbiAgICBcblxuICAgIGxldCB0b0RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9EaWFsb2cnKTtcbiAgICBsZXQgc2hvd1RvRG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICB0b0RvRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH07XG5cbiAgICAvLyBBZGQgKyB0b0RPIGZ1bmN0aW9uYWxpdHlcbiAgICBsZXQgUGx1c1NpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c1RvRG8nKTtcbiAgICBQbHVzU2lnbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb0RvRm9ybSk7XG4gICAgYWRkU2F2ZVRvRG9GdW5jKCk7XG59O1xuXG5leHBvcnQge2FkZFBsdXNUb0RvRnVuYywgYWRkU2F2ZVRvRG9GdW5jLCBnZXRUb0RvQW5zd2Vycywgc2F2ZU5ld1RvRG99IiwibGV0IHNob3dEZXRhaWxzID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgZmF2RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZhdmRpYWxvZycpO1xuICAgIGxldCBkaXZGb3JEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNEaXYnKTtcbiAgICBsZXQgQWxsQ2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBsZXQgY3VycmVudENhcmQgPSBBbGxDYXJkc1tpbmRleF07XG4gICAgbGV0IGNvbXBsZXRlU3RhdHVzO1xuICAgIGlmIChjdXJyZW50Q2FyZC5jb21wbGV0ZWQpIHtcbiAgICAgIGNvbXBsZXRlU3RhdHVzID0gYENvbXBsZXRlZGA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGxldGVTdGF0dXMgPSBgTGVmdCBUbyBCZSBEb25lYDtcbiAgICB9XG4gICAgZGl2Rm9yRGV0YWlscy5pbm5lckhUTUwgPSBgXG4gICAgPGgyPiR7Y3VycmVudENhcmQudGFza25hbWV9PC9oMj5cbiAgICA8YnI+XG4gICAgPGg1PlByb2plY3Q6ICR7Y3VycmVudENhcmQucHJvamVjdH08L2g1PlxuICAgIDxoNT5EdWUgRGF0ZTogJHtjdXJyZW50Q2FyZC5kdWVEYXRlfTwvaDU+XG4gICAgPGg1PlN0YXR1czogJHtjb21wbGV0ZVN0YXR1c308L2g1PlxuICAgIDxoNT5Ob3RlczogJHtjdXJyZW50Q2FyZC5ub3Rlc308L2g1PlxuICAgIDxoNT5Qcm9yaXR5OiAke2N1cnJlbnRDYXJkLnByaW9yaXR5fTwvaDU+XG4gICAgYDtcbiAgICBmYXZEaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cblxuICBleHBvcnQge3Nob3dEZXRhaWxzfSIsImltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vZGVsZXRlLWVtcHR5LW91dGxpbmUuc3ZnJ1xuaW1wb3J0IGVkaXRpY29uIGZyb20gJy4vc3F1YXJlLWVkaXQtb3V0bGluZS5zdmcnXG5pbXBvcnQgeyBzaG93RGV0YWlscyB9IGZyb20gJy4vc2hvd0RldGFpbHMnO1xuaW1wb3J0IHsgYWRkRWRpdFRvRG9GdW5jIH0gZnJvbSAnLi9lZGl0VG9Ebyc7XG5cbmNsYXNzIERvTGlzdENvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB0YXNrbmFtZSxub3RlcywgZHVlRGF0ZSwgY29tcGxldGVkLCBwcmlvcml0eSkge1xuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHRoaXMudGFza25hbWUgPSB0YXNrbmFtZTtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgXG4gICAgfVxufVxuXG5sZXQgYWRkRGV0YWlsRnVuYyA9ICgpID0+IHtcbiAgbGV0IGRldGFpbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV0YWlsQnRuJyk7XG4gIGRldGFpbEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dEZXRhaWxzKTtcbn0pXG59O1xuXG5sZXQgc2hvd0FsbFRvRG8gPSAoc3RvcmFnZUl0ZW1PYmplY3QpID0+IHtcbiAgICBsZXQgYWxsTElzdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsbGlzdHMnKTtcbiAgICBsZXQgbm90ZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbE5vdGVzJyk7XG4gICAgbm90ZXNMaXN0LmlubmVySFRNTCA9IGBgO1xuICAgIGFsbExJc3REaXZzLmlubmVySFRNTCA9IGBgO1xuICAgIGxldCBpbmRleCA9IE9iamVjdC5rZXlzKHN0b3JhZ2VJdGVtT2JqZWN0KTtcbiAgICBpZiAoc3RvcmFnZUl0ZW1PYmplY3QgIT09IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgb2YgaW5kZXgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gc3RvcmFnZUl0ZW1PYmplY3RbaV07XG4gICAgICAgIGxldCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZGRpdicpO1xuICAgICAgICAvLyBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAvLyBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBjdXJyZW50SXRlbS5wcm9qZWN0O1xuICAgICAgICBsZXQgdGFza05hbWU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHRhc2tOYW1lLmlubmVyVGV4dCA9Y3VycmVudEl0ZW0udGFza25hbWU7XG4gICAgICAgIC8vIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIC8vIG5vdGVzLmlubmVyVGV4dCA9IGN1cnJlbnRJdGVtLm5vdGVzO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gY3VycmVudEl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgbGV0IGRldGFpbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZXRhaWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsQnRuJyk7XG4gICAgICAgIGRldGFpbEJ1dHRvbi5pZCA9IGk7XG4gICAgICAgIGRldGFpbEJ1dHRvbi5pbm5lclRleHQgPSBgRGV0YWlsc2A7XG4gICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja0JveCcpO1xuICAgICAgICBjaGVja0JveC5pZCA9IGk7XG4gICAgICAgIGxldCBoYXNDb21wbGV0ZWQgPSBjdXJyZW50SXRlbS5jb21wbGV0ZWQ7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSBoYXNDb21wbGV0ZWQ7XG4gICAgXG4gICAgICAgIGxldCBkZWxldGVpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGRlbGV0ZWljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICAgICAgZGVsZXRlaWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVpY29uJyk7XG4gICAgICAgIGRlbGV0ZWljb24uaWQgPSBpO1xuICAgIFxuICAgICAgICBsZXQgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZWRpdEljb24uc3JjID0gZWRpdGljb247XG4gICAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRpY29uJyk7XG4gICAgICAgIGVkaXRJY29uLmlkID0gaTtcbiAgICBcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGRldGFpbEJ1dHRvbik7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGVsZXRlaWNvbik7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kKGVkaXRJY29uKTtcbiAgXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdoaWdocHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50SXRlbS5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ21lZGl1bXByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VycmVudEl0ZW0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdsb3dwcmlvcml0eScpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBhbGxMSXN0RGl2cy5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBcbiAgICAgIH07XG4gICAgICAvLyBhZGQgZGV0YWlscyBmdW5jdGlvbmFsaXR5XG4gICAgICBhZGREZXRhaWxGdW5jKCk7XG4gICAgICBhZGRFZGl0VG9Eb0Z1bmMoKTtcbiAgICB9O1xuXG59O1xuXG5leHBvcnQge3Nob3dBbGxUb0RvLCBEb0xpc3RDb25zdHJ1Y3RvciwgYWRkRGV0YWlsRnVuY30iLCJpbXBvcnQgeyBzaG93QWxsVG9EbyB9IGZyb20gXCIuL3Nob3dEb0xpc3RcIlxuaW1wb3J0IHsgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9kZWxldGVUb0RvRnVuY1wiO1xuaW1wb3J0IHsgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vYWRkQ2hlY2tGdW5jXCI7XG5cbmxldCBzaG93TW9udGhUb0RvID0gKCkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRoaXNNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IHRoaXNZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgc29ydGVkT2JqID0ge307XG4gICAgbGV0IGFsbE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoYWxsT2JqKTtcbiAgICBmb3IgKGxldCBpbmRleCBvZiBrZXlzKSB7XG4gICAgICAgIGxldCBjdXJyZW50T2JqID0gYWxsT2JqW2luZGV4XTtcbiAgICAgICAgbGV0IGluZGV4RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRPYmouZHVlRGF0ZSk7XG4gICAgICAgIGxldCBpbmRleERheSA9IGluZGV4RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgbGV0IGluZGV4TW9udGggPSBpbmRleERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGluZGV4WWVhciA9ICBpbmRleERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGluZGV4TW9udGggPT09IHRoaXNNb250aCAmJiBpbmRleFllYXIgPT09IHRoaXNZZWFyKSB7XG4gICAgICAgICAgICBzb3J0ZWRPYmpbaW5kZXhdID0gY3VycmVudE9iajtcbiAgICAgICAgfTtcbiAgICAgICAgc2hvd0FsbFRvRG8oc29ydGVkT2JqKTtcbiAgICAgICAgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkoKTtcbiAgICAgICAgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5KCk7XG4gICAgfVxuXG59O1xuXG5leHBvcnQge3Nob3dNb250aFRvRG99IiwiXG5sZXQgYWRkTm90ZXNGdW5jID0gKCkgPT4ge1xuICAgIGxldCBhZGROb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZE5ld05vdGVzQnRuJyk7XG4gICAgbGV0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVkaWFsb2cnKTtcbiAgICBsZXQgbm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVJbnB1dCcpO1xuICAgIGFkZE5vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbm90ZUlucHV0LnZhbHVlID0gYGA7XG4gICAgICAgIG5vdGVGb3JtLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG59XG5cbmxldCBhZGRSZW1vdmVOb3RlRnVuY3Rpb25hbGl0eSA9ICgpID0+IHtcblxuICAgIGxldCByZW1vdmVOb3RlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHRvRGVsZXRlSW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICAgICAgbGV0IGFsbE5PdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XG4gICAgICAgIGRlbGV0ZSBhbGxOT3Rlc1t0b0RlbGV0ZUluZGV4XTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkoYWxsTk90ZXMpKTtcbiAgICAgICAgc2hvd0FsbE5vdGVzKCk7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICBsZXQgQWxsRGVsZXRlTm90ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVOb3RlJyk7XG4gICAgQWxsRGVsZXRlTm90ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVOb3RlKVxuICAgIH0pXG59O1xuXG5cbmxldCBzaG93QWxsTm90ZXMgPSAoKSA9PiB7XG4gICAgbGV0IGFsbE5PdGVzT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XG4gICAgbGV0IGFsbExpc3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbGxpc3RzJyk7XG4gICAgLy8gYWxsTGlzdHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBjb21wbGV0ZSB0aGlzXG4gICAgbGV0IGFsbE5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbE5vdGVzJyk7XG4gICAgYWxsTGlzdHNEaXYuaW5uZXJIVE1MID0gYGA7XG4gICAgYWxsTm90ZXNDb250YWluZXIuaW5uZXJIVE1MID0gYGA7XG4gIFxuICAgIGxldCBhZGROb3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5vdGVzRGl2LmlkID0gJ2FkZE5vdGVzRGl2JztcbiAgICBsZXQgYWRkTmV3Tm90ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROZXdOb3Rlc0J0bi5jbGFzc0xpc3QuYWRkKCdhZGROZXdOb3Rlc0J0bicpO1xuICAgIGFkZE5ld05vdGVzQnRuLmlubmVyVGV4dCA9IGBBZGQgTm90ZXNgO1xuICAgIGFkZE5vdGVzRGl2LmFwcGVuZENoaWxkKGFkZE5ld05vdGVzQnRuKTtcbiAgICBhbGxOb3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROb3Rlc0Rpdik7XG4gICAgaWYgKGFsbE5PdGVzT2JqID09PSBudWxsICkge1xuICAgICAgICBhZGROb3Rlc0Z1bmMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoYWxsTk90ZXNPYmopO1xuICAgICAgICBmb3IgKGxldCBpbmRleCBvZiBrZXlzKSB7XG4gICAgICAgIGxldCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZWNhcmQnKTtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlTm90ZScpO1xuICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gYFhgO1xuICAgICAgICBkZWxldGVCdG4uaWQgPSBpbmRleDtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEuaW5uZXJUZXh0ID0gYCR7YWxsTk90ZXNPYmpbaW5kZXhdLnRhc2t9YDtcbiAgICAgICAgbm90ZURpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBub3RlRGl2LmFwcGVuZChwYXJhKTtcbiAgICAgICAgYWxsTm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZURpdik7XG4gICAgICAgIH07XG4gICAgICAgIGFkZE5vdGVzRnVuYygpO1xuICAgICAgICBhZGRSZW1vdmVOb3RlRnVuY3Rpb25hbGl0eSgpO1xuICAgIH07XG4gICAgXG5cbn07XG5cblxuZXhwb3J0IHtzaG93QWxsTm90ZXMsIGFkZE5vdGVzRnVuYywgYWRkUmVtb3ZlTm90ZUZ1bmN0aW9uYWxpdHl9XG4iLCJpbXBvcnQgeyBzaG93QWxsVG9EbyB9IGZyb20gXCIuL3Nob3dEb0xpc3RcIlxuaW1wb3J0IHsgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9kZWxldGVUb0RvRnVuY1wiO1xuaW1wb3J0IHsgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vYWRkQ2hlY2tGdW5jXCI7XG5cbmxldCBzaG93VG9kYXlUb0RvID0gKCkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRoaXNEYXkgPSB0b2RheS5nZXREYXRlKCk7XG5cbiAgICBsZXQgdGhpc01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgdGhpc1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBzb3J0ZWRPYmogPSB7fTtcbiAgICBsZXQgYWxsT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhhbGxPYmopO1xuICAgIGZvciAobGV0IGluZGV4IG9mIGtleXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRPYmogPSBhbGxPYmpbaW5kZXhdO1xuICAgICAgICBsZXQgaW5kZXhEYXRlID0gbmV3IERhdGUoY3VycmVudE9iai5kdWVEYXRlKTtcbiAgICAgICAgbGV0IGluZGV4RGF5ID0gaW5kZXhEYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGluZGV4TW9udGggPSBpbmRleERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGluZGV4WWVhciA9ICBpbmRleERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGluZGV4RGF5ID09PSB0aGlzRGF5ICYmIGluZGV4TW9udGggPT09IHRoaXNNb250aCAmJiBpbmRleFllYXIgPT09IHRoaXNZZWFyKSB7XG4gICAgICAgICAgICBzb3J0ZWRPYmpbaW5kZXhdID0gY3VycmVudE9iajtcblxuICAgICAgICB9O1xuICAgICAgICBzaG93QWxsVG9Ebyhzb3J0ZWRPYmopO1xuICAgICAgICBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkoKTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7c2hvd1RvZGF5VG9Eb30iLCJpbXBvcnQgeyBzaG93QWxsVG9EbyB9IGZyb20gXCIuL3Nob3dEb0xpc3RcIlxuaW1wb3J0IHsgYWRkRGVsZXRlVG9Eb0Z1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9kZWxldGVUb0RvRnVuY1wiO1xuaW1wb3J0IHsgYWRkQ2hlY2tCb3hGdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vYWRkQ2hlY2tGdW5jXCI7XG5cbmxldCBzaG93V2Vla1RvRG8gPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGhpc0RheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgdGhpc01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgdGhpc1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBzb3J0ZWRPYmogPSB7fTtcbiAgICBsZXQgYWxsT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhhbGxPYmopO1xuICAgIGZvciAobGV0IGluZGV4IG9mIGtleXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRPYmogPSBhbGxPYmpbaW5kZXhdO1xuICAgICAgICBsZXQgaW5kZXhEYXRlID0gbmV3IERhdGUoY3VycmVudE9iai5kdWVEYXRlKTtcbiAgICAgICAgbGV0IGluZGV4RGF5ID0gaW5kZXhEYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGluZGV4TW9udGggPSBpbmRleERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGluZGV4WWVhciA9ICBpbmRleERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IGRpZmY7XG4gICAgICAgIGlmIChpbmRleE1vbnRoID09PSB0aGlzTW9udGggJiYgaW5kZXhZZWFyID09PSB0aGlzWWVhcikge1xuICAgICAgICAgICAgbGV0IG51bUluZGV4RGF5ID0gTnVtYmVyKGluZGV4RGF5KTtcbiAgICAgICAgICAgIGxldCBudW1UaGlzRGF5ID0gTnVtYmVyKHRoaXNEYXkpO1xuICAgICAgICAgICAgaWYgKG51bUluZGV4RGF5ID4gbnVtVGhpc0RheSkge1xuICAgICAgICAgICAgICAgIGRpZmYgPSBudW1JbmRleERheSAtIG51bVRoaXNEYXk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpZmYgPSBudW1UaGlzRGF5IC0gbnVtSW5kZXhEYXk7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChkaWZmIDwgNykge1xuXG4gICAgICAgICAgICAgICAgc29ydGVkT2JqW2luZGV4XSA9IGN1cnJlbnRPYmo7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzaG93QWxsVG9Ebyhzb3J0ZWRPYmopO1xuICAgICAgICBhZGREZWxldGVUb0RvRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBhZGRDaGVja0JveEZ1bmN0aW9uYWxpdHkoKTtcbiAgICB9XG5cbn07XG5leHBvcnQge3Nob3dXZWVrVG9Eb30iLCIgZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==