const company = "Indojuni";

function sum(a, b) {
  return a + b;
}

class Company {}

//alias in export
// export { company as perusahaan, sum as total, Company as Perusahaan };

//alias in import
export { company , sum , Company};