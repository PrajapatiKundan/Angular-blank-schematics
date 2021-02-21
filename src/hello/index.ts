import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function hello(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create("hello.html", `<p>Hello world</p>`);
    return tree;
  };
}
