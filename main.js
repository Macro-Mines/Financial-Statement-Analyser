function calculateStatement() {
    // Inputs
    const openingStock = +document.getElementById('openingStock').value;
    const purchases = +document.getElementById('purchases').value;
    const purchaseReturns = +document.getElementById('purchaseReturns').value;
    const directWages = +document.getElementById('directWages').value;
    const carriageInwards = +document.getElementById('carriageInwards').value;
    const powerFuel = +document.getElementById('powerFuel').value;
    const otherDirectExpenses = +document.getElementById('otherDirectExpenses').value;
    const sales = +document.getElementById('sales').value;
    const salesReturns = +document.getElementById('salesReturns').value;
    const closingStock = +document.getElementById('closingStock').value;

    // Step 1: Net Sales
    const netSales = sales - salesReturns;
    document.getElementById('netSales').value = netSales;

    // Step 2: Net Purchases
    const netPurchases = purchases - purchaseReturns;
    document.getElementById('netPurchases').value = netPurchases;

    // Step 3: Total Direct Expenses
    const totalDirectExpenses = directWages + carriageInwards + powerFuel + otherDirectExpenses;
    document.getElementById('totalDirectExpenses').value = totalDirectExpenses;

    // Step 4: COGS
    const cogs = openingStock + netPurchases + totalDirectExpenses - closingStock;
    document.getElementById('cogs').value = cogs;

    // Step 5: Gross Profit
    const grossProfit = netSales + closingStock - (openingStock + netPurchases + totalDirectExpenses);
    document.getElementById('grossProfit').value = grossProfit;

    // Indirect Expenses
    const salaries = +document.getElementById('salaries').value;
    const rent = +document.getElementById('rent').value;
    const printingStationery = +document.getElementById('printingStationery').value;
    const depreciation = +document.getElementById('depreciation').value;
    const insurance = +document.getElementById('insurance').value;
    const postageTelephone = +document.getElementById('postageTelephone').value;
    const advertisingSelling = +document.getElementById('advertisingSelling').value;
    const carriageOutwards = +document.getElementById('carriageOutwards').value;
    const discountAllowed = +document.getElementById('discountAllowed').value;
    const badDebts = +document.getElementById('badDebts').value;
    const provisionDoubtfulDebts = +document.getElementById('provisionDoubtfulDebts').value;
    const interestPaid = +document.getElementById('interestPaid').value;
    const otherIndirectExpenses = +document.getElementById('otherIndirectExpenses').value;

    // Step 6: Total Indirect Expenses
    const totalIndirectExpenses = salaries + rent + printingStationery + depreciation + insurance + postageTelephone +
        advertisingSelling + carriageOutwards + discountAllowed + badDebts + provisionDoubtfulDebts +
        interestPaid + otherIndirectExpenses;
    document.getElementById('totalIndirectExpenses').value = totalIndirectExpenses;

    // Step 7: Operating Profit
    const operatingProfit = grossProfit - totalIndirectExpenses;
    document.getElementById('operatingProfit').value = operatingProfit;

    // Incomes
    const discountReceived = +document.getElementById('discountReceived').value;
    const commissionReceived = +document.getElementById('commissionReceived').value;
    const interestReceived = +document.getElementById('interestReceived').value;
    const dividendIncome = +document.getElementById('dividendIncome').value;
    const rentReceived = +document.getElementById('rentReceived').value;
    const otherIncomes = +document.getElementById('otherIncomes').value;

    // Step 8: Net Profit
    const netProfit = operatingProfit + discountReceived + commissionReceived + interestReceived + dividendIncome + rentReceived + otherIncomes;
    document.getElementById('netProfit').value = netProfit;
}

// Optionally, auto-calculate on input change:
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateStatement);
});

