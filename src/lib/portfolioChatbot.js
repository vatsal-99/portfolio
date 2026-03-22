/**
 * Rule-based portfolio assistant (no API). Answers follow Vatsal’s résumé where it matters,
 * but stays conversational not rigid redirects.
 */

const SHORT_MSG =
  "Could you add a few more words? I can help with experience, skills, projects, or how to reach Vatsal.";

const FALLBACK =
  "I may not have full details on that, but I can help with skills, projects, or experience if you'd like.";

const RATE_LIMIT =
  "You’ve hit the message limit for this minute give it a moment and try again.";

export { RATE_LIMIT };

/**
 * @param {string} message
 * @returns {string}
 */
export function generatePortfolioReply(message) {
  const msg = message.toLowerCase().trim();

  if (msg.length <= 2 && msg.length > 0) {
    return SHORT_MSG;
  }

  // Greetings
  if (["hi", "hello", "hey"].includes(msg)) {
    return "Hi   ask me about Vatsal’s experience, stack, or projects, or just say what you’re curious about.";
  }
  if (msg.includes("good morning")) {
    return "Good morning. What would you like to know about Vatsal’s background or work?";
  }
  if (msg.includes("good afternoon") || msg.includes("good evening")) {
    return "Hello. Happy to help with anything on his profile skills, roles, projects, or contact.";
  }
  if (msg.includes("good night")) {
    return "Good night. If something comes up later, the contact form and résumé on the site are always there.";
  }

  // Light acknowledgements / small talk (don’t shut the door)
  if (/^(ok|okay|k|nice|cool|great|thanks?|thank you|got it|sounds good)\.?!?$/i.test(msg.trim())) {
    return "Glad that helps. Anything else about his experience, tech stack, or projects?";
  }
  if (/\b(how are you|how r u|how's it going|what's up|sup)\b/.test(msg)) {
    return "I’m doing well, thanks. I mainly answer questions about Vatsal’s profile happy to dig into experience, skills, or projects whenever you’re ready.";
  }
  if (/\b(who are you|what are you)\b/.test(msg)) {
    return "I’m a little assistant on this portfolio think quick answers from his résumé, without needing to hunt through every section. What would you like to know?";
  }
  if (/\b(who is vatsal|about vatsal|tell me about him)\b/.test(msg)) {
    return "Vatsal’s a full stack developer with 5+ years in production software React on the UI, ASP.NET and SQL behind it, mostly enterprise products. Want details on his current role or past work?";
  }

  // Help
  if (/\b(help|what can you|what do you do|capabilities)\b/.test(msg)) {
    return "Ask about his years of experience, React / .NET / SQL, enterprise projects, the WhatsApp auto-reply build, Python and learning in DS/ML, employers, education, or how to get in touch I’ll answer from what’s on the site and his résumé.";
  }

  // Thanks / goodbye
  if (/\b(thanks|thank you|ty|thx)\b/.test(msg)) {
    return "You’re welcome. If you need more depth, the downloadable résumé has the full picture.";
  }
  if (/\b(bye|goodbye|see you|cya)\b/.test(msg)) {
    return "Take care   thanks for stopping by the portfolio.";
  }

  // Experience & role
  if (/\b(experience|year|years|career|background|senior|engineer|developer)\b/.test(msg)) {
    return "He’s been in software for 5+ years. Right now he’s a Senior Software Engineer at TatvaSoft (since 2023), building public-safety products with React and REST APIs. Before that, at Version System (2021–2023), he worked on performance management and timesheet systems. Happy to go deeper on any of that.";
  }

  if (/\b(tatvasoft|tatva)\b/.test(msg)) {
    return "At TatvaSoft he’s on enterprise public safety software think React modules, APIs, integrations, and keeping things performant for real users in law enforcement and dispatch. Solid, high-stakes domain.";
  }

  if (/\b(version system|versionsystem)\b/.test(msg)) {
    return "At Version System he shipped HR-style products: performance management and timesheets, with backend work, SQL, and reporting not flashy on the outside, but very real-world.";
  }

  // Skills & stack
  if (/\b(skill|stack|technologies|tech stack|proficiency)\b/.test(msg)) {
    return "Day to day it’s a lot of React and JavaScript up front, ASP.NET Core, C#, REST APIs, and SQL Server / PostgreSQL in the back. GitHub and Jira show up in the workflow too. React is the main UI focus if that’s what you’re after.";
  }

  if (/\breact\b/.test(msg)) {
    return "React is his go-to for UIs especially in the public safety and enterprise work on the site. It’s paired with .NET services and SQL, not a toy stack.";
  }

  if (/(asp\.net|dotnet|\.net\b|\bc#\b)/i.test(msg)) {
    return "On the server side it’s ASP.NET Core and C# REST APIs, services wired to the React apps, backed by SQL. Pretty standard solid enterprise setup.";
  }

  if (/\b(sql|database|postgres|postgresql)\b/i.test(msg) || /\bsql\s+server\b/i.test(msg)) {
    return "SQL Server and PostgreSQL show up depending on the product transactions, reporting, the usual. He’s comfortable living in both.";
  }

  if (/\b(rest|api|apis)\b/.test(msg)) {
    return "REST APIs glue the React front ends to the backend he builds and maintains those integrations in production, not just demos.";
  }

  // Python
  if (/\bpython\b/.test(msg)) {
    return "Python’s in the mix for learning data science, ML side projects, exploring AI-style work. It sits next to his main React / .NET day job, not instead of it.";
  }

  if (/\b(machine learning|ml|data science|ai)\b/.test(msg)) {
    return "He’s actively growing there with Python hands-on projects, not just theory alongside the full stack work.";
  }

  // Projects
  if (/\b(project|portfolio|case stud|built|delivered)\b/.test(msg)) {
    return "The highlights are public safety software, a document e‑commerce setup, performance management, timesheets, plus a WhatsApp auto-reply project on the side. Each has a short write-up on the site if you want specifics.";
  }

  if (/\b(public safety|law enforcement|dispatch|nibrs)\b/.test(msg)) {
    return "That’s the big enterprise piece incident and records workflows, dispatch-facing features, integrations with other systems. React and APIs in the middle of it.";
  }

  if (/\b(whatsapp|auto[\s-]?reply|auto reply)\b/.test(msg)) {
    return "Separate from day-job products, he built a WhatsApp auto-reply flow automated replies and real-time messaging. Good example of wiring automation around a real channel.";
  }

  if (/\b(chatbot|this chat|assistant)\b/.test(msg)) {
    return "I’m the assistant on this portfolio here to answer questions about Vatsal’s work. If the AI service is unavailable, you still get quick answers from the built-in rules.";
  }

  // Resume & contact
  if (/\b(resume|cv|pdf|download)\b/.test(msg)) {
    return "There’s a PDF on the page use View Resume in the hero or Download in the footer. Same story as the site, just in one file.";
  }

  if (/\b(contact|email|hire|recruit|linkedin|github|reach|message)\b/.test(msg)) {
    return "Best path is the Contact section email, LinkedIn, GitHub are listed there. For hiring or recruiter questions, email usually works well.";
  }

  if (/\b(location|based|india|relocate|remote)\b/.test(msg)) {
    return "He’s based in India; exact wording is on the résumé if you need it for a role or relocation question.";
  }

  // Education
  if (/\b(education|degree|university|college|diploma|be\b|b\.e|engineering)\b/.test(msg)) {
    return "B.E. in Computer Engineering from Darshan Institute (2018–2021), plus a diploma before that at Noble Group details and dates are on the résumé.";
  }

  // Enterprise
  if (/\b(enterprise|microservice|integration|scalable)\b/.test(msg)) {
    return "His work is mostly enterprise-grade: real users, APIs, databases, and integrations when systems need to talk to each other not just CRUD in a vacuum.";
  }

  // Off-topic: don’t block answer lightly, then invite portfolio topics
  if (/\b(weather|temperature|forecast|rain|sunny|cold|hot)\b/.test(msg)) {
    return "I’m not plugged into live weather, I’m afraid. I can still chat about Vatsal’s work or skills if you’d like.";
  }
  if (/\b(food|lunch|dinner|eat|restaurant|recipe)\b/.test(msg)) {
    return "Not my specialty I’m here for his professional story. Ask about React, .NET, projects, or experience anytime.";
  }
  if (/\b(stock|nifty|sensex|market|bitcoin|crypto)\b/.test(msg)) {
    return "I won’t pretend to be a finance bot. Happy to switch to his stack, employers, or projects instead.";
  }

  return FALLBACK;
}
