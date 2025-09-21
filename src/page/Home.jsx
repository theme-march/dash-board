import React, { useState, useEffect } from "react";

// Brand Logo Component
const BrandLogo = () => <div className="brand-logo">TALK VISION AI</div>;

// Left Sidebar Component
const LeftSidebar = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { id: "home", icon: "🏠", label: "ホーム" },
    { id: "create-talk", icon: "💬", label: "トーク相手作成" },
    { id: "talk-list", icon: "📋", label: "トーク相手一覧" },
    { id: "profile", icon: "⚙️", label: "プロフィール設定" },
    { id: "group", icon: "👥", label: "グループ" },
  ];

  return (
    <div className="left-sidebar">
      <div className="user-profile">
        <div className="user-avatar"></div>
        <h3 className="user-name">ユーザー名</h3>
      </div>

      <nav className="nav-menu">
        <div className="nav-container">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item">
              <button
                onClick={() => setActiveNav(item.id)}
                className={`nav-link ${activeNav === item.id ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="logout-section">
          <button className="nav-link">
            <span className="nav-icon">🚪</span>
            <span>ログアウト</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

// Header Tabs Component
const HeaderTabs = ({ activeMainTab, setActiveMainTab }) => (
  <div className="header-tabs">
    <div className="tabs-container">
      <button
        onClick={() => setActiveMainTab("growth-log")}
        className={`tab-btn ${activeMainTab === "growth-log" ? "active" : ""}`}
      >
        <span className="tab-icon">📊</span>
        成長ログ
      </button>
      <button
        onClick={() => setActiveMainTab("word-check")}
        className={`tab-btn ${activeMainTab === "word-check" ? "active" : ""}`}
      >
        <span className="tab-icon">📝</span>
        ワードチェック
      </button>
    </div>
  </div>
);

// Sub Navigation Component
const SubNavigation = ({ activeSubTab, setActiveSubTab }) => (
  <div className="sub-tabs">
    <div className="sub-tabs-container">
      <button
        onClick={() => setActiveSubTab("score-log")}
        className={`sub-tab-btn ${
          activeSubTab === "score-log" ? "active" : ""
        }`}
      >
        スコアログ
      </button>
      <button
        onClick={() => setActiveSubTab("time-log")}
        className={`sub-tab-btn ${activeSubTab === "time-log" ? "active" : ""}`}
      >
        タイムログ
      </button>
    </div>
  </div>
);

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="section-header">
    <div className="section-info">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  </div>
);

const ContentRenderer = ({
  activeMainTab,
  activeSubTab,
  hoveredBar,
  setHoveredBar,
}) => {
  if (activeMainTab === "word-check") {
    return <WordCheckContent />;
  }

  if (activeMainTab === "growth-log") {
    if (activeSubTab === "score-log") {
      return (
        <>
          <SectionHeader
            title="スコアログ"
            subtitle="あなたの学習スコアを記録し、進捗状況を可視化"
          />
          <div className="score-log-card">
            <div className="time-log-content">
              <div className="time-log-date">日付：2025/08/01</div>
              <div className="time-log-name">学習テーマ：ビジネス英語</div>
              <div className="time-log-duration">スコア：85点</div>
            </div>
          </div>
          <ScoreLogChart />
        </>
      );
    }

    if (activeSubTab === "time-log") {
      return (
        <>
          <SectionHeader
            title="タイムログ"
            subtitle="あなたの行動を記録し、時間の使い方を可視化"
          />
          <div className="hr-custom"></div>
          <TimeLogChart hoveredBar={hoveredBar} setHoveredBar={setHoveredBar} />
          <div className="hr-custom"></div>
        </>
      );
    }
  }

  return null;
};

// Time Log Chart Component
const TimeLogChart = ({ hoveredBar, setHoveredBar }) => {
  const [chartAnimated, setChartAnimated] = useState(false);

  const chartData = [
    {
      height: "100px",
      color: "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)",
      bgColor: "#FFE5D1",
      textColor: "#C2410C",
      label: "作成名(25)",
      delay: "0.1s",
      cardData: {
        date: "2025/08/01",
        name: "営業プレゼン",
        time: "5分15秒",
      },
    },
    {
      height: "140px",
      color: "linear-gradient(135deg, #4F9CF9 0%, #3B82F6 100%)",
      bgColor: "#DBEAFE",
      textColor: "#1E40AF",
      label: "作成名(25)",
      delay: "0.2s",
      cardData: {
        date: "2025/08/01",
        name: "法人営業A社",
        time: "7分30秒",
      },
    },
    {
      height: "80px",
      color: "linear-gradient(135deg, #A855F7 0%, #9333EA 100%)",
      bgColor: "#EDE9FE",
      textColor: "#7C2D12",
      label: "作成名(25)",
      delay: "0.3s",
      cardData: {
        date: "2025/08/01",
        name: "システム開発",
        time: "4分45秒",
      },
    },
    {
      height: "120px",
      color: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      bgColor: "#FEE2E2",
      textColor: "#B91C1C",
      label: "作成名(25)",
      delay: "0.4s",
      cardData: {
        date: "2025/08/01",
        name: "マーケティング",
        time: "6分20秒",
      },
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setChartAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chart-container">
      {chartData.map((bar, index) => (
        <div key={index} className="chart-bar">
          {/* Hover card */}
          {hoveredBar === index && (
            <div className="hover-card">
              <div className="hover-card-content">
                <div>日付：{bar.cardData.date}</div>
                <div>作成名：{bar.cardData.name}</div>
                <div>時間：{bar.cardData.time}</div>
              </div>
              <div className="hover-card-arrow"></div>
            </div>
          )}

          {/* Capsule track + fill */}
          <div
            className="chart-bar-track"
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div
              className="chart-bar-fill"
              style={{
                background: bar.color,
                height: chartAnimated ? bar.height : "0%",
                transitionDelay: bar.delay,
              }}
            ></div>
          </div>

          {/* Label */}
          <div
            className="bar-label"
            style={{
              backgroundColor: bar.bgColor,
              color: bar.textColor,
            }}
          >
            {bar.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// Score Log Chart Component
const ScoreLogChart = () => {
  const [chartAnimated, setChartAnimated] = useState(false);

  const scoreData = [
    {
      height: "120px",
      color: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      bgColor: "#D1FAE5",
      textColor: "#047857",
      label: "スコア(85)",
      delay: "0.1s",
    },
    {
      height: "90px",
      color: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      bgColor: "#FEF3C7",
      textColor: "#92400E",
      label: "スコア(68)",
      delay: "0.2s",
    },
    {
      height: "160px",
      color: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      bgColor: "#EDE9FE",
      textColor: "#6D28D9",
      label: "スコア(95)",
      delay: "0.3s",
    },
    {
      height: "110px",
      color: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      bgColor: "#FEE2E2",
      textColor: "#B91C1C",
      label: "スコア(72)",
      delay: "0.4s",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chart-container">
      {scoreData.map((bar, index) => (
        <div key={index} className="chart-bar">
          <div
            className="chart-bar-inner"
            style={{
              background: bar.color,
              height: chartAnimated ? bar.height : "0px",
              transitionDelay: bar.delay,
            }}
          ></div>
          <div
            className="bar-label"
            style={{
              backgroundColor: bar.bgColor,
              color: bar.textColor,
            }}
          >
            {bar.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// Word Check Component
const WordCheckContent = () => {
  return (
    <div className="word-check-container">
      <div className="word-check-header">
        <h2 className="section-title">ワードチェック</h2>
        <p className="section-subtitle">
          学習した単語の理解度を確認し、復習をサポート
        </p>
      </div>

      <div className="word-grid">
        {[
          {
            word: "Business",
            meaning: "ビジネス",
            level: "Basic",
            color: "#10B981",
          },
          {
            word: "Management",
            meaning: "管理",
            level: "Intermediate",
            color: "#F59E0B",
          },
          {
            word: "Strategy",
            meaning: "戦略",
            level: "Advanced",
            color: "#8B5CF6",
          },
          {
            word: "Marketing",
            meaning: "マーケティング",
            level: "Intermediate",
            color: "#EF4444",
          },
          {
            word: "Analysis",
            meaning: "分析",
            level: "Advanced",
            color: "#3B82F6",
          },
          {
            word: "Development",
            meaning: "開発",
            level: "Intermediate",
            color: "#06B6D4",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="word-card"
            style={{ borderLeftColor: item.color }}
          >
            <div className="word-card-header">
              <span className="word-text">{item.word}</span>
              <span
                className="level-badge"
                style={{ backgroundColor: item.color }}
              >
                {item.level}
              </span>
            </div>
            <div className="word-meaning">{item.meaning}</div>
            <div className="word-progress">
              <div
                className="progress-bar"
                style={{
                  backgroundColor: item.color,
                  width: `${Math.random() * 40 + 60}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// AI Message Component
const AIMessage = () => (
  <div className="ai-message">
    AIがあなたの行動時間を分析し、ログとして記録しています
  </div>
);
// SortMenu.js

const SortMenu = () => {
  const [activeSort, setActiveSort] = useState("created");
  const [activeOrder, setActiveOrder] = useState("old");

  return (
    <div className="menu-wrapper">
      <div className="menu-card">
        <div
          className={`menu-item ${activeSort === "created" ? "active" : ""}`}
          onClick={() => setActiveSort("created")}
        >
          <span>🖊</span> 作成順
        </div>
        <div
          className={`menu-item ${activeSort === "score" ? "active" : ""}`}
          onClick={() => setActiveSort("score")}
        >
          <span>📋</span> スコア順
        </div>
        <div
          className={`menu-item ${activeSort === "name" ? "active" : ""}`}
          onClick={() => setActiveSort("name")}
        >
          <span>👤</span> 名前順
        </div>
      </div>

      <div className="menu-card">
        <div
          className={`menu-item ${activeOrder === "old" ? "active" : ""}`}
          onClick={() => setActiveOrder("old")}
        >
          <span>⬆</span> 古い順
        </div>
        <div
          className={`menu-item ${activeOrder === "new" ? "active" : ""}`}
          onClick={() => setActiveOrder("new")}
        >
          <span>⬇</span> 新しい順
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const JapaneseDashboard = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [activeMainTab, setActiveMainTab] = useState("growth-log");
  const [activeSubTab, setActiveSubTab] = useState("time-log");
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="app-container">
      <div className="container">
        <BrandLogo />
        <LeftSidebar activeNav={activeNav} setActiveNav={setActiveNav} />

        <div className="main-content">
          <HeaderTabs
            activeMainTab={activeMainTab}
            setActiveMainTab={setActiveMainTab}
          />

          {activeMainTab === "growth-log" && (
            <SubNavigation
              activeSubTab={activeSubTab}
              setActiveSubTab={setActiveSubTab}
            />
          )}
          <div className="card-dashboard-grid">
            <ContentRenderer
              activeMainTab={activeMainTab}
              activeSubTab={activeSubTab}
              hoveredBar={hoveredBar}
              setHoveredBar={setHoveredBar}
            />
            <AIMessage />
          </div>
        </div>
        <SortMenu />
      </div>
    </div>
  );
};

export default JapaneseDashboard;