window.addEventListener('DOMContentLoaded', () => {
    // Clear default zero on focus and restore on blur for all income-statement numeric inputs
    const incomeInputs = document.querySelectorAll('#income-statement input[type="number"]');
    incomeInputs.forEach(el => {
        el.addEventListener('focus', function () {
            if (this.value === '0' || this.value === '0.00' || this.value === '0.0') {
                this.value = '';
            }
            try { this.select(); } catch(e){ /* ignore */ }
        });
        el.addEventListener('blur', function () {
            if (this.value === '' || this.value === null) {
                this.value = 0;
                this.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                this.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
});



document.getElementById('analyseBtn').addEventListener('click', () => {
    // Hide income statement, show dashboard
    document.getElementById('income-statement').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('dashboard').scrollIntoView({behavior:"smooth"});

    // Fill dashboard values
    document.getElementById('dashNetSales').textContent = document.getElementById('netSales').value;
    document.getElementById('dashNetPurchases').textContent = document.getElementById('netPurchases').value;
    document.getElementById('dashTotalDirectExpenses').textContent = document.getElementById('totalDirectExpenses').value;
    document.getElementById('dashCOGS').textContent = document.getElementById('cogs').value;
    document.getElementById('dashGrossProfit').textContent = document.getElementById('grossProfit').value;
    document.getElementById('dashTotalIndirectExpenses').textContent = document.getElementById('totalIndirectExpenses').value;
    document.getElementById('dashOperatingProfit').textContent = document.getElementById('operatingProfit').value;
    document.getElementById('dashNetProfit').textContent = document.getElementById('netProfit').value;

    // Ratios
    const netSales = +document.getElementById('netSales').value || 1;
    const grossProfit = +document.getElementById('grossProfit').value;
    const operatingProfit = +document.getElementById('operatingProfit').value;
    const netProfit = +document.getElementById('netProfit').value;

    const grossProfitRatio = ((grossProfit / netSales) * 100).toFixed(2);
    const operatingProfitRatio = ((operatingProfit / netSales) * 100).toFixed(2);
    const netProfitRatio = ((netProfit / netSales) * 100).toFixed(2);

    document.getElementById('dashGrossProfitRatio').textContent = `${grossProfitRatio}%`;
    document.getElementById('dashOperatingProfitRatio').textContent = `${operatingProfitRatio}%`;
    document.getElementById('dashNetProfitRatio').textContent = `${netProfitRatio}%`;

    document.getElementById('dashGrossProfitRatioAnalysis').textContent =
        grossProfitRatio >= 20
            ? "High Gross Profit Ratio indicates strong cost control and healthy pricing power."
            : "Low Gross Profit Ratio suggests weak cost management or pricing/competition pressure.";

    document.getElementById('dashOperatingProfitRatioAnalysis').textContent =
        operatingProfitRatio >= 15
            ? "High Operating Profit Ratio reflects efficient operations and expense control."
            : "Low Operating Profit Ratio means high operating costs or low efficiency.";

    document.getElementById('dashNetProfitRatioAnalysis').textContent =
        netProfitRatio >= 10
            ? "High Net Profit Ratio shows strong overall profitability and cost management."
            : "Low Net Profit Ratio indicates high expenses or weak profitability.";
});

document.getElementById('backBtn').addEventListener('click', () => {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('income-statement').style.display = 'block';
});

function calculateBalanceSheet() {
    // Capital & Reserves
    const capital = +document.getElementById('bsCapital').value;
    const reserves = +document.getElementById('bsReserves').value;
    const drawings = +document.getElementById('bsDrawings').value;
    const netCapital = capital + reserves - drawings;
    document.getElementById('bsNetCapital').querySelector('span').textContent = netCapital;

    // Long-term Debts
    const debentures = +document.getElementById('bsDebentures').value;
    const securedLoans = +document.getElementById('bsSecuredLoans').value;
    const unsecuredLoans = +document.getElementById('bsUnsecuredLoans').value;
    const totalLongterm = debentures + securedLoans + unsecuredLoans;
    document.getElementById('bsTotalLongterm').querySelector('span').textContent = totalLongterm;

    // Current Liabilities
    const creditors = +document.getElementById('bsCreditors').value;
    const billsPayable = +document.getElementById('bsBillsPayable').value;
    const outstandingExpenses = +document.getElementById('bsOutstandingExpenses').value;
    const bankOverdraft = +document.getElementById('bsBankOverdraft').value;
    const shortTermLoans = +document.getElementById('bsShortTermLoans').value;
    const provisionTax = +document.getElementById('bsProvisionTax').value;
    const otherCurrentLiab = +document.getElementById('bsOtherCurrentLiab').value;
    const totalCurrentLiab = creditors + billsPayable + outstandingExpenses + bankOverdraft + shortTermLoans + provisionTax + otherCurrentLiab;
    document.getElementById('bsTotalCurrentLiab').querySelector('span').textContent = totalCurrentLiab;

    // Total Liabilities & Equity
    const totalLiabilities = netCapital + totalLongterm + totalCurrentLiab;
    document.getElementById('bsTotalLiabilities').value = totalLiabilities;

    // Fixed Assets
    const landBuildings = +document.getElementById('bsLandBuildings').value;
    const plantMachinery = +document.getElementById('bsPlantMachinery').value;
    const furniture = +document.getElementById('bsFurniture').value;
    const vehicles = +document.getElementById('bsVehicles').value;
    const officeEquip = +document.getElementById('bsOfficeEquip').value;
    const intangible = +document.getElementById('bsIntangible').value;
    const longTermInvest = +document.getElementById('bsLongTermInvest').value;
    const totalFixed = landBuildings + plantMachinery + furniture + vehicles + officeEquip + intangible + longTermInvest;
    document.getElementById('bsTotalFixed').querySelector('span').textContent = totalFixed;

    // Current Assets
    const inventory = +document.getElementById('bsInventory').value;
    const debtors = +document.getElementById('bsDebtors').value;
    const billsReceivable = +document.getElementById('bsBillsReceivable').value;
    const cashHand = +document.getElementById('bsCashHand').value;
    const cashBank = +document.getElementById('bsCashBank').value;
    const prepaid = +document.getElementById('bsPrepaid').value;
    const accruedIncome = +document.getElementById('bsAccruedIncome').value;
    const shortTermInvest = +document.getElementById('bsShortTermInvest').value;
    const totalCurrentAssets = inventory + debtors + billsReceivable + cashHand + cashBank + prepaid + accruedIncome + shortTermInvest;
    document.getElementById('bsTotalCurrentAssets').querySelector('span').textContent = totalCurrentAssets;

    // Total Assets
    const totalAssets = totalFixed + totalCurrentAssets;
    document.getElementById('bsTotalAssets').value = totalAssets;
}



window.addEventListener('DOMContentLoaded', () => {
    // Clear default zero on focus and restore on blur for all balance-sheet numeric inputs
    const bsInputs = document.querySelectorAll('#balance-sheet input[type="number"]');
    bsInputs.forEach(el => {
        el.addEventListener('focus', function () {
            if (this.value === '0' || this.value === '0.00' || this.value === '0.0') {
                this.value = '';
            }
            try { this.select(); } catch(e){ /* ignore */ }
        });
        el.addEventListener('blur', function () {
            if (this.value === '' || this.value === null) {
                this.value = 0;
                this.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                this.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
});



// Auto-calculate on input change
document.querySelectorAll('#balance-sheet input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateBalanceSheet);
});

// Initial calculation on page load
window.addEventListener('DOMContentLoaded', calculateBalanceSheet);

document.getElementById('analyseBalanceSheetBtn').addEventListener('click', () => {
    document.getElementById('balance-sheet').style.display = 'none';
    document.getElementById('bs-ratio-dashboard').style.display = 'block';
    document.getElementById('bs-ratio-dashboard').scrollIntoView({behavior:"smooth"});

    // Get values
    const currentAssets = +document.getElementById('bsTotalCurrentAssets').querySelector('span').textContent;
    const currentLiabilities = +document.getElementById('bsTotalCurrentLiab').querySelector('span').textContent;
    const inventory = +document.getElementById('bsInventory').value;
    const prepaid = +document.getElementById('bsPrepaid').value;
    const cashHand = +document.getElementById('bsCashHand').value;
    const cashBank = +document.getElementById('bsCashBank').value;
    const shortTermInvest = +document.getElementById('bsShortTermInvest').value;

    // Ratios
    // 1. Current Ratio
    let currentRatio = currentLiabilities !== 0 ? (currentAssets / currentLiabilities).toFixed(2) : "N/A";
    document.getElementById('currentRatioValue').textContent = currentRatio;
    document.getElementById('currentRatioAnalysis').textContent =
        currentRatio !== "N/A"
            ? (currentRatio >= 2
                ? "Strong liquidity position. Current assets comfortably cover current liabilities."
                : "Weak liquidity. Current assets may not be sufficient to cover current liabilities.")
            : "Current Liabilities are zero or not entered.";

    // 2. Quick Ratio
    let quickAssets = currentAssets - inventory - prepaid;
    let quickRatio = currentLiabilities !== 0 ? (quickAssets / currentLiabilities).toFixed(2) : "N/A";
    document.getElementById('quickRatioValue').textContent = quickRatio;
    document.getElementById('quickRatioAnalysis').textContent =
        quickRatio !== "N/A"
            ? (quickRatio >= 1
                ? "Good quick ratio. Immediate assets can meet short-term obligations."
                : "Low quick ratio. May face difficulty in meeting short-term obligations.")
            : "Current Liabilities are zero or not entered.";

    // 3. Cash Ratio
    let cashAssets = cashHand + cashBank + shortTermInvest;
    let cashRatio = currentLiabilities !== 0 ? (cashAssets / currentLiabilities).toFixed(2) : "N/A";
    document.getElementById('cashRatioValue').textContent = cashRatio;
    document.getElementById('cashRatioAnalysis').textContent =
        cashRatio !== "N/A"
            ? (cashRatio >= 0.5
                ? "Healthy cash ratio. Sufficient cash and equivalents for immediate liabilities."
                : "Low cash ratio. May struggle to pay immediate liabilities.")
            : "Current Liabilities are zero or not entered.";

    // 4. Working Capital
    let workingCapital = currentAssets - currentLiabilities;
    document.getElementById('workingCapitalValue').textContent = workingCapital;
    document.getElementById('workingCapitalAnalysis').textContent =
        workingCapital > 0
            ? "Positive working capital. Good short-term financial health."
            : (workingCapital < 0
                ? "Negative working capital. Risk of liquidity problems."
                : "No working capital. Assets equal liabilities.");

    // 5. Inventory to Working Capital Ratio
    let inventoryWC = workingCapital !== 0 ? (inventory / workingCapital).toFixed(2) : "N/A";
    document.getElementById('inventoryWCValue').textContent = inventoryWC;
    document.getElementById('inventoryWCAnalysis').textContent =
        inventoryWC !== "N/A"
            ? (inventoryWC < 1
                ? "Inventory is well managed relative to working capital."
                : "High inventory to working capital ratio. May indicate overstocking or poor sales.")
            : "Working Capital is zero or not entered.";
});

document.getElementById('backLiquidityBtn').addEventListener('click', () => {
    document.getElementById('bs-ratio-dashboard').style.display = 'none';
    document.getElementById('balance-sheet').style.display = 'block';
});

function calculateSolvencyRatios() {
    // Get required values from Balance Sheet
    const totalAssets = +document.getElementById('bsTotalAssets').value;
    const totalFixed = +document.getElementById('bsTotalFixed').querySelector('span').textContent;
    const totalLongterm = +document.getElementById('bsTotalLongterm').querySelector('span').textContent;
    const totalCurrentLiab = +document.getElementById('bsTotalCurrentLiab').querySelector('span').textContent;
    const capital = +document.getElementById('bsNetCapital').querySelector('span').textContent;


    // 1. Debt to Equity Ratio = Long-term Debts ÷ Net Capital
    let debtEquity = capital !== 0 ? ((totalLongterm + totalCurrentLiab) / capital).toFixed(2) : "N/A";
    document.getElementById('debtEquityValue').textContent = debtEquity;
    document.getElementById('debtEquityAnalysis').textContent =
        debtEquity !== "N/A"
            ? (debtEquity < 1
                ? "Low debt to equity ratio. Indicates conservative financing and lower risk."
                : "High debt to equity ratio. Indicates higher financial risk and leverage.")
            : "Capital is zero or not entered.";

    // 2. Debt Ratio = (Long-term Debts + Current Liabilities) ÷ Total Assets
    let debtRatio = totalAssets !== 0 ? ((totalLongterm + totalCurrentLiab) / totalAssets).toFixed(2) : "N/A";
    document.getElementById('debtRatioValue').textContent = debtRatio;
    document.getElementById('debtRatioAnalysis').textContent =
        debtRatio !== "N/A"
            ? (debtRatio < 0.5
                ? "Low debt ratio. Assets are mainly financed by equity."
                : "High debt ratio. Assets are mainly financed by debt.")
            : "Total Assets are zero or not entered.";

    // 3. Proprietary Ratio = Capital ÷ Total Assets
    let proprietaryRatio = totalAssets !== 0 ? (capital / totalAssets).toFixed(2) : "N/A";
    document.getElementById('proprietaryRatioValue').textContent = proprietaryRatio;
    document.getElementById('proprietaryRatioAnalysis').textContent =
        proprietaryRatio !== "N/A"
            ? (proprietaryRatio > 0.5
                ? "High proprietary ratio. Strong equity base and financial stability."
                : "Low proprietary ratio. Greater dependence on debt financing.")
            : "Total Assets are zero or not entered.";

    // 4. Fixed Assets Ratio = Fixed Assets ÷ (Capital + Long-term Fund)
    let fixedAssetsBase = capital + totalLongterm;
    let fixedAssetsRatio = fixedAssetsBase !== 0 ? (totalFixed / fixedAssetsBase).toFixed(2) : "N/A";
    document.getElementById('fixedAssetsRatioValue').textContent = fixedAssetsRatio;
    document.getElementById('fixedAssetsRatioAnalysis').textContent =
        fixedAssetsRatio !== "N/A"
            ? (fixedAssetsRatio < 1
                ? "Fixed assets are adequately financed by long-term funds."
                : "High fixed assets ratio. May indicate over-investment in fixed assets.")
            : "Capital + Long-term Debts are zero or not entered.";
}

// Call this function after liquidity ratios are calculated
document.getElementById('analyseBalanceSheetBtn').addEventListener('click', () => {
    // ...existing liquidity ratio code...
    calculateSolvencyRatios();
});

// Optionally, auto-update on input change
document.querySelectorAll('#balance-sheet input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateSolvencyRatios);
});

function calculateTurnoverRatios() {
    // Extract necessary data from income statement and balance sheet
    const netSales = +document.getElementById('netSales').value;
    const totalFixed = +document.getElementById('bsTotalFixed').querySelector('span').textContent;
    const currentAssets = +document.getElementById('bsTotalCurrentAssets').querySelector('span').textContent;
    const currentLiabilities = +document.getElementById('bsTotalCurrentLiab').querySelector('span').textContent;
    const capital = +document.getElementById('bsNetCapital').querySelector('span').textContent;
    const netPurchases = +document.getElementById('netPurchases').value;
    const creditors = +document.getElementById('bsCreditors').value;
    const billsPayable = +document.getElementById('bsBillsPayable').value;
    const debtors = +document.getElementById('bsDebtors').value;
    const billsReceivable = +document.getElementById('bsBillsReceivable').value;
    const openingStock = +document.getElementById('openingStock').value;
    const closingStock = +document.getElementById('closingStock').value;
    const cogs = +document.getElementById('cogs').value;

    // User inputs for cash sales and purchases
    const cashSales = +document.getElementById('cashSales').value;
    const cashPurchases = +document.getElementById('cashPurchases').value;

    // 1. Fixed Assets Turnover Ratio = Net Sales ÷ Fixed Assets
    let fixedAssetsTurnover = totalFixed !== 0 ? (netSales / totalFixed).toFixed(2) : "N/A";
    document.getElementById('fixedAssetsTurnoverValue').textContent = fixedAssetsTurnover;
    document.getElementById('fixedAssetsTurnoverAnalysis').textContent =
        fixedAssetsTurnover !== "N/A"
            ? (fixedAssetsTurnover > 2
                ? "Efficient use of fixed assets for generating sales."
                : "Low turnover. Fixed assets may be underutilized.")
            : "Fixed Assets are zero or not entered.";

    // 2. Working Capital Turnover Ratio = Net Sales ÷ Working Capital
    let workingCapital = currentAssets - currentLiabilities;
    let workingCapitalTurnover = workingCapital !== 0 ? (netSales / workingCapital).toFixed(2) : "N/A";
    document.getElementById('workingCapitalTurnoverValue').textContent = workingCapitalTurnover;
    document.getElementById('workingCapitalTurnoverAnalysis').textContent =
        workingCapitalTurnover !== "N/A"
            ? (workingCapitalTurnover > 2
                ? "Good turnover. Working capital is efficiently used."
                : "Low turnover. Working capital may be excessive or underutilized.")
            : "Working Capital is zero or not entered.";

    // 3. Capital Turnover Ratio = COGS ÷  Capital
    let capitalTurnover = capital !== 0 ? (cogs / capital).toFixed(2) : "N/A";
    document.getElementById('capitalTurnoverValue').textContent = capitalTurnover;
    document.getElementById('capitalTurnoverAnalysis').textContent =
        capitalTurnover !== "N/A"
            ? (capitalTurnover > 2
                ? "High capital turnover. Capital is efficiently used."
                : "Low capital turnover. Capital may be underutilized.")
            : "Capital is zero or not entered.";

    // 4. Creditors Turnover Ratio
    // Credit Purchases = Net Purchases - Cash Purchases
    let creditPurchases = netPurchases - cashPurchases;
    let avgCreditors = (creditors + billsPayable) / 2;
    let creditorsTurnover = avgCreditors !== 0 ? (creditPurchases / avgCreditors).toFixed(2) : "N/A";
    document.getElementById('creditorsTurnoverValue').textContent = creditorsTurnover;
    document.getElementById('creditorsTurnoverAnalysis').textContent =
        creditorsTurnover !== "N/A"
            ? (creditorsTurnover > 4
                ? "Efficient payment to suppliers."
                : "Slow payment to suppliers. May affect credit terms.")
            : "Average Creditors are zero or not entered.";
    // Average Payment Period
    let avgPaymentPeriod = creditorsTurnover !== "N/A" && creditorsTurnover !== "0.00" ? (365 / creditorsTurnover).toFixed(0) : "N/A";
    document.getElementById('avgPaymentPeriodValue').textContent = avgPaymentPeriod;

    // 5. Debtors Turnover Ratio
    // Credit Sales = Net Sales - Cash Sales
    let creditSales = netSales - cashSales;
    let avgDebtors = (debtors + billsReceivable) / 2;
    let debtorsTurnover = avgDebtors !== 0 ? (creditSales / avgDebtors).toFixed(2) : "N/A";
    document.getElementById('debtorsTurnoverValue').textContent = debtorsTurnover;
    document.getElementById('debtorsTurnoverAnalysis').textContent =
        debtorsTurnover !== "N/A"
            ? (debtorsTurnover > 6
                ? "Efficient collection from customers."
                : "Slow collection. May affect cash flow.")
            : "Average Debtors are zero or not entered.";
    // Average Collection Period
    let avgCollectionPeriod = debtorsTurnover !== "N/A" && debtorsTurnover !== "0.00" ? (365 / debtorsTurnover).toFixed(0) : "N/A";
    document.getElementById('avgCollectionPeriodValue').textContent = avgCollectionPeriod;

    // 6. Stock Turnover Ratio
    let avgStock = (openingStock + closingStock) / 2;
    let stockTurnover = avgStock !== 0 ? (cogs / avgStock).toFixed(2) : "N/A";
    document.getElementById('stockTurnoverValue').textContent = stockTurnover;
    document.getElementById('stockTurnoverAnalysis').textContent =
        stockTurnover !== "N/A"
            ? (stockTurnover > 6
                ? "Inventory is moving quickly. Good inventory management."
                : "Slow inventory turnover. May indicate overstocking or slow sales.")
            : "Average Stock is zero or not entered.";
    // Average Age of Inventory
    let avgAgeInventory = stockTurnover !== "N/A" && stockTurnover !== "0.00" ? (365 / stockTurnover).toFixed(0) : "N/A";
    document.getElementById('avgAgeInventoryValue').textContent = avgAgeInventory;
}

// Auto-calculate turnover ratios on input change
document.querySelectorAll('#cashSales, #cashPurchases, #openingStock, #closingStock, #netSales, #netPurchases, #cogs, #bsNetCapital, #bsTotalFixed span, #workingCapitalValue, #bsCreditors, #bsBillsPayable, #bsDebtors, #bsBillsReceivable').forEach(input => {
    input.addEventListener('input', calculateTurnoverRatios);
});

// Also call after liquidity and solvency ratios are calculated
document.getElementById('analyseBalanceSheetBtn').addEventListener('click', () => {
    calculateTurnoverRatios();
});




function calculateBankStatement() {
    // Calculate Total Deposits
    const demandDeposits = +document.getElementById('demandDeposits').value;
    const savingsDeposits = +document.getElementById('savingsDeposits').value;
    const termDeposits = +document.getElementById('termDeposits').value;
    const totalDeposits = demandDeposits + savingsDeposits + termDeposits;
    document.getElementById('totalDeposits').value = totalDeposits;

    // Calculate Total Liabilities & Capital
    const capital = +document.getElementById('bankCapital').value;
    const reserves = +document.getElementById('bankReserves').value;
    const borrowings = +document.getElementById('bankBorrowings').value;
    const otherLiabilities = +document.getElementById('otherLiabilities').value;
    const totalLiabilitiesCapital = capital + reserves + totalDeposits + borrowings + otherLiabilities;
    document.getElementById('totalLiabilitiesCapital').value = totalLiabilitiesCapital;

    // Calculate Total Assets
    const cashRBI = +document.getElementById('cashRBI').value;
    const bankBalances = +document.getElementById('bankBalances').value;
    const investments = +document.getElementById('investments').value;
    const advances = +document.getElementById('advances').value;
    const fixedAssets = +document.getElementById('fixedAssets').value;
    const otherAssets = +document.getElementById('otherAssets').value;
    const totalAssets = cashRBI + bankBalances + investments + advances + fixedAssets + otherAssets;
    document.getElementById('totalAssets').value = totalAssets;
    
    // Income Statement for Bank
    const interestEarned = +document.getElementById('bankInterestEarned').value;
    const otherIncome = +document.getElementById('bankOtherIncome').value;
    const interestExpended = +document.getElementById('bankInterestExpended').value;
    const operatingExpenses = +document.getElementById('bankOperatingExpenses').value;

    const bankTotalIncome = interestEarned + otherIncome;
    document.getElementById('bankTotalIncome').value = bankTotalIncome;

    const bankTotalExpenses = interestExpended + operatingExpenses;
    document.getElementById('bankTotalExpenses').value = bankTotalExpenses;
    
    const bankNetInterestIncome = interestEarned - interestExpended;
    document.getElementById('bankNetInterestIncome').value = bankNetInterestIncome;

    const bankNetProfit = bankTotalIncome - bankTotalExpenses;
    document.getElementById('bankNetProfit').value = bankNetProfit;
}


window.addEventListener('DOMContentLoaded', () => {
    // Clear default zero on focus and restore on blur for all bank-statement numeric inputs
    const bankInputs = document.querySelectorAll('#bank-statement input[type="number"]');
    bankInputs.forEach(el => {
        el.addEventListener('focus', function () {
            if (this.value === '0' || this.value === '0.00' || this.value === '0.0') {
                this.value = '';
            }
            try { this.select(); } catch(e){ /* ignore */ }
        });
        el.addEventListener('blur', function () {
            if (this.value === '' || this.value === null) {
                this.value = 0;
                this.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                this.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
});

// Bank reset: zero all numeric inputs in the bank-statement section and refresh calculations
window.addEventListener('DOMContentLoaded', () => {
    const bankReset = document.getElementById('bankResetBtn');
    if (!bankReset) return;

    bankReset.addEventListener('click', () => {
        const inputs = document.querySelectorAll('#bank-statement input[type="number"]');
        inputs.forEach(inp => {
            inp.value = 0;
            // notify listeners so calculators update
            inp.dispatchEvent(new Event('input', { bubbles: true }));
            inp.dispatchEvent(new Event('change', { bubbles: true }));
        });

        // run bank calculations if present
        try { if (typeof calculateBankStatement === 'function') calculateBankStatement(); } catch(e){ console.warn(e); }
        try { if (typeof calculateBankPerformanceRatios === 'function') calculateBankPerformanceRatios(); } catch(e){ console.warn(e); }
    });
});



function calculateBankPerformanceRatios() {
    // Get values from bank statement
    const interestEarned = +document.getElementById('bankInterestEarned').value;
    const otherIncome = +document.getElementById('bankOtherIncome').value;
    const interestExpended = +document.getElementById('bankInterestExpended').value;
    const operatingExpenses = +document.getElementById('bankOperatingExpenses').value;
    const netInterestIncome = interestEarned - interestExpended;
    const fixedAssets = +document.getElementById('fixedAssets').value;
    const totalAssets = +document.getElementById('totalAssets').value;
    const totalIncome = interestEarned + otherIncome;
    const totalExpenses = interestExpended + operatingExpenses;
    const netProfit = totalIncome - totalExpenses;

    const borrowings = +document.getElementById('bankBorrowings').value;
    const advances = +document.getElementById('advances').value;
    const investments = +document.getElementById('investments').value;
    const totalDeposits = +document.getElementById('totalDeposits').value;

    const demandDeposits = +document.getElementById('demandDeposits').value;
    const savingsDeposits = +document.getElementById('savingsDeposits').value;
    const termDeposits = +document.getElementById('termDeposits').value;

    const capital = +document.getElementById('bankCapital').value;
    const reserves = +document.getElementById('bankReserves').value;

    // RWA inputs
    const creditRiskRWA = +document.getElementById('creditRiskRWA').value;
    const marketRiskRWA = +document.getElementById('marketRiskRWA').value;
    const operationalRiskRWA = +document.getElementById('operationalRiskRWA').value;
    const riskWeightedAssets = creditRiskRWA + marketRiskRWA + operationalRiskRWA;

    // 1. Interest Income %
    let interestIncomePercent = totalIncome !== 0 ? ((interestEarned / totalIncome) * 100).toFixed(2) : "N/A";
    document.getElementById('interestIncomePercent').textContent = interestIncomePercent + (interestIncomePercent !== "N/A" ? "%" : "");

    // 2. Net Interest Income %
    let netInterestIncomePercent = totalIncome !== 0 ? ((netInterestIncome / totalIncome) * 100).toFixed(2) : "N/A";
    document.getElementById('netInterestIncomePercent').textContent = netInterestIncomePercent + (netInterestIncomePercent !== "N/A" ? "%" : "");

    // 3. Net Profit Margin %
    let netProfitMarginPercent = totalIncome !== 0 ? ((netProfit / totalIncome) * 100).toFixed(2) : "N/A";
    document.getElementById('netProfitMarginPercent').textContent = netProfitMarginPercent + (netProfitMarginPercent !== "N/A" ? "%" : "");

    // 4. Net Interest Margin (NIM%)
    let avgEarningAssets = advances + investments;
    let netInterestMarginPercent = avgEarningAssets !== 0 ? ((netInterestIncome / avgEarningAssets) * 100).toFixed(2) : "N/A";
    document.getElementById('netInterestMarginPercent').textContent = netInterestMarginPercent + (netInterestMarginPercent !== "N/A" ? "%" : "");

    // 5. Total Business
    let totalBusiness = totalDeposits + advances;
    document.getElementById('totalBusiness').textContent = totalBusiness;

    // 6. CASA Ratio
    let casaRatio = totalDeposits !== 0 ? (((demandDeposits + savingsDeposits) / totalDeposits) * 100).toFixed(2) : "N/A";
    document.getElementById('casaRatio').textContent = casaRatio + (casaRatio !== "N/A" ? "%" : "");

    // 7. Loans to Deposits Ratio (LDR)
    let loansToDepositsRatio = totalDeposits !== 0 ? ((advances / totalDeposits) * 100).toFixed(2) : "N/A";
    document.getElementById('loansToDepositsRatio').textContent = loansToDepositsRatio + (loansToDepositsRatio !== "N/A" ? "%" : "");

    // 8. Capital Adequacy Ratio (CAR)
    let car = riskWeightedAssets !== 0 ? (((capital + reserves) / riskWeightedAssets) * 100).toFixed(2) : "N/A";
    document.getElementById('capitalAdequacyRatio').textContent = car + (car !== "N/A" ? "%" : "");

    // 9. Return on Investment (ROI)
    let roi = investments !== 0 ? ((netProfit / investments) * 100).toFixed(2) : "N/A";
    document.getElementById('returnOnInvestment').textContent = roi + (roi !== "N/A" ? "%" : "");

    // 10. Return on Equity (ROE)
    let equity = capital + reserves;
    let roe = equity !== 0 ? ((netProfit / equity) * 100).toFixed(2) : "N/A";
    document.getElementById('returnOnEquity').textContent = roe + (roe !== "N/A" ? "%" : "");

    // 11. Return on Assets (ROA)
    let roa = (totalAssets !== 0 && totalAssets) ? ((netProfit / totalAssets) * 100).toFixed(2) : "N/A";
    document.getElementById('returnOnAssets').textContent = roa + (roa !== "N/A" ? "%" : "");

    // 12. Return on Fixed Assets (ROFA)
    let rofa = (fixedAssets !== 0 && fixedAssets) ? ((netProfit / fixedAssets) * 100).toFixed(2) : "N/A";
    document.getElementById('returnOnFixedAssets').textContent = rofa + (rofa !== "N/A" ? "%" : "");

    // 13. Return on Capital Employed (ROCE)
    let capitalEmployed = equity + borrowings;
    let roce = capitalEmployed !== 0 ? ((netProfit / capitalEmployed) * 100).toFixed(2) : "N/A";
    document.getElementById('returnOnCapitalEmployed').textContent = roce + (roce !== "N/A" ? "%" : "");

    // 14. No. of Equity Shares
    const faceValue = +document.getElementById('faceValuePerShare').value;
    let numberOfEquityShares = faceValue !== 0 ? Math.round(equity / faceValue) : "N/A";
    document.getElementById('numberOfEquityShares').textContent = numberOfEquityShares;

    // 15. Earnings Per Share (EPS)
    let preferenceSharesDividends = +document.getElementById('preferenceSharesDividends').value;
    let eps = numberOfEquityShares !== "N/A" && numberOfEquityShares !== 0 ? ((netProfit - preferenceSharesDividends) / numberOfEquityShares).toFixed(2) : "N/A";
    document.getElementById('earningsPerShare').textContent = eps !== "N/A" ? eps : "N/A";

    // 16. Price Earnings Ratio (P/E Ratio)
    const marketPricePerShare = +document.getElementById('marketPricePerShare').value;
    let peRatio = eps !== "N/A" && eps != 0 ? (marketPricePerShare / eps).toFixed(2) : "N/A";
    document.getElementById('priceToEarningsRatio').textContent = peRatio !== "N/A" ? peRatio : "N/A";

    // 17. Dividend Payout Ratio
    const dividendsPaid = +document.getElementById('dividendsPaid').value;
    let dividendPayoutRatio = eps !== 0 ? ((dividendsPaid / eps) * 100).toFixed(2) : "N/A";
    document.getElementById('dividendPayoutRatio').textContent = dividendPayoutRatio + (dividendPayoutRatio !== "N/A" ? "%" : "");

    // 18. Dividend Yield Ratio
    let dividendYieldRatio = marketPricePerShare !== 0 ? ((dividendsPaid / marketPricePerShare) * 100).toFixed(2) : "N/A";
    document.getElementById('dividendYield').textContent = dividendYieldRatio + (dividendYieldRatio !== "N/A" ? "%" : "");
}

// Show/hide dashboard on button click
document.getElementById('analyseBankBtn').addEventListener('click', () => {
    document.getElementById('bank-statement').style.display = 'none';
    document.getElementById('bank-performance-dashboard').style.display = 'block';
    calculateBankPerformanceRatios();
    document.getElementById('bank-performance-dashboard').scrollIntoView({behavior:"smooth"});
});

document.getElementById('backBankPerformanceBtn').addEventListener('click', () => {
    document.getElementById('bank-performance-dashboard').style.display = 'none';
    document.getElementById('bank-statement').style.display = 'block';
});

// Auto-update ratios when any input changes
document.querySelectorAll('#bank-statement input[type="number"], #bank-performance-dashboard input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateBankPerformanceRatios);
});




// Ensure event listeners include new inputs
document.querySelectorAll('#bank-statement input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateBankStatement);
});

// Initial calculation (already present)
window.addEventListener('DOMContentLoaded', () => {
    calculateBankStatement();
});



function getBankStatementData() {
    // Collect data from your form (Bank Statement + Income Statement)
    return [
        ["Label", "Schedule No.", "Amount"],
        ["Capital", "1", document.getElementById('bankCapital').value],
        ["Reserves & Surplus", "2", document.getElementById('bankReserves').value],
        ["Demand Deposits", "3A", document.getElementById('demandDeposits').value],
        ["Savings Deposits", "3B", document.getElementById('savingsDeposits').value],
        ["Term Deposits", "3C", document.getElementById('termDeposits').value],
        ["Total Deposits", "3", document.getElementById('totalDeposits').value],
        ["Borrowings", "4", document.getElementById('bankBorrowings').value],
        ["Other Liabilities & Provisions", "5", document.getElementById('otherLiabilities').value],
        ["Total Liabilities & Capital", "#", document.getElementById('totalLiabilitiesCapital').value],
        ["Cash & Balances with RBI", "6", document.getElementById('cashRBI').value],
        ["Balances with Banks & Money at Call", "7", document.getElementById('bankBalances').value],
        ["Investments", "8", document.getElementById('investments').value],
        ["Advances", "9", document.getElementById('advances').value],
        ["Fixed Assets", "10", document.getElementById('fixedAssets').value],
        ["Other Assets", "11", document.getElementById('otherAssets').value],
        ["Total Assets", "#", document.getElementById('totalAssets').value],
        ["Interest Earned", "13", document.getElementById('bankInterestEarned').value],
        ["Other Income", "14", document.getElementById('bankOtherIncome').value],
        ["Interest Expended", "15", document.getElementById('bankInterestExpended').value],
        ["Operating Expenses", "16", document.getElementById('bankOperatingExpenses').value],
        ["Total Income", "#", document.getElementById('bankTotalIncome').value],
        ["Total Expenses", "#", document.getElementById('bankTotalExpenses').value],
        ["Net Interest Income", "#", document.getElementById('bankNetInterestIncome').value],
        ["Net Profit", "#", document.getElementById('bankNetProfit').value]
    ];
}



document.getElementById('exportPDFBtn').addEventListener('click', () => {
    const data = getBankStatementData();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Draw a gradient-like header bar
    doc.setFillColor(41, 1, 82); // #270152
    doc.rect(0, 0, 210, 25, 'F');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("Bank Financial Statement", 105, 15, {align: "center"});

    // Table header styling
    doc.setFontSize(13);
    doc.setTextColor(25, 118, 210); // #1976d2
    doc.setFont("helvetica", "bold");
    doc.text("Schedule No.", 20, 35);
    doc.text("Label", 70, 35);
    doc.text("Amount", 160, 35);

    // Draw header line
    doc.setDrawColor(25, 118, 210);
    doc.line(15, 38, 195, 38);

    // Table rows with card-like background
    let y = 45;
    data.slice(1).forEach((row, i) => {
        // Alternate row color for card effect
        if (i % 2 === 0) {
            doc.setFillColor(227, 242, 253); // #e3f2fd
        } else {
            doc.setFillColor(255, 253, 231); // #fffde7
        }
        doc.rect(15, y - 7, 180, 10, 'F');

        doc.setFontSize(12);
        doc.setTextColor(33, 33, 33);
        doc.setFont("helvetica", "normal");
        doc.text(row[1] || "-", 20, y);
        doc.text(row[0], 70, y);
        doc.text(row[2].toString(), 160, y);

        y += 12;
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(158, 158, 158);
    doc.text("Generated by Financial Statement Analysis", 105, 290, {align: "center"});

    doc.save("bank_statement.pdf");
});

// Also allow clicking the SVG icon to trigger download
document.getElementById('downloadPdfIcon').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('exportPDFBtn').click();
});



// Buttons Functions
document.getElementById('income-button').addEventListener('click', () => {
    document.getElementById('income-statement').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('income-statement').scrollIntoView({behavior:"smooth"});
});

document.getElementById('balance-button').addEventListener('click', () => {
    document.getElementById('balance-sheet').style.display = 'block';
    document.getElementById('bs-ratio-dashboard').style.display = 'none';
    document.getElementById('balance-sheet').scrollIntoView({behavior:"smooth"});
});

document.getElementById('bank-button').addEventListener('click', () => {
    document.getElementById('bank-statement').style.display = 'block';
    document.getElementById('bank-performance-dashboard').style.display = 'none';
    document.getElementById('bank-statement').scrollIntoView({behavior:"smooth"});
});

//marginal-button
document.getElementById('marginal-button').addEventListener('click', () => {
    document.getElementById('marginal-costing-section').style.display = 'block';
    document.getElementById('marginal-dashboard').style.display = 'none';
    document.getElementById('marginal-costing-section').scrollIntoView({behavior:"smooth"});
});





/* Marginal Costing */
(function(){
    const $ = id => document.getElementById(id);

    function toNumber(v){ v = parseFloat(v); return isFinite(v) ? v : 0; }
    function round2(n){ return Math.round((n + Number.EPSILON) * 100) / 100; }

    function computeMarginalFromTotals(){
        const units = toNumber( $('marg_totalUnits')?.value );
        const salesTotal = toNumber( $('marg_sales_total')?.value );
        const varTotal = toNumber( $('marg_variable_total')?.value );
        const fixedTotal = toNumber( $('marg_fixed_total')?.value );

        // Contribution and Profit (totals)
        const contributionTotal = round2(salesTotal - varTotal);
        const profitTotal = round2(contributionTotal - fixedTotal);

        // Per-unit (if units > 0)
        const salesPer = units > 0 ? round2(salesTotal / units) : 0;
        const varPer = units > 0 ? round2(varTotal / units) : 0;
        const contribPer = units > 0 ? round2(contributionTotal / units) : 0;
        const fixedPer = units > 0 ? round2(fixedTotal / units) : 0;
        const profitPer = units > 0 ? round2(profitTotal / units) : 0;

        // Write readonly outputs
        if ($('marg_sales_per')) $('marg_sales_per').value = salesPer;
        if ($('marg_variable_per')) $('marg_variable_per').value = varPer;
        if ($('marg_fixed_per')) $('marg_fixed_per').value = fixedPer;

        if ($('marg_contribution_total')) $('marg_contribution_total').value = contributionTotal;
        if ($('marg_contribution_per')) $('marg_contribution_per').value = contribPer;

        if ($('marg_profit_total')) $('marg_profit_total').value = profitTotal;
        if ($('marg_profit_per')) $('marg_profit_per').value = profitPer;
    }

    // Attach listeners to totals and units (user edits totals only)
    window.addEventListener('DOMContentLoaded', () => {
        const watch = [
            'marg_totalUnits',
            'marg_sales_total',
            'marg_variable_total',
            'marg_fixed_total'
        ];
        watch.forEach(id => {
            const el = $(id);
            if (!el) return;
            el.addEventListener('input', computeMarginalFromTotals);
        });

        // Reset button
        const resetBtn = $('marginalResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                const inputs = document.querySelectorAll('#marginal-costing-section input[type="number"]');
                inputs.forEach(i => {
                    i.value = 0;
                    // dispatch input so calculations update
                    i.dispatchEvent(new Event('input', { bubbles: true }));
                });
                // ensure compute runs after zeroing
                computeMarginalFromTotals();
            });
        }

        // initial compute
        computeMarginalFromTotals();
    });

    // expose for debugging if needed
    window.computeMarginalFromTotals = computeMarginalFromTotals;
})();


window.addEventListener('DOMContentLoaded', () => {
    // Enhance marginal inputs UX: clear default zero on focus, restore on blur, and select all
    const editableIds = ['marg_totalUnits','marg_sales_total','marg_variable_total','marg_fixed_total'];
    editableIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('focus', function () {
            // If value is exactly zero, clear so user can type immediately
            if (this.value === '0' || this.value === '0.00' || this.value === '0.0') {
                this.value = '';
            }
            // select all for quick replace on some browsers
            try { this.select(); } catch(e){/*ignore*/ }
        });
        el.addEventListener('blur', function () {
            // If user leaves empty, restore zero
            if (this.value === '' || this.value === null) {
                this.value = 0;
                // notify listeners so calculations update
                this.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                // trigger input to recompute derived values after manual entry
                this.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
});



window.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('marginalResetBtn');
    if (!resetBtn) return;

    resetBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('#marginal-costing-section input[type="number"]');
        inputs.forEach(inp => {
            inp.value = 0;
            // notify any listeners
            inp.dispatchEvent(new Event('input', { bubbles: true }));
            inp.dispatchEvent(new Event('change', { bubbles: true }));
        });

        // call known compute hooks if present
        if (typeof window.computeMarginalFromTotals === 'function') {
            try { window.computeMarginalFromTotals(); } catch (e) { console.warn(e); }
        } else if (typeof window.marginalComputeAll === 'function') {
            try { window.marginalComputeAll(); } catch (e) { console.warn(e); }
        }
    });
});



window.addEventListener('DOMContentLoaded', () => {
    // Analyse Marginal Sheet -> show Marginal Dashboard
    const analyseMarginalBtn = document.getElementById('analyseMarginalCostingBtn');
    const backMarginalBtn = document.getElementById('backMarginalDashboardBtn');
    const marginalSection = document.getElementById('marginal-costing-section');
    const marginalDashboard = document.getElementById('marginal-dashboard');

    function safeNumber(id) {
        const el = document.getElementById(id);
        return el ? parseFloat(el.value || 0) : 0;
    }

    function formatNum(n, isPct = false) {
        if (!isFinite(n)) return 'N/A';
        return isPct ? `${n.toFixed(2)}%` : `${n.toFixed(2)}`;
    }

    if (analyseMarginalBtn) {
        analyseMarginalBtn.addEventListener('click', () => {
            // Ensure derived fields are up-to-date
            if (typeof window.computeMarginalFromTotals === 'function') {
                try { window.computeMarginalFromTotals(); } catch (e) { /* ignore */ }
            }

            const salesTotal = safeNumber('marg_sales_total');
            const contributionTotal = safeNumber('marg_contribution_total');
            const profitTotal = safeNumber('marg_profit_total');
            const units = safeNumber('marg_totalUnits');

            const contribPercent = salesTotal !== 0 ? (contributionTotal / salesTotal) * 100 : 0;
            const contribPerUnit = units !== 0 ? (contributionTotal / units) : 0;
            const profitMarginPerc = salesTotal !== 0 ? (profitTotal / salesTotal) * 100 : 0;

            const elContribPct = document.getElementById('margContributionPercent');
            const elContribPer = document.getElementById('margContributionPerUnit');
            const elProfitPct = document.getElementById('margProfitMarginPercent');

            if (elContribPct) elContribPct.textContent = formatNum(contribPercent, true);
            if (elContribPer) elContribPer.textContent = formatNum(contribPerUnit, false);
            if (elProfitPct) elProfitPct.textContent = formatNum(profitMarginPerc, true);

            // show dashboard, hide input sheet
            if (marginalSection) marginalSection.style.display = 'none';
            if (marginalDashboard) marginalDashboard.style.display = 'block';
            // scroll into view
            if (marginalDashboard) marginalDashboard.scrollIntoView({behavior:"smooth"});
        });
    }

    if (backMarginalBtn) {
        backMarginalBtn.addEventListener('click', () => {
            if (marginalDashboard) marginalDashboard.style.display = 'none';
            if (marginalSection) marginalSection.style.display = 'block';
            if (marginalSection) marginalSection.scrollIntoView({behavior:"smooth"});
        });
    }
});




// Initialize particles.js (safe — checks for library)
function initParticles() {
    if (!window.particlesJS) return;
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 1 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 1, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 150, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initParticles();
});






document.addEventListener("DOMContentLoaded", () => {
  // Use Web Audio API so sound plays reliably after a user gesture
  let audioCtx = null;
  let unlocked = false;

  function ensureAudioUnlocked() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') return audioCtx.resume().then(() => unlocked = true).catch(()=>{unlocked=false;});
    unlocked = true;
    return Promise.resolve();
  }

  function playTone(freq = 800, duration = 0.08, type = 'sine', volume = 0.12) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(volume, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + duration);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start(now);
      o.stop(now + duration + 0.02);
    } catch (e) {
      // fail silently if AudioContext unavailable
      console.warn('playTone failed', e);
    }
  }

  // Unlock audio on first pointerdown/touchstart (most reliable)
  const unlockHandler = () => {
    ensureAudioUnlocked().then(() => {
      // small silent tone to unlock on some platforms
      playTone(880, 0.02, 'sine', 0.0001);
    }).finally(() => {
      document.removeEventListener('pointerdown', unlockHandler);
      document.removeEventListener('touchstart', unlockHandler);
    });
  };
  document.addEventListener('pointerdown', unlockHandler, { once: true });
  document.addEventListener('touchstart', unlockHandler, { once: true });

  // Attach to all buttons (use delegated set to .button)
  document.querySelectorAll(".button").forEach(btn => {
    // hover: light soft tone (only play if audio unlocked to avoid promise rejections)
    btn.addEventListener("mouseenter", () => {
      if (audioCtx && (audioCtx.state === 'running' || unlocked)) {
        playTone(650, 0.06, 'sine', 0.06);
      }
    });

    // click: sharper tone (user gesture — allowed)
    btn.addEventListener("click", (ev) => {
      // ensure context resumed and then play
      ensureAudioUnlocked().then(() => playTone(1100, 0.08, 'triangle', 0.12)).catch(()=>{/*ignore*/});
    });
  });
});
