import {
    web,
    dataviz,
    customerinsight,
    testing,
    matlab,
    ML,
    bigdata,
    clickfraud,
    Cinesuggestion,
    supplychain,
    marketingdataanalyst,
    ecommerce,
    javascript,
    nikolay,
    ub,
    shamsad,
    mongodb,
    vbscript,
    sqls,
    sql,
    surbhi,
    pandas,
    git,   
    r,    
    ibm,   
    azure,
    tableau,
    uft,   
    python,  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Statistical Analyst",
      icon: web,
    },
    {
      title: "Data Visualization Specialist",
      icon: dataviz,
    },
    {
      title: "Applied ML Engineer",
      icon: ML,
    },
    {
      title: "Big Data Engineer",
      icon: bigdata,
    },
    {
      title: "Marketing Data Analyst",
      icon: marketingdataanalyst,
    },
    {
      title: "Customer Insight Analyst",
      icon: customerinsight,
    },
    {
      title: "Supply Chain Data Analyst",
      icon: supplychain,
    },
  ];
  
  const technologies = [
    {
      name: "PYTHON",
      icon: python,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "VBScript",
      icon: vbscript,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "SQL sever",
      icon: sqls,
    },
    {
      name: "MySQL",
      icon: sql,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
  ];
  
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#E6DEDD",
      date: "June 2019 - January 2023",
      points: [
        "Led critical data validation processes, including data consistency checks, regression analysis, for a major German telecom operator. Ensured data reliability and accuracy, directly supporting business continuity and strategic insights.",
        "Developed automated scripts and quality assurance protocols to detect and resolve discrepancies early in the data pipeline, minimizing downstream errors and enhancing the accuracy of analytics outputs.",
        "Executed complex SQL queries to extract, transform, and analyze large volumes of data, optimizing query performance for efficient data retrieval. Collaborated closely with data engineering teams to design scalable data infrastructure, enhancing data accessibility across business functions.",
        "Utilized Python, SQL, and scripting languages (VBScript, Java) to automate data extraction, transformation, and loading (ETL) processes, resulting in a 35% improvement in defect detection and faster issue resolution.",
        "Led a comprehensive data migration project, transferring key data from various sources to Amazon Redshift. This involved migration of employee data from Workday and client requests through Salesforce (data stored in SQL Server) also used CData sync and AWS DMS for secure data transfer to Redshift, employing dbt (Data Build Tool) to structure data across a Raw Dimensional Curated pipeline, finally Integrated the curated data layer with Power BI to create interactive dashboards, enhancing data-driven decision-making.",
        "Designed and implemented a data pipeline for migrating property tax data from Microsoft Access to Azure for improved analytics by storing Access file paths in SQL Server and used Azure Data Factory (ADF) to connect with SQL Server for processing and employed Azure Functions and Databricks for data extraction, transformation, and storage in Azure Blob and structured tables, creating a Dimensional Curated data model, finally Built interactive Power BI reports on the curated layer to support insightful analysis of property tax information.",
        "Engaged with cross-departmental teams, including product development and marketing, to understand their data needs and develop tailored analytical solutions. Provided data-driven insights that supported a major product launch, resulting in a 20% increase in customer engagement and adoption.",
      ],
    },
    {
      title: "Student Leader",
      company_name: "Faculty Student Association of SUNY",
      icon: ub,
      iconBg: "#E6DEDD",
      date: "September 2023 - May 2024",
      points: [
        "Coordinated dining operations to ensure 99.99% efficient customer service and resolve issues promptly during peak hours as student leader in dining services.",
        "Developed leadership, problem-solving, and quick decision-making skills, by leading a team of 10 promoting a collaborative team environment directly applicable to software development.",
        "Led a team of students seamlessly enhanced efficiency by 50%, demonstrating strong organizational and teamwork abilities without hassle.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:[
        "I had the pleasure of supervising Bahalul Khan at IBM, where he excelled as a Data Analyst in the telecommunications domain.",
        "Bahalul consistently demonstrated exceptional data analysis and visualization skills, along with a solid understanding of data validation and quality assurance processes. His quick learning ability and strong growth mindset allowed him to quickly adapt to complex data environments and drive meaningful insights.",
        "Bahalul’s meticulous attention to detail and proactive approach ensured the accuracy and reliability of our data-driven projects, supporting both strategic decision-making and operational improvements. I highly recommend Bahalul for any role that requires a dedicated and skilled data professional.",],
      name: "Surbhi Devpura",
      designation: "Deputy Testing Manager",
      company: "IBM",
      image: surbhi,
    },
    {
      testimonial:[
        "I am delighted to provide this testimonial for Bahalul Khan Pathan, a standout student in my Data Model Query Language (DMQL) and Data Intensive Computing (DIC) courses at the University at Buffalo. Bahalul excelled in mastering complex database concepts and large-scale data analytics. His projects on Movie Recommendation Database Design and Click Fraud Detection Using Predictive Modeling showcased his technical prowess and creativity. Bahalul's dedication, intellectual curiosity, and quick grasp of complex concepts make him an exceptional candidate for any data science role. His work ethic and collaborative spirit were greatly appreciated, and I am confident in his future success.",
      ],
      name: "Shamsad Parvin",
      designation: "Assistant Professor",
      company: "University at Buffalo",
      image: shamsad,
    },
    {
      testimonial:
        "I am pleased to recommend Bahalul Khan Pathan, who excelled in my Statistical Learning and Data Mining course at the University at Buffalo. Bahalul mastered supervised learning methods and applied them effectively using R. His project on 'Enhancing E-Commerce Excellence - Customer Segmentation and Intelligent Product Recommendation' demonstrated his strong analytical skills and creativity. Bahalul's dedication and quick grasp of complex concepts were evident throughout the course. I am confident in his future success.",
      name: "Nikolay Simakov",
      designation: "Computational Scientist",
      company: "University at Buffalo",
      image: nikolay,
    },
  ];
  
  const projects = [
    {
      name: "Click Fraud Detection Using Predictive Modeling",
      description:
        "In this project, our team addressed the issue of click fraud in the online advertising industry by developing a predictive model to forecast app downloads after mobile ad clicks. This project leverages data from TalkingData, China’s largest independent big data service platform, which handles a significant volume of mobile ad clicks, many of which are potentially fraudulent. Our goal was to enhance fraud detection methods and improve the accuracy and reliability of click data for app developers and advertisers.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
        {
          name: "matplotlib",
          color: "orange-text-gradient",
        },
        {
          name: "streamlit",
          color: "red-text-gradient",
        },
      ],
      image: clickfraud,
      source_code_link: "https://github.com/BahalulKhan/Data-Intensive-Computing",
    },
    {
      name: "Movie Recommendation Database Design",
      description:
        "The Movie Recommendation Database project aims to develop a sophisticated movie recommendation system utilizing the MovieLens dataset. The goal is to offer personalized movie suggestions based on user preferences, demographics, and past behavior. This system will feature an intuitive, scalable user interface and integrate user ratings and reviews while ensuring privacy and security measures to safeguard user data. The project seeks to replace Excel with a dedicated database to enhance data accuracy, promote teamwork, and facilitate advanced analysis and insights.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: Cinesuggestion,
      source_code_link: "https://github.com/BahalulKhan/Movie-recommendation-project",
    },
    {
      name: "Enhancing E-Commerce Excellence: Customer Segmentation and Intelligent Product Recommendation",
      description:
        "This project focuses on improving e-commerce platforms through customer segmentation and intelligent product recommendation. By employing K-Means and Hierarchical Clustering techniques, we identified distinct customer groups based on shopping behavior. Additionally, using association rule mining, specifically the Apriori algorithm, we extracted meaningful patterns from transactional data to reveal hidden product relationships. Utilizing the Online Retail Data Set from the UCI Machine Learning Repository, we provided actionable insights to enhance customer satisfaction, optimize product placement, and increase sales. This strategic approach empowers retailers to tailor marketing strategies and improve the overall shopping experience.",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "k-means",
          color: "green-text-gradient",
        },
        {
          name: "RFM",
          color: "pink-text-gradient",
        },
        {
          name: "Apriori algorithm",
          color: "orange-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/BahalulKhan/enhancing-e-commerce-excellence",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };