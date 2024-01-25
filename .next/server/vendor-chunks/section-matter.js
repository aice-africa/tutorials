"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/section-matter";
exports.ids = ["vendor-chunks/section-matter"];
exports.modules = {

/***/ "(rsc)/../node_modules/section-matter/index.js":
/*!***********************************************!*\
  !*** ../node_modules/section-matter/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar typeOf = __webpack_require__(/*! kind-of */ \"(rsc)/../node_modules/kind-of/index.js\");\nvar extend = __webpack_require__(/*! extend-shallow */ \"(rsc)/../node_modules/extend-shallow/index.js\");\n/**\n * Parse sections in `input` with the given `options`.\n *\n * ```js\n * var sections = require('{%= name %}');\n * var result = sections(input, options);\n * // { content: 'Content before sections', sections: [] }\n * ```\n * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.\n * @param {Object} options\n * @return {Object} Returns an object with a `content` string and an array of `sections` objects.\n * @api public\n */ module.exports = function(input, options) {\n    if (typeof options === \"function\") {\n        options = {\n            parse: options\n        };\n    }\n    var file = toObject(input);\n    var defaults = {\n        section_delimiter: \"---\",\n        parse: identity\n    };\n    var opts = extend({}, defaults, options);\n    var delim = opts.section_delimiter;\n    var lines = file.content.split(/\\r?\\n/);\n    var sections = null;\n    var section = createSection();\n    var content = [];\n    var stack = [];\n    function initSections(val) {\n        file.content = val;\n        sections = [];\n        content = [];\n    }\n    function closeSection(val) {\n        if (stack.length) {\n            section.key = getKey(stack[0], delim);\n            section.content = val;\n            opts.parse(section, sections);\n            sections.push(section);\n            section = createSection();\n            content = [];\n            stack = [];\n        }\n    }\n    for(var i = 0; i < lines.length; i++){\n        var line = lines[i];\n        var len = stack.length;\n        var ln = line.trim();\n        if (isDelimiter(ln, delim)) {\n            if (ln.length === 3 && i !== 0) {\n                if (len === 0 || len === 2) {\n                    content.push(line);\n                    continue;\n                }\n                stack.push(ln);\n                section.data = content.join(\"\\n\");\n                content = [];\n                continue;\n            }\n            if (sections === null) {\n                initSections(content.join(\"\\n\"));\n            }\n            if (len === 2) {\n                closeSection(content.join(\"\\n\"));\n            }\n            stack.push(ln);\n            continue;\n        }\n        content.push(line);\n    }\n    if (sections === null) {\n        initSections(content.join(\"\\n\"));\n    } else {\n        closeSection(content.join(\"\\n\"));\n    }\n    file.sections = sections;\n    return file;\n};\nfunction isDelimiter(line, delim) {\n    if (line.slice(0, delim.length) !== delim) {\n        return false;\n    }\n    if (line.charAt(delim.length + 1) === delim.slice(-1)) {\n        return false;\n    }\n    return true;\n}\nfunction toObject(input) {\n    if (typeOf(input) !== \"object\") {\n        input = {\n            content: input\n        };\n    }\n    if (typeof input.content !== \"string\" && !isBuffer(input.content)) {\n        throw new TypeError(\"expected a buffer or string\");\n    }\n    input.content = input.content.toString();\n    input.sections = [];\n    return input;\n}\nfunction getKey(val, delim) {\n    return val ? val.slice(delim.length).trim() : \"\";\n}\nfunction createSection() {\n    return {\n        key: \"\",\n        data: \"\",\n        content: \"\"\n    };\n}\nfunction identity(val) {\n    return val;\n}\nfunction isBuffer(val) {\n    if (val && val.constructor && typeof val.constructor.isBuffer === \"function\") {\n        return val.constructor.isBuffer(val);\n    }\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL3NlY3Rpb24tbWF0dGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsU0FBU0MsbUJBQU9BLENBQUM7QUFDckIsSUFBSUMsU0FBU0QsbUJBQU9BLENBQUM7QUFFckI7Ozs7Ozs7Ozs7OztDQVlDLEdBRURFLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxLQUFLLEVBQUVDLE9BQU87SUFDdEMsSUFBSSxPQUFPQSxZQUFZLFlBQVk7UUFDakNBLFVBQVU7WUFBRUMsT0FBT0Q7UUFBUTtJQUM3QjtJQUVBLElBQUlFLE9BQU9DLFNBQVNKO0lBQ3BCLElBQUlLLFdBQVc7UUFBQ0MsbUJBQW1CO1FBQU9KLE9BQU9LO0lBQVE7SUFDekQsSUFBSUMsT0FBT1gsT0FBTyxDQUFDLEdBQUdRLFVBQVVKO0lBQ2hDLElBQUlRLFFBQVFELEtBQUtGLGlCQUFpQjtJQUNsQyxJQUFJSSxRQUFRUCxLQUFLUSxPQUFPLENBQUNDLEtBQUssQ0FBQztJQUMvQixJQUFJQyxXQUFXO0lBQ2YsSUFBSUMsVUFBVUM7SUFDZCxJQUFJSixVQUFVLEVBQUU7SUFDaEIsSUFBSUssUUFBUSxFQUFFO0lBRWQsU0FBU0MsYUFBYUMsR0FBRztRQUN2QmYsS0FBS1EsT0FBTyxHQUFHTztRQUNmTCxXQUFXLEVBQUU7UUFDYkYsVUFBVSxFQUFFO0lBQ2Q7SUFFQSxTQUFTUSxhQUFhRCxHQUFHO1FBQ3ZCLElBQUlGLE1BQU1JLE1BQU0sRUFBRTtZQUNoQk4sUUFBUU8sR0FBRyxHQUFHQyxPQUFPTixLQUFLLENBQUMsRUFBRSxFQUFFUDtZQUMvQkssUUFBUUgsT0FBTyxHQUFHTztZQUNsQlYsS0FBS04sS0FBSyxDQUFDWSxTQUFTRDtZQUNwQkEsU0FBU1UsSUFBSSxDQUFDVDtZQUNkQSxVQUFVQztZQUNWSixVQUFVLEVBQUU7WUFDWkssUUFBUSxFQUFFO1FBQ1o7SUFDRjtJQUVBLElBQUssSUFBSVEsSUFBSSxHQUFHQSxJQUFJZCxNQUFNVSxNQUFNLEVBQUVJLElBQUs7UUFDckMsSUFBSUMsT0FBT2YsS0FBSyxDQUFDYyxFQUFFO1FBQ25CLElBQUlFLE1BQU1WLE1BQU1JLE1BQU07UUFDdEIsSUFBSU8sS0FBS0YsS0FBS0csSUFBSTtRQUVsQixJQUFJQyxZQUFZRixJQUFJbEIsUUFBUTtZQUMxQixJQUFJa0IsR0FBR1AsTUFBTSxLQUFLLEtBQUtJLE1BQU0sR0FBRztnQkFDOUIsSUFBSUUsUUFBUSxLQUFLQSxRQUFRLEdBQUc7b0JBQzFCZixRQUFRWSxJQUFJLENBQUNFO29CQUNiO2dCQUNGO2dCQUNBVCxNQUFNTyxJQUFJLENBQUNJO2dCQUNYYixRQUFRZ0IsSUFBSSxHQUFHbkIsUUFBUW9CLElBQUksQ0FBQztnQkFDNUJwQixVQUFVLEVBQUU7Z0JBQ1o7WUFDRjtZQUVBLElBQUlFLGFBQWEsTUFBTTtnQkFDckJJLGFBQWFOLFFBQVFvQixJQUFJLENBQUM7WUFDNUI7WUFFQSxJQUFJTCxRQUFRLEdBQUc7Z0JBQ2JQLGFBQWFSLFFBQVFvQixJQUFJLENBQUM7WUFDNUI7WUFFQWYsTUFBTU8sSUFBSSxDQUFDSTtZQUNYO1FBQ0Y7UUFFQWhCLFFBQVFZLElBQUksQ0FBQ0U7SUFDZjtJQUVBLElBQUlaLGFBQWEsTUFBTTtRQUNyQkksYUFBYU4sUUFBUW9CLElBQUksQ0FBQztJQUM1QixPQUFPO1FBQ0xaLGFBQWFSLFFBQVFvQixJQUFJLENBQUM7SUFDNUI7SUFFQTVCLEtBQUtVLFFBQVEsR0FBR0E7SUFDaEIsT0FBT1Y7QUFDVDtBQUVBLFNBQVMwQixZQUFZSixJQUFJLEVBQUVoQixLQUFLO0lBQzlCLElBQUlnQixLQUFLTyxLQUFLLENBQUMsR0FBR3ZCLE1BQU1XLE1BQU0sTUFBTVgsT0FBTztRQUN6QyxPQUFPO0lBQ1Q7SUFDQSxJQUFJZ0IsS0FBS1EsTUFBTSxDQUFDeEIsTUFBTVcsTUFBTSxHQUFHLE9BQU9YLE1BQU11QixLQUFLLENBQUMsQ0FBQyxJQUFJO1FBQ3JELE9BQU87SUFDVDtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVM1QixTQUFTSixLQUFLO0lBQ3JCLElBQUlMLE9BQU9LLFdBQVcsVUFBVTtRQUM5QkEsUUFBUTtZQUFFVyxTQUFTWDtRQUFNO0lBQzNCO0lBRUEsSUFBSSxPQUFPQSxNQUFNVyxPQUFPLEtBQUssWUFBWSxDQUFDdUIsU0FBU2xDLE1BQU1XLE9BQU8sR0FBRztRQUNqRSxNQUFNLElBQUl3QixVQUFVO0lBQ3RCO0lBRUFuQyxNQUFNVyxPQUFPLEdBQUdYLE1BQU1XLE9BQU8sQ0FBQ3lCLFFBQVE7SUFDdENwQyxNQUFNYSxRQUFRLEdBQUcsRUFBRTtJQUNuQixPQUFPYjtBQUNUO0FBRUEsU0FBU3NCLE9BQU9KLEdBQUcsRUFBRVQsS0FBSztJQUN4QixPQUFPUyxNQUFNQSxJQUFJYyxLQUFLLENBQUN2QixNQUFNVyxNQUFNLEVBQUVRLElBQUksS0FBSztBQUNoRDtBQUVBLFNBQVNiO0lBQ1AsT0FBTztRQUFFTSxLQUFLO1FBQUlTLE1BQU07UUFBSW5CLFNBQVM7SUFBRztBQUMxQztBQUVBLFNBQVNKLFNBQVNXLEdBQUc7SUFDbkIsT0FBT0E7QUFDVDtBQUVBLFNBQVNnQixTQUFTaEIsR0FBRztJQUNuQixJQUFJQSxPQUFPQSxJQUFJbUIsV0FBVyxJQUFJLE9BQU9uQixJQUFJbUIsV0FBVyxDQUFDSCxRQUFRLEtBQUssWUFBWTtRQUM1RSxPQUFPaEIsSUFBSW1CLFdBQVcsQ0FBQ0gsUUFBUSxDQUFDaEI7SUFDbEM7SUFDQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tc2l0ZS8uLi9ub2RlX21vZHVsZXMvc2VjdGlvbi1tYXR0ZXIvaW5kZXguanM/Mjc1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kLXNoYWxsb3cnKTtcblxuLyoqXG4gKiBQYXJzZSBzZWN0aW9ucyBpbiBgaW5wdXRgIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYC5cbiAqXG4gKiBgYGBqc1xuICogdmFyIHNlY3Rpb25zID0gcmVxdWlyZSgneyU9IG5hbWUgJX0nKTtcbiAqIHZhciByZXN1bHQgPSBzZWN0aW9ucyhpbnB1dCwgb3B0aW9ucyk7XG4gKiAvLyB7IGNvbnRlbnQ6ICdDb250ZW50IGJlZm9yZSBzZWN0aW9ucycsIHNlY3Rpb25zOiBbXSB9XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEJ1ZmZlcnxPYmplY3R9IGBpbnB1dGAgSWYgaW5wdXQgaXMgYW4gb2JqZWN0LCBpdCdzIGBjb250ZW50YCBwcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIG9yIGJ1ZmZlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggYSBgY29udGVudGAgc3RyaW5nIGFuZCBhbiBhcnJheSBvZiBgc2VjdGlvbnNgIG9iamVjdHMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5wdXQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IHsgcGFyc2U6IG9wdGlvbnMgfTtcbiAgfVxuXG4gIHZhciBmaWxlID0gdG9PYmplY3QoaW5wdXQpO1xuICB2YXIgZGVmYXVsdHMgPSB7c2VjdGlvbl9kZWxpbWl0ZXI6ICctLS0nLCBwYXJzZTogaWRlbnRpdHl9O1xuICB2YXIgb3B0cyA9IGV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB2YXIgZGVsaW0gPSBvcHRzLnNlY3Rpb25fZGVsaW1pdGVyO1xuICB2YXIgbGluZXMgPSBmaWxlLmNvbnRlbnQuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIHNlY3Rpb25zID0gbnVsbDtcbiAgdmFyIHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCk7XG4gIHZhciBjb250ZW50ID0gW107XG4gIHZhciBzdGFjayA9IFtdO1xuXG4gIGZ1bmN0aW9uIGluaXRTZWN0aW9ucyh2YWwpIHtcbiAgICBmaWxlLmNvbnRlbnQgPSB2YWw7XG4gICAgc2VjdGlvbnMgPSBbXTtcbiAgICBjb250ZW50ID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVNlY3Rpb24odmFsKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgc2VjdGlvbi5rZXkgPSBnZXRLZXkoc3RhY2tbMF0sIGRlbGltKTtcbiAgICAgIHNlY3Rpb24uY29udGVudCA9IHZhbDtcbiAgICAgIG9wdHMucGFyc2Uoc2VjdGlvbiwgc2VjdGlvbnMpO1xuICAgICAgc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgIHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCk7XG4gICAgICBjb250ZW50ID0gW107XG4gICAgICBzdGFjayA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbGluZSA9IGxpbmVzW2ldO1xuICAgIHZhciBsZW4gPSBzdGFjay5sZW5ndGg7XG4gICAgdmFyIGxuID0gbGluZS50cmltKCk7XG5cbiAgICBpZiAoaXNEZWxpbWl0ZXIobG4sIGRlbGltKSkge1xuICAgICAgaWYgKGxuLmxlbmd0aCA9PT0gMyAmJiBpICE9PSAwKSB7XG4gICAgICAgIGlmIChsZW4gPT09IDAgfHwgbGVuID09PSAyKSB7XG4gICAgICAgICAgY29udGVudC5wdXNoKGxpbmUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2gobG4pO1xuICAgICAgICBzZWN0aW9uLmRhdGEgPSBjb250ZW50LmpvaW4oJ1xcbicpO1xuICAgICAgICBjb250ZW50ID0gW107XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgaW5pdFNlY3Rpb25zKGNvbnRlbnQuam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuID09PSAyKSB7XG4gICAgICAgIGNsb3NlU2VjdGlvbihjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaChsbik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb250ZW50LnB1c2gobGluZSk7XG4gIH1cblxuICBpZiAoc2VjdGlvbnMgPT09IG51bGwpIHtcbiAgICBpbml0U2VjdGlvbnMoY29udGVudC5qb2luKCdcXG4nKSk7XG4gIH0gZWxzZSB7XG4gICAgY2xvc2VTZWN0aW9uKGNvbnRlbnQuam9pbignXFxuJykpO1xuICB9XG5cbiAgZmlsZS5zZWN0aW9ucyA9IHNlY3Rpb25zO1xuICByZXR1cm4gZmlsZTtcbn07XG5cbmZ1bmN0aW9uIGlzRGVsaW1pdGVyKGxpbmUsIGRlbGltKSB7XG4gIGlmIChsaW5lLnNsaWNlKDAsIGRlbGltLmxlbmd0aCkgIT09IGRlbGltKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChsaW5lLmNoYXJBdChkZWxpbS5sZW5ndGggKyAxKSA9PT0gZGVsaW0uc2xpY2UoLTEpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB0b09iamVjdChpbnB1dCkge1xuICBpZiAodHlwZU9mKGlucHV0KSAhPT0gJ29iamVjdCcpIHtcbiAgICBpbnB1dCA9IHsgY29udGVudDogaW5wdXQgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQuY29udGVudCAhPT0gJ3N0cmluZycgJiYgIWlzQnVmZmVyKGlucHV0LmNvbnRlbnQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBidWZmZXIgb3Igc3RyaW5nJyk7XG4gIH1cblxuICBpbnB1dC5jb250ZW50ID0gaW5wdXQuY29udGVudC50b1N0cmluZygpO1xuICBpbnB1dC5zZWN0aW9ucyA9IFtdO1xuICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGdldEtleSh2YWwsIGRlbGltKSB7XG4gIHJldHVybiB2YWwgPyB2YWwuc2xpY2UoZGVsaW0ubGVuZ3RoKS50cmltKCkgOiAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbigpIHtcbiAgcmV0dXJuIHsga2V5OiAnJywgZGF0YTogJycsIGNvbnRlbnQ6ICcnIH07XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbCkge1xuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgaWYgKHZhbCAmJiB2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iXSwibmFtZXMiOlsidHlwZU9mIiwicmVxdWlyZSIsImV4dGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbnB1dCIsIm9wdGlvbnMiLCJwYXJzZSIsImZpbGUiLCJ0b09iamVjdCIsImRlZmF1bHRzIiwic2VjdGlvbl9kZWxpbWl0ZXIiLCJpZGVudGl0eSIsIm9wdHMiLCJkZWxpbSIsImxpbmVzIiwiY29udGVudCIsInNwbGl0Iiwic2VjdGlvbnMiLCJzZWN0aW9uIiwiY3JlYXRlU2VjdGlvbiIsInN0YWNrIiwiaW5pdFNlY3Rpb25zIiwidmFsIiwiY2xvc2VTZWN0aW9uIiwibGVuZ3RoIiwia2V5IiwiZ2V0S2V5IiwicHVzaCIsImkiLCJsaW5lIiwibGVuIiwibG4iLCJ0cmltIiwiaXNEZWxpbWl0ZXIiLCJkYXRhIiwiam9pbiIsInNsaWNlIiwiY2hhckF0IiwiaXNCdWZmZXIiLCJUeXBlRXJyb3IiLCJ0b1N0cmluZyIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/section-matter/index.js\n");

/***/ })

};
;