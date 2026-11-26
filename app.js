'use strict';

// Photorealistic studio garment catalog using generated studio photos + CSS color-grading variants
const PRODUCTS = [
  {
    id: 'pine-hoodie',
    name: 'Shadow Heavy Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 189,
    color: 'Deep Shadow',
    img: 'assets/hoodie-black.png',
    filter: 'contrast(1.08)',
    desc: '480 GSM brushed organic cotton fleece with dropped shoulders and double-lined hood.'
  },
  {
    id: 'obsidian-hoodie',
    name: 'Obsidian Heavy Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 189,
    color: 'Obsidian Black',
    img: 'assets/hoodie-black.png',
    filter: 'none',
    desc: '480 GSM brushed organic cotton fleece with dropped shoulders, double-lined hood, and concealed side pockets.'
  },
  {
    id: 'ash-graphic-hoodie',
    name: 'Kinetic Atelier Hoodie',
    category: 'hoodie',
    categoryLabel: 'GRAPHIC CAPSULE',
    price: 199,
    color: 'Ash Heather',
    img: 'assets/hoodie-grey.png',
    filter: 'none',
    desc: 'Boxy cropped silhouette featuring bold chest typography, natural fleece drape, and reinforced ribbed cuffs.'
  },
  {
    id: 'bone-hoodie',
    name: 'Bone Studio Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 189,
    color: 'Raw Bone',
    img: 'assets/hoodie-bone.png',
    filter: 'none',
    desc: 'Garment-dyed off-white fleece finished with enzyme wash for a soft, broken-in handfeel.'
  },
  {
    id: 'charcoal-hoodie',
    name: 'Charcoal Wash Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 195,
    color: 'Washed Charcoal',
    img: 'assets/hoodie-black.png',
    filter: 'brightness(1.25) contrast(0.95)',
    desc: 'Pigment-dyed charcoal fleece with vintage sun-faded wash and structured hood.'
  },
  {
    id: 'olive-hoodie',
    name: 'Stone Studio Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 195,
    color: 'Warm Stone',
    img: 'assets/hoodie-grey.png',
    filter: 'brightness(1.06) contrast(0.96)',
    desc: 'Heavyweight brushed fleece in warm stone with structured double-layer hood.'
  },
  {
    id: 'sand-hoodie',
    name: 'Cream Fleece Hoodie',
    category: 'hoodie',
    categoryLabel: 'CORE FLEECE',
    price: 179,
    color: 'Natural Cream',
    img: 'assets/hoodie-bone.png',
    filter: 'brightness(1.03)',
    desc: 'Relaxed everyday heavyweight hoodie in natural cream.'
  },
  {
    id: 'midnight-hoodie',
    name: 'Midnight Fleece Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 189,
    color: 'Midnight Ink',
    img: 'assets/hoodie-black.png',
    filter: 'contrast(1.12) brightness(0.96)',
    desc: 'Deep pitch-black heavyweight fleece engineered for clean architectural drape.'
  },
  {
    id: 'slate-graphic-hoodie',
    name: 'Slate Atelier Hoodie',
    category: 'hoodie',
    categoryLabel: 'GRAPHIC CAPSULE',
    price: 199,
    color: 'Slate Grey',
    img: 'assets/hoodie-grey.png',
    filter: 'brightness(0.9) contrast(1.06)',
    desc: 'Mid-tone slate heather fleece with crisp black chest print.'
  },
  {
    id: 'espresso-hoodie',
    name: 'Graphite Heavy Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 195,
    color: 'Graphite',
    img: 'assets/hoodie-black.png',
    filter: 'brightness(1.15) contrast(1.02)',
    desc: 'Rich graphite pigment-dyed cotton fleece.'
  },
  {
    id: 'chalk-hoodie',
    name: 'Chalk Minimal Hoodie',
    category: 'hoodie',
    categoryLabel: 'CORE FLEECE',
    price: 185,
    color: 'Chalk White',
    img: 'assets/hoodie-bone.png',
    filter: 'brightness(1.05) saturate(0.75)',
    desc: 'Clean chalk-white studio fleece with tonal stitching.'
  },
  {
    id: 'navy-hoodie',
    name: 'Heather Drop Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 189,
    color: 'Heather Grey',
    img: 'assets/hoodie-grey.png',
    filter: 'contrast(1.04)',
    desc: 'Heavyweight heather cotton fleece with dropped shoulders.'
  },
  {
    id: 'onyx-pullover',
    name: 'Onyx Studio Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 192,
    color: 'Deep Onyx',
    img: 'assets/hoodie-black.png',
    filter: 'brightness(0.95) contrast(1.1)',
    desc: 'Heavyweight matte onyx fleece with structured hood and ribbed hem.'
  },
  {
    id: 'fog-hoodie',
    name: 'Fog Atelier Hoodie',
    category: 'hoodie',
    categoryLabel: 'GRAPHIC CAPSULE',
    price: 199,
    color: 'Light Fog',
    img: 'assets/hoodie-grey.png',
    filter: 'brightness(1.08) contrast(0.98)',
    desc: 'Soft heather fog fleece featuring bold front chest typography.'
  },
  {
    id: 'ivory-hoodie',
    name: 'Ivory Raw Hoodie',
    category: 'hoodie',
    categoryLabel: 'CORE FLEECE',
    price: 185,
    color: 'Raw Ivory',
    img: 'assets/hoodie-bone.png',
    filter: 'brightness(1.02)',
    desc: 'Unbleached organic cotton fleece with relaxed oversized fit.'
  },
  {
    id: 'carbon-hoodie',
    name: 'Carbon Heavy Hoodie',
    category: 'hoodie',
    categoryLabel: 'HEAVYWEIGHT FLEECE',
    price: 195,
    color: 'Carbon',
    img: 'assets/hoodie-black.png',
    filter: 'brightness(1.18) contrast(1.04)',
    desc: 'Washed carbon black heavyweight fleece with dropped shoulders.'
  }
];

