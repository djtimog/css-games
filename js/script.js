const levels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24
];

let flexBoxStage = document.getElementById("flexbox-stage");
let flexboxStageImg = document.getElementById("flexbox-stage-img");
flexBoxStage.innerHTML = `<option value="Completed">Level Completed</option>`;

for (let i = 0; i < levels.length; i++) {
  flexBoxStage.innerHTML += `<option value="${levels[i]}">Level ${levels[i]}</option>`;
}

const updateImg = () => {
  flexboxStageImg.innerHTML = `<img src="img/flexbox-level-${flexBoxStage.value}.png" alt="Level ${flexBoxStage.value} Image">`;
};

updateImg();

flexBoxStage.addEventListener("change", updateImg());
