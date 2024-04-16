export abstract class StatementCustom {
  public abstract importTypeStatement: string;
  public abstract typeStatementGenerator(customType: string, defaultTypeValue?: string): string;
}
