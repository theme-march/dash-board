import React, { useState, useEffect } from "react";

// Brand Logo Component
const BrandLogo = () => <div style={styles.brandLogo}>TALK VISION AI</div>;

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
    <div style={styles.leftSidebar}>
      {/* User Profile */}
      <div style={styles.userProfile}>
        <div style={styles.userAvatar}></div>
        <h3 style={styles.userName}>ユーザー名</h3>
      </div>

      {/* Navigation Menu */}
      <nav style={styles.navMenu}>
        <div style={styles.navContainer}>
          {navItems.map((item) => (
            <div key={item.id} style={styles.navItem}>
              <button
                onClick={() => setActiveNav(item.id)}
                style={{
                  ...styles.navLink,
                  ...(activeNav === item.id ? styles.navLinkActive : {}),
                }}
              >
                <span style={styles.navIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div style={styles.logoutSection}>
          <button style={styles.navLink}>
            <span style={styles.navIcon}>🚪</span>
            <span>ログアウト</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

// Header Tabs Component
const HeaderTabs = ({ activeMainTab, setActiveMainTab }) => (
  <div style={styles.headerTabs}>
    <div style={styles.tabsContainer}>
      <button
        onClick={() => setActiveMainTab("growth-log")}
        style={{
          ...styles.tabBtn,
          ...(activeMainTab === "growth-log"
            ? styles.tabBtnActive
            : styles.tabBtnInactive),
        }}
      >
        <span style={styles.tabIcon}>📊</span>
        成長ログ
      </button>
      <button
        onClick={() => setActiveMainTab("word-check")}
        style={{
          ...styles.tabBtn,
          ...(activeMainTab === "word-check"
            ? styles.tabBtnActive
            : styles.tabBtnInactive),
        }}
      >
        <span style={styles.tabIcon}>📝</span>
        ワードチェック
      </button>
    </div>
  </div>
);

// Sub Navigation Component
const SubNavigation = ({ activeSubTab, setActiveSubTab }) => (
  <div style={styles.subTabs}>
    <div style={styles.subTabsContainer}>
      <button
        onClick={() => setActiveSubTab("score-log")}
        style={{
          ...styles.subTabBtn,
          ...(activeSubTab === "score-log"
            ? styles.subTabBtnActive
            : styles.subTabBtnInactive),
        }}
      >
        スコアログ
      </button>
      <button
        onClick={() => setActiveSubTab("time-log")}
        style={{
          ...styles.subTabBtn,
          ...(activeSubTab === "time-log"
            ? styles.subTabBtnActive
            : styles.subTabBtnInactive),
        }}
      >
        タイムログ
      </button>
    </div>
  </div>
);

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div style={styles.sectionHeader}>
    <div style={styles.sectionInfo}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <p style={styles.sectionSubtitle}>{subtitle}</p>
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
          <div style={styles.scoreLogCard}>
            <div style={styles.timeLogContent}>
              <div style={styles.timeLogDate}>日付：2025/08/01</div>
              <div style={styles.timeLogName}>学習テーマ：ビジネス英語</div>
              <div style={styles.timeLogDuration}>スコア：85点</div>
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
          <TimeLogCard />
          <TimeLogChart hoveredBar={hoveredBar} setHoveredBar={setHoveredBar} />
        </>
      );
    }
  }

  return null;
};

// Time Log Card Component
const TimeLogCard = () => (
  <div style={styles.timeLogCard}>
    <div style={styles.timeLogContent}>
      <div style={styles.timeLogDate}>日付：2025/08/01</div>
      <div style={styles.timeLogName}>作成名：法人営業A社</div>
      <div style={styles.timeLogDuration}>時間：7分30秒</div>
    </div>
  </div>
);

