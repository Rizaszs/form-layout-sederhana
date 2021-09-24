function showData() {
  let name = document.getElementById("name").value;
  display_name.innerHTML = name;
  let number = document.getElementById("phone").value;
  display_phone.innerHTML = number;
  let summary = document.getElementById("summary").value;
  display_summary.innerHTML = summary;
  let email = document.getElementById("email").value;
  display_email.innerHTML = email;
  let address = document.getElementById("address").value;
  display_address.innerHTML = address;
}

/*
innerHTML adalah sebuah atribut di dalam (objek) elemen HTML yang berguna untuk menampilkan output.

getElementById digunakan untuk mengambil suatu value dari form input yang pastinya dari element HTML dimana element tersebut sudah kita buatkan id. Maka kita dapat menggunakan getElementById.
*/