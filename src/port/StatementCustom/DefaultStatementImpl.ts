import { StatementCustom } from "./StatementCustom";

export class DefaultStatementImpl extends StatementCustom {
  public importTypeStatement: string = 'import { Type } from "class-transformer";';
  public typeStatementGenerator(customType: string): string {
    return `  @Type(() => ${customType})`;
  }
}
