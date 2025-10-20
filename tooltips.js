// financial-analysis-website/src/js/tooltips.js
// Tooltips for various elements using Tippy.js
tippy.setDefaultProps({
    theme: 'light',
    animation: 'shift-away',
    allowHTML: true,
    delay: 100,
    followCursor: 'horizontal',
    placement: 'top',
});

// Buttons Tooltips
tippy('#income-button', {
        content: '<strong>Income Statement</strong>',
        placement: 'left',
        followCursor: 'vertical',
});

// Buttons Tooltips
tippy('#balance-button', {
        content: '<strong>Balance Sheet</strong>',
        placement: 'left',
        followCursor: 'vertical',
});

// Buttons Tooltips
tippy('#bank-button', {
        content: '<strong>Bank Statement</strong>',
        placement: 'left',
        followCursor: 'vertical',
});

// Other Tooltips
tippy('#web_name_tip', {
        content: '<em><b>Financial Statement Analysis</b></em> : The process of evaluating a company\'s financial statements to understand its performance, profitability, and financial health.',
        placement: 'bottom',
});

// Other Tooltips
tippy('#subtitle_tip', {
        content: '<em><b>NAME</b></em> : ABHINAV RAJ<br><em><b>DEPARTMENT</b></em> : MBA Banking Technology<br><em><b>COURSE</b></em> : Financial Technology<br><em><b>YEAR</b></em> : 2025-27<br><em><b>EMAIL</b></em> : 25mbaftpy0016@pondiuni.ac.in<br>',
        placement: 'bottom',
});

// Income Statement Tooltips
tippy('#income_statement_tip', {
        content: '<strong>Income Statement</strong> : A financial statement that summarizes a company\'s revenues, expenses, and profits/losses over a specific period, providing insights into its operational performance and profitability.',
});

// Trading Account Tooltips
tippy('#trading_account_tip', {
        content: '<strong>Trading Account</strong> : A financial statement that summarizes the revenues and expenses related to a company\'s trading activities over a specific period, typically used to assess profitability from core business operations.',
});

// Debit Side Tip
tippy('#debit_side_tip', {
        content: '<strong>Debit Side</strong> : Debit Side of Trading Account shows all direct expenses and losses related to production or purchase of goods (e.g., opening stock, purchases, wages).',
});

// Credit Side Tip
tippy('#credit_side_tip', {
        content: '<strong>Credit Side</strong> : Credit Side of Trading Account shows all direct incomes and gains from core business operations (e.g., sales, closing stock).',
});


// Trading Account Items Tooltips
// opening stock tip
tippy('#opening_stock_tip', {
        content: '<strong>Opening Stock</strong> : The value of unsold inventory at the beginning of an accounting period, used to calculate the cost of goods sold.',
});

// purchases_tip
tippy('#purchases_tip', {
        content: '<strong>Purchases</strong> : The total cost of goods bought by a business for resale or for use in production during an accounting period.'
});

// purchase_returns_tip
tippy('#purchase_returns_tip', {
        content: '<strong>Purchase Returns</strong> : The value of goods returned to suppliers, deducted from purchases to calculate net purchases.'
});

// direct_wages_tip
tippy('#direct_wages_tip', {
        content: '<strong>Direct Wages</strong> : The total wages paid to workers directly involved in the production of goods or services, included in the cost of goods sold.'
});

// carriage_inwards_tip
tippy('#carriage_inwards_tip', {
        content: '<strong>Carriage Inwards</strong> : The total transportation costs incurred to bring goods into a business, included in the cost of goods sold.'
});

// power_fuel_tip
tippy('#power_fuel_tip', {
        content: '<strong>Power & Fuel</strong> : The cost incurred for electricity, gas, or fuel used in the production process.'
});


tippy('#other_direct_expenses_tip', {
        content: '<strong>Other Direct Expenses</strong> : All additional expenses directly related to manufacturing or production, such as factory rent, royalties, or carriage inward.'
});

// total_direct_expenses_tip
tippy('#total_direct_expenses_tip', {
        content: '<strong>Total Direct Expenses</strong> : The sum of all costs directly linked to production or purchase of goods, including wages, power, fuel, and other factory-related expenses.'
});

// net_purchases_tip
tippy('#net_purchases_tip', {
        content: '<strong>Net Purchases</strong> : Total purchases - purchase returns'
});

// sales_tip
tippy('#sales_tip', {
        content: '<strong>Sales</strong> : The total revenue earned from selling goods or services during a period.'
});

// sales_returns_tip
tippy('#sales_returns_tip', {
        content: '<strong>Sales Return</strong> : The value of goods returned by customers due to defects, damage, or dissatisfaction.'
});

