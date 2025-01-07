const ClientDetails = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState("2024");
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Permanent Details");
    const [activePermanentTab, setActivePermanentTab] = useState("Basic Details");

    // All Tabs
    const allTabs = [
        { category: "Permanent Details", tabName: "Basic Details" },
        { category: "Permanent Details", tabName: "Address" },
        { category: "Permanent Details", tabName: "Bank" },
        { category: "Permanent Details", tabName: "Additional Details" },
        { category: "Income", tabName: "Salary" },
        { category: "Income", tabName: "Business" },
        { category: "Income", tabName: "House Property" },
        { category: "Income", tabName: "Capital Gain" },
        { category: "Income", tabName: "Other Income" },
        { category: "Deduction", tabName: "80C to 80G" },
        { category: "Deduction", tabName: "More Deductions" },
        { category: "Deduction", tabName: "Other Deductions" },
        { category: "TDS/Taxes", tabName: "TDS/TCS" },
        { category: "Final", tabName: "Filing" },
    ];

    // Filtered Tabs based on Search
    const filteredTabs = allTabs.filter(
        (tab) =>
            tab.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tab.tabName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle Tab Search and Open
    const handleTabSelect = (tab) => {
        setActiveTab(tab.category);
        if (tab.category === "Permanent Details") setActivePermanentTab(tab.tabName);
        setSearchQuery(""); // Clear the search input after selecting a tab
    };

    return (
        <>
            {/* Search Bar */}
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="input-group shadow-sm input-group-sm flex-column">
                <div className="input-group-append bg-light border-0" style={{ height: "40px" }}>
                    <input
                        className="form-control bg-light border-0 search-element"
                        type="search"
                        style={{ height: "40px" }} 
                        id="search-query"
                        aria-label="Search"
                        placeholder="Type here or press '/' to search input fields"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    </div>
                    {/* Dropdown for Search Results */}
                    {searchQuery && (
                        <div className="dropdown-menu show w-100">
                            {filteredTabs.length > 0 ? (
                                filteredTabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className="dropdown-item"
                                        onClick={() => handleTabSelect(tab)}
                                    >
                                        {tab.category} - {tab.tabName}
                                    </button>
                                ))
                            ) : (
                                <span className="dropdown-item text-muted">No matches found</span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Main Tabs */}
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            {/* Tab Navigation */}
                            {["Permanent Details", "Income", "Deduction", "TDS/Taxes", "Final"].map((tabName) => (
                                <button
                                    key={tabName}
                                    className={`btn ${activeTab === tabName ? "btn-primary" : "btn-secondary"}`}
                                    onClick={() => setActiveTab(tabName)}
                                >
                                    {tabName}
                                </button>
                            ))}
                        </div>

                        <div className="card-body">
                            {/* Tab Content */}
                            {activeTab === "Permanent Details" && (
                                <div>
                                    {["Basic Details", "Address", "Bank", "Additional Details"].map((innerTab) => (
                                        <button
                                            key={innerTab}
                                            className={`btn ${activePermanentTab === innerTab ? "btn-primary" : "btn-secondary"}`}
                                            onClick={() => setActivePermanentTab(innerTab)}
                                        >
                                            {innerTab}
                                        </button>
                                    ))}
                                    {activePermanentTab === "Basic Details" && <BasicDetailsForm />}
                                    {activePermanentTab === "Address" && <AddressForm />}
                                    {activePermanentTab === "Bank" && <BankDetails />}
                                    {activePermanentTab === "Additional Details" && <AdditionalDetails />}
                                </div>
                            )}
                            {/* Add content for other main tabs */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
