export const parseBankCodes = async () => {
    try {
        const response = await fetch('/bank_codes.csv');
        const csvText = await response.text();
        
        // Skip header row and parse CSV
        const rows = csvText.split('\n').slice(1);
        
        // Create lookup object
        const bankCodeMap = {};
        rows.forEach(row => {
            const [_, bankName, ifscCode] = row.replace(/"/g, '').split(',');
            if (ifscCode && bankName) {
                bankCodeMap[ifscCode.trim()] = bankName.trim();
            }
        });
        
        return bankCodeMap;
    } catch (error) {
        console.error('Error loading bank codes:', error);
        return {};
    }
};
