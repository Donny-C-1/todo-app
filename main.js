/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storage.mjs":
/*!*************************!*\
  !*** ./src/storage.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dbName = "Todolist";
let db = [];

const Storage = {
    create: function(description) {
        try {
            const task = {
                description,
                creationDate: new Date()
            }
            db.push(task);
            this.update();
            return task;
        } catch (error) {
            console.log(`Problem creating the task \n ${error}`);
            return false;
        }
        
    },
    update: () => {
        try {
            sessionStorage.setItem(dbName, JSON.stringify(db));
            return true;
        } catch (e) {
            console.log('Unable to update the storage');
            return false;
        }
    },
    connect: () => {
        db = JSON.parse(sessionStorage.getItem(dbName)) || [];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/script.mjs ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.mjs */ "./src/storage.mjs");


window.addEventListener('DOMContentLoaded', setup);

function setup() {
    _storage_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].connect();
    navigation();
    taskPage();
}

function navigation() {
    let prevActiveLink = document.querySelector('aside nav a');
    let currentPage = document.getElementById('tasks');

    document.
        querySelectorAll("aside nav a").
        forEach(link => link.addEventListener('click', function (e) {
            e.preventDefault();

            prevActiveLink.classList.remove('active');
            this.classList.add('active');
            prevActiveLink = this;
            document.querySelector("aside nav").style.setProperty("--top", `${this.offsetTop}px`);

            currentPage.classList.remove('active');
            currentPage = document.getElementById(this.getAttribute('href'));
            currentPage.classList.add('active');

            document.querySelector('main header h1').textContent = this.getAttribute('href');
        }));
}

function loadTasks() {
    dispTask();
    return true;
}

function taskPage() {
    const form = document.querySelector('#tasks form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const taskData = _storage_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(formProps.description);
        dispTask(taskData);

        Array.from(e.target).forEach(input => input.value = null);
    })

    // loadTasks();
}

function dispTask(obj) {
    const taskList = document.getElementsByClassName('task-list')[0];
    const element = document.
        querySelector('template[data-name="task-item"]').
        content.
        cloneNode(true);

    element.querySelector('.description').textContent = obj.description;
    element.querySelector('.date').textContent = obj.creationDate.toLocaleString('en-US', {month: 'short', day: 'numeric'});
    element.querySelector('.project-category').textContent = obj.projectName || 'General';

    taskList.append(element);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7VUNoQ3RCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsK0JBQStCO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdG9yYWdlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NjcmlwdC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGJOYW1lID0gXCJUb2RvbGlzdFwiO1xyXG5sZXQgZGIgPSBbXTtcclxuXHJcbmNvbnN0IFN0b3JhZ2UgPSB7XHJcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRpb25EYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGIucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2JsZW0gY3JlYXRpbmcgdGhlIHRhc2sgXFxuICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShkYk5hbWUsIEpTT04uc3RyaW5naWZ5KGRiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byB1cGRhdGUgdGhlIHN0b3JhZ2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25uZWN0OiAoKSA9PiB7XHJcbiAgICAgICAgZGIgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oZGJOYW1lKSkgfHwgW107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UubWpzXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNldHVwKTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgU3RvcmFnZS5jb25uZWN0KCk7XHJcbiAgICBuYXZpZ2F0aW9uKCk7XHJcbiAgICB0YXNrUGFnZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKCkge1xyXG4gICAgbGV0IHByZXZBY3RpdmVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUgbmF2IGEnKTtcclxuICAgIGxldCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xyXG5cclxuICAgIGRvY3VtZW50LlxyXG4gICAgICAgIHF1ZXJ5U2VsZWN0b3JBbGwoXCJhc2lkZSBuYXYgYVwiKS5cclxuICAgICAgICBmb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHByZXZBY3RpdmVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBwcmV2QWN0aXZlTGluayA9IHRoaXM7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZSBuYXZcIikuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRvcFwiLCBgJHt0aGlzLm9mZnNldFRvcH1weGApO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiBoZWFkZXIgaDEnKS50ZXh0Q29udGVudCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XHJcbiAgICBkaXNwVGFzaygpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tQYWdlKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcyBmb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCB0YXNrRGF0YSA9IFN0b3JhZ2UuY3JlYXRlKGZvcm1Qcm9wcy5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgZGlzcFRhc2sodGFza0RhdGEpO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKGUudGFyZ2V0KS5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gbnVsbCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGxvYWRUYXNrcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwVGFzayhvYmopIHtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1saXN0JylbMF07XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuXHJcbiAgICAgICAgcXVlcnlTZWxlY3RvcigndGVtcGxhdGVbZGF0YS1uYW1lPVwidGFzay1pdGVtXCJdJykuXHJcbiAgICAgICAgY29udGVudC5cclxuICAgICAgICBjbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcclxuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKS50ZXh0Q29udGVudCA9IG9iai5jcmVhdGlvbkRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge21vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJ30pO1xyXG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXRlZ29yeScpLnRleHRDb250ZW50ID0gb2JqLnByb2plY3ROYW1lIHx8ICdHZW5lcmFsJztcclxuXHJcbiAgICB0YXNrTGlzdC5hcHBlbmQoZWxlbWVudCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=