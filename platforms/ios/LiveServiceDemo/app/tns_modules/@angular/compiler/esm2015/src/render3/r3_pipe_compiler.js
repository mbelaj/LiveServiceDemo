/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { identifierName } from '../compile_metadata';
import * as o from '../output/output_ast';
import { error } from '../util';
import { Identifiers as R3 } from './r3_identifiers';
import { BUILD_OPTIMIZER_COLOCATE } from './r3_types';
import { createFactory } from './r3_view_compiler';
/**
 * Write a pipe definition to the output context.
 */
export function compilePipe(outputCtx, pipe, reflector, mode) {
    const definitionMapValues = [];
    // e.g. `name: 'myPipe'`
    definitionMapValues.push({ key: 'name', value: o.literal(pipe.name), quoted: false });
    // e.g. `type: MyPipe`
    definitionMapValues.push({ key: 'type', value: outputCtx.importExpr(pipe.type.reference), quoted: false });
    // e.g. factory: function MyPipe_Factory() { return new MyPipe(); },
    const templateFactory = createFactory(pipe.type, outputCtx, reflector, []);
    definitionMapValues.push({ key: 'factory', value: templateFactory, quoted: false });
    // e.g. pure: true
    if (pipe.pure) {
        definitionMapValues.push({ key: 'pure', value: o.literal(true), quoted: false });
    }
    const className = identifierName(pipe.type);
    className || error(`Cannot resolve the name of ${pipe.type}`);
    const definitionField = outputCtx.constantPool.propertyNameOf(3 /* Pipe */);
    const definitionFunction = o.importExpr(R3.definePipe).callFn([o.literalMap(definitionMapValues)]);
    if (mode === 0 /* PartialClass */) {
        outputCtx.statements.push(new o.ClassStmt(
        /* name */ className, 
        /* parent */ null, 
        /* fields */ [new o.ClassField(
            /* name */ definitionField, 
            /* type */ o.INFERRED_TYPE, 
            /* modifiers */ [o.StmtModifier.Static], 
            /* initializer */ definitionFunction)], 
        /* getters */ [], 
        /* constructorMethod */ new o.ClassMethod(null, [], []), 
        /* methods */ []));
    }
    else {
        // Create back-patch definition.
        const classReference = outputCtx.importExpr(pipe.type.reference);
        // Create the back-patch statement
        outputCtx.statements.push(new o.CommentStmt(BUILD_OPTIMIZER_COLOCATE), classReference.prop(definitionField).set(definitionFunction).toStmt());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfcGlwZV9jb21waWxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3IzX3BpcGVfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFnRCxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUdsRyxPQUFPLEtBQUssQ0FBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBZ0IsS0FBSyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRTdDLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHdCQUF3QixFQUFhLE1BQU0sWUFBWSxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRDs7R0FFRztBQUNILE1BQU0sc0JBQ0YsU0FBd0IsRUFBRSxJQUF5QixFQUFFLFNBQTJCLEVBQ2hGLElBQWdCO0lBQ2xCLE1BQU0sbUJBQW1CLEdBQTBELEVBQUUsQ0FBQztJQUV0Rix3QkFBd0I7SUFDeEIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFcEYsc0JBQXNCO0lBQ3RCLG1CQUFtQixDQUFDLElBQUksQ0FDcEIsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFcEYsb0VBQW9FO0lBQ3BFLE1BQU0sZUFBZSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0UsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRWxGLGtCQUFrQjtJQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNkLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUM7SUFDOUMsU0FBUyxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFOUQsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFjLGNBQXFCLENBQUM7SUFDbkYsTUFBTSxrQkFBa0IsR0FDcEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RSxFQUFFLENBQUMsQ0FBQyxJQUFJLHlCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNyQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3JDLFVBQVUsQ0FBQyxTQUFTO1FBQ3BCLFlBQVksQ0FBQyxJQUFJO1FBQ2pCLFlBQVksQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVU7WUFDekIsVUFBVSxDQUFDLGVBQWU7WUFDMUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhO1lBQzFCLGVBQWUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3RDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUMsYUFBYSxDQUFBLEVBQUU7UUFDZix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkQsYUFBYSxDQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sZ0NBQWdDO1FBQ2hDLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRSxrQ0FBa0M7UUFDbEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUMzQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBDb21waWxlUGlwZU1ldGFkYXRhLCBpZGVudGlmaWVyTmFtZX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4uL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7RGVmaW5pdGlvbktpbmR9IGZyb20gJy4uL2NvbnN0YW50X3Bvb2wnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge091dHB1dENvbnRleHQsIGVycm9yfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtJZGVudGlmaWVycyBhcyBSM30gZnJvbSAnLi9yM19pZGVudGlmaWVycyc7XG5pbXBvcnQge0JVSUxEX09QVElNSVpFUl9DT0xPQ0FURSwgT3V0cHV0TW9kZX0gZnJvbSAnLi9yM190eXBlcyc7XG5pbXBvcnQge2NyZWF0ZUZhY3Rvcnl9IGZyb20gJy4vcjNfdmlld19jb21waWxlcic7XG5cbi8qKlxuICogV3JpdGUgYSBwaXBlIGRlZmluaXRpb24gdG8gdGhlIG91dHB1dCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVBpcGUoXG4gICAgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBwaXBlOiBDb21waWxlUGlwZU1ldGFkYXRhLCByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsXG4gICAgbW9kZTogT3V0cHV0TW9kZSkge1xuICBjb25zdCBkZWZpbml0aW9uTWFwVmFsdWVzOiB7a2V5OiBzdHJpbmcsIHF1b3RlZDogYm9vbGVhbiwgdmFsdWU6IG8uRXhwcmVzc2lvbn1bXSA9IFtdO1xuXG4gIC8vIGUuZy4gYG5hbWU6ICdteVBpcGUnYFxuICBkZWZpbml0aW9uTWFwVmFsdWVzLnB1c2goe2tleTogJ25hbWUnLCB2YWx1ZTogby5saXRlcmFsKHBpcGUubmFtZSksIHF1b3RlZDogZmFsc2V9KTtcblxuICAvLyBlLmcuIGB0eXBlOiBNeVBpcGVgXG4gIGRlZmluaXRpb25NYXBWYWx1ZXMucHVzaChcbiAgICAgIHtrZXk6ICd0eXBlJywgdmFsdWU6IG91dHB1dEN0eC5pbXBvcnRFeHByKHBpcGUudHlwZS5yZWZlcmVuY2UpLCBxdW90ZWQ6IGZhbHNlfSk7XG5cbiAgLy8gZS5nLiBmYWN0b3J5OiBmdW5jdGlvbiBNeVBpcGVfRmFjdG9yeSgpIHsgcmV0dXJuIG5ldyBNeVBpcGUoKTsgfSxcbiAgY29uc3QgdGVtcGxhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShwaXBlLnR5cGUsIG91dHB1dEN0eCwgcmVmbGVjdG9yLCBbXSk7XG4gIGRlZmluaXRpb25NYXBWYWx1ZXMucHVzaCh7a2V5OiAnZmFjdG9yeScsIHZhbHVlOiB0ZW1wbGF0ZUZhY3RvcnksIHF1b3RlZDogZmFsc2V9KTtcblxuICAvLyBlLmcuIHB1cmU6IHRydWVcbiAgaWYgKHBpcGUucHVyZSkge1xuICAgIGRlZmluaXRpb25NYXBWYWx1ZXMucHVzaCh7a2V5OiAncHVyZScsIHZhbHVlOiBvLmxpdGVyYWwodHJ1ZSksIHF1b3RlZDogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGlkZW50aWZpZXJOYW1lKHBpcGUudHlwZSkgITtcbiAgY2xhc3NOYW1lIHx8IGVycm9yKGBDYW5ub3QgcmVzb2x2ZSB0aGUgbmFtZSBvZiAke3BpcGUudHlwZX1gKTtcblxuICBjb25zdCBkZWZpbml0aW9uRmllbGQgPSBvdXRwdXRDdHguY29uc3RhbnRQb29sLnByb3BlcnR5TmFtZU9mKERlZmluaXRpb25LaW5kLlBpcGUpO1xuICBjb25zdCBkZWZpbml0aW9uRnVuY3Rpb24gPVxuICAgICAgby5pbXBvcnRFeHByKFIzLmRlZmluZVBpcGUpLmNhbGxGbihbby5saXRlcmFsTWFwKGRlZmluaXRpb25NYXBWYWx1ZXMpXSk7XG5cbiAgaWYgKG1vZGUgPT09IE91dHB1dE1vZGUuUGFydGlhbENsYXNzKSB7XG4gICAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChuZXcgby5DbGFzc1N0bXQoXG4gICAgICAgIC8qIG5hbWUgKi8gY2xhc3NOYW1lLFxuICAgICAgICAvKiBwYXJlbnQgKi8gbnVsbCxcbiAgICAgICAgLyogZmllbGRzICovW25ldyBvLkNsYXNzRmllbGQoXG4gICAgICAgICAgICAvKiBuYW1lICovIGRlZmluaXRpb25GaWVsZCxcbiAgICAgICAgICAgIC8qIHR5cGUgKi8gby5JTkZFUlJFRF9UWVBFLFxuICAgICAgICAgICAgLyogbW9kaWZpZXJzICovW28uU3RtdE1vZGlmaWVyLlN0YXRpY10sXG4gICAgICAgICAgICAvKiBpbml0aWFsaXplciAqLyBkZWZpbml0aW9uRnVuY3Rpb24pXSxcbiAgICAgICAgLyogZ2V0dGVycyAqL1tdLFxuICAgICAgICAvKiBjb25zdHJ1Y3Rvck1ldGhvZCAqLyBuZXcgby5DbGFzc01ldGhvZChudWxsLCBbXSwgW10pLFxuICAgICAgICAvKiBtZXRob2RzICovW10pKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDcmVhdGUgYmFjay1wYXRjaCBkZWZpbml0aW9uLlxuICAgIGNvbnN0IGNsYXNzUmVmZXJlbmNlID0gb3V0cHV0Q3R4LmltcG9ydEV4cHIocGlwZS50eXBlLnJlZmVyZW5jZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJhY2stcGF0Y2ggc3RhdGVtZW50XG4gICAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChcbiAgICAgICAgbmV3IG8uQ29tbWVudFN0bXQoQlVJTERfT1BUSU1JWkVSX0NPTE9DQVRFKSxcbiAgICAgICAgY2xhc3NSZWZlcmVuY2UucHJvcChkZWZpbml0aW9uRmllbGQpLnNldChkZWZpbml0aW9uRnVuY3Rpb24pLnRvU3RtdCgpKTtcbiAgfVxufSJdfQ==