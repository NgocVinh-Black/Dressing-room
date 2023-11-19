let arrItem = [];
let arrTabPane = [];
let arrNav = [];

// lấy dữ liệu json
function getDataJson() {
  var promise = axios({
    method: "GET",
    url: "../data/Data.json",
    responseType: "json",
  });
  promise
    .then(function (result) {
      arrItem = result.data;
      arrTabPane = result.data.tabPanes;
      arrNav = result.data.navPills;
      renderDataNav(result.data.navPills);
      renderDataItem(result.data.tabPanes);
      renderDataItem(
        arrTabPane.filter((item, index) => {
          return item.type == "topclothes";
        })
      );
    })
    .catch(function (error) {
      console.log(error);
    });
}
getDataJson();

// hiển thị lên giao diện từ giữ liệu json
function renderDataNav(arr) {
  var content = "";
  for (let i = 0; i < arr.length; i++) {
    var nav_item = arr[i];
    if (i == 0) {
      content += `
         <li onclick="renderFilter('${nav_item.type}')" class="nav_item col border p-3 active"><a class="nav-link" data-toggle="pill" href="#tabContentDenger"
         >${nav_item.showName}</a</li>
        `;
    } else {
      content += `
            <li onclick="renderFilter('${nav_item.type}')" class="nav_item col border p-3"><a class="nav-link" data-toggle="pill" href="#tabContentDenger"
            >${nav_item.showName}</a</li>
        `;
    }
  }
  document.querySelector(".nav-pills").innerHTML = content;
}
//
function renderDataItem(arr) {
  var content = "";
  for (let i = 0; i < arr.length; i++) {
    var item_product = arr[i];
    content += `
        <div class="col-md-3 tab_detail">
                    <div class="item" data-item-id="tab_item_1">
                      <img
                        src="${item_product.imgSrc_jpg}"
                        alt=""
                      />
                      <h3>${item_product.name}</h3>
                      <button id="thuDo" onclick="renderBody('${item_product.type}','${item_product.imgSrc_png}')">Thử đồ</button>
                    </div>
                  </div>
        `;
  }
  document.getElementById("topClothesItems").innerHTML = content;
}
//
function renderFilter(type) {
  var dk1 = arrTabPane.filter((item, index) => {
    return item.type == type;
  });
  renderDataItem(dk1);
}

function renderBody(type, imgpng) {
  var ao = document.querySelector(".contain").querySelector(".bikinitop");
  var quan = document.querySelector(".contain").querySelector(".bikinibottom");
  var giayDep = document.querySelector(".contain").querySelector(".feet");
  var tuiSach = document.querySelector(".contain").querySelector(".handbag");
  var dayChuyen = document.querySelector(".contain").querySelector(".necklace");
  var kieuToc = document.querySelector(".contain").querySelector(".hairstyle");
  var nen = document.querySelector(".contain").querySelector(".background");
  if (type == "topclothes") {
    ao.innerHTML = `<img style="width: 250px; height: 500px;" src="${imgpng}" alt="" />`;
  }
  if (type == "botclothes") {
    quan.innerHTML = `<img style="width: 250px; height: 500px;" src="${imgpng}" alt="" />`;
  }
  if (type == "shoes") {
    giayDep.innerHTML = `<img style="width: 500px; height: 1000px;" src="${imgpng}" alt="" />`;
  }
  if (type == "handbags") {
    tuiSach.innerHTML = `<img style="width: 500px; height: 1000px;" src="${imgpng}" alt="" />`;
  }
  if (type == "necklaces") {
    dayChuyen.innerHTML = `<img style="width: 500px; height: 1000px;" src="${imgpng}" alt="" />`;
  }
  if (type == "hairstyle") {
    kieuToc.innerHTML = `<img style="width: 1500px; height: 1700px; padding-bottom: 150px; padding-right: 370px;" src="${imgpng}" alt="" />`;
  }
  if (type == "background") {
    nen.innerHTML = `<img style="width: 100%; height: 1500px; background-size: cover; background-repeat: no-repeat;" src="${imgpng}" alt="" />`;
  }
}
