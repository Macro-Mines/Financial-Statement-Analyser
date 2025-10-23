const driver = window.driver.js.driver;


const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: false,
    overlayColor: '#09011fff',
    smoothScroll: true,
    allowKeyboardControl: true,
    disableActiveInteraction: true,
    steps: [
        // quick navigation buttons for income-statement, balance sheet, bank financial statement, marginal costing
        { element: '.floating-buttons', popover: { title: 'Quick Navigation Button', description: 'Click these buttons to quickly navigate to the sections : Income Statement | Balance Sheet | Bank Financial Statement | Marginal Costing.' } },

        //income statement
        { element: '#income_statement_tip', popover: { title: 'Income Statement', description: 'This is the income statement section.' } },

        //trading account
        { element: '#trading_account_tip', side: 'top', align: 'start', popover: { title: 'Trading Account', description: 'This is the trading account section.' } },

        //trading account debit and credit sides
        { element: '.t-account-debit', popover: { title: 'Debit Side', description: 'This is a Trading Account debit side section.' } },

        { element: '.t-account-credit', popover: { title: 'Credit Side', description: 'This is a Trading Account credit side section.' } },

        //profit and loss account
        { element: '#profit_loss_tip', popover: { title: 'Profit and Loss Account', description: 'This is the profit and loss account section.' } },

        //analyse income statement button
        { element: '#analyseBtn', popover: { title: 'Analyse Income Statement Button', description: 'Click this button to analyse the income statement.' } },

        //balance sheet
        { element: '#balance_sheet_tip', popover: { title: 'Balance Sheet', description: 'This is the balance sheet section.' } },

        // liabilities and assets sides of balance sheet
        { element: '.liabilities', popover: { title: 'Liabilities Side', description: 'This is the liabilities side of the balance sheet.' } },

        //capital and reserves, loans, current liabilities
        { element: '.capital', popover: { title: 'Capital and Reserves', description: 'This is the capital and reserves section under liabilities.' } },
        { element: '.longterm', popover: { title: 'Loans', description: 'This is the loans section under liabilities.' } },
        { element: '.currentliab', popover: { title: 'Current Liabilities', description: 'This is the current liabilities section under liabilities.' } },



        { element: '.assets', popover: { title: 'Assets Side', description: 'This is the assets side of the balance sheet.' } },

        //fixed assets, current assets
        { element: '.fixed', popover: { title: 'Fixed Assets', description: 'This is the fixed assets section under assets.' } },
        { element: '.currentassets', popover: { title: 'Current Assets', description: 'This is the current assets section under assets.' } },
        
        //analyse balance sheet button
        { element: '#analyseBalanceSheetBtn', popover: { title: 'Analyse Balance Sheet Button', description: 'Click this button to analyse the balance sheet.' } },

        // bank financial statement
        { element: '#bank_financial_statement_tip', popover: { title: 'Bank Financial Statement', description: 'This is the bank financial statement section.' } },

        // liabilities and capital section
        { element: '#bank-liabilities-capital-section', popover: { title: 'Liabilities and Capital Section', description: 'This is the liabilities and capital section of the bank financial statement. From Schedule 1 to 5' } },

        // assets section
        { element: '#bank-assets-section', popover: { title: 'Assets Section', description: 'This is the assets section of the bank financial statement. From Schedule 6 to 11' } },

        // bank income statement
        { element: '#bank-income-statement-section', popover: { title: 'Bank Income Statement', description: 'This is the bank income statement section. From Schedule 13 to 16' } },

        // analyse bank financial statement button
        { element: '#analyseBankBtn', popover: { title: 'Analyse Bank Financial Statement Button', description: 'Click this button to analyse the bank financial statement.' } },

        // marginal costing section
        { element: '#marginal_costing_tip', popover: { title: 'Marginal Costing Section', description: 'This is the marginal costing section.' } },

        // welcome to financial analysis website
        { element: '#web_name_tip', popover: { title: 'Welcome to Financial Analysis Website', description: 'This is a financial analysis website that helps you to analyse financial statements like Income Statement, Balance Sheet, Bank Financial Statement and Marginal Costing.' } },
    ],

    onDestroyStarted: () => {
        if (!driverObj.hasNextStep() || confirm("Are you sure? You want to exit the tour?")) {
            driverObj.destroy();
        }
    },
});

//driverObj.drive();