// closing_stock_tip
tippy('#closing_stock_tip', {
        content: '<strong>Closing Stock</strong> : The value of unsold goods remaining at the end of an accounting period.'
});

// net_sales_tip
tippy('#net_sales_tip', {
        content: '<strong>Net Sales</strong> : Total sales revenue after deducting sales returns and discounts.'
});


// cogs_tip
tippy('#cogs_tip', {
        content: '<strong>COGS</strong> : The total cost of goods that were sold during the period, calculated as Opening Stock + Net Purchases + Direct Expenses – Closing Stock.'
});

// gross_profit_tip
tippy('#gross_profit_tip', {
        content: '<strong>Gross Profit</strong> : The excess of Net Sales over the Cost of Goods Sold, showing profit from core trading activities.'
});

// Profit & Loss Account Tooltips
tippy('#profit_loss_tip', {
        content: '<strong>Profit & Loss Account</strong> : A financial statement that summarizes a company\'s revenues, expenses, and profits/losses over a specific period, providing insights into its operational performance and profitability.',
});

// pl_debit_tip
tippy('#pl_debit_tip', {
        content: '<strong>Debit (Dr.)</strong> : The side of the Profit & Loss Account that records all expenses and losses incurred by the business during a specific period.',
});


// indirect_expenses_tip
tippy('#salaries_tip', {
        content: '<strong>Salaries</strong> : The total amount paid to employees for their services during a specific period.',
});

// rent_tip
tippy('#rent_tip', {
        content: '<strong>Rent</strong> : The cost incurred for leasing property or equipment used in business operations during a specific period.',
});

// stationery_tip
tippy('#utilities_tip', {
        content: '<strong>Utilities</strong> : The expenses for essential services such as printingelectricity, water, and gas used in business operations during a specific period.',
});

// depreciation_tip
tippy('#depreciation_tip', {
        content: '<strong>Depreciation</strong> : The systematic allocation of the cost of a tangible asset over its useful life, reflecting wear and tear or obsolescence.',
});

// insurance_tip
tippy('#insurance_tip', {
        content: '<strong>Insurance</strong> : The cost incurred for insurance coverage to protect the business against potential risks and losses during a specific period.',
});

// postage_telephone_tip
tippy('#postage_telephone_tip', {
        content: '<strong>Postage & Telephone</strong> : The expenses incurred for postal services and telephone communications used in business operations during a specific period.',
});

// advertising_selling_tip
tippy('#advertising_selling_tip', {
        content: '<strong>Advertising & Selling Expenses</strong> : The costs associated with promoting and selling products or services, including marketing campaigns, sales commissions, and promotional materials.',
});

// carriage_outwards_tip
tippy('#carriage_outwards_tip', {
        content: '<strong>Carriage Outwards</strong> : The transportation costs incurred to deliver goods to customers, considered a selling expense.',
});

// discount_allowed_tip
tippy('#discount_allowed_tip', {
        content: '<strong>Discount Allowed</strong> : The reduction in price offered to customers as an incentive for early payment or bulk purchases, recorded as an expense.',
});

// bad_debts_tip
tippy('#bad_debts_tip', {
        content: '<strong>Bad Debts</strong> : The amount of money owed to a business that is unlikely to be paid back, often written off as an expense.',
});

// provision_doubtful_debts_tip
tippy('#provision_doubtful_debts_tip', {
        content: '<strong>Provision for Doubtful Debts</strong> : An estimate of the amount of accounts receivable that may not be collectible, recorded as an expense to reflect potential losses.',
});

//interest_paid_tip
tippy('#interest_paid_tip', {
        content: '<strong>Interest Paid</strong> : The cost incurred by a business for borrowed funds, typically expressed as a percentage of the principal amount.',
});

//other_indirect_expenses_tip
tippy('#other_indirect_expenses_tip', {
        content: '<strong>Other Indirect Expenses</strong> : Miscellaneous expenses that are not directly tied to production or sales but are necessary for overall business operations.',
});

//total_indirect_tip
tippy('#total_indirect_tip', {
        content: '<strong>Total Indirect Expenses</strong> : The sum of all indirect expenses incurred by the business during a specific period, providing insight into overall operational costs.',
});

//credit_tip
tippy('#credit_tip', {
        content: '<strong>Credit (Cr.)</strong> : The side of the Profit & Loss Account that records all income and gains earned by the business during a specific period.',
});

//discount_received_tip
tippy('#discount_received_tip', {
        content: '<strong>Discount Received</strong> : The reduction in price received from suppliers for early payment or bulk purchases, recorded as income.',
});

//commission_received_tip
tippy('#commission_received_tip', {
        content: '<strong>Commission Received</strong> : The income earned by a business for facilitating a sale or service on behalf of another party, typically calculated as a percentage of the sale amount.',
});

