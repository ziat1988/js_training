/**
 * clientHeight vs offsetHeight vs scrollHeight
 *
 */
import "./1-height.scss";
const divRule = document.getElementById("rules");
/**My test */
(function init() {
  showInfo();
  document.getElementById("autoscroll").addEventListener("click", scrollBottom);
})();

function scrollBottom(event) {
  const dimension = new InfoDimension();

  let positionToScroll =
    dimension.scrollHeightInfo - dimension.clientHeightInfo; // ne pas  soustraire scrollTop

  divRule.scrollTo({
    top: positionToScroll,
    left: 0,
  });
}

function InfoDimension() {
  this.scrollHeightInfo = divRule.scrollHeight;
  this.clientHeightInfo = divRule.clientHeight;
  this.offsetHeightInfo = divRule.offsetHeight;
  this.heightInner = getComputedStyle(divRule).getPropertyValue("height");
}

function showInfo() {
  const divRule = document.getElementById("rules");
  let row = document.getElementsByClassName("row")[0];
  let divNote = document.createElement("div");

  let scrollHeightInfo = divRule.scrollHeight;
  let clientHeightInfo = divRule.clientHeight;
  let offsetHeightInfo = divRule.offsetHeight;
  let heightInner = getComputedStyle(divRule).getPropertyValue("height");
  let infoText = `textarea#rules
            <p> * height div : ${heightInner} </p>
            <p> * scroll height: ${scrollHeightInfo} </p>
            <p> * offset height: ${offsetHeightInfo}  (height div & padding + border + scrollbar if rendered)</p>
            <p> * clientHeight : ${clientHeightInfo} (height div + padding)</p>
          
                `;
  divNote.innerHTML = infoText;

  divNote.classList.add("info");

  row.insertAdjacentElement("beforeend", divNote);
}

/** end my test */

function checkReading() {
  if (checkReading.read) {
    return;
  }

  checkReading.blabla = "test";

  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  console.log("scroll top la:", this.scrollTop);
  document.registration.accept.disabled = document.getElementById(
    "nextstep"
  ).disabled = !checkReading.read; //

  checkReading.noticeBox.innerHTML = checkReading.read
    ? "Thank you."
    : "Please, scroll and read the following text.";
}

// function execute toute de suite par window.onload()
onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("div");
  // be careful rather use document.getElementById("myform").elements["foo"]
  document.registration.accept.checked = false; // au début make checkbox can not be select
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.onscroll = checkReading; // attribute function to onscroll event

  checkReading.call(oToBeRead); // oToBeRead : object reference this in function checkReading & call function luon
};
