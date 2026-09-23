// US QuickCalc - Pure Standalone Vanilla JavaScript (Zero Dependencies)

const US_STATES = [
  { code: 'AL', name: 'Alabama', salesTax: 9.29, incomeTax: 4.5 },
  { code: 'AK', name: 'Alaska', salesTax: 1.82, incomeTax: 0 },
  { code: 'AZ', name: 'Arizona', salesTax: 8.37, incomeTax: 2.5 },
  { code: 'AR', name: 'Arkansas', salesTax: 9.47, incomeTax: 4.4 },
  { code: 'CA', name: 'California', salesTax: 8.85, incomeTax: 6.0 },
  { code: 'CO', name: 'Colorado', salesTax: 7.81, incomeTax: 4.4 },
  { code: 'CT', name: 'Connecticut', salesTax: 6.35, incomeTax: 5.5 },
  { code: 'DE', name: 'Delaware (0% Sales Tax)', salesTax: 0.0, incomeTax: 5.2 },
  { code: 'FL', name: 'Florida (No State Tax)', salesTax: 7.02, incomeTax: 0 },
  { code: 'GA', name: 'Georgia', salesTax: 7.38, incomeTax: 5.49 },
  { code: 'HI', name: 'Hawaii', salesTax: 4.50, incomeTax: 6.5 },
  { code: 'ID', name: 'Idaho', salesTax: 6.03, incomeTax: 5.8 },
  { code: 'IL', name: 'Illinois', salesTax: 8.86, incomeTax: 4.95 },
  { code: 'IN', name: 'Indiana', salesTax: 7.00, incomeTax: 3.15 },
  { code: 'IA', name: 'Iowa', salesTax: 6.94, incomeTax: 4.8 },
  { code: 'KS', name: 'Kansas', salesTax: 8.71, incomeTax: 5.7 },
  { code: 'KY', name: 'Kentucky', salesTax: 6.00, incomeTax: 4.5 },
  { code: 'LA', name: 'Louisiana', salesTax: 9.56, incomeTax: 4.25 },
  { code: 'ME', name: 'Maine', salesTax: 5.50, incomeTax: 5.8 },
  { code: 'MD', name: 'Maryland', salesTax: 6.00, incomeTax: 4.75 },
  { code: 'MA', name: 'Massachusetts', salesTax: 6.25, incomeTax: 5.0 },
  { code: 'MI', name: 'Michigan', salesTax: 6.00, incomeTax: 4.25 },
  { code: 'MN', name: 'Minnesota', salesTax: 7.52, incomeTax: 6.8 },
  { code: 'MS', name: 'Mississippi', salesTax: 7.07, incomeTax: 4.7 },
  { code: 'MO', name: 'Missouri', salesTax: 8.39, incomeTax: 4.8 },
  { code: 'MT', name: 'Montana (0% Sales Tax)', salesTax: 0.0, incomeTax: 5.9 },
  { code: 'NE', name: 'Nebraska', salesTax: 6.97, incomeTax: 5.84 },
  { code: 'NV', name: 'Nevada (No State Tax)', salesTax: 8.24, incomeTax: 0 },
  { code: 'NH', name: 'New Hampshire (0% Sales Tax)', salesTax: 0.0, incomeTax: 0 },
  { code: 'NJ', name: 'New Jersey', salesTax: 6.60, incomeTax: 5.5 },
  { code: 'NM', name: 'New Mexico', salesTax: 7.72, incomeTax: 4.9 },
  { code: 'NY', name: 'New York', salesTax: 8.53, incomeTax: 5.85 },
  { code: 'NC', name: 'North Carolina', salesTax: 7.00, incomeTax: 4.75 },
  { code: 'ND', name: 'North Dakota', salesTax: 7.04, incomeTax: 2.0 },
  { code: 'OH', name: 'Ohio', salesTax: 7.24, incomeTax: 3.5 },
  { code: 'OK', name: 'Oklahoma', salesTax: 8.99, incomeTax: 4.75 },
  { code: 'OR', name: 'Oregon (0% Sales Tax)', salesTax: 0.0, incomeTax: 8.75 },
  { code: 'PA', name: 'Pennsylvania', salesTax: 6.34, incomeTax: 3.07 },
  { code: 'RI', name: 'Rhode Island', salesTax: 7.00, incomeTax: 4.75 },
  { code: 'SC', name: 'South Carolina', salesTax: 7.44, incomeTax: 6.4 },
  { code: 'SD', name: 'South Dakota (No State Tax)', salesTax: 6.40, incomeTax: 0 },
  { code: 'TN', name: 'Tennessee (No State Tax)', salesTax: 9.55, incomeTax: 0 },
  { code: 'TX', name: 'Texas (No State Tax)', salesTax: 8.20, incomeTax: 0 },
  { code: 'UT', name: 'Utah', salesTax: 7.25, incomeTax: 4.65 },
  { code: 'VT', name: 'Vermont', salesTax: 6.36, incomeTax: 5.75 },
  { code: 'VA', name: 'Virginia', salesTax: 5.77, incomeTax: 5.75 },
  { code: 'WA', name: 'Washington (No State Tax)', salesTax: 9.40, incomeTax: 0 },
  { code: 'WV', name: 'West Virginia', salesTax: 6.57, incomeTax: 5.12 },
  { code: 'WI', name: 'Wisconsin', salesTax: 5.70, incomeTax: 5.3 },
  { code: 'WY', name: 'Wyoming (No State Tax)', salesTax: 5.44, incomeTax: 0 },
];