//interest_received_tip
tippy('#interest_received_tip', {
        content: '<strong>Interest Received</strong> : The income earned by a business from its investments or savings, typically expressed as a percentage of the principal amount.',
});

//dividend_income_tip
tippy('#dividend_income_tip', {
        content: '<strong>Dividend Income</strong> : The income earned by a business from its investments in shares or stocks of other companies, typically distributed as a portion of the company\'s earnings.',
});


//rent_received_tip
tippy('#rent_received_tip', {
        content: '<strong>Rent Received</strong> : The income earned by a business from leasing out its property or equipment to tenants or other businesses.',
});

//other_incomes_tip
tippy('#other_incomes_tip', {
        content: '<strong>Other Incomes</strong> : Miscellaneous income earned by a business that does not fit into the standard categories of revenue, providing insight into additional revenue streams.',
});


//operating_profit_tip
tippy('#operating_profit_tip', {
        content: '<strong>Operating Profit</strong> : The profit earned by a business from its normal operations, calculated as gross profit minus operating expenses.',
});

//net_profit_tip
tippy('#net_profit_tip', {
        content: '<strong>Net Profit</strong> : The profit remaining after all expenses, including operating and non-operating expenses, have been deducted from total revenue.',
});

//balance_sheet_tip
tippy('#balance_sheet_tip', {
        content: '<strong>Balance Sheet</strong> : A financial statement that summarizes a company\'s assets, liabilities, and shareholders\' equity at a specific point in time, providing a snapshot of its financial position.',
});

//liabilities_equity_tip
tippy('#liabilities_equity_tip', {
        content: '<strong>Liabilities & Equity</strong> : The section of the balance sheet that lists a company\'s obligations (liabilities) and the residual interest of the owners (equity) at a specific point in time.',
});

//capital_tip
tippy('#capital_tip', {
        content: '<strong>Capital</strong> : The financial resources that a business uses to fund its operations and growth, typically represented by the owner\'s equity in the business.',
});

// drawings_tip
tippy('#drawings_tip', {
        content: '<strong>Drawings</strong> : The amount of money or assets withdrawn by the owner from the business for personal use, reducing the owner\'s equity in the business.',
});

// reserves_tip
tippy('#reserves_tip', {
        content: '<strong>Reserves</strong> : The portion of a company\'s profits that is retained in the business rather than distributed to shareholders as dividends, often used for reinvestment or to cover future expenses.',
});

//bsNetCapital
tippy('#bsNetCapital', {
        content: '<strong>Net Capital</strong> : The difference between a company\'s total assets and total liabilities, representing the owner\'s equity in the business.',
});

//debentures_tip
tippy('#debentures_tip', {
        content: '<strong>Debentures</strong> : Long-term securities yielding a fixed rate of interest, issued by a company and secured against assets.',
});

//secured_loans_tip
tippy('#secured_loans_tip', {
        content: '<strong>Secured Loans</strong> : Loans backed by collateral, which can be seized by the lender if the borrower defaults, reducing the risk for the lender.',
});

// unsecured_loans_tip
tippy('#unsecured_loans_tip', {
        content: '<strong>Unsecured Loans</strong> : Loans that are not backed by collateral, relying solely on the borrower\'s creditworthiness, typically carrying higher interest rates due to increased risk for the lender.',
});

// creditors_tip
tippy('#creditors_tip', {
        content: '<strong>Creditors</strong> : Individuals or entities to whom a company owes money for goods or services received on credit, representing a liability on the balance sheet.',
});

//bills_payable_tip
tippy('#bills_payable_tip', {
        content: '<strong>Bills Payable</strong> : Written promises to pay a specific amount of money at a future date, representing a liability for the company.',
});

//outstanding_expenses_tip
tippy('#outstanding_expenses_tip', {
        content: '<strong>Outstanding Expenses</strong> : Expenses that have been incurred but not yet paid, representing a liability on the balance sheet.',
});

//bank_overdraft_tip
tippy('#bank_overdraft_tip', {
        content: '<strong>Bank Overdraft</strong> : A facility that allows a company to withdraw more money from its bank account than is available, up to an agreed limit, representing a short-term liability.',
});

//short_term_loans_tip
tippy('#short_term_loans_tip', {
        content: '<strong>Short-term Loans</strong> : Loans that are due for repayment within one year, used to finance immediate operational needs, and classified as current liabilities on the balance sheet.',
});

//provision_tax_tip
tippy('#provision_tax_tip', {
        content: '<strong>Provision for Tax</strong> : An estimated amount set aside by a company to cover its income tax liability for a specific period, based on taxable profits.',
});

