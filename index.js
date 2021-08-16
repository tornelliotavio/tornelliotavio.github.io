let items = [
  { cod: '4787', name: 'ACAFRAO CURCUMA' },
  { cod: '17794', name: 'ACAFRAO EM PO' },
  { cod: '5852', name: 'ALECRIM DO CAMPO FOLHA KG' },
  { cod: '871', name: 'ALECRIM KG' },
  { cod: '3384', name: 'ALHO DESIDRATADO EM FLOCOS KG' },
  { cod: '2318', name: 'ALHO DESIDRATADO EM PÓ KG' },
  { cod: '994', name: 'ALHO FRITO KG' },
  { cod: '1014', name: 'ALHO GRANULADO KG' },
  { cod: '4220', name: 'ALHO PORO KG' },
  { cod: '7898956903888', name: 'BACON FREE NUTRITIONAL YEAST 120G' },
  { cod: '7898453480318', name: 'BOMBAY EXTRATO NATURAL DE BAUNILHA 30ML' },
  { cod: '7898453465452', name: 'BOMBAY PT DRY RUB BLACK BEEF 250G' },
  { cod: '7898453465469', name: 'BOMBAY PT DRY RUB CHICKEN 2206G' },
  { cod: '7898453465445', name: 'BOMBAY PT DRY RUB PORK 210G' },
  { cod: '7898453466879', name: 'BOMBAY SPRAY FUMACA LIQUIDA 30ML' },
  { cod: '86', name: 'CANELA EM PAU PEQUENA KG' },
  { cod: '48', name: 'CANELA EM PO KG' },
  { cod: '4015', name: 'CARDAMOMO EM GRAO KG' },
  { cod: '2561', name: 'CARDAMOMO EM PÓ KG' },
  { cod: '2899', name: 'CEBOLA DESIDRATADA EM PO KG' },
  { cod: '772', name: 'CEBOLA FLOCOS KG' },
  { cod: '5159', name: 'CEBOLA FRITA HOLANDESA KG' },
  { cod: '2950', name: 'CEBOLINHA DESIDRATADA KG' },
  { cod: '7898956903895', name: 'CHEESE FREE NUTRITIONAL YEAST 120G' },
  { cod: '4268', name: 'CHIMI CHURRI COM PIMENTA' },
  { cod: '1762', name: 'CHIMI CHURRI TRADICIONAL' },
  { cod: '2417', name: 'COENTRO EM FLOCOS DESIDRATADO KG' },
  { cod: '4411', name: 'COENTRO EM GRAO KG' },
  { cod: '2745', name: 'COENTRO EM PO KG' },
  { cod: '2356', name: 'COLORAL PARAIBA EXTRA' },
  { cod: '6088', name: 'COMINHO EM GRAO KG' },
  { cod: '987', name: 'COMINHO MOIDO PURO KG' },
  { cod: '192', name: 'CRAVO DA INDIA EM GRAO KG' },
  { cod: '3193', name: 'CRAVO DA INDIA EM PO KG' },
  { cod: '963', name: 'CREME DE CEBOLA KG' },
  { cod: '2509', name: 'CURCUMA RAIZ - ACAFRAO' },
  { cod: '1007', name: 'CURRY KG' },
  { cod: '2424', name: 'ERVAS DE PROVANCE KG' },
  { cod: '802', name: 'ERVAS FINAS KG' },
  { cod: '17930', name: 'FOLHAS DE SALVIA' },
  { cod: '2394', name: 'FUMACA EM PO KG' },
  { cod: '7428329523230', name: 'FUMACA LIQUIDA PUROFOGO 200 ML' },
  { cod: '4770', name: 'GERÇAL FARINHA GERGELIM C/ SAL KG' },
  { cod: '6019', name: 'LEGUMES REFOGADOS KG' },
  { cod: '918', name: 'LEMON PEPPER KG' },
  { cod: '932', name: 'LIMAO E ERVAS FINAS KG' },
  { cod: '2387', name: 'LIMAO EM PÓ KG' },
  { cod: '7898957617340', name: 'LN SMART FUMACA LIQUIDA NOZ PECA 148ML' },
  { cod: '7898957617333', name: 'LN SMART FUMACA LIQUIDA ORIGINAL 148ML' },
  { cod: '3476', name: 'LOURO EM PÓ KG' },
  { cod: '697', name: 'LOURO FOLHAS KG' },
  { cod: '826', name: 'MANJERICAO DESIDRATADO EM FLOCOS KG' },
  { cod: '6040', name: 'MANJERONA KG' },
  { cod: '4640', name: 'MIX AROMA DE PEIXE KG' },
  { cod: '5890', name: 'MIX DE PIMENTA GRÃO KG' },
  { cod: '7898596081885', name: 'MOLHO SHOYO DE COCO AMINOS 150 ML COPRA' },
  { cod: '7898596081045', name: 'MOLHO SHOYO DE COCO AMINOS 250 ML COPRA' },
  { cod: '3506', name: 'MOLHO TARTARO' },
  { cod: '1885', name: 'MOSTARDA EM GRAO' },
  { cod: '3001', name: 'MOSTARDA EM PO' },
  { cod: '925', name: 'NOZ MOSCADA GRAO KG' },
  { cod: '2516', name: 'NOZ MOSCADA MOIDA KG' },
  { cod: '7898964269433', name: 'NUTME MIX OVOS ORIGINAL CROC 200G' },
  { cod: '7898964269440', name: 'NUTME MIX OVOS YEAST CROC 2006' },
  { cod: '864', name: 'OREGANO PERUANO KG' },
  { cod: '1748', name: 'PAPRICA DOCE DEFUMADA' },
  { cod: '956', name: 'PAPRICA DOCE KG' },
  { cod: '1045', name: 'PAPRICA PICANTE KG' },
  { cod: '2974', name: 'PIMENTA BRANCA EM GRÃO KG' },
  { cod: '2349', name: 'PIMENTA BRANCA MOÍDA KG' },
  { cod: '1021', name: 'PIMENTA CAIENA EM PO KG' },
  { cod: '1151', name: 'PIMENTA CALABRESA FLOCOS KG' },
  { cod: '3919', name: 'PIMENTA CHILLI KG' },
  { cod: '4213', name: 'PIMENTA CHIPOTLE EM PÓ KG' },
  { cod: '6071', name: 'PIMENTA DA JAMAICA EM GRAO KG' },
  { cod: '1168', name: 'PIMENTA MOIDA PRETA KG' },
  { cod: '1038', name: 'PIMENTA PRETA EM GRAO KG' },
  { cod: '3858', name: 'PIMENTA ROSA KG' },
  { cod: '3247', name: 'PIMENTA SIRIA EM PO KG' },
  { cod: '2332', name: 'PIMENTAO VERMELHO DESIDRATADO' },
  { cod: '5524', name: 'SAL DO ATACAMA FINO KG' },
  { cod: '628', name: 'SAL DO HIMALAIA FINO KG' },
  { cod: '598', name: 'SAL DO HIMALAIA GROSSO KG' },
  { cod: '5470', name: 'SAL GRANULADO SEM IODO KG' },
  { cod: '4749', name: 'SAL INTEGRAL KG' },
  { cod: '970', name: 'SAL MARINHO KG' },
  { cod: '3360', name: 'SAL NEGRO GROSSO KG' },
  { cod: '840', name: 'SALSA DESIDRATADA KG' },
  { cod: '7896552906944', name: 'SHOYO DE COCO 250 ML QUALICOCO' },
  { cod: '7896552907262', name: 'SHOYO DE COCO ORGANICO 250ML QUALICOCO' },
  { cod: '901', name: 'TEMPERO ANA MARIA KG' },
  { cod: '895', name: 'TEMPERO ANA MARIA LIGHT KG' },
  { cod: '1687', name: 'TEMPERO BAIANO FINO' },
  { cod: '765', name: 'TEMPERO CEBOLA SALSA E TOMATE KG' },
  { cod: '796', name: 'TEMPERO CEBOLA, SALSA E ALHO KG' },
  { cod: '4282', name: 'TEMPERO GARLIC PEPPER' },
  { cod: '4626', name: 'TEMPERO MEDITERRANEO' },
  { cod: '4206', name: 'TEMPERO MIX AROMA DE FEIJÃO KG' },
  { cod: '949', name: 'TEMPERO PARA CARNES EDU GUEDES KG' },
  { cod: '5807', name: 'TEMPERO PEGA MARIDO KG' },
  { cod: '2462', name: 'TEMPERO PESTO KG' },
  { cod: '2042', name: 'TOMILHO' },
  { cod: '833', name: 'VINAGRETE DESIDRATADO KG' },
  { cod: '819', name: 'ZATHAR KG' },
  { cod: '2592', name: 'ZIMBRO BAGAS' },
];
for (let item in items) {
  let arr = items[item].name.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let name = arr.join(' ').replace('Kg', 'KG');
  items[item].name = name;
}
let itemListHTML = document.getElementById('item-list');
for (let item of items) {
  addToItemList(itemListHTML, item.name);
}

function addToItemList(itemListHTML, name) {
  itemListHTML.innerHTML +=
    `<div class="col-6 col-md-6 col-lg-4 col-xl-3 cardContainer"><div class="card"><img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"><div class="card-body"><h4 class="card-title" data-bs-toggle="tooltip" data-bs-placement="top" title="${name}"><a>` +
    name +
    '</a></h4></div></div></div></div></div>';
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
}

function searchFilter() {
  let searchFilterVal = $('#searchFilterInput').val().toLowerCase();

  let itemListHTML = document.getElementById('item-list');
  itemListHTML.innerHTML = '';

  for (let item of items) {
    if (item.name.toLowerCase().indexOf(searchFilterVal) != -1) {
      addToItemList(itemListHTML, item.name);
    }
  }
}

function categoryFilter(category) {
  let itemListHTML = document.getElementById('item-list');
  itemListHTML.innerHTML = '';
  for (let item of items) {
    if (item.name.toLowerCase().startsWith(category) || category === 'all') {
      addToItemList(itemListHTML, item.name);
    }
  }
}
