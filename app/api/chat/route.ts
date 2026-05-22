// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// System context prompt seeding the model about Jaimin Suthar
const JAIMIN_BIO_SYSTEM_PROMPT = `
You are the AI Recruiter Co-Pilot and Technical Advisor for Jaimin Suthar, an expert Technical Lead and Full-Stack Developer with 11+ years of industry experience. Your goal is to represent Jaimin's skills, background, projects, and work ethic in a highly professional, engaging, and precise manner to recruiters, hiring managers, and prospective clients.

Here are the absolute facts about Jaimin Suthar:
- Name: Jaimin Suthar
- Nickname: JS Developer
- Email: jaimin.suthar12@gmail.com
- Resume Link: https://drive.google.com/file/d/1kfqHLaZgpZZVLk9BEZLiIYgbBWHuYIia/view?usp=sharing
- Location: Vadodara, Gujarat, India (Open to remote roles and relocation)
- Primary Stack: C#, .NET Core, ASP.NET Core Web API, Microservices Architecture, AWS, Angular (16+), React JS, Vue JS, Docker, Jenkins CI/CD, MySQL, SQL Server, MongoDB.
- Current Role: Technical Lead at Cygnet.one (Oct 2020 - Present). Designing enterprise cloud systems, leading agile sprint processes in Jira, mentoring developers, running code audits, integrating third-party APIs (Google Maps/Calendar).
- Past Experience:
  1. Tech Lead at Rockers Technologies (Jan 2017 - Oct 2020) for a USA Client: Developed a massive Peer-to-Peer Crowdfunding and Lending system. Led a cross-functional team of 11 members (7 devs, 2 designers, 2 QA). Integrated Redis caching and tuned MySQL queries.
  2. Team Lead at Mtaj Solutions (Apr 2015 - Jan 2017): Led an E-commerce platform scaling with checkout engines, wallet systems, and discount rules.
  3. Software Developer at Aldiablos Infotech Pvt. Ltd. (Jan 2014 - Nov 2015): Developed responsive MVC applications and REST endpoints, transitioning into the ASP.NET ecosystem.
- Key Projects:
  1. Modelia AI Studio (TypeScript, Next.js, Generative AI): AI sandbox for orchestrating LLM prompt environments.
  2. P2P Lending Platform (Laravel, AngularJS, Redis, MySQL, Bootstrap): Automated investor matching and loan calculators.
  3. Kapdaclick (Core PHP, MySQL, Stripe, Bootstrap): Optimized shopping portal with checkout and wallet integration.
  4. Sliding Enquiry Form (WordPress, PHP, CSS3): Popular open-source plugin utilizing hardware-accelerated 3D slide overlays.
- Education: MCA (Master of Computer Application) from GTU with First Class (7.38 SPI, 2014); BCA from North Gujarat University with First Class (69%, 2011).
- Credentials: Udemy Certified Angular Complete Guide (2022) & Python Pro Bootcamp (2023).

Instructions for your responses:
1. Act as Jaimin's intelligent technical co-pilot. Keep responses concise, direct, helpful, and highly professional.
2. Emphasize Jaimin's Technical Leadership, his 11+ years of extensive hands-on experience, and his ability to design highly scalable backend microservices, SQL databases, and responsive frontends.
3. Be transparent: Jaimin's resume is downloadable at https://drive.google.com/file/d/1kfqHLaZgpZZVLk9BEZLiIYgbBWHuYIia/view?usp=sharing and his email is jaimin.suthar12@gmail.com.
4. Do not make up facts or certifications. Stick strictly to the provided portfolio details.
`;

const CODE_REVIEW_SYSTEM_PROMPT = `
You are Jaimin Suthar's virtual AI Tech Lead Code Reviewer. Your goal is to review code submitted by a developer, audit its compliance with SOLID principles, Clean Code standards, security best practices, and database optimization constraints, and provide a highly rigorous, helpful, and constructive code review.

Return your response in a clear, well-formatted JSON structure matching these fields exactly:
{
  "score": 85, // A score out of 100 based on code quality, performance, and architecture
  "pros": ["List 2-3 positive aspects of the code"],
  "cons": ["List 2-3 design flaws, code smells, or SOLID violations"],
  "review": "A detailed 1-2 paragraph technical critique of the architectural and performance aspects of the code, written in Jaimin's experienced Tech Lead persona.",
  "refactored": "A complete, beautifully refactored, clean, and optimal version of the code that resolves the issues."
}

Do not return any markdown wraps like \`\`\`json outside the JSON object; return only the raw stringified JSON.
`;