// other_current_liabilities_tip
tippy('#other_current_liabilities_tip', {
        content: '<strong>Other Current Liabilities</strong> : Miscellaneous short-term obligations that a company needs to settle within one year, not classified under specific liability categories.',
});

//bsTotalLongterm
tippy('#bsTotalLongterm', {
        content: '<strong>Total Long-term Debts</strong> : The sum of all long-term obligations that a company needs to settle over a period longer than one year, providing insight into its long-term financial commitments.',
});

//bsTotalCurrentLiab
tippy('#bsTotalCurrentLiab', {
        content: '<strong>Total Current Liabilities</strong> : The sum of all short-term obligations that a company needs to settle within one year, providing insight into its immediate financial responsibilities.',
});


// assets_tip
tippy('#assets_tip', {
        content: '<strong>Assets</strong> : Resources owned by a company that have economic value and can provide future benefits, classified as current or non-current based on their liquidity.',
});

//land_buildings_tip
tippy('#land_buildings_tip', {
        content: '<strong>Land & Buildings</strong> : Tangible fixed assets owned by a company, including land and structures used for business operations, providing long-term value and utility.',
});

//machinery_tip
tippy('#plant_machinery_tip', {
        content: '<strong>Plant & Machinery</strong> : Physical equipment and tools used in the production process, classified as fixed assets on the balance sheet, and subject to depreciation over time.',
});

// furniture_fixtures_tip
tippy('#furniture_fixtures_tip', {
        content: '<strong>Furniture & Fixtures</strong> : Tangible assets such as desks, chairs, and lighting fixtures used in business operations, classified as fixed assets and subject to depreciation over time.',
});

// vehicles_tip
tippy('#vehicles_tip', {
        content: '<strong>Vehicles</strong> : Motor vehicles owned by a company for business use, classified as fixed assets on the balance sheet, and subject to depreciation over time.',
});

//office_equipment_tip
tippy('#office_equipment_tip', {
        content: '<strong>Office Equipment</strong> : Tangible assets such as computers, printers, and copiers used in business operations, classified as fixed assets and subject to depreciation over time.',
});

//intangible_assets_tip
tippy('#intangible_assets_tip', {
        content: '<strong>Intangible Assets</strong> : Non-physical assets owned by a company, such as patents, trademarks, and goodwill, that provide long-term value and competitive advantage.',
});

//long_term_investments_tip
tippy('#long_term_investments_tip', {
        content: '<strong>Long-term Investments</strong> : Financial assets held by a company for an extended period, typically longer than one year, with the intention of generating income or capital appreciation.',
});

// bsTotalFixed
tippy('#bsTotalFixed', {
        content: '<strong>Total Fixed Assets</strong> : The sum of all tangible and intangible assets owned by a company that are used in its operations and have a useful life of more than one year.',
});


//current_assets_tip
tippy('#current_assets_tip', {
        content: '<strong>Current Assets</strong> : Assets that are expected to be converted into cash, sold, or consumed within one year or the operating cycle, whichever is longer.',
});

// inventory_tip
tippy('#inventory_tip', {
        content: '<strong>Inventory (Closing Stock)</strong> : The value of goods available for sale at the end of an accounting period, classified as a current asset on the balance sheet.',
});

//sundry_debtors_tip
tippy('#sundry_debtors_tip', {
        content: '<strong>Sundry Debtors</strong> : Amounts owed to a company by its customers for goods or services sold on credit, classified as current assets on the balance sheet.',
});

// bills_receivable_tip
tippy('#bills_receivable_tip', {
        content: '<strong>Bills Receivable</strong> : Amounts owed to a company by its customers for goods or services sold on credit, represented by formal bills of exchange, classified as current assets on the balance sheet.',
});

//cash_in_hand_tip
tippy('#cash_in_hand_tip', {
        content: '<strong>Cash in Hand</strong> : The total amount of cash physically held by a company, classified as a current asset on the balance sheet, representing the company\'s liquidity position.',
});

// cash_at_bank_tip
tippy('#cash_at_bank_tip', {
        content: '<strong>Cash at Bank</strong> : The total amount of funds held in bank accounts, classified as current assets on the balance sheet, representing the company\'s liquidity position.',
});

//prepaid_expenses_tip
tippy('#prepaid_expenses_tip', {
        content: '<strong>Prepaid Expenses</strong> : Payments made in advance for goods or services to be received in the future, classified as current assets on the balance sheet, representing future economic benefits.',
});

//accrued_income_tip
tippy('#accrued_income_tip', {
        content: '<strong>Accrued Income</strong> : Income that has been earned but not yet received, classified as current assets on the balance sheet, representing amounts owed to the company for goods or services provided.',
});

