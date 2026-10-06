// Portfolio content. Add future repositories to the projects array below.
window.PORTFOLIO = {
  name: "Abdullah Saif Zaki",
  focus: "Agentic AI · Machine learning ",
  introduction: "I design and build intelligent systems that solve real-world problems with a focus on reliability, scalability, and measurable impact.",
  about: [
    "I’m an AI Engineering student interested in building practical AI systems that move from experimentation to real-world use. My work spans intelligent assistants, machine learning applications, semantic search, APIs, and end-to-end AI workflows.",
    "I’m particularly interested in agentic AI, retrieval systems, and efficient local models. I enjoy combining modeling and software engineering to build systems that are reliable, useful, and designed around a clear problem."
  ],
  github: "https://github.com/AbdullahSaifZaki",
  linkedin: "https://www.linkedin.com/in/abdullah-saif-7bb155397/",
  email: "abdullahsaifomairi@gmail.com",
  portraitCaption: "Abdullah Saif Zaki",
  contactNote: "Open to full-time offers, internships, and research collaborations. The fastest way to reach me is via email.",
  projects: [
    {
      title: "Aisle — AI Shopping Assistant",
      description: "A conversational assistant that helps shoppers find and compare products, check order status, and explore store policies. Built with FastAPI, LangChain, and LangGraph, it combines tool calling with semantic product and FAQ search, persistent conversation memory, authentication, and rate limiting.",
      url: "https://github.com/AbdullahSaifZaki/Aisle_e_commerce_assistant",
      tags: ["AI agents", "FastAPI", "LangGraph", "Semantic search"]
    },
    {
      title: "Türkiye House Price Prediction",
      description: "An end-to-end machine learning application that estimates house prices from nine property features. Prepared 17,292 records, compared four regression models, and selected XGBoost through validation. A FastAPI backend and responsive web interface bring predictions to users, with a held-out test log RMSE of 0.300.",
      url: "https://github.com/AbdullahSaifZaki/house_prices_predictor_ML",
      tags: ["Machine learning", "XGBoost", "Python", "FastAPI"]
    }
  ],
  skills: [
    { category: "Machine learning & data", items: ["Python", "scikit-learn", "XGBoost", "CatBoost", "Pandas", "NumPy"] },
    { category: "AI agents & retrieval", items: ["LangChain", "LangGraph", "Sentence Transformers", "Semantic search", "Tool calling"] },
    { category: "APIs & databases", items: ["FastAPI", "SQLAlchemy", "MySQL", "PostgreSQL", "Redis", "Auth0"] },
    { category: "Web & development", items: ["JavaScript", "HTML & CSS", "Vite", "Git", "GitHub"] }
  ]
};
