import { useState } from "react";

const TabNavItem = ({ caption, index, selectedTab, setSelectedTab }) => (
    <li className="nav-item" onClick={() => setSelectedTab(index)}>
        <h4 className={`nav-link ${index === selectedTab ? "active" : ""}`}>
            {caption}
        </h4>
    </li>
);

const TabContent = ({ content, index, selectedTab }) => (
    <div
        className={`bg-white border tab-pane fade  ${
            selectedTab === index ? "show active" : ""
        }`}
        id="kenmerken"
        role="tabpanel"
        aria-labelledby="home-tab"
    >
        {content}
    </div>
);

const Tab = ({tabHeaders = [], tabContents= []}) => {
    const [selectedTab, setSelectedTab] = useState(0);

    //const tabHeaders = [{ caption: "tab 1" }, { caption: "tab 2" }];

    const contents = [
        { id: 1, body: "tab 1" },
        { id: 2, body: "tab 2" },
    ];

    return (
        <div>
            <ul className="nav nav-tabs">
                {tabHeaders.map((header, i) => (
                    <TabNavItem
                        caption={header.caption}
                        index={i}
                        key={i}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </ul>
            <div className="tab-content" id="myTabContent">
                {tabContents.map((content, i) => (
                    <TabContent
                        content={content}
                        key={i}
                        index={i}
                        selectedTab={selectedTab}
                    />
                ))}
                {/* <div
                    key = {0}
                    className="tab-pane fade show active"
                    id="kenmerken"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >
                    content TAB 1
                </div>
                <div
                    key = {1}
                    className="tab-pane fade"
                    id="link"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    content TAB 2
                </div> */}
            </div>
        </div>
    );
};

export default Tab;