//short_term_investments_tip
tippy('#short_term_investments_tip', {
        content: '<strong>Short-term Investments</strong> : Financial assets held by a company for a short period, typically less than one year, with the intention of generating income or capital appreciation, classified as current assets on the balance sheet.',
});

// bsTotalCurrentAssets
tippy('#bsTotalCurrentAssets', {
        content: '<strong>Total Current Assets</strong> : The sum of all assets that are expected to be converted into cash, sold, or consumed within one year or the operating cycle, whichever is longer.',
});

//total_liabilities_tip
tippy('#total_liabilities_tip', {
        content: '<strong>Total Liabilities & Equity</strong> : The sum of all financial obligations or debts owed by a company to external parties, including loans, accounts payable, and other liabilities.',
});

//total_assets_tip
tippy('#total_assets_tip', {
        content: '<strong>Total Assets</strong> : The sum of all resources owned by a company that have economic value and can provide future benefits, classified as current or non-current based on their liquidity.',
});

//analyse_income_statement_button_tip
tippy('#analyseBtn', {
        content: '<strong>Analyse Income Statement</strong> : Click to analyze the income statement based on the provided data, generating insights into the company\'s profitability and operational performance.',
});

//analyse_balance_sheet_button_tip
tippy('#analyseBalanceSheetBtn', {
        content: '<strong>Analyse Balance Sheet</strong> : Click to analyze the balance sheet based on the provided data, generating insights into the company\'s financial position and stability.',
});

//profitability_ratios_tip
tippy('#profitability_ratios_tip', {
        content: '<strong>Profitability Ratios</strong> : Financial metrics used to assess a company\'s ability to generate profit relative to its revenue, operating costs, balance sheet assets, or equity.',
});

//gross_profit_ratio_tip
tippy('#gross_profit_ratio_tip', {
        content: '<strong>Gross Profit Ratio</strong> : A financial metric that indicates the percentage of revenue that exceeds the cost of goods sold, calculated as (Gross Profit / Net Sales) * 100, reflecting the efficiency of production and pricing strategies.',
});

//operating_profit_ratio_tip
tippy('#operating_profit_ratio_tip', {
        content: '<strong>Operating Profit Ratio</strong> : A financial metric that indicates the percentage of revenue that remains after deducting operating expenses, calculated as (Operating Profit / Net Sales) * 100, reflecting the efficiency of core business operations.',
});

// net_profit_ratio_tip
tippy('#net_profit_ratio_tip', {
        content: '<strong>Net Profit Ratio</strong> : A financial metric that indicates the percentage of revenue that remains as net profit after all expenses have been deducted, calculated as (Net Profit / Net Sales) * 100, reflecting overall profitability.',
});



//liquidity_ratios_tip
tippy('#liquidity_ratios_tip', {
        content: '<strong>Liquidity Ratios</strong> : Financial metrics used to assess a company\'s ability to meet its short-term obligations using its most liquid assets.',
});

//current_ratio_tip
tippy('#current_ratio_tip', {
        content: '<strong>Current Ratio</strong> : A financial metric that measures a company\'s ability to pay off its short-term liabilities with its short-term assets, calculated as Current Assets / Current Liabilities.',
});

// quick_ratio_tip
tippy('#quick_ratio_tip', {
        content: '<strong>Quick Ratio</strong> : A financial metric that measures a company\'s ability to meet its short-term obligations using its most liquid assets, calculated as (Current Assets - Inventory) / Current Liabilities.',
});

// cash_ratio_tip
tippy('#cash_ratio_tip', {
        content: '<strong>Cash Ratio</strong> : A financial metric that measures a company\'s ability to pay off its short-term liabilities using only its cash and cash equivalents, calculated as Cash and Cash Equivalents / Current Liabilities.',
});


//working_capital_tip
tippy('#working_capital_tip', {
        content: '<strong>Working Capital</strong> : A financial metric that represents the difference between a company\'s current assets and current liabilities, calculated as Current Assets - Current Liabilities, indicating the company\'s short-term financial health and operational efficiency.',
});


//inventory_wc_tip
tippy('#inventory_wc_tip', {
        content: '<strong>Inventory to Working Capital Ratio</strong> : A financial metric that measures the proportion of a company\'s inventory relative to its working capital, calculated as Inventory / Working Capital, indicating the efficiency of inventory management in relation to short-term financial health.',
});

//solvency_ratios_tip
tippy('#solvency_ratios_tip', {
        content: '<strong>Solvency Ratios</strong> : Financial metrics used to assess a company\'s ability to meet its long-term obligations and remain solvent.',
});

//debt_equity_tip
tippy('#debt_equity_tip', {
        content: '<strong>Debt to Equity Ratio</strong> : A financial metric that measures a company\'s financial leverage, calculated as Total Debt / Total Equity, indicating the proportion of debt used to finance the company\'s assets.',
});

