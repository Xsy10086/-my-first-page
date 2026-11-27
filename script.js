const btn = document.querySelector("#changeB");
const tit = document.querySelector("h1");
function changetit() {
  if (tit.textContent.trim() === "26级大数据") {
    tit.textContent = "努力成为全栈工程师ing";
  } else {
    tit.textContent = "26级大数据";
  }
}
btn.addEventListener("click", changetit);
const skills = [
  "打牢语法基础",
  "学会真正的计算机工程",
  "AI coding工作流",
  "掌握Git协作",
];
const list = document.querySelector("#skillList");
skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  list.appendChild(li);
});
