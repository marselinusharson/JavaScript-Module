const company = "Indojuni";

function sum(a, b) {
  return a + b;
}

class Company {}

//alias in export (not recomended)
// export { company as perusahaan, sum as total, Company as Perusahaan };

export { company, sum, Company };
