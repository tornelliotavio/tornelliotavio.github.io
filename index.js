let currentCategory = 'herbal';

for (let item in items) {
  let arr = items[item].name.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let name = arr.join(' ').replace('Kg', 'KG');
  items[item].name = name;
}

let finalCategories = '';
let finalCategoriesMobile = '';

for (let cat in itemCategories) {
  finalCategories += getAddToCategory(cat);
  finalCategoriesMobile += getAddToCategory(cat, true);
}

let categoryHTML = document.getElementById('list-group');
categoryHTML.innerHTML = finalCategories;
let categoryMobileHTML = document.getElementById('list-groupMobile');
categoryMobileHTML.innerHTML = finalCategoriesMobile;

categoryFilter(currentCategory);

function getAddToCategory(cat, mobile = false) {
  return (
    `<li id="` +
    (cat + (mobile ? 'M' : '')) +
    `" class="list-group-item" onclick="categoryFilter('` +
    cat +
    `')">
    <a>` +
    itemCategories[cat] +
    `</a>
  </li>`
  );
}

function getAddToItemListHtml(item) {
  const jpgFileName = './assets/products/' + item.name.toUpperCase() + '.jpg';
  const pngFileName = './assets/products/' + item.name.toUpperCase() + '.png';

  let image = jpgFileName;

  // try {
  //   if (fs.existsSync('./assets/products/' + jpgFileName)) {
  //     image = './assets/products/' + jpgFileName;
  //   }
  //   if (fs.existsSync('./assets/products/' + pngFileName)) {
  //     image = './assets/products/' + pngFileName;
  //   }
  // } catch (err) {
  //   console.error(err);
  // }

  return `<div class="col-6 col-md-6 col-lg-4 col-xl-3 cardContainer">
            <div class="card">
              <img class="card-img-top" src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-body">
              <h4 style="margin-bottom: 0px;" class="card-title" data-bs-toggle="tooltip" data-bs-placement="top" title="${
                item.name
              }">
                <a>${item.name}</a>
              </h4>
              <div class="item-footer text-muted">
              Categoria: ${itemCategories[item.category]}
            </div>
            </div>
          </div>`;
}

function searchFilter() {
  let searchFilterVal = $('#searchFilterInput').val().toLowerCase();

  let itemListHTML = document.getElementById('item-list');
  let itemListTitleHTML = document.getElementById('item-list-title');

  itemListHTML.innerHTML = '';
  itemListTitleHTML.innerHTML =
    searchFilterVal.length < 1
      ? itemCategories[currentCategory]
      : searchFilterVal + ' em ' + itemCategories[currentCategory];

  if (searchFilterVal.length < 1) {
    categoryFilter(currentCategory);
  } else {
    let currentCatItems = items.filter(
      (i) => i.category == currentCategory || currentCategory == 'all',
    );
    console.log(currentCatItems);
    const targetHtml = currentCatItems
      .filter((i) => i.name.toLowerCase().indexOf(searchFilterVal) != -1)
      .reduce((acc, curr) => (acc += getAddToItemListHtml(curr)), ``);
    itemListHTML.innerHTML = targetHtml;
    $(function () {
      $('[data-bs-toggle="tooltip"]').tooltip();
    });
  }
}

function categoryFilter(category) {
  const lastCategory = currentCategory;

  let itemListHTML = document.getElementById('item-list');
  let itemListTitleHTML = document.getElementById('item-list-title');
  itemListHTML.innerHTML = ``;
  $('#searchFilterInput').val('');

  const targetHtml = (
    category !== 'all' ? items.filter((i) => i.category === category) : items
  ).reduce((acc, curr) => (acc += getAddToItemListHtml(curr)), ``);

  itemListHTML.innerHTML = targetHtml;
  if (itemCategories[category]) {
    currentCategory = category;
  }
  itemListTitleHTML.innerHTML = itemCategories[category] || '';

  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  $('#' + lastCategory).removeClass('active');
  $('#' + category).addClass('active');
  $('#' + lastCategory + 'M').removeClass('active');
  $('#' + category + 'M').addClass('active');
}