function createGarmentImg(item) {
  const filterStyle = item.filter && item.filter !== 'none' ? `style="filter: ${item.filter};"` : '';
  return `<img src="${item.img}" alt="${item.name}" loading="eager" decoding="async" ${filterStyle}>`;
}

// DOM References
const rackTrack = document.getElementById('rack-track');
const catalogGrid = document.getElementById('catalog-grid');
const marqueeTrack = document.getElementById('marquee-track');
const hudName = document.getElementById('hud-name');
const hudPrice = document.getElementById('hud-price');
const filterLinks = document.querySelectorAll('[data-filter-link]');
const toggleMarqueeBtn = document.getElementById('toggle-marquee-btn');

const productDialog = document.getElementById('product-dialog');
const dialogCloseBtn = document.getElementById('dialog-close-btn');
const dialogGarmentStage = document.getElementById('dialog-garment-stage');
const dialogCategory = document.getElementById('dialog-category');
const dialogTitle = document.getElementById('dialog-title');
const dialogPrice = document.getElementById('dialog-price');
const dialogDesc = document.getElementById('dialog-desc');
const dialogColorName = document.getElementById('dialog-color-name');
const viewBtns = document.querySelectorAll('.view-btn');
const sizeBtns = document.querySelectorAll('.size-btn');
const buyNowBtn = document.getElementById('buy-now-btn');
const addToCartBtn = document.getElementById('add-to-cart-btn');

