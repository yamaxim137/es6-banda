//редактирование данных в одной персоне
function editBandit(i){
  display("create_person");
  document.getElementById("textFirstName").value = arrBandits[i].firstName;
  document.getElementById("textSurtName").value = arrBandits[i].surName;
  document.getElementById("textBirthDay").value = arrBandits[i].birthDay;
  document.getElementById("textFirstDay").value = arrBandits[i].surName;
  document.getElementById("textAdres").value = arrBandits[i].adres;
  document.getElementById("textPhone").value = arrBandits[i].phone;
  deleteBandit(i,arrBandits);
  document.getElementById("mainMenu").style.display="none";
}

//удаление информации о персоне из массива и страницы

function deleteBandit(i,arrBandits) {
  arrBandits.splice(i,1);
  printInfo(arrBandits);
}

// вывод всей информации на странице о выбранной персоне в классе all_info

function printDetailedInfo(i){
  let form = document.getElementById("all_info").getElementsByTagName("form");
  // первый инпут в форме
  form[0].innerHTML='<br>';
  form[0].innerHTML+='<div class="detailInfo">'+
      '<div class="details">'+
        '<div class="elem">Имя</div>'+
      '</div>'+
      '<div class="details">'+
        '<div class="elem">'+arrBandits[i].firstName+'</div>'+
      '</div>'+
    '</div><br>'+
    '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';

  document.getElementById("mainMenu2").addEventListener("click",function() {
    display("information");
  });
}

  // отрисовка всей информации о персонах в классе info

function printInfo(arrBandits) {
  let form = document.getElementById("information").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  //Первая (верхняя) строка таблицы
  form[0].innerHTML+='<div class="text_description">'+
    '<div class="text_name strong">Имя</div>'+
    '</div>';

  for (let i=0; i<arrBandits.length; i++) {
    //каждое i - информация о персоне

    form[0].innerHTML+='<div class="text_description">'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].firstName+'</div>'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].surName+'</div>'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].birthDay+'</div>'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].firstDay+'</div>'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].adres+'</div>'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].phone+'</div>'+
      '<div class="text_name " id="edit'+i+'">Редактировать</div>'+
      '<div class="text_name " id="remove'+i+'">Удалить</div>'+
      '</div>';
  }
  form[0].innerHTML+='<br>'+
  '<input type="button" id="newBanditButton" class="buttons" value="Добавить нового бандита">';

  // добавим обработчики

  for (let i=0;i<arrBandits.length;i++){
    let edit='edit'+i;
    let remove='remove'+i;
    let details='details'+i;
    document.getElementById(edit).style.color="blue";
    document.getElementById(remove).style.color="red";
    document.getElementById(details).style.color="green";

    document.getElementById(details).addEventListener("click",function(){
      printDetailedInfo(i,arrBandits);
      display("all_info");
    });

    document.getElementById(edit).addEventListener("click",function(){
      editBandit(i);
    });
    document.getElementById(remove).addEventListener("click",function(){
      if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
      arrBandits[i].firstName + " " +arrBandits[i].secondName+"?")) {
          deleteBandit(i,arrBandits);
      } else {

      }

    });
  }
  document.getElementById("newBanditButton").addEventListener("click",function(){
    display("create_person");
    document.getElementById("createPerson").style.display="";
  })
}

function display(visibleId/*выбирается либо:"information" либо "all_info" либо "create_person"*/) {
  //display flex чтобы отобразить нужный блок

  switch (visibleId) {
  case "create_person":
  document.getElementById("information").style.display="none";
  document.getElementById("all_info").style.display="none";
  document.getElementById("create_person").style.display="flex";
  break;
  case "all_info":
  document.getElementById("information").style.display="none";
  document.getElementById("all_info").style.display="flex";
  document.getElementById("create_person").style.display="none";
  break;
  case "information":
  default :
  document.getElementById("information").style.display="flex";
  document.getElementById("all_info").style.display="none";
  document.getElementById("create_person").style.display="none";
  }
}

//родительский класс гет сет

class BaseClass{
  constructor(firstName,surName,birthDay,firstDay,adres,phone){
    this._firstName = firstName;
    this._surName = surName;
    this._birthDay = birthDay;
    this._firstDay = firstDay;
    this._adres = adres;
    this._phone = phone;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    if (value.length == "") {
      alert("Введите firstName");
    } 
    this._firstName = value;
  }

  get surName(){
    return this._surName;
  }

  set surName(value){
    if (value.length == "") {
      alert("Введите surName");
    } 
    this._surName = value;
  }

  get birthDay(){
    return this._birthDay;
  }

  set birthDay(value){
    if (value.length == "") {
      alert("Введите birthDay");
    } 
    this._birthDay = value;
  }

  get firstDay(){
    return this._firstDay;
  }

  set firstDay(value){
    if (value.length == "") {
      alert("Введите firstDay");
    } 
    this._firstDay = value;
  }

  get adres(){
    return this._adres;
  }

  set adres(value){
    if (value.length == "") {
      alert("Введите adres");
    } 
    this._adres = value;
  }

  get phone(){
    return this._phone;
  }

  set phone(value){
    if (value.length == "") {
      alert("Введите phone");
    } 
    this._phone = value;
  }  
}

//наследники

class OneExtendsClass extends BaseClass{
  constructor(firstName,surName,birthDay,firstDay,adres,phone, type1, type2){
    super(firstName,surName,birthDay,firstDay,adres,phone);
    this._type1 = type1;
    this._type2 = type2;
    this._type = 'killer';
  }

  // get firstName(){
  //   return this._firstName;
  // }

  // set firstName(){
  //   if (value.length == "") {
  //     alert("Введите firstName");
  //   } 
  //   this._firstName = value;
  // }
}

class TwoExtendsClass extends BaseClass{
  constructor(firstName,surName,birthDay,firstDay,adres,phone, type4, type3){
    super(firstName,surName,birthDay,firstDay,adres,phone);
    this._type4 = type4;
    this._type3 = type3;
    this._type = 'sniper';
  }

  // get firstName(){
  //   return this._firstName;
  // }

  // set firstName(){
  //   if (value.length == "") {
  //     alert("Введите firstName");
  //   } 
  //   this._firstName = value;
  // }
}


// проверка какая радио-кнопка и возвращаем его value
function checkRadio() {
    var radio=document.getElementsByName('radioBanditType');
    for (var i=0;i<radio.length; i++) {
        if (radio[i].checked) {
            return(radio[i].value);
        }
    }
}

let arrBandits = []; // массив из персон


//Создание экземпляров класса



//статичные 
let bandit1 = new OneExtendsClass("John", "Smith", "10.02.1991", "25.12.2005");
arrBandits.push(bandit1); 
let bandit2 = new TwoExtendsClass("Den", "Simons", 123);
arrBandits.push(bandit1);
let bandit3 = new OneExtendsClass("Pit", "Bush", 123);
arrBandits.push(bandit1);
display("information");
printInfo(arrBandits);




// главная страница готова
// с кнопками crud


/*listeners*/
//
//на главное меню
document.getElementById("createPerson").addEventListener("click", function() {
  document.getElementById("mainMenu").style.display="";

  let initBandit = () => {
    printInfo(arrBandits);
    display("information");
    alert("Добавил нового");
  }

  let firstName = document.getElementById("textFirstName").value;
  let surName = document.getElementById("textSurName").value;
  let birthDay = document.getElementById("textBirthDay").value;
  let firstDay = document.getElementById("textFirstDay").value;
  let adres = document.getElementById("textAdres").value;
  let phone = document.getElementById("textPhone").value;

  let type = checkRadio();
   switch (type) {
    case "killer":
      arrBandits[arrBandits.length] = new OneExtendsClass(firstName,surName,birthDay,firstDay,adres,phone);
      initBandit();
    break;
    case "sniper":
      arrBandits[arrBandits.length] = new TwoExtendsClass(firstName,surName,birthDay,firstDay,adres,phone);
      initBandit();
      // printInfo(arrBandits);
      // display("information");
      // alert("Добавил нового");
      break;
    default :
      arrBandits[arrBandits.length] = new OneExtendsClass(firstName,surName,birthDay,firstDay,adres,phone);
      initBandit();
      // printInfo(arrBandits);
      // display("information");
      // alert("Добавил нового");
  } 
});


document.getElementById("mainMenu").addEventListener("click",function() {
  display("information");
});