//debt_ratio_tip
tippy('#debt_ratio_tip', {
        content: '<strong>Debt Ratio</strong> : A financial metric that measures the proportion of a company\'s assets that are financed by debt, calculated as Total Debt / Total Assets, indicating the level of financial risk.',
});

//proprietary_ratio_tip
tippy('#proprietary_ratio_tip', {
        content: '<strong>Proprietary Ratio</strong> : A financial metric that measures the proportion of a company\'s total assets that are financed by shareholders\' equity, calculated as Total Equity / Total Assets, indicating the level of financial stability.',
});

//fixed_assets_ratio_tip
tippy('#fixed_assets_ratio_tip', {
        content: '<strong>Fixed Assets to Equity Ratio</strong> : A financial metric that measures the proportion of a company\'s fixed assets relative to its shareholders\' equity, calculated as Fixed Assets / Total Equity, indicating the extent to which equity is used to finance fixed assets.',
});



//turnover_ratios_tip
tippy('#turnover_ratios_tip', {
        content: '<strong>Turnover Ratios</strong> : Financial metrics used to assess how efficiently a company utilizes its assets to generate sales or revenue.',
});

// fixed_assets_turnover_tip
tippy('#fixed_assets_turnover_tip', {
        content: '<strong>Fixed Assets Turnover Ratio</strong> : A financial metric that measures a company\'s efficiency in generating sales from its fixed assets, calculated as Net Sales / Average Fixed Assets.',
});

//working_capital_turnover_tip
tippy('#working_capital_turnover_tip', {
        content: '<strong>Working Capital Turnover Ratio</strong> : A financial metric that measures how efficiently a company utilizes its working capital to generate sales, calculated as Net Sales / Average Working Capital.',
});

//capital_turnover_tip
tippy('#capital_turnover_tip', {
        content: '<strong>Capital Turnover Ratio</strong> : A financial metric that measures how efficiently a company utilizes its total capital to generate sales, calculated as Net Sales / Total Capital Employed.',
});

// creditors_turnover_tip
tippy('#creditors_turnover_tip', {
        content: '<strong>Creditors Turnover Ratio</strong> : A financial metric that measures how efficiently a company pays off its suppliers, calculated as Net Credit Purchases / Average Accounts Payable.',
});

// cash_purchases_tip
tippy('#cash_purchases_tip', {
        content: '<strong>Cash Purchases</strong> : The total amount of cash paid for purchases during a specific period.',
});

// avg_payment_period_tip
tippy('#avg_payment_period_tip', {
        content: '<strong>Average Payment Period</strong> : A financial metric that measures the average time taken by a company to pay its suppliers, calculated as Average Accounts Payable / Cost of Goods Sold * 365.',
});

// debtors_turnover_tip
tippy('#debtors_turnover_tip', {
        content: '<strong>Debtors Turnover Ratio</strong> : A financial metric that measures how efficiently a company collects payments from its customers, calculated as Net Credit Sales / Average Accounts Receivable.',
});

// cash_sales_tip
tippy('#cash_sales_tip', {
        content: '<strong>Cash Sales</strong> : The total amount of cash received from sales during a specific period.',
});

// avg_collection_period_tip
tippy('#avg_collection_period_tip', {
        content: '<strong>Average Collection Period</strong> : A financial metric that measures the average time taken by a company to collect payments from its customers, calculated as Average Accounts Receivable / Net Credit Sales * 365.',
});

// inventory_turnover_tip
tippy('#inventory_turnover_tip', {
        content: '<strong>Inventory Turnover Ratio</strong> : A financial metric that measures how efficiently a company manages its inventory, calculated as Cost of Goods Sold / Average Inventory.',
});

// avg_age_inventory_tip
tippy('#avg_age_inventory_tip', {
        content: '<strong>Average Inventory Period</strong> : A financial metric that measures the average time inventory is held before being sold, calculated as Average Inventory / Cost of Goods Sold * 365.',
});


// Bank Consolidated Financial Statements Tip
tippy('#bank_financial_statement_tip', {
        content: '<strong>Bank Consolidated Financial Statements</strong> : A comprehensive financial report that consolidates all financial activities of a bank, including its assets, liabilities, income, and expenses, providing a holistic view of the bank\'s financial health.',
});

//bank_capital_tip
tippy('#bank_capital_tip', {
        content: '<strong>Bank Capital</strong> : The financial resources that a bank uses to absorb losses and support its operations, typically represented by the shareholders\' equity in the bank.',
});