// Advanced simulated responses in case the API Key is not configured
function getFallbackChatResponse(message: string): string {
  const query = message.toLowerCase();
  
  if (query.includes("experience") || query.includes("work") || query.includes("career")) {
    return "Jaimin has over 11 years of professional software experience. He is currently a Technical Lead at Cygnet.one (since Oct 2020) where he designs .NET Core enterprise microservices and leads development teams. Previously, he managed an 11-member squad as a Tech Lead at Rockers Technologies (USA client) building P2P lending portals. He has also led e-commerce developments at Mtaj Solutions and Aldiablos.";
  }
  
  if (query.includes("skill") || query.includes("stack") || query.includes("technology") || query.includes("languages")) {
    return "Jaimin is a versatile full-stack specialist. His core backend stacks include C#, ASP.NET Core, Web APIs, Microservices, Python, and Node.js. On the frontend, he is highly fluent in Angular (16+), TypeScript, React, and Vue.js. He also possesses strong DevOps and database credentials including AWS, Docker, Jenkins CI/CD, SQL Server, MySQL, and MongoDB.";
  }
  
  if (query.includes("resume") || query.includes("cv") || query.includes("download")) {
    return "You can view and download Jaimin's official resume directly from Google Drive here: https://drive.google.com/file/d/1kfqHLaZgpZZVLk9BEZLiIYgbBWHuYIia/view?usp=sharing";
  }

  if (query.includes("project") || query.includes("portfolio")) {
    return "Jaimin has delivered several key projects: 1) Modelia AI Studio - a generative AI orchestrator built in TypeScript. 2) P2P Lending System - a robust crowdfunding financial software using Laravel and AngularJS. 3) Kapdaclick - a custom core PHP shopping cart with custom wallet systems. 4) Sliding Enquiry Form - an open-source WordPress plugin with 3D sliding CSS layouts.";
  }

  if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("call")) {
    return "You can contact Jaimin directly via email at jaimin.suthar12@gmail.com. He is open to discussing new Technical Lead, Solutions Architect, or Senior Full-Stack developer positions (both remote and on-site).";
  }

  return "Thank you for visiting my portfolio! As Jaimin's AI recruiter co-pilot, I can tell you that he brings 11+ years of seasoned expertise in C#, .NET Core, Microservices, AWS, and Angular/React. Feel free to ask me about his work experience, specific skills, custom projects, or direct contact links!";
}

function getFallbackReviewResponse(code: string): string {
  return JSON.stringify({
    score: 75,
    pros: [
      "Code is functional and solves the immediate requirements.",
      "Clear naming conventions are used for variables and parameters."
    ],
    cons: [
      "Violates the Single Responsibility Principle (SRP) by combining multiple concerns in one method.",
      "Lack of structured error handling (try-catch block) and performance logging.",
      "Hardcoded variables and database connection strings which should be fed from environmental config."
    ],
    review: "This code shows clear functionality, but it is tightly coupled and fragile. As a Tech Lead, I recommend decoupling the logic to follow SOLID guidelines. We should isolate the database calls, wrap operations in dynamic try-catch closures, and load environment configs rather than utilizing hardcoded values. This ensures our microservice nodes remain highly testable and robust.",
    refactored: `// Decoupled, production-ready refactored code matching Jaimin's Tech Lead standard
public class OrderService {
    private readonly IOrderRepository _repository;
    private readonly ILogger<OrderService> _logger;

    public OrderService(IOrderRepository repository, ILogger<OrderService> logger) {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public async Task<bool> ProcessOrderAsync(Order order) {
        if (order == null) return false;
        
        try {
            _logger.LogInformation("Processing order {OrderId}...", order.Id);
            return await _repository.SaveOrderAsync(order);
        } catch (Exception ex) {
            _logger.LogError(ex, "Failed processing order {OrderId}", order.Id);
            throw;
        }
    }
}`
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, message, code } = body;

    // Chatbot functionality
    if (action === "chat") {
      if (!genAI) {
        const fallbackText = getFallbackChatResponse(message);
        return NextResponse.json({ response: fallbackText });
      }

      const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
      const prompt = `${JAIMIN_BIO_SYSTEM_PROMPT}\n\nVisitor Question: "${message}"\n\nAI Answer:`;
      try {
        const result = await model.generateContent(prompt);
        const textResponse = result.response.text();
        return NextResponse.json({ response: textResponse });
      } catch (err) {
        // Fallback to static response if Gemini API fails
        const fallbackText = getFallbackChatResponse(message);
        return NextResponse.json({ response: fallbackText });
      }
    }

    // Code Reviewer functionality
    if (action === "review") {
      if (!genAI) {
        const fallbackJSON = getFallbackReviewResponse(code);
        return NextResponse.json(JSON.parse(fallbackJSON));
      }

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `${CODE_REVIEW_SYSTEM_PROMPT}\n\nCode Submitted for Review:\n\`\`\`\n${code}\n\`\`\`\n\nJSON Output:`;
      const result = await model.generateContent(prompt);
      const rawText = result.response.text();
      
      // Sanitizing code wrap in output if present
      let cleanText = rawText.trim();
      if (cleanText.startsWith("```json")) {
        cleanText = cleanText.substring(7);
      }
      if (cleanText.startsWith("```")) {
        cleanText = cleanText.substring(3);
      }
      if (cleanText.endsWith("```")) {
        cleanText = cleanText.substring(0, cleanText.length - 3);
      }
      cleanText = cleanText.trim();

      try {
        const parsedJSON = JSON.parse(cleanText);
        return NextResponse.json(parsedJSON);
      } catch (err) {
        // Safe parser fallback in case Gemini returned loose JSON
        const fallbackJSON = getFallbackReviewResponse(code);
        return NextResponse.json(JSON.parse(fallbackJSON));
      }
    }

    return NextResponse.json({ error: "Invalid action type" }, { status: 400 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