// Populate Selects
function initStates() {
  const paySelect = document.getElementById('paycheckState');
  const taxSelect = document.getElementById('salesTaxState');
  
  US_STATES.forEach(st => {
    const opt1 = document.createElement('option');
    opt1.value = st.code;
    opt1.textContent = `${st.name} ${st.incomeTax === 0 ? '(0% state tax)' : ''}`;
    if (st.code === 'TX') opt1.selected = true;
    paySelect.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = st.code;
    opt2.textContent = `${st.name} (${st.salesTax}% avg tax)`;
    if (st.code === 'CA') opt2.selected = true;
    taxSelect.appendChild(opt2);
  });
}

// Tab Switching
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabId}`);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

/* =========================================================================
   1. PAYCHECK CALCULATOR
   ========================================================================= */
let payMode = 'hourly';

document.getElementById('payModeHourly').addEventListener('click', () => {
  payMode = 'hourly';
  document.getElementById('payModeHourly').classList.add('active');
  document.getElementById('payModeSalary').classList.remove('active');
  document.getElementById('hourlyInputs').classList.remove('hidden');
  document.getElementById('salaryInputs').classList.add('hidden');
  calcPaycheck();
});

document.getElementById('payModeSalary').addEventListener('click', () => {
  payMode = 'salary';
  document.getElementById('payModeSalary').classList.add('active');
  document.getElementById('payModeHourly').classList.remove('active');
  document.getElementById('salaryInputs').classList.remove('hidden');
  document.getElementById('hourlyInputs').classList.add('hidden');
  calcPaycheck();
});

function setWage(w) {
  document.getElementById('hourlyWage').value = w;
  calcPaycheck();
}

function setHours(h) {
  document.getElementById('hoursPerWeek').value = h;
  calcPaycheck();
}

function setSalary(s) {
  document.getElementById('annualSalary').value = s;
  calcPaycheck();
}

function calcPaycheck() {
  let grossAnnual = 0;
  if (payMode === 'hourly') {
    const wage = parseFloat(document.getElementById('hourlyWage').value) || 0;
    const hours = parseFloat(document.getElementById('hoursPerWeek').value) || 0;
    const regHours = Math.min(40, hours);
    const otHours = Math.max(0, hours - 40);
    const weeklyGross = (regHours * wage) + (otHours * wage * 1.5);
    grossAnnual = weeklyGross * 52;
  } else {
    grossAnnual = parseFloat(document.getElementById('annualSalary').value) || 0;
  }

  const socSec = grossAnnual * 0.062;
  const medicare = grossAnnual * 0.0145;

  let fedRate = 0.10;
  if (grossAnnual > 100000) fedRate = 0.22;
  else if (grossAnnual > 47000) fedRate = 0.15;
  else if (grossAnnual > 11600) fedRate = 0.10;
  else fedRate = 0.05;

  const fedTax = grossAnnual * fedRate;

  const stCode = document.getElementById('paycheckState').value;
  const stateObj = US_STATES.find(s => s.code === stCode) || US_STATES[0];
  const stateTax = grossAnnual * (stateObj.incomeTax / 100);

  const totalDeduct = socSec + medicare + fedTax + stateTax;
  const netAnnual = Math.max(0, grossAnnual - totalDeduct);

  const biweekly = netAnnual / 26;
  const weekly = netAnnual / 52;
  const monthly = netAnnual / 12;

  document.getElementById('resBiweekly').textContent = `$${biweekly.toFixed(2)}`;
  document.getElementById('resWeekly').textContent = `$${weekly.toFixed(2)}`;
  document.getElementById('resMonthly').textContent = `$${monthly.toFixed(2)}`;
  document.getElementById('resGross').textContent = `$${Math.round(grossAnnual).toLocaleString()}`;
  document.getElementById('resFed').textContent = `-$${Math.round(fedTax).toLocaleString()}`;
  document.getElementById('resSocSec').textContent = `-$${Math.round(socSec).toLocaleString()}`;
  document.getElementById('resMedicare').textContent = `-$${Math.round(medicare).toLocaleString()}`;
  document.getElementById('resState').textContent = stateObj.incomeTax === 0 ? '$0.00 (No state tax)' : `-$${Math.round(stateTax).toLocaleString()}`;
  document.getElementById('resNetAnnual').textContent = `$${Math.round(netAnnual).toLocaleString()} / year`;
}

document.getElementById('hourlyWage').addEventListener('input', calcPaycheck);
document.getElementById('hoursPerWeek').addEventListener('input', calcPaycheck);
document.getElementById('annualSalary').addEventListener('input', calcPaycheck);
document.getElementById('paycheckState').addEventListener('change', calcPaycheck);

document.getElementById('copyPaycheckBtn').addEventListener('click', () => {
  const biweekly = document.getElementById('resBiweekly').textContent;
  const weekly = document.getElementById('resWeekly').textContent;
  const text = `US Paycheck Take-Home Pay:\n- Biweekly (Every 2 Weeks): ${biweekly}\n- Weekly: ${weekly}\n- Net Annual: ${document.getElementById('resNetAnnual').textContent}`;
  navigator.clipboard.writeText(text);
  document.getElementById('copyPaycheckBtn').textContent = 'Copied!';
  setTimeout(() => document.getElementById('copyPaycheckBtn').textContent = 'Copy Summary', 2000);
});

/* =========================================================================
   2. TIP CALCULATOR
   ========================================================================= */
let tipPct = 20;
let tipSplit = 2;

function setBill(amt) {
  document.getElementById('tipBill').value = amt;
  calcTip();
}

function setTip(pct) {
  tipPct = pct;
  document.getElementById('tipPercent').value = pct;
  document.querySelectorAll('.tip-rate-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === pct);
  });
  calcTip();
}

function setSplit(n) {
  tipSplit = n;
  document.getElementById('splitLabel').textContent = `${n} ${n === 1 ? 'person' : 'people'}`;
  document.querySelectorAll('.split-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === n);
  });
  calcTip();
}

function calcTip() {
  const bill = parseFloat(document.getElementById('tipBill').value) || 0;
  const pct = parseFloat(document.getElementById('tipPercent').value) || 0;
  const roundUp = document.getElementById('tipRoundUp').checked;

  const rawTip = (bill * pct) / 100;
  let total = bill + rawTip;
  if (roundUp && total > 0) total = Math.ceil(total);

  const finalTip = Math.max(0, total - bill);
  const each = tipSplit > 0 ? total / tipSplit : total;

  document.getElementById('tipHeadlineLabel').textContent = tipSplit > 1 ? `Each Person Pays (${tipSplit} people):` : 'Total to Pay:';
  document.getElementById('resTipEach').textContent = `$${each.toFixed(2)}`;
  document.getElementById('resTipBill').textContent = `$${bill.toFixed(2)}`;
  document.getElementById('resTipAmount').textContent = `+$${finalTip.toFixed(2)} (${pct}%)`;
  document.getElementById('resTipTotal').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('tipBill').addEventListener('input', calcTip);
document.getElementById('tipPercent').addEventListener('input', (e) => {
  tipPct = parseFloat(e.target.value) || 0;
  calcTip();
});
document.getElementById('tipRoundUp').addEventListener('change', calcTip);

document.getElementById('copyTipBtn').addEventListener('click', () => {
  const each = document.getElementById('resTipEach').textContent;
  const total = document.getElementById('resTipTotal').textContent;
  const text = `Dinner bill split (${tipSplit} people):\n- Total with ${tipPct}% tip: ${total}\n- Each person's share: ${each}\n(Venmo/Zelle)`;
  navigator.clipboard.writeText(text);
  document.getElementById('copyTipBtn').textContent = 'Copied!';
  setTimeout(() => document.getElementById('copyTipBtn').textContent = 'Copy for Venmo', 2000);
});

