/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/chars", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$EOF = 0;
    exports.$TAB = 9;
    exports.$LF = 10;
    exports.$VTAB = 11;
    exports.$FF = 12;
    exports.$CR = 13;
    exports.$SPACE = 32;
    exports.$BANG = 33;
    exports.$DQ = 34;
    exports.$HASH = 35;
    exports.$$ = 36;
    exports.$PERCENT = 37;
    exports.$AMPERSAND = 38;
    exports.$SQ = 39;
    exports.$LPAREN = 40;
    exports.$RPAREN = 41;
    exports.$STAR = 42;
    exports.$PLUS = 43;
    exports.$COMMA = 44;
    exports.$MINUS = 45;
    exports.$PERIOD = 46;
    exports.$SLASH = 47;
    exports.$COLON = 58;
    exports.$SEMICOLON = 59;
    exports.$LT = 60;
    exports.$EQ = 61;
    exports.$GT = 62;
    exports.$QUESTION = 63;
    exports.$0 = 48;
    exports.$9 = 57;
    exports.$A = 65;
    exports.$E = 69;
    exports.$F = 70;
    exports.$X = 88;
    exports.$Z = 90;
    exports.$LBRACKET = 91;
    exports.$BACKSLASH = 92;
    exports.$RBRACKET = 93;
    exports.$CARET = 94;
    exports.$_ = 95;
    exports.$a = 97;
    exports.$e = 101;
    exports.$f = 102;
    exports.$n = 110;
    exports.$r = 114;
    exports.$t = 116;
    exports.$u = 117;
    exports.$v = 118;
    exports.$x = 120;
    exports.$z = 122;
    exports.$LBRACE = 123;
    exports.$BAR = 124;
    exports.$RBRACE = 125;
    exports.$NBSP = 160;
    exports.$PIPE = 124;
    exports.$TILDA = 126;
    exports.$AT = 64;
    exports.$BT = 96;
    function isWhitespace(code) {
        return (code >= exports.$TAB && code <= exports.$SPACE) || (code == exports.$NBSP);
    }
    exports.isWhitespace = isWhitespace;
    function isDigit(code) {
        return exports.$0 <= code && code <= exports.$9;
    }
    exports.isDigit = isDigit;
    function isAsciiLetter(code) {
        return code >= exports.$a && code <= exports.$z || code >= exports.$A && code <= exports.$Z;
    }
    exports.isAsciiLetter = isAsciiLetter;
    function isAsciiHexDigit(code) {
        return code >= exports.$a && code <= exports.$f || code >= exports.$A && code <= exports.$F || isDigit(code);
    }
    exports.isAsciiHexDigit = isAsciiHexDigit;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvY2hhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFVSxRQUFBLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxRQUFBLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDWixRQUFBLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFBLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixRQUFBLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxRQUFBLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsUUFBQSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ1QsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsUUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsUUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLFFBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULFFBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULFFBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVmLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVSLFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLFFBQUEsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixRQUFBLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDWixRQUFBLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFUixRQUFBLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFFVCxRQUFBLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFBLElBQUksR0FBRyxHQUFHLENBQUM7SUFDWCxRQUFBLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFBLEtBQUssR0FBRyxHQUFHLENBQUM7SUFFWixRQUFBLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDWixRQUFBLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDYixRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFVCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFdEIsc0JBQTZCLElBQVk7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLFlBQUksSUFBSSxJQUFJLElBQUksY0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUZELG9DQUVDO0lBRUQsaUJBQXdCLElBQVk7UUFDbEMsTUFBTSxDQUFDLFVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLFVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRkQsMEJBRUM7SUFFRCx1QkFBOEIsSUFBWTtRQUN4QyxNQUFNLENBQUMsSUFBSSxJQUFJLFVBQUUsSUFBSSxJQUFJLElBQUksVUFBRSxJQUFJLElBQUksSUFBSSxVQUFFLElBQUksSUFBSSxJQUFJLFVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRkQsc0NBRUM7SUFFRCx5QkFBZ0MsSUFBWTtRQUMxQyxNQUFNLENBQUMsSUFBSSxJQUFJLFVBQUUsSUFBSSxJQUFJLElBQUksVUFBRSxJQUFJLElBQUksSUFBSSxVQUFFLElBQUksSUFBSSxJQUFJLFVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUZELDBDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY29uc3QgJEVPRiA9IDA7XG5leHBvcnQgY29uc3QgJFRBQiA9IDk7XG5leHBvcnQgY29uc3QgJExGID0gMTA7XG5leHBvcnQgY29uc3QgJFZUQUIgPSAxMTtcbmV4cG9ydCBjb25zdCAkRkYgPSAxMjtcbmV4cG9ydCBjb25zdCAkQ1IgPSAxMztcbmV4cG9ydCBjb25zdCAkU1BBQ0UgPSAzMjtcbmV4cG9ydCBjb25zdCAkQkFORyA9IDMzO1xuZXhwb3J0IGNvbnN0ICREUSA9IDM0O1xuZXhwb3J0IGNvbnN0ICRIQVNIID0gMzU7XG5leHBvcnQgY29uc3QgJCQgPSAzNjtcbmV4cG9ydCBjb25zdCAkUEVSQ0VOVCA9IDM3O1xuZXhwb3J0IGNvbnN0ICRBTVBFUlNBTkQgPSAzODtcbmV4cG9ydCBjb25zdCAkU1EgPSAzOTtcbmV4cG9ydCBjb25zdCAkTFBBUkVOID0gNDA7XG5leHBvcnQgY29uc3QgJFJQQVJFTiA9IDQxO1xuZXhwb3J0IGNvbnN0ICRTVEFSID0gNDI7XG5leHBvcnQgY29uc3QgJFBMVVMgPSA0MztcbmV4cG9ydCBjb25zdCAkQ09NTUEgPSA0NDtcbmV4cG9ydCBjb25zdCAkTUlOVVMgPSA0NTtcbmV4cG9ydCBjb25zdCAkUEVSSU9EID0gNDY7XG5leHBvcnQgY29uc3QgJFNMQVNIID0gNDc7XG5leHBvcnQgY29uc3QgJENPTE9OID0gNTg7XG5leHBvcnQgY29uc3QgJFNFTUlDT0xPTiA9IDU5O1xuZXhwb3J0IGNvbnN0ICRMVCA9IDYwO1xuZXhwb3J0IGNvbnN0ICRFUSA9IDYxO1xuZXhwb3J0IGNvbnN0ICRHVCA9IDYyO1xuZXhwb3J0IGNvbnN0ICRRVUVTVElPTiA9IDYzO1xuXG5leHBvcnQgY29uc3QgJDAgPSA0ODtcbmV4cG9ydCBjb25zdCAkOSA9IDU3O1xuXG5leHBvcnQgY29uc3QgJEEgPSA2NTtcbmV4cG9ydCBjb25zdCAkRSA9IDY5O1xuZXhwb3J0IGNvbnN0ICRGID0gNzA7XG5leHBvcnQgY29uc3QgJFggPSA4ODtcbmV4cG9ydCBjb25zdCAkWiA9IDkwO1xuXG5leHBvcnQgY29uc3QgJExCUkFDS0VUID0gOTE7XG5leHBvcnQgY29uc3QgJEJBQ0tTTEFTSCA9IDkyO1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0tFVCA9IDkzO1xuZXhwb3J0IGNvbnN0ICRDQVJFVCA9IDk0O1xuZXhwb3J0IGNvbnN0ICRfID0gOTU7XG5cbmV4cG9ydCBjb25zdCAkYSA9IDk3O1xuZXhwb3J0IGNvbnN0ICRlID0gMTAxO1xuZXhwb3J0IGNvbnN0ICRmID0gMTAyO1xuZXhwb3J0IGNvbnN0ICRuID0gMTEwO1xuZXhwb3J0IGNvbnN0ICRyID0gMTE0O1xuZXhwb3J0IGNvbnN0ICR0ID0gMTE2O1xuZXhwb3J0IGNvbnN0ICR1ID0gMTE3O1xuZXhwb3J0IGNvbnN0ICR2ID0gMTE4O1xuZXhwb3J0IGNvbnN0ICR4ID0gMTIwO1xuZXhwb3J0IGNvbnN0ICR6ID0gMTIyO1xuXG5leHBvcnQgY29uc3QgJExCUkFDRSA9IDEyMztcbmV4cG9ydCBjb25zdCAkQkFSID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0UgPSAxMjU7XG5leHBvcnQgY29uc3QgJE5CU1AgPSAxNjA7XG5cbmV4cG9ydCBjb25zdCAkUElQRSA9IDEyNDtcbmV4cG9ydCBjb25zdCAkVElMREEgPSAxMjY7XG5leHBvcnQgY29uc3QgJEFUID0gNjQ7XG5cbmV4cG9ydCBjb25zdCAkQlQgPSA5NjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRUQUIgJiYgY29kZSA8PSAkU1BBQ0UpIHx8IChjb2RlID09ICROQlNQKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlnaXQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAkMCA8PSBjb2RlICYmIGNvZGUgPD0gJDk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzY2lpTGV0dGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA+PSAkYSAmJiBjb2RlIDw9ICR6IHx8IGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkWjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNjaWlIZXhEaWdpdChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkZiB8fCBjb2RlID49ICRBICYmIGNvZGUgPD0gJEYgfHwgaXNEaWdpdChjb2RlKTtcbn1cbiJdfQ==