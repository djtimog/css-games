let pageDiv = document.getElementById("container");
let defaultPage = splitCookies(0);
let game = splitCookies(1);

function splitCookies(i) {
  const cookieString = document.cookie;
  const cookieSegments = cookieString.split(";");

  const cookies = [];
  for (const segment of cookieSegments) {
    const value = segment.trim().split("=");
    cookies.push(value);
  }

  const cookiesCheck = (cookies, i) => {
    if (cookies == []) {
      returnCookie = [
        ["defaultPage", "true"],
        ["game", "flexbox"],
      ];
    } else {
      returnCookie = cookies;
    }
    return returnCookie[i][1];
  }
  return cookiesCheck(cookies, i);
}

const updateImg = () => {
  let flexBoxStage = document.getElementById("flexbox-stage");
  let flexboxStageImg = document.getElementById("flexbox-stage-img");
  flexboxStageImg.innerHTML = `<img src="img/${game}-level-${flexBoxStage.value}.png" alt="Level ${flexBoxStage.value} Image">`;
};

const challengeForFlexBox = () => {
  document.cookie = "defaultPage=true";
  document.cookie = "game=flexbox";
  defaultPage = splitCookies(0);
  game = splitCookies(1);
  page(defaultPage);
};

const challengeForGrid = () => {
  document.cookie = "defaultPage=false";
  document.cookie = "game=gridgarden";
  defaultPage = splitCookies(0);
  game = splitCookies(1);
  page(defaultPage);
};

const imageLevel = (levels) => {
  let flexBoxStage = document.getElementById("flexbox-stage");
  for (let i = 0; i < levels.length; i++) {
    flexBoxStage.innerHTML += `<option value="${levels[i]}">Level ${levels[i]}</option>`;
  }
  updateImg();
};

const page = (defaultPage) => {
  if (defaultPage == "true") {
    document.getElementById("froggyflex").classList.add("btnnt");
    document.getElementById("gardengrid").classList.remove("btnnt");
    document.getElementById("container").classList.remove("container2");
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
    document.getElementById(
      "flexbox-stage"
    ).innerHTML = `<option value="Completed">Level Completed</option>`;

    // calling the function image level function

    imageLevel(levels);
  } else {
    document.getElementById("froggyflex").classList.remove("btnnt");
    document.getElementById("gardengrid").classList.add("btnnt");
    document.getElementById("container").classList.add("container2");
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
    document.getElementById(
      "flexbox-stage"
    ).innerHTML = `<option value="Completed">Level Completed</option>`;

    // calling the function image level function

    imageLevel(levels);
  }
};
page(defaultPage);