// reserves_surplus_tip
tippy('#reserves_surplus_tip', {
        content: '<strong>Reserves & Surplus</strong> : The accumulated profits and retained earnings of a bank that are set aside for future growth, contingencies, or to meet regulatory requirements, reflecting the bank\'s financial strength and stability.',
});


// deposits_tip
tippy('#deposits_tip', {
        content: '<strong>Deposits</strong> : The total amount of money held by a bank from its customers, representing a liability for the bank as it owes this money to depositors.',
});

// demand_deposits_tip
tippy('#demand_deposits_tip', {
        content: '<strong>Demand Deposits</strong> : Funds deposited in a bank account that can be withdrawn by the account holder at any time without prior notice, typically including checking accounts.',
});

// savings_deposits_tip
tippy('#savings_deposits_tip', {
        content: '<strong>Savings Deposits</strong> : Funds deposited in a bank account that earn interest and are intended for long-term savings, typically including savings accounts.',
});

// term_deposits_tip
tippy('#term_deposits_tip', {
        content: '<strong>Term Deposits</strong> : Funds deposited in a bank account for a fixed period of time, earning a higher interest rate compared to demand or savings deposits, typically including certificates of deposit (CDs).',
});

// total_deposits_tip
tippy('#total_deposits_tip', {
        content: '<strong>Total Deposits</strong> : The sum of all types of deposits held by a bank, including demand, savings, and term deposits, representing the total liability of the bank to its depositors.',
});

// borrowings_tip
tippy('#borrowings_tip', {
        content: '<strong>Borrowings</strong> : The total amount of money that a bank has borrowed from other financial institutions or the central bank, representing a liability for the bank.',
});

// other_liabilities_tip
tippy('#other_liabilities_tip', {
        content: '<strong>Other Liabilities</strong> : Miscellaneous financial obligations of a bank that do not fall under specific categories, representing additional liabilities on the bank\'s balance sheet.',
});

// total_bank_liabilities_tip
tippy('#total_bank_liabilities_tip', {
        content: '<strong>Total Liabilities</strong> : The sum of all financial obligations or debts owed by a bank to external parties, including deposits, borrowings, and other liabilities.',
});

// bank_assets_tip
tippy('#bank_assets_tip', {
        content: '<strong>Bank Assets</strong> : Resources owned by a bank that have economic value and can provide future benefits, classified as current or non-current based on their liquidity.',
});

// cash_rbi_tip
tippy('#cash_rbi_tip', {
        content: '<strong>Cash Reserve Ratio (CRR)</strong> : The percentage of a bank\'s total deposits that must be held in reserve with the central bank (RBI) as cash, to ensure liquidity and stability in the banking system.',
});

// balance_with_banks_tip
tippy('#balance_with_banks_tip', {
        content: '<strong>Balance with Banks</strong> : The total amount of funds that a bank holds in accounts with other banks, representing a current asset for the bank.',
});

// investments_tip
tippy('#investments_tip', {
        content: '<strong>Investments</strong> : Financial assets held by a bank for the purpose of generating income or capital appreciation, classified as current or non-current based on their liquidity.',
});

// loans_advances_tip
tippy('#loans_advances_tip', {
        content: '<strong>Loans & Advances</strong> : The total amount of money that a bank has lent to its customers, representing a current asset for the bank.',
});

// other_assets_tip
tippy('#other_assets_tip', {
        content: '<strong>Other Assets</strong> : Miscellaneous resources owned by a bank that do not fall under specific categories, representing additional assets on the bank\'s balance sheet.',
});

// bank_fixed_assets_tip
tippy('#bank_fixed_assets_tip', {
        content: '<strong>Bank Fixed Assets</strong> : Long-term tangible assets owned by a bank, such as buildings and equipment, used in the bank\'s operations.',
});

// total_bank_assets_tip
tippy('#total_bank_assets_tip', {
        content: '<strong>Total Assets</strong> : The sum of all resources owned by a bank that have economic value and can provide future benefits, classified as current or non-current based on their liquidity.',
});

// bank_income_statement_tip
tippy('#bank_income_statement_tip', {
        content: '<strong>Bank Income Statement</strong> : A financial statement that summarizes a bank\'s revenues, expenses, and profits/losses over a specific period, providing insights into its operational performance and profitability.',
});

// interest_earned_tip
tippy('#interest_earned_tip', {
        content: '<strong>Interest Earned</strong> : The income generated from a bank\'s interest-bearing assets, such as loans and investments, representing a key component of the bank\'s revenue.',
});

// interest_expended_tip
tippy('#interest_expended_tip', {
        content: '<strong>Interest Expended</strong> : The cost incurred by a bank for its interest-bearing liabilities, such as deposits and borrowings, representing a key component of the bank\'s expenses.',
});

