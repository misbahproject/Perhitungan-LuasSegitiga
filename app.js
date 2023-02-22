const segitigaForm = document.getElementById("segitigaForm");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const demoContainer = document.getElementById("demoContainer");

const hasilNilai = JSON.parse(localStorage.getItem("segitiga")) || [];

const addSegitiga = (alas, tinggi, hasil) => {
    hasilNilai.push ({
        alas, 
        tinggi, 
        hasil
    });

    localStorage.setItem("segitiga", JSON.stringify(hasilNilai));

    return {alas, tinggi, hasil};
}

const createSegitiga = ({alas, tinggi, hasil}) => {
    const segitigaDiv = document.createElement("div");
    const alas1 = document.createElement("p");
    const tinggi1 = document.createElement("p");
    const hasil1 = document.createElement("h2");

    alas1.innerHTML = "Nilai Alas : " + alas;
    tinggi1.innerHTML = "Nilai Tinggi : " + tinggi;
    hasil1.innerHTML = "Hasilnya adalah : " + hasil;

    segitigaDiv.append(alas1, tinggi1, hasil1);
    demoContainer.appendChild(segitigaDiv);
}

hasilNilai.forEach(createSegitiga); 

segitigaForm.onsubmit = e => {
    e.preventDefault();

    const vAlas = alas.value;
    const vTinggi = tinggi.value;
    const luas = (vAlas * vTinggi)/2;

    const newSegitiga = addSegitiga(
        vAlas,
        vTinggi, 
        luas
    );

    createSegitiga(newSegitiga)

    alas.value = ""
    tinggi.value = ""
}


