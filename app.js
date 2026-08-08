const firebaseConfig = {
    apiKey: "AIzaSyAsuxoGaDS8Lw8CQnSFJ0vqLu6Z9rKw7GA",
    authDomain: "crudwithfirebase-59bc2.firebaseapp.com",
    databaseURL: "https://crudwithfirebase-59bc2-default-rtdb.firebaseio.com",
    projectId: "crudwithfirebase-59bc2",
    storageBucket: "crudwithfirebase-59bc2.firebasestorage.app",
    messagingSenderId: "677457053759",
    appId: "1:677457053759:web:c1d05a7e58fd2bd7c2108a",
    measurementId: "G-Y12MDGSRR6"
  };

  firebase.initializeApp(firebaseConfig)
  
  let rollV, nameV, genderV, addressV;

function readForm() {
    rollV = document.getElementById('rollNo').value;
    nameV = document.getElementById('fullName').value;
    genderV = document.getElementById('gender').value;
    addressV = document.getElementById('address').value;
}

document.getElementById('create').onclick = function () {
    readForm();
    firebase.database().ref('students/' + rollV).set({
        rollNo: rollV,
        fullName: nameV,
        gender: genderV,
        address: addressV
    })

    alert('Data Created!');

    document.getElementById('rollNo').value = "";
    document.getElementById('fullName').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
}


document.getElementById('read').onclick = function () {
    readForm();

    firebase.database().ref('student/' + rollV).on('value', function (snap) {
        document.getElementById('rollNo').value = snap.val().rollNo;
        document.getElementById('fullName').value = snap.val().fullName;
        document.getElementById('gender').value = snap.val().gender;
        document.getElementById('address').value = snap.val().address;

    })
    alert('Data Read!');
}

document.getElementById('update').onclick = function () {
    readForm();

    firebase.database().ref('student/' + rollV).update({
        fullName: nameV,
        gender: genderV,
        address: addressV
    })
    alert('Data Updated!');

    document.getElementById('rollNo').value = "";
    document.getElementById('fullName').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";

}

document.getElementById('delete').onclick = function () {
    readForm();

    firebase.database().ref('student/' + rollV).remove();
    alert('Data Deleted!');

    document.getElementById('rollNo').value = "";
    document.getElementById('fullName').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";

}