/* =========================================================================
   3. SALES TAX CALCULATOR
   ========================================================================= */
let taxDiscount = 0;

function setPrice(p) {
  document.getElementById('taxPrice').value = p;
  calcSalesTax();
}

function setDiscount(d) {
  taxDiscount = d;
  document.querySelectorAll('.disc-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === d);
  });
  calcSalesTax();
}

function calcSalesTax() {
  const price = parseFloat(document.getElementById('taxPrice').value) || 0;
  const stCode = document.getElementById('salesTaxState').value;
  const stateObj = US_STATES.find(s => s.code === stCode) || US_STATES[4];

  const discAmt = (price * taxDiscount) / 100;
  const discountedPrice = Math.max(0, price - discAmt);
  const taxAmt = (discountedPrice * stateObj.salesTax) / 100;
  const finalTotal = discountedPrice + taxAmt;

  document.getElementById('resTaxRegister').textContent = `$${finalTotal.toFixed(2)}`;
  document.getElementById('resTaxOrig').textContent = `$${price.toFixed(2)}`;
  document.getElementById('resTaxRateLabel').textContent = `${stateObj.salesTax}%`;
  document.getElementById('resTaxTax').textContent = `+$${taxAmt.toFixed(2)}`;
  document.getElementById('resTaxFinal').textContent = `$${finalTotal.toFixed(2)}`;

  const discRow = document.getElementById('discRow');
  if (taxDiscount > 0) {
    discRow.classList.remove('hidden');
    document.getElementById('resTaxDisc').textContent = `-$${discAmt.toFixed(2)} (${taxDiscount}%)`;
  } else {
    discRow.classList.add('hidden');
  }
}

