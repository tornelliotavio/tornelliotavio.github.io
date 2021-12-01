for (let item in items) {
  let arr = items[item].name.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let name = arr.join(' ').replace('Kg', 'KG');
  items[item].name = name;
}
categoryFilter('all');

function addToItemList(itemListHTML, item) {
  itemListHTML.innerHTML +=
    `<div class="col-6 col-md-6 col-lg-4 col-xl-3 cardContainer"><div class="card"><img class="card-img-top" src="${item.image}" alt="Card image cap"><div class="card-body"><h4 class="card-title" data-bs-toggle="tooltip" data-bs-placement="top" title="${item.name}"><a>` +
    item.name +
    '</a></h4></div></div></div></div></div>';
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
}

function getAddToItemListHtml(item) {
  return `<div class="col-6 col-md-6 col-lg-4 col-xl-3 cardContainer">
            <div class="card">
              <img class="card-img-top" src="${item.image}" alt="Card image cap">
            </div>
            <div class="card-body">
              <h4 class="card-title" data-bs-toggle="tooltip" data-bs-placement="top" title="${item.name}">
                <a>${item.name}</a>
              </h4>
            </div>
          </div>`;
}

function searchFilter() {
  let searchFilterVal = $('#searchFilterInput').val().toLowerCase();

  let itemListHTML = document.getElementById('item-list');
  itemListHTML.innerHTML = '';

  const targetHtml = items
    .filter((i) => i.name.toLowerCase().indexOf(searchFilterVal) != -1)
    .reduce((acc, curr) => (acc += getAddToItemListHtml(curr)), ``);
  itemListHTML.innerHTML = targetHtml;
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
}

function categoryFilter(category) {
  let itemListHTML = document.getElementById('item-list');
  itemListHTML.innerHTML = ``;

  const targetHtml = (
    category !== 'all' ? items.filter((i) => i.category === category) : items
  ).reduce((acc, curr) => (acc += getAddToItemListHtml(curr)), ``);

  itemListHTML.innerHTML = targetHtml;
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  // for (let item of items) {
  //   if (item.category === category || category === 'all') {
  //     addToItemList(itemListHTML, item);
  //   }
  // }
}
