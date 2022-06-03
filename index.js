const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (paramArrNames, paramSortFunction) => {
  let tempNames = [];
  let sortedNames = paramSortFunction(paramArrNames);
  for (let counter = 0; counter < sortedNames.length; counter++) {
    tempNames.push(`${counter+1}. ${sortedNames[counter]}`);
  }
  return tempNames;
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (paramArrNames) => {
  return paramArrNames.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (paramArrNames) => {
  return paramArrNames.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