const cartDialog = document.getElementById('cart-dialog');
const openCartBtn = document.getElementById('open-cart-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartCountEl = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutFeedback = document.getElementById('checkout-feedback');

const contactDialog = document.getElementById('contact-dialog');
const openContactBtn = document.getElementById('open-contact-btn');
const contactCloseBtn = document.getElementById('contact-close-btn');
const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');

let activeProduct = PRODUCTS[2];
let activeAngle = 'front';
let activeSize = 'M';
const cart = [];

const formatUSD = (n) => `$${n.toFixed(2)}`;

function renderRack(filter = 'all') {
  const base = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  const looped = [...base, ...base, ...base];
  rackTrack.innerHTML = looped.map((item) => `
    <button type="button" class="garment-card" data-id="${item.id}" role="listitem" aria-label="${item.name}, ${formatUSD(item.price)}">
      <span class="garment-clip" aria-hidden="true">
        <svg width="10" height="14" viewBox="0 0 10 14">
          <rect x="2" y="0" width="6" height="6" rx="1.5" fill="#1d1d1b"/>
          <path d="M5 5 L5 14" stroke="#3a3a37" stroke-width="2"/>
        </svg>
      </span>
      <span class="garment-neck-tag" aria-hidden="true">$${item.price}</span>
      <span class="garment-visual">${createGarmentImg(item)}</span>
    </button>
  `).join('');

  if (base.length > 0) {
    hudName.textContent = base[0].name;
    hudPrice.textContent = formatUSD(base[0].price);
  }
}

function renderCatalog() {
  if (!catalogGrid) return;
  catalogGrid.innerHTML = PRODUCTS.map((item) => `
    <button type="button" class="catalog-card" data-id="${item.id}">
      <div class="catalog-card-img">${createGarmentImg(item)}</div>
      <div class="catalog-card-info">
        <h3 class="catalog-card-title">${item.name}</h3>
        <span class="catalog-card-price">${formatUSD(item.price)}</span>
      </div>
      <p class="catalog-card-color">${item.color}</p>
    </button>
  `).join('');
}

function renderMarquee() {
  const doubled = [...PRODUCTS, ...PRODUCTS];
  marqueeTrack.innerHTML = doubled.map((item) => `
    <button type="button" class="slide-card" data-id="${item.id}">
      <div class="slide-card-img">${createGarmentImg(item)}</div>
      <h3 class="slide-card-title">${item.name}</h3>
      <div class="slide-card-meta">
        <span>${item.color}</span>
        <strong>${formatUSD(item.price)}</strong>
      </div>
    </button>
  `).join('');
}

function openProductModal(productId) {
  const found = PRODUCTS.find((p) => p.id === productId);
  if (!found) return;

  activeProduct = found;
  activeAngle = 'front';
  dialogCategory.textContent = found.categoryLabel;
  dialogTitle.textContent = found.name;
  dialogPrice.textContent = formatUSD(found.price);
  dialogDesc.textContent = found.desc;
  dialogColorName.textContent = found.color;
  dialogGarmentStage.innerHTML = createGarmentImg(found);
  dialogGarmentStage.style.transform = 'scaleX(1)';

  viewBtns.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.angle === 'front'));
  productDialog.showModal();
}

rackTrack.addEventListener('pointerover', (e) => {
  const card = e.target.closest('.garment-card');
  if (!card) return;
  const item = PRODUCTS.find((p) => p.id === card.dataset.id);
  if (item) {
    hudName.textContent = item.name;
    hudPrice.textContent = formatUSD(item.price);
  }
});

let isDraggingRack = false;
let dragStartX = 0;
let dragScrollLeft = 0;
let didDrag = false;

rackTrack.addEventListener('pointerdown', (e) => {
  isDraggingRack = true;
  didDrag = false;
  dragStartX = e.clientX;
  dragScrollLeft = rackTrack.scrollLeft;
});

window.addEventListener('pointermove', (e) => {
  if (!isDraggingRack) return;
  const dx = e.clientX - dragStartX;
  if (Math.abs(dx) > 6) didDrag = true;
  rackTrack.scrollLeft = dragScrollLeft - dx;
});

window.addEventListener('pointerup', () => {
  isDraggingRack = false;
});

rackTrack.addEventListener('click', (e) => {
  if (didDrag) return;
  const card = e.target.closest('.garment-card');
  if (card) openProductModal(card.dataset.id);
});