// Chart Component for Time Log
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
    <div style={styles.chartContainer}>
      {chartData.map((bar, index) => (
        <div
          key={index}
          style={styles.chartBar}
          onMouseEnter={() => setHoveredBar(index)}
          onMouseLeave={() => setHoveredBar(null)}
        >
          {/* Hover Card */}
          {hoveredBar === index && (
            <div style={styles.hoverCard}>
              <div style={styles.hoverCardContent}>
                <div style={styles.hoverCardDate}>
                  日付：{bar.cardData.date}
                </div>
                <div style={styles.hoverCardName}>
                  作成名：{bar.cardData.name}
                </div>
                <div style={styles.hoverCardTime}>
                  時間：{bar.cardData.time}
                </div>
              </div>
              <div style={styles.hoverCardArrow}></div>
            </div>
          )}

          <div
            style={{
              ...styles.chartBarInner,
              background: bar.color,
              height: chartAnimated ? bar.height : "0px",
              transitionDelay: bar.delay,
              transform: hoveredBar === index ? "scale(1.05)" : "scale(1)",
              boxShadow:
                hoveredBar === index
                  ? "0 8px 25px rgba(0, 0, 0, 0.25)"
                  : "0 4px 16px rgba(0, 0, 0, 0.15)",
            }}
          ></div>
          <div
            style={{
              ...styles.barLabel,
              backgroundColor: bar.bgColor,
              color: bar.textColor,
              transform:
                hoveredBar === index ? "translateY(-2px)" : "translateY(0)",
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
    <div style={styles.chartContainer}>
      {scoreData.map((bar, index) => (
        <div key={index} style={styles.chartBar}>
          <div
            style={{
              ...styles.chartBarInner,
              background: bar.color,
              height: chartAnimated ? bar.height : "0px",
              transitionDelay: bar.delay,
            }}
          ></div>
          <div
            style={{
              ...styles.barLabel,
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
    <div style={styles.wordCheckContainer}>
      <div style={styles.wordCheckHeader}>
        <h2 style={styles.sectionTitle}>ワードチェック</h2>
        <p style={styles.sectionSubtitle}>
          学習した単語の理解度を確認し、復習をサポート
        </p>
      </div>

      <div style={styles.wordGrid}>
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
            style={{ ...styles.wordCard, borderLeftColor: item.color }}
          >
            <div style={styles.wordCardHeader}>
              <span style={styles.wordText}>{item.word}</span>
              <span
                style={{ ...styles.levelBadge, backgroundColor: item.color }}
              >
                {item.level}
              </span>
            </div>
            <div style={styles.wordMeaning}>{item.meaning}</div>
            <div style={styles.wordProgress}>
              <div
                style={{
                  ...styles.progressBar,
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
  <div style={styles.aiMessage}>
    AIがあなたの行動時間を分析し、ログとして記録しています
  </div>
);

// Main Dashboard Component
const JapaneseDashboard = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [activeMainTab, setActiveMainTab] = useState("growth-log");
  const [activeSubTab, setActiveSubTab] = useState("time-log");
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>

      <BrandLogo />

      <LeftSidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div style={styles.mainContent}>
        <HeaderTabs
          activeMainTab={activeMainTab}
          setActiveMainTab={setActiveMainTab}
        />
        <div>
          {activeMainTab === "growth-log" && (
            <SubNavigation
              activeSubTab={activeSubTab}
              setActiveSubTab={setActiveSubTab}
            />
          )}

          <ContentRenderer
            activeMainTab={activeMainTab}
            activeSubTab={activeSubTab}
            hoveredBar={hoveredBar}
            setHoveredBar={setHoveredBar}
          />
        </div>

        <AIMessage />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily:
      '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic Medium", "Meiryo", "MS Gothic", sans-serif',
    backgroundColor: "#F5F7FA",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
  },

  brandLogo: {
    position: "absolute",
    top: "16px",
    right: "24px",
    color: "#3B82F6",
    fontWeight: "800",
    fontSize: "11px",
    letterSpacing: "0.5px",
    zIndex: 10,
  },

  // Left Sidebar Styles
  leftSidebar: {
    width: "280px",
    height: "100vh",
    background:
      "linear-gradient(180deg, #4F46E5 0%, #3730A3 50%, #312E81 100%)",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1000,
    boxShadow: "8px 0 25px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
  },

  userProfile: {
    padding: "32px 24px",
    textAlign: "center",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
  },

  userAvatar: {
    width: "88px",
    height: "88px",
    backgroundColor: "#D1D5DB",
    borderRadius: "50%",
    margin: "0 auto 16px",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  userName: {
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    margin: 0,
  },

  navMenu: {
    padding: "24px 0",
    flexGrow: 1,
    position: "relative",
  },

  navContainer: {
    padding: "0 16px",
  },

  navItem: {
    marginBottom: "8px",
  },

  navLink: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "500",
    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    outline: "none",
  },

  navLinkActive: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },

  navIcon: {
    marginRight: "12px",
    fontSize: "16px",
    width: "20px",
    textAlign: "center",
  },

  logoutSection: {
    position: "absolute",
    bottom: "24px",
    left: "16px",
    right: "16px",
  },

  // Main Content Styles
  mainContent: {
    marginLeft: "280px",
    marginRight: "240px",
    padding: "32px",
    flex: 1,
    minHeight: "100vh",
  },

  // Header Tabs Styles
  headerTabs: {
    marginBottom: "24px",
  },

  tabsContainer: {
    display: "flex",
    gap: "16px",
  },

  tabBtn: {
    padding: "12px 28px",
    border: "none",
    borderRadius: "28px",
    fontSize: "15px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
  },

  tabBtnActive: {
    backgroundColor: "#3B82F6",
    color: "white",
    boxShadow: "0 6px 20px rgba(59, 130, 246, 0.4)",
  },

  tabBtnInactive: {
    backgroundColor: "white",
    color: "#6B7280",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },

  tabIcon: {
    fontSize: "16px",
  },

  // Sub Navigation Styles
  subTabs: {
    marginBottom: "32px",
  },

  subTabsContainer: {
    display: "flex",
    gap: "12px",
  },

  subTabBtn: {
    padding: "8px 20px",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
  },

  subTabBtnActive: {
    backgroundColor: "#3B82F6",
    color: "white",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
  },

  subTabBtnInactive: {
    backgroundColor: "#F3F4F6",
    color: "#6B7280",
  },

  // Section Header Styles
  sectionHeader: {
    marginBottom: "32px",
  },

  sectionInfo: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1F2937",
    margin: "0 0 8px 0",
  },

  sectionSubtitle: {
    color: "#6B7280",
    fontSize: "15px",
    margin: 0,
    lineHeight: "1.5",
  },

  // Time Log Card Styles
  timeLogCard: {
    background: "linear-gradient(135deg, #4F9CF9 0%, #1E40AF 100%)",
    borderRadius: "20px",
    padding: "24px",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    boxShadow: "0 12px 32px rgba(79, 156, 249, 0.35)",
    position: "relative",
    overflow: "hidden",
  },

  // Score Log Card Styles
  scoreLogCard: {
    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    borderRadius: "20px",
    padding: "24px",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    boxShadow: "0 12px 32px rgba(16, 185, 129, 0.35)",
    position: "relative",
    overflow: "hidden",
  },

  timeLogContent: {
    position: "relative",
    zIndex: 1,
  },

  timeLogDate: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  timeLogName: {
    fontSize: "15px",
    marginBottom: "12px",
    opacity: 0.9,
  },

  timeLogDuration: {
    fontSize: "20px",
    fontWeight: "700",
  },

  // Word Check Styles
  wordCheckContainer: {
    marginBottom: "40px",
  },

  wordCheckHeader: {
    marginBottom: "32px",
  },

  wordGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  wordCard: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    borderLeft: "4px solid",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  wordCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  wordText: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1F2937",
  },

  levelBadge: {
    fontSize: "11px",
    fontWeight: "600",
    color: "white",
    padding: "4px 8px",
    borderRadius: "12px",
    textTransform: "uppercase",
  },

  wordMeaning: {
    fontSize: "14px",
    color: "#6B7280",
    marginBottom: "16px",
  },

  wordProgress: {
    width: "100%",
    height: "6px",
    backgroundColor: "#F3F4F6",
    borderRadius: "3px",
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    borderRadius: "3px",
    transition: "width 1s ease-out",
  },

  // Chart Styles
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "32px",
    margin: "48px 0",
    padding: "20px 0",
  },

  chartBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
  },

  chartBarInner: {
    width: "64px",
    borderRadius: "32px",
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative",
  },

  barLabel: {
    marginTop: "16px",
    fontSize: "13px",
    fontWeight: "600",
    padding: "6px 14px",
    borderRadius: "16px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },

  // Hover Card Styles
  hoverCard: {
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: "20px",
    zIndex: 1000,
    animation: "fadeInUp 0.3s ease-out",
  },

  hoverCardContent: {
    background: "linear-gradient(135deg, #4F9CF9 0%, #1E40AF 100%)",
    borderRadius: "16px",
    padding: "16px 20px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 12px 32px rgba(79, 156, 249, 0.4)",
    minWidth: "160px",
    position: "relative",
  },

  hoverCardDate: {
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  hoverCardName: {
    fontSize: "13px",
    marginBottom: "8px",
    opacity: 0.95,
  },

  hoverCardTime: {
    fontSize: "15px",
    fontWeight: "700",
    margin: 0,
  },

  hoverCardArrow: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "8px solid #4F9CF9",
  },

  rightControlBtn: {
    width: "100%",
    padding: "14px 20px",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    textAlign: "left",
  },

  rightControlBtnActive: {
    backgroundColor: "#3B82F6",
    color: "white",
    boxShadow: "0 6px 20px rgba(59, 130, 246, 0.3)",
    transform: "translateY(-2px)",
  },

  rightControlBtnInactive: {
    backgroundColor: "white",
    color: "#6B7280",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    border: "1px solid #E5E7EB",
  },

  rightControlIcon: {
    fontSize: "16px",
    width: "20px",
    textAlign: "center",
  },

  // AI Message Styles
  aiMessage: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: "14px",
    marginTop: "48px",
    fontStyle: "italic",
  },
};

export default JapaneseDashboard;
