export interface BudgetSection {
  title: string;
  rows: string[][];
}

export interface BudgetData {
  headers: string[];
  sections: {
    [key: string]: BudgetSection;
  };
} 