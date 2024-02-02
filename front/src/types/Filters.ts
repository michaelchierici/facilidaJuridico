export interface IFilters {
  orderBy: "asc" | "desc";
  onToggleOrderBy: () => void;
  onSearch: (searchTerm: string) => void;
}
