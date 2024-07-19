let pageDiv = document.getElementById("container");
let defaultPage = true;
const updateImg = () => {
  let flexBoxStage = document.getElementById("flexbox-stage");
  let flexboxStageImg = document.getElementById("flexbox-stage-img");
  flexboxStageImg.innerHTML = `<img src="img/flexbox-level-${flexBoxStage.value}.png" alt="Level ${flexBoxStage.value} Image">`;
};
const challengeForFlexBox = () => {
  defaultPage = true;
  page();
};
const challengeForGrid = () => {
  defaultPage = false;
  page();
};
const imageLevel = (levels) => {
  let flexBoxStage = document.getElementById("flexbox-stage");
  for (let i = 0; i < levels.length; i++) {
    flexBoxStage.innerHTML += `<option value="${levels[i]}">Level ${levels[i]}</option>`;
  }
  updateImg();
};
const page = () => {
  if (defaultPage == true) {
    const levels = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ];
    pageDiv.innerHTML = `
  <div class="flex-box-froggy">
          <h1>Froggy Flexbox</h1>
      <div>
        <label for="flexbox-stage">Pick a stage to display</label>
        <select name="flexbox-stage" id="flexbox-stage" onchange="updateImg()"></select>
        </select>
      </div>
    <div id="flexbox-stage-img"></div>
  </div>`;
    document.getElementById("flexbox-stage").innerHTML = `<option value="Completed">Level Completed</option>`;
    imageLevel(levels);
  } else {
    const levels = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];
    pageDiv.innerHTML = `<div class="flex-box-froggy">
          <h1>Grid Garden</h1>
      <div>
        <label for="flexbox-stage">Pick a stage to display</label>
        <select name="flexbox-stage" id="flexbox-stage" onchange="updateImg()"></select>
        </select>
      </div>
    <div id="flexbox-stage-img"></div>
  </div>`;
  }
};
page();
