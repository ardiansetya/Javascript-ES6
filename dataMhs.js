const dataMahasiswa = [
   {
      id: 1,
      nama: "Budi Santoso",
      tanggalLahir: "2000-01-15",
      fakultas: "Fakultas Ilmu Komputer",
      programStudi: "Teknik Informatika",
      semester: 6,
      nilai: {
         algoritma: 85,
         basisData: 88,
         pemrogramanWeb: 90,
      },
      aktif: true,
      organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
   },
   {
      id: 2,
      nama: "Siti Aminah",
      tanggalLahir: "1999-05-10",
      fakultas: "Fakultas Ekonomi",
      programStudi: "Manajemen",
      semester: 4,
      nilai: {
         manajemenKeuangan: 78,
         akuntansi: 82,
         pemasaran: 75,
      },
      aktif: true,
      organisasi: ["Koperasi Mahasiswa"],
   },
   {
      id: 3,
      nama: "Rudi Hartono",
      tanggalLahir: "1998-12-01",
      fakultas: "Fakultas Teknik",
      programStudi: "Teknik Sipil",
      semester: 8,
      nilai: {
         mekanikaTanah: 85,
         strukturBangunan: 89,
      },
      aktif: false,
      organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
   },
];

const listMhs = dataMahasiswa
console.log(listMhs)

const mahasiswa1 = listMhs[0]
console.log(mahasiswa1.nama)

// destructuring Seluruh field
const { nama, tanggalLahir, organisasi, aktif, nilai, fakultas, programStudi, semester, id } = mahasiswa1
console.log(nilai)

// destructuring field nilai
const { manajemenKeuangan, akuntansi, pemasaran } = mahasiswa1.nilai
console.log(manajemenKeuangan, akuntansi, pemasaran)

// destructuring field organisasi
const [organisasi1, organisasi2] = mahasiswa1.organisasi
console.log(organisasi1, organisasi2)

const nonOrmawa = organisasi[0] || "kupu kupu"
console.log(nonOrmawa)

// mapping
const namaMhs = listMhs.map(mhs => {
   console.log(mhs.nama)
})

console.log(organisasi)

// spread untuk field organisasi
const tambahOrganisasi = [...organisasi, "Futsal"]
console.log(tambahOrganisasi)

// update pada field fakultas dan semester
const updateMhs = {
   ...mahasiswa1,
   fakultas: "Fakultas Ekonomi",
   semester: 9
}
console.log(updateMhs)

// split
console.log(tanggalLahir)
const tanggalAsli = tanggalLahir.split("-")[0]
console.log(tanggalAsli)

// condition
const statusAktif = aktif ? 'masih aktif' : 'tidak aktif'
console.log(`Atas Nama ${nama} Status: ${statusAktif}`)

// mapping nama semua mhs
const mhs = listMhs.map(mhs => {
   console.log(mhs.nama)
})

// filter
const allMhsAktif = listMhs.filter((mhs) => {
   mhs.aktif && mhs.fakultas === "Fakultas Ilmu Komputer" ? console.log(mhs) : console.log() 
 
})

// total nilai seluruh mhs
const mhsNilai = listMhs.map(mhs => {
   const totalNilai = Object.values(mhs.nilai).reduce((a, b) => a + b)
   console.log(Object.values(mhs.nilai))
   console.log(totalNilai)
})

// sorting Semester
const sortingMhs = listMhs.sort((a, b) => a.semester - b.semester)
console.log(sortingMhs)


// Tambah MHS
const newMhs = {
   id: 5,
   nama: "FUFUFAFA",
   nilai: {
      algoritma: 90,
      daspro: 85,
      basdat: 95
   }
}


const newData = [...listMhs, newMhs]
console.log(newData)

// update mhs
const updatedDataMahasiswa = listMhs.map(mhs => {
   if (mhs.id === 1) {
      return {
         ...mhs,
         nama: "Budi Prasetyo",
         semester: 7,
         fakultas: "Fakultas Teknik",
      };
   }
   return mhs;
});
console.log(updatedDataMahasiswa);

// delete mhs
const deletedDataMahasiswa = updatedDataMahasiswa.filter(mhs => mhs.id !== 2);
console.log(deletedDataMahasiswa);



// template literals
const dataDiri = `nama: ${nama} Tanggal Lahir: ${tanggalAsli} `
console.log(dataDiri)

