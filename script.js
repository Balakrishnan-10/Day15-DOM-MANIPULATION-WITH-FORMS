// Create multiple element using funtion :
function ele(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

// Create h1,P elements :
const h1 = ele(
  "h1",
  "d-flex align-item-center justify-content-center",
  "title",
  ""
);
h1.innerHTML = "<strong>DOM Manipulation with FORM</strong>";

const p = ele(
  "p",
  "d-flex align-item-center justify-content-center fs-3",
  "description",
  ""
);
p.innerHTML = "<strong>This form is created by DOM</strong>";

// Create Form Tag :
const form = ele("form", "form-group", "form", "");

// Create Div tag with class container and row :
const division = ele("div", "container", "", "");
const div = ele("div", "row", "", "");
const divi = ele("div", "form-group", "", "");

function ele1(tag, classname, id, text, attname1, attval1, attname2, attval2) {
  let tags1 = document.createElement(tag);
  tags1.classList = classname;
  tags1.id = id;
  tags1.innerHTML = text;
  tags1.setAttribute(attname1, attval1);
  tags1.setAttribute(attname2, attval2);
  return tags1;
}

// Create All form details tags :
// First Name :
const div1 = ele("div", "col-sm-6 mb-3", "", "");
const label1 = ele1("label", "form-label fw-bold fs-3", "", "First Name :");
const input1 = ele1(
  "input",
  "form-control",
  "first-name",
  "",
  "type",
  "text",
  "placeholder",
  "First Name"
);
input1.setAttribute("required", "true");

// Last Name :
const div2 = ele("div", "col-sm-6 mb-3", "", "");
const label2 = ele1("label", "form-label fw-bold fs-3", "", "Last Name :");
const input2 = ele1(
  "input",
  "form-control",
  "last-name",
  "",
  "type",
  "text",
  "placeholder",
  "Last Name"
);
input2.setAttribute("required", "true");

// Email :
const div3 = ele("div", "col-sm-6 mb-3", "", "");
const label3 = ele1("label", "form-label fw-bold fs-3", "", "Email :");
const input3 = ele1(
  "input",
  "form-control",
  "email",
  "",
  "type",
  "text",
  "placeholder",
  "name@example.com"
);
input3.setAttribute("required", "true");

// Address :
const div4 = ele("div", "col-sm-6 mb-3", "", "");
const label4 = ele1("label", "form-label fw-bold fs-3", "", "Address :");
const input4 = ele1(
  "textarea",
  "form-control",
  "address",
  "",
  "type",
  "text",
  "rows",
  "3"
);
input4.setAttribute("required", "true");
input4.setAttribute("placeholder", "Address");

// Pin-Code :
const div5 = ele("div", "col-sm-6 mb-3", "", "");
const label5 = ele1("label", "form-label fw-bold fs-3", "", "Pin-Code :");
const input5 = ele1(
  "input",
  "form-control",
  "pincode",
  "",
  "type",
  "text",
  "placeholder",
  "Pin-Code"
);
input5.setAttribute("required", "true");

// Gender (Male and Femae):
const labell6 = ele1("label", "fw-bold fs-3 mb-2", "", "Gender :");
const div6 = ele("div", "form-check", "", "");
const label6 = ele1("label", "form-check-label", "", "Male");
const input6 = ele1(
  "input",
  "form-check-input",
  "male",
  "",
  "type",
  "radio",
  "name",
  "gender"
);
input6.setAttribute("value", "Male");
input6.setAttribute("checked", "");

const div7 = ele("div", "form-check", "", "");
const label7 = ele1("label", "form-check-label", "", "Female");
const input7 = ele1(
  "input",
  "form-check-input",
  "female",
  "",
  "type",
  "radio",
  "name",
  "gender"
);
input7.setAttribute("value", "Female");

// Choice of Foods :
const div111 = ele("div", "form-group", "foodselect", "");
const labell8 = ele1("label", "mb-2 fw-bold fs-3", "", "Choice of Foods :");
const div8 = ele("div", "form-check", "", "");
const label8 = ele1("label", "form-check-label", "", "South Indian Food");
const input8 = ele1(
  "input",
  "form-check-input",
  "s-india",
  "",
  "type",
  "checkbox",
  "name",
  "food"
);
input8.setAttribute("value", "South Indian Food");
input8.setAttribute("checked", "");

const div9 = ele("div", "form-check", "", "");
const label9 = ele1("label", "form-check-label", "", "Chinese");
const input9 = ele1(
  "input",
  "form-check-input",
  "chinese",
  "",
  "type",
  "checkbox",
  "name",
  "food"
);
input9.setAttribute("value", "Chinese");

const div10 = ele("div", "form-check", "", "");
const label10 = ele1("label", "form-check-label", "", "Japanese");
const input10 = ele1(
  "input",
  "form-check-input",
  "japanese",
  "",
  "type",
  "checkbox",
  "name",
  "food"
);
input10.setAttribute("value", "Japanese");
input10.setAttribute("checked", "");

const div11 = ele("div", "form-check", "", "");
const label11 = ele1("label", "form-check-label", "", "North Indian Food");
const input11 = ele1(
  "input",
  "form-check-input",
  "n-india",
  "",
  "type",
  "checkbox",
  "name",
  "food"
);
input11.setAttribute("value", "North Indian Food");

const div12 = ele("div", "form-check mb-3", "", "");
const label12 = ele1("label", "form-check-label", "", "Sea Food");
const input12 = ele1(
  "input",
  "form-check-input",
  "sea",
  "",
  "type",
  "checkbox",
  "name",
  "food"
);
input12.setAttribute("value", "Sea Food");

// State :
const div13 = ele("div", "col-sm-6 mb-3", "", "");
const label13 = ele1("label", "form-label fw-bold fs-3", "", "State :");
const input13 = ele1(
  "input",
  "form-control",
  "state",
  "",
  "type",
  "text",
  "placeholder",
  "State"
);
input13.setAttribute("required", "true");

// Country :
const div14 = ele("div", "col-sm-6 mb-3", "", "");
const label14 = ele1("label", "form-label fw-bold fs-3", "", "Country :");
const input14 = ele1(
  "input",
  "form-control",
  "country",
  "",
  "type",
  "text",
  "placeholder",
  "Country"
);
input14.setAttribute("required", "true");

// Button :
const div15 = ele("div", "mb-3", "", "");
const button = ele1("button", "btn btn-primary", "submit", "Submit");
button.setAttribute("type", "submit");
const button1 = ele1("button", "btn btn-danger ms-5", "submit", "Reset");
button1.setAttribute("type", "reset");

div1.append(label1, input1);
div2.append(label2, input2);
div3.append(label3, input3);
div4.append(label4, input4);
div5.append(label5, input5);
div6.append(input6, label6);
div7.append(input7, label7);
div111.append(labell8, div8, div9, div10, div11, div12);
div8.append(input8, label8);
div9.append(input9, label9);
div10.append(input10, label10);
div11.append(input11, label11);
div12.append(input12, label12);
div13.append(label13, input13);
div14.append(label14, input14);
div15.append(button,button1);
divi.append(
  div1,
  div2,
  div3,
  div4,
  div5,
  labell6,
  div6,
  div7,
  div111,
  div13,
  div14,
  div15
);
div.append(divi);
division.append(div);
form.append(division);

// Table creation :
const h2 = ele(
  "h1",
  "d-flex align-item-center justify-content-center",
  "title",
  ""
);
h2.innerHTML = "<strong>Temporary Database</strong>";

const table = ele(
  "table",
  "table text-center table-bordered border-white table-dark table-striped",
  "",
  ""
);
const thead = ele("thead", "", "", "");
const tr = ele("tr", "", "", "");
const th1 = ele("th", "", "", "First Name");
const th2 = ele("th", "", "", "Last Name");
const th3 = ele("th", "", "", "Email");
const th4 = ele("th", "", "", "Address");
const th5 = ele("th", "", "", "Pincode");
const th6 = ele("th", "", "", "Gender");
const th7 = ele("th", "", "", "Foods");
const th8 = ele("th", "", "", "State");
const th9 = ele("th", "", "", "Country");
const body = ele("tbody", "", "", "");
const tr1 = ele("tr", "", "", "");
const td1 = ele("td", "", "1", "");
const td2 = ele("td", "", "2", "");
const td3 = ele("td", "", "3", "");
const td4 = ele("td", "", "4", "");
const td5 = ele("td", "", "5", "");
const td6 = ele("td", "", "6", "");
const td7 = ele("td", "", "7", "");
const td8 = ele("td", "", "8", "");
const td9 = ele("td", "", "9", "");
const di = ele("div", "overflow-scroll mb-3", "", "");

tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);
thead.append(tr);
tr1.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
body.append(tr1);
table.append(thead, body);
di.append(table);
divi.append(h2, di);

document.body.append(h1, p, form);

// write a button logic funtion :
const submit = document.getElementById("submit");
submit.addEventListener("click", submitted);
function submitted(event) {
  event.preventDefault();
  const fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const foods = document.querySelectorAll(
    "#foodselect input[type='checkbox']:checked"
  );
  const select = Array.from(foods).map((checkbox) => checkbox.value);
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  // Adding table :
  const n1 = document.getElementById("1");
  const n2 = document.getElementById("2");
  const n3 = document.getElementById("3");
  const n4 = document.getElementById("4");
  const n5 = document.getElementById("5");
  const n6 = document.getElementById("6");
  const n7 = document.getElementById("7");
  const n8 = document.getElementById("8");
  const n9 = document.getElementById("9");
  n1.innerHTML = `${fname}`;
  n2.innerHTML = `${lname}`;
  n3.innerHTML = `${email}`;
  n4.innerHTML = `${address}`;
  n5.innerHTML = `${pincode}`;
  n6.innerHTML = `${gender}`;
  n7.innerHTML = `${select}`;
  n8.innerHTML = `${state}`;
  n9.innerHTML = `${country}`;
}
