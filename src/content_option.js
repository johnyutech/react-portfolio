import workLogo from "./assets/images/Work_logo.png";

const logotext = "JOHN YU";
const meta = {
    title: "John Yu",
    description: "I'm John Yu, a Data Analyst and Business Intelligence professional with expertise in SQL, Python, and Tableau, currently working at Tesla",
};

const introdata = {
    title: "I'm John Yu",
    animated: {
        first: "I extract meaningful insights from complex data",
        second: "I build tools that empower teams",
        third: "I drive decisions with business intelligence",
    },
    description: "Data-driven professional with experience in business intelligence, data analysis, sales, and customer success. Skilled in SQL, Python, Tableau, and various BI tools to transform complex data into actionable insights.",
    your_img_url: workLogo
};


const dataabout = {
    title: "About Me",
    aboutme: "I am a Business Administration graduate from UC Riverside with a focus on Information Systems. With experience at companies like Tesla, MEAN WELL USA, and JP Morgan Chase, I've developed expertise in data analysis, business intelligence, and customer success. I'm passionate about leveraging technology to solve business problems and drive growth.",
};

const worktimeline = [{
        jobtitle: "Inside Sales Tesla Advisor",
        where: "Tesla",
        date: "2025 - Present",
    },
    {
        jobtitle: "Account Manager",
        where: "MEAN WELL USA Inc.",
        date: "2024 - 2025",
    },
    {
        jobtitle: "Support Analyst",
        where: "JP Morgan Chase",
        date: "2023 - 2024",
    },
    {
        jobtitle: "Support Analyst",
        where: "First Republic Bank",
        date: "2022 - 2023",
    },
];

const skills = [{
        name: "SQL",
        value: 95,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Tableau",
        value: 90,
    },
    {
        name: "Excel",
        value: 95,
    },
    {
        name: "Customer Service & Communication",
        value: 90,
    },
    {
        name: "Sales & Relationship Management",
        value: 90,
    }
];

const services = [{
        title: "Data Analysis",
        description: "Expert in extracting insights from complex datasets using SQL, Python, and various BI tools to drive business decisions.",
    },
    {
        title: "Business Intelligence",
        description: "Skilled in creating interactive dashboards and reports using Tableau, PowerBI, and Cognos to visualize key metrics and trends.",
    },
    {
        title: "Process Automation",
        description: "Experience in developing automated solutions using VBA, Python, and SQL to streamline workflows and improve efficiency.",
    },
];

const dataportfolio = [{
        img: "https://i.postimg.cc/0jfvBVxb/Covid19-Dashboard.png?width=300&height=300&fit=contain&bg=white",
        description: "SQL/Tableau Covid-19 Dashboard - Interactive data visualization and forecasting analysis",
        link: "https://public.tableau.com/app/profile/john.yu5447/viz/Covid-19DashboardProject_16485950465900/Dashboard1",
    },
    {
        img: "https://i.postimg.cc/mZF8yPVW/Bike-Dashboard.png?width=300&height=300&fit=contain&bg=white",
        description: "Excel Project - Bike Sales Dashboard",
        link: "https://excel.cloud.microsoft/open/onedrive/?docId=180CE90B74AD2CD%21s7b8eae3cda7f4272846940e68a45ddee&driveId=0180CE90B74AD2CD",
    },
    {
        img: "https://i.postimg.cc/dVMR6FnH/Python-Project.png?width=300&height=300&fit=contain&bg=white",
        description: "Python Project for Data Science - Financial data analysis using pandas, plotly, and BeautifulSoup",
        link: "https://www.coursera.org/account/accomplishments/certificate/383LULD9834Z",
    },
    {
        img: "https://i.postimg.cc/jqZkMDJ8/GoogleDA.png?width=300&height=300&fit=contain&bg=white",
        description: "Google Data Analytics Professional Certificate",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/JVUTPUJ83FJW",
    }
];

const contactConfig = {
    YOUR_EMAIL: "johnyu.tech@gmail.com",
    YOUR_FONE: "(408) 204-9022",
    description: "Feel free to reach out to me for any professional opportunities or collaborations. I'm always open to discussing new projects and ideas.",
    YOUR_SERVICE_ID: "service_mdm0y68",
    YOUR_TEMPLATE_ID: "template_1b9tb4g",
    YOUR_USER_ID: "F_VlpbEzQ98ryDPSN",
};

const socialprofils = {
    github: "https://github.com/johnyutech/PortfolioProjects",
    linkedin: "https://www.linkedin.com/in/jyu00/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};