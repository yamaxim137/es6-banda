//редактирование данных в одной персоне
function editBandit(i){
  display("create_person");
  document.getElementById("textFirstName").value=  arrBandits[i].firstName;
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
  constructor(firstName){
    this.firstName = firstName;
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
}

//наследники

class OneExtendsClass extends BaseClass{
  constructor(firstName, type1, type2){
    super(firstName);
    this.type1 = type1;
    this.type2 = type2;
    this.type = 'killer';
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
  constructor(firstName, type4, type3){
    super(firstName);
    this.type4 = type4;
    this.type3 = type3;
    this.type = 'sniper';
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
let bandit1 = new OneExtendsClass("John", 123, 123);
arrBandits.push(bandit1); 
let bandit2 = new TwoExtendsClass("Den", 123, 123);
arrBandits.push(bandit1);
let bandit3 = new OneExtendsClass("Pit", 123, 123);
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



  let firstName = document.getElementById("textFirstName").value;
  let type = checkRadio();
   switch (type) {
    case "killer":
      arrBandits[arrBandits.length] = new OneExtendsClass(firstName, /*123, 123*/);
      printInfo(arrBandits);
      display("information");
      alert("Добавил нового");
    break;
    case "sniper":
      arrBandits[arrBandits.length] = new TwoExtendsClass(firstName);
      printInfo(arrBandits);
      display("information");
      alert("Добавил нового");
      break;
    default :
      arrBandits[arrBandits.length] = new OneExtendsClass(firstName);
      printInfo(arrBandits);
      display("information");
      alert("Добавил нового");
  } 
});


document.getElementById("mainMenu").addEventListener("click",function() {
  display("information");
});
