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



// Add at the end of main.js
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

// Add after calculateBankStatement()

function calculateBankPerformanceRatios() {
    // Get values from bank statement
    const interestEarned = +document.getElementById('bankInterestEarned').value;
    const otherIncome = +document.getElementById('bankOtherIncome').value;
    const interestExpended = +document.getElementById('bankInterestExpended').value;
    const operatingExpenses = +document.getElementById('bankOperatingExpenses').value;
    const netInterestIncome = interestEarned - interestExpended;
    const totalIncome = interestEarned + otherIncome;
    const totalExpenses = interestExpended + operatingExpenses;
    const netProfit = totalIncome - totalExpenses;

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
    // ...existing code...
    calculateBankStatement();
});