// other_income_tip
tippy('#other_income_tip', {
        content: '<strong>Other Income</strong> : Miscellaneous income earned by a bank that does not fit into the standard categories of revenue, providing insight into additional revenue streams.',
});

// operating_expenses_tip
tippy('#operating_expenses_tip', {
        content: '<strong>Operating Expenses</strong> : The total costs incurred by a bank in its day-to-day operations, including salaries, rent, utilities, and other administrative expenses.',
});

// total_income_tip
tippy('#total_income_tip', {
        content: '<strong>Total Income</strong> : The sum of all revenues earned by a bank during a specific period, including interest earned and other income.',
});

// total_expenses_tip
tippy('#total_expenses_tip', {
        content: '<strong>Total Expenses</strong> : The sum of all costs incurred by a bank during a specific period, including interest expended and operating expenses.',
});

// net_profit_bank_tip
tippy('#net_profit_bank_tip', {
        content: '<strong>Net Profit</strong> : The profit remaining after all expenses, including interest expended and operating expenses, have been deducted from total income, reflecting the bank\'s overall profitability.',
});

//net_interest_income_tip
tippy('#net_interest_income_tip', {
        content: '<strong>Net Interest Income</strong> : The difference between the interest earned on a bank\'s interest-bearing assets and the interest expended on its interest-bearing liabilities, reflecting the bank\'s core profitability from its lending and borrowing activities.',
});

//download_bank_report_tip
tippy('#download_bank_report_tip', {
        content: '<strong>Download Bank Report</strong> : Click to download a comprehensive report of the bank\'s consolidated financial statements, including its balance sheet and income statement, in PDF format for offline review and analysis.',
});

//analyse_bank_statement_button_tip
tippy('#analyseBankBtn', {
        content: '<strong>Analyse Bank Statement</strong> : Click to analyze the bank\'s consolidated financial statements based on the provided data, generating insights into the bank\'s financial health and operational performance.',
});

// bank_performance_ratios_tip
tippy('#bank_ratios_tip', {
        content: '<strong>Bank Performance Ratios</strong> : Key financial metrics used to evaluate a bank\'s profitability, efficiency, and stability, including ratios like Return on Assets (ROA) and Return on Equity (ROE).',
});

//interest_income_percent_tip
tippy('#interest_income_percent_tip', {
        content: '<strong>Interest Income Percentage</strong> : A financial metric that indicates the proportion of a bank\'s total income that is derived from interest earned on its interest-bearing assets, calculated as (Interest Earned / Total Income) * 100.',
});

//net_interest_income_percent_tip
tippy('#net_interest_income_percent_tip', {
        content: '<strong>Net Interest Income Percentage</strong> : A financial metric that indicates the proportion of a bank\'s total income that is derived from its net interest income, calculated as (Net Interest Income / Total Income) * 100.',
});

//net_profit_margin_percent_tip
tippy('#net_profit_margin_percent_tip', {
        content: '<strong>Net Profit Margin Percentage</strong> : A financial metric that indicates the proportion of a bank\'s net profit to its total income, calculated as (Net Profit / Total Income) * 100.',
});

//net_interest_margin_tip
tippy('#net_interest_margin_tip', {
        content: '<strong>Net Interest Margin</strong> : A financial metric that indicates the difference between the interest income generated by banks and the amount of interest paid out to their depositors, relative to the total assets, calculated as (Net Interest Income / Total Assets) * 100.',
});

//total_business_tip
tippy('#total_business_tip', {
        content: '<strong>Total Business</strong> : A financial metric that represents the sum of a bank\'s total deposits and total advances, indicating the overall scale of the bank\'s operations.',
});

//casa_ratio_tip
tippy('#casa_ratio_tip', {
        content: '<strong>CASA Ratio</strong> : A financial metric that indicates the proportion of a bank\'s total deposits that are held in Current and Savings Accounts (CASA), calculated as (CASA Deposits / Total Deposits) * 100, reflecting the bank\'s cost of funds and liquidity position.',
});

//loans_to_deposits_ratio_tip
tippy('#loans_to_deposits_ratio_tip', {
        content: '<strong>Loans to Deposits Ratio</strong> : A financial metric that indicates the proportion of a bank\'s total deposits that have been lent out as loans, calculated as (Total Loans / Total Deposits) * 100, reflecting the bank\'s liquidity and lending practices.',
});

//capital_adequacy_ratio_tip
tippy('#capital_adequacy_ratio_tip', {
        content: '<strong>Capital Adequacy Ratio</strong> : A financial metric that indicates the proportion of a bank\'s capital to its risk-weighted assets, calculated as (Total Capital / Risk-Weighted Assets) * 100, reflecting the bank\'s ability to absorb losses and maintain solvency.',
});