document.getElementById('taxPrice').addEventListener('input', calcSalesTax);
document.getElementById('salesTaxState').addEventListener('change', calcSalesTax);

document.getElementById('copyTaxBtn').addEventListener('click', () => {
  const total = document.getElementById('resTaxRegister').textContent;
  const orig = document.getElementById('resTaxOrig').textContent;
  const tax = document.getElementById('resTaxTax').textContent;
  const text = `US Register Total:\n- Price Tag: ${orig}\n- Sales Tax: ${tax}\n- Total at Register: ${total}`;
  navigator.clipboard.writeText(text);
  document.getElementById('copyTaxBtn').textContent = 'Copied!';
  setTimeout(() => document.getElementById('copyTaxBtn').textContent = 'Copy', 2000);
});

/* =========================================================================
   4. GAS TRIP CALCULATOR
   ========================================================================= */
let gasSplit = 2;

function setMiles(m) {
  document.getElementById('gasMiles').value = m;
  calcGas();
}

function setGasSplit(n) {
  gasSplit = n;
  document.getElementById('gasSplitLabel').textContent = `${n} ${n === 1 ? 'driver' : 'passengers'}`;
  document.querySelectorAll('.gas-split-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === n);
  });
  calcGas();
}

function calcGas() {
  const miles = parseFloat(document.getElementById('gasMiles').value) || 0;
  const mpg = parseFloat(document.getElementById('gasMPG').value) || 1;
  const price = parseFloat(document.getElementById('gasPrice').value) || 0;

  const gallons = miles / mpg;
  const total = gallons * price;
  const each = gasSplit > 0 ? total / gasSplit : total;

  document.getElementById('gasHeadlineLabel').textContent = gasSplit > 1 ? `Each Person Pays (${gasSplit} passengers):` : 'Total Fuel Cost:';
  document.getElementById('resGasEach').textContent = `$${each.toFixed(2)}`;
  document.getElementById('resGasDist').textContent = `${miles} miles`;
  document.getElementById('resGasGal').textContent = `${gallons.toFixed(1)} gallons`;
  document.getElementById('resGasTotal').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('gasMiles').addEventListener('input', calcGas);
document.getElementById('gasMPG').addEventListener('input', calcGas);
document.getElementById('gasPrice').addEventListener('input', calcGas);

document.getElementById('copyGasBtn').addEventListener('click', () => {
  const each = document.getElementById('resGasEach').textContent;
  const total = document.getElementById('resGasTotal').textContent;
  const miles = document.getElementById('resGasDist').textContent;
  const text = `Road Trip Gas Split (${miles}):\n- Total Gas: ${total}\n- Each Person's Share: ${each}\n(Venmo/Zelle)`;
  navigator.clipboard.writeText(text);
  document.getElementById('copyGasBtn').textContent = 'Copied!';
  setTimeout(() => document.getElementById('copyGasBtn').textContent = 'Copy for Venmo', 2000);
});

// Init on Load
window.addEventListener('DOMContentLoaded', () => {
  initStates();
  calcPaycheck();
  calcTip();
  calcSalesTax();
  calcGas();
});
