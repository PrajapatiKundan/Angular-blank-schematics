import { Tree, SchematicContext, Rule, apply, url, template, mergeWith } from '@angular-devkit/schematics';
import { OptionSchema } from './schema';
import { strings } from "@angular-devkit/core";

export function addTemplate(options: OptionSchema): Rule {
    
    return (_tree: Tree, _context: SchematicContext ) => {
        
        const source = url('./files');
        
        const templateSource = apply(source, [
          template({
            ...options,
            ...strings
          })
        ]);

        return mergeWith(templateSource);
    }
}