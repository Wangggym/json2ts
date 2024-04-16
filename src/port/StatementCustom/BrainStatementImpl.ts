import { StatementCustom } from "./StatementCustom";

export class BrainStatementImpl extends StatementCustom {
  public importTypeStatement: string = 'import { Type } from "@base/cutil/ClassTransformerDecorators";';
  public typeStatementGenerator(customType: string, defaultTypeValue?: string): string {
    return `  @Type(() => ${customType}${defaultTypeValue === "[]" ? ", []" : ""})`;
  }
}