if (catalogGrid) {
  catalogGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.catalog-card');
    if (card) openProductModal(card.dataset.id);
  });
}

marqueeTrack.addEventListener('click', (e) => {
  const card = e.target.closest('.slide-card');
  if (card) openProductModal(card.dataset.id);
});

filterLinks.forEach((link) => {
  link.addEventListener('click', () => {
    renderRack(link.dataset.filterLink);
  });
});

toggleMarqueeBtn.addEventListener('click', () => {
  const paused = marqueeTrack.classList.toggle('is-paused');
  toggleMarqueeBtn.textContent = paused ? 'Play' : 'Pause';
});

viewBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeAngle = btn.dataset.angle;
    viewBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
    dialogGarmentStage.style.transform = activeAngle === 'back' ? 'scaleX(-1)' : 'scaleX(1)';
  });
});

dialogGarmentStage.addEventListener('click', () => {
  activeAngle = activeAngle === 'front' ? 'back' : 'front';
  viewBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.angle === activeAngle));
  dialogGarmentStage.style.transform = activeAngle === 'back' ? 'scaleX(-1)' : 'scaleX(1)';
});

sizeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeSize = btn.dataset.size;
    sizeBtns.forEach((b) => b.classList.toggle('is-selected', b === btn));
  });
});

function addToCart(product, size) {
  const existing = cart.find((c) => c.id === product.id && c.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCountEl.textContent = totalQty;
  cartSubtotalEl.textContent = formatUSD(subtotal);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your bag is currently empty.</p>';
    return;
  }

  cartItemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <div class="cart-item-thumb">${createGarmentImg(item)}</div>
      <div class="cart-item-details">
        <h2>${item.name}</h2>
        <p>Size ${item.size} · ${formatUSD(item.price)}</p>
      </div>
      <div class="cart-item-qty">
        <button type="button" class="qty-btn" data-action="dec" data-idx="${idx}" aria-label="Decrease quantity">-</button>
        <span>${item.qty}</span>
        <button type="button" class="qty-btn" data-action="inc" data-idx="${idx}" aria-label="Increase quantity">+</button>
      </div>
    </div>
  `).join('');
}

cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.qty-btn');
  if (!btn) return;
  const idx = Number(btn.dataset.idx);
  if (btn.dataset.action === 'inc') {
    cart[idx].qty += 1;
  } else {
    cart[idx].qty -= 1;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
  }
  renderCart();
});

buyNowBtn.addEventListener('click', () => {
  addToCart(activeProduct, activeSize);
  productDialog.close();
  checkoutFeedback.textContent = '';
  cartDialog.showModal();
});

addToCartBtn.addEventListener('click', () => {
  addToCart(activeProduct, activeSize);
  addToCartBtn.textContent = 'Added to cart ✓';
  setTimeout(() => {
    addToCartBtn.textContent = 'Add to cart';
  }, 1100);
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    checkoutFeedback.textContent = 'Add a piece to your bag first.';
    return;
  }
  checkoutFeedback.textContent = 'Order confirmed! Preparing studio dispatch.';
  cart.length = 0;
  renderCart();
});

dialogCloseBtn.addEventListener('click', () => productDialog.close());
openCartBtn.addEventListener('click', () => {
  checkoutFeedback.textContent = '';
  cartDialog.showModal();
});
cartCloseBtn.addEventListener('click', () => cartDialog.close());

openContactBtn.addEventListener('click', () => {
  contactFeedback.textContent = '';
  contactDialog.showModal();
});
contactCloseBtn.addEventListener('click', () => contactDialog.close());

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactFeedback.textContent = 'Message sent! Our studio will reply shortly.';
  contactForm.reset();
});

// Light-dismiss fallback for browsers without native <dialog closedby="any">
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const isOutside = (e, dialog) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => {
      pressedOutside = isOutside(e, dialog);
    });
    dialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && isOutside(e, dialog)) dialog.close();
    });
  }
}

renderRack('all');
renderCatalog();
renderMarquee();
renderCart();
