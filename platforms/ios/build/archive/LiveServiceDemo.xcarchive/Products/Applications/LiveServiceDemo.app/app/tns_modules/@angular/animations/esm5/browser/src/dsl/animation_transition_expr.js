/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export var ANY_STATE = '*';
export function parseTransitionExpr(transitionValue, errors) {
    var expressions = [];
    if (typeof transitionValue == 'string') {
        transitionValue
            .split(/\s*,\s*/)
            .forEach(function (str) { return parseInnerTransitionStr(str, expressions, errors); });
    }
    else {
        expressions.push(transitionValue);
    }
    return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        var result = parseAnimationAlias(eventStr, errors);
        if (typeof result == 'function') {
            expressions.push(result);
            return;
        }
        eventStr = result;
    }
    var match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push("The provided transition expression \"" + eventStr + "\" is not supported");
        return expressions;
    }
    var fromState = match[1];
    var separator = match[2];
    var toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    var isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        case ':increment':
            return function (fromState, toState) { return parseFloat(toState) > parseFloat(fromState); };
        case ':decrement':
            return function (fromState, toState) { return parseFloat(toState) < parseFloat(fromState); };
        default:
            errors.push("The transition alias value \"" + alias + "\" is not supported");
            return '* => *';
    }
}
// DO NOT REFACTOR ... keep the follow set instantiations
// with the values intact (closure compiler for some reason
// removes follow-up lines that add the values outside of
// the constructor...
var TRUE_BOOLEAN_VALUES = new Set(['true', '1']);
var FALSE_BOOLEAN_VALUES = new Set(['false', '0']);
function makeLambdaFromStates(lhs, rhs) {
    var LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
    var RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
    return function (fromState, toState) {
        var lhsMatch = lhs == ANY_STATE || lhs == fromState;
        var rhsMatch = rhs == ANY_STATE || rhs == toState;
        if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === 'boolean') {
            lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
        }
        if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === 'boolean') {
            rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
        }
        return lhsMatch && rhsMatch;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3RyYW5zaXRpb25fZXhwci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvZHNsL2FuaW1hdGlvbl90cmFuc2l0aW9uX2V4cHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUk3QixNQUFNLDhCQUNGLGVBQTZDLEVBQUUsTUFBZ0I7SUFDakUsSUFBTSxXQUFXLEdBQTBCLEVBQUUsQ0FBQztJQUM5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLGVBQWUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGVBQWdCO2FBQ3BCLEtBQUssQ0FBQyxTQUFTLENBQUM7YUFDaEIsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsdUJBQXVCLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLFdBQVcsQ0FBQyxJQUFJLENBQXNCLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxpQ0FDSSxRQUFnQixFQUFFLFdBQWtDLEVBQUUsTUFBZ0I7SUFDeEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBTSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZ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SSxPQUFPLENBQUM7UUFFbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksaUJBQWlCLElBQUksT0FBTyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksaUJBQWlCLElBQUksT0FBTyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuRSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBBTllfU1RBVEUgPSAnKic7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFRyYW5zaXRpb25NYXRjaGVyRm4gPVxuICAgIChmcm9tU3RhdGU6IGFueSwgdG9TdGF0ZTogYW55LCBlbGVtZW50OiBhbnksIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pID0+IGJvb2xlYW47XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYW5zaXRpb25FeHByKFxuICAgIHRyYW5zaXRpb25WYWx1ZTogc3RyaW5nIHwgVHJhbnNpdGlvbk1hdGNoZXJGbiwgZXJyb3JzOiBzdHJpbmdbXSk6IFRyYW5zaXRpb25NYXRjaGVyRm5bXSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zOiBUcmFuc2l0aW9uTWF0Y2hlckZuW10gPSBbXTtcbiAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uVmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAoPHN0cmluZz50cmFuc2l0aW9uVmFsdWUpXG4gICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgLmZvckVhY2goc3RyID0+IHBhcnNlSW5uZXJUcmFuc2l0aW9uU3RyKHN0ciwgZXhwcmVzc2lvbnMsIGVycm9ycykpO1xuICB9IGVsc2Uge1xuICAgIGV4cHJlc3Npb25zLnB1c2goPFRyYW5zaXRpb25NYXRjaGVyRm4+dHJhbnNpdGlvblZhbHVlKTtcbiAgfVxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5uZXJUcmFuc2l0aW9uU3RyKFxuICAgIGV2ZW50U3RyOiBzdHJpbmcsIGV4cHJlc3Npb25zOiBUcmFuc2l0aW9uTWF0Y2hlckZuW10sIGVycm9yczogc3RyaW5nW10pIHtcbiAgaWYgKGV2ZW50U3RyWzBdID09ICc6Jykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlQW5pbWF0aW9uQWxpYXMoZXZlbnRTdHIsIGVycm9ycyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXhwcmVzc2lvbnMucHVzaChyZXN1bHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudFN0ciA9IHJlc3VsdCBhcyBzdHJpbmc7XG4gIH1cblxuICBjb25zdCBtYXRjaCA9IGV2ZW50U3RyLm1hdGNoKC9eKFxcKnxbLVxcd10rKVxccyooPD9bPS1dPilcXHMqKFxcKnxbLVxcd10rKSQvKTtcbiAgaWYgKG1hdGNoID09IG51bGwgfHwgbWF0Y2gubGVuZ3RoIDwgNCkge1xuICAgIGVycm9ycy5wdXNoKGBUaGUgcHJvdmlkZWQgdHJhbnNpdGlvbiBleHByZXNzaW9uIFwiJHtldmVudFN0cn1cIiBpcyBub3Qgc3VwcG9ydGVkYCk7XG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG5cbiAgY29uc3QgZnJvbVN0YXRlID0gbWF0Y2hbMV07XG4gIGNvbnN0IHNlcGFyYXRvciA9IG1hdGNoWzJdO1xuICBjb25zdCB0b1N0YXRlID0gbWF0Y2hbM107XG4gIGV4cHJlc3Npb25zLnB1c2gobWFrZUxhbWJkYUZyb21TdGF0ZXMoZnJvbVN0YXRlLCB0b1N0YXRlKSk7XG5cbiAgY29uc3QgaXNGdWxsQW55U3RhdGVFeHByID0gZnJvbVN0YXRlID09IEFOWV9TVEFURSAmJiB0b1N0YXRlID09IEFOWV9TVEFURTtcbiAgaWYgKHNlcGFyYXRvclswXSA9PSAnPCcgJiYgIWlzRnVsbEFueVN0YXRlRXhwcikge1xuICAgIGV4cHJlc3Npb25zLnB1c2gobWFrZUxhbWJkYUZyb21TdGF0ZXModG9TdGF0ZSwgZnJvbVN0YXRlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VBbmltYXRpb25BbGlhcyhhbGlhczogc3RyaW5nLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nfFRyYW5zaXRpb25NYXRjaGVyRm4ge1xuICBzd2l0Y2ggKGFsaWFzKSB7XG4gICAgY2FzZSAnOmVudGVyJzpcbiAgICAgIHJldHVybiAndm9pZCA9PiAqJztcbiAgICBjYXNlICc6bGVhdmUnOlxuICAgICAgcmV0dXJuICcqID0+IHZvaWQnO1xuICAgIGNhc2UgJzppbmNyZW1lbnQnOlxuICAgICAgcmV0dXJuIChmcm9tU3RhdGU6IGFueSwgdG9TdGF0ZTogYW55KTogYm9vbGVhbiA9PiBwYXJzZUZsb2F0KHRvU3RhdGUpID4gcGFyc2VGbG9hdChmcm9tU3RhdGUpO1xuICAgIGNhc2UgJzpkZWNyZW1lbnQnOlxuICAgICAgcmV0dXJuIChmcm9tU3RhdGU6IGFueSwgdG9TdGF0ZTogYW55KTogYm9vbGVhbiA9PiBwYXJzZUZsb2F0KHRvU3RhdGUpIDwgcGFyc2VGbG9hdChmcm9tU3RhdGUpO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlcnJvcnMucHVzaChgVGhlIHRyYW5zaXRpb24gYWxpYXMgdmFsdWUgXCIke2FsaWFzfVwiIGlzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgIHJldHVybiAnKiA9PiAqJztcbiAgfVxufVxuXG4vLyBETyBOT1QgUkVGQUNUT1IgLi4uIGtlZXAgdGhlIGZvbGxvdyBzZXQgaW5zdGFudGlhdGlvbnNcbi8vIHdpdGggdGhlIHZhbHVlcyBpbnRhY3QgKGNsb3N1cmUgY29tcGlsZXIgZm9yIHNvbWUgcmVhc29uXG4vLyByZW1vdmVzIGZvbGxvdy11cCBsaW5lcyB0aGF0IGFkZCB0aGUgdmFsdWVzIG91dHNpZGUgb2Zcbi8vIHRoZSBjb25zdHJ1Y3Rvci4uLlxuY29uc3QgVFJVRV9CT09MRUFOX1ZBTFVFUyA9IG5ldyBTZXQ8c3RyaW5nPihbJ3RydWUnLCAnMSddKTtcbmNvbnN0IEZBTFNFX0JPT0xFQU5fVkFMVUVTID0gbmV3IFNldDxzdHJpbmc+KFsnZmFsc2UnLCAnMCddKTtcblxuZnVuY3Rpb24gbWFrZUxhbWJkYUZyb21TdGF0ZXMobGhzOiBzdHJpbmcsIHJoczogc3RyaW5nKTogVHJhbnNpdGlvbk1hdGNoZXJGbiB7XG4gIGNvbnN0IExIU19NQVRDSF9CT09MRUFOID0gVFJVRV9CT09MRUFOX1ZBTFVFUy5oYXMobGhzKSB8fCBGQUxTRV9CT09MRUFOX1ZBTFVFUy5oYXMobGhzKTtcbiAgY29uc3QgUkhTX01BVENIX0JPT0xFQU4gPSBUUlVFX0JPT0xFQU5fVkFMVUVTLmhhcyhyaHMpIHx8IEZBTFNFX0JPT0xFQU5fVkFMVUVTLmhhcyhyaHMpO1xuXG4gIHJldHVybiAoZnJvbVN0YXRlOiBhbnksIHRvU3RhdGU6IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBsaHNNYXRjaCA9IGxocyA9PSBBTllfU1RBVEUgfHwgbGhzID09IGZyb21TdGF0ZTtcbiAgICBsZXQgcmhzTWF0Y2ggPSByaHMgPT0gQU5ZX1NUQVRFIHx8IHJocyA9PSB0b1N0YXRlO1xuXG4gICAgaWYgKCFsaHNNYXRjaCAmJiBMSFNfTUFUQ0hfQk9PTEVBTiAmJiB0eXBlb2YgZnJvbVN0YXRlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGxoc01hdGNoID0gZnJvbVN0YXRlID8gVFJVRV9CT09MRUFOX1ZBTFVFUy5oYXMobGhzKSA6IEZBTFNFX0JPT0xFQU5fVkFMVUVTLmhhcyhsaHMpO1xuICAgIH1cbiAgICBpZiAoIXJoc01hdGNoICYmIFJIU19NQVRDSF9CT09MRUFOICYmIHR5cGVvZiB0b1N0YXRlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJoc01hdGNoID0gdG9TdGF0ZSA/IFRSVUVfQk9PTEVBTl9WQUxVRVMuaGFzKHJocykgOiBGQUxTRV9CT09MRUFOX1ZBTFVFUy5oYXMocmhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGhzTWF0Y2ggJiYgcmhzTWF0Y2g7XG4gIH07XG59XG4iXX0=