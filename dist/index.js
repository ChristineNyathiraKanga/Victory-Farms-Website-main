// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  products;
  teamMembers;
  stats;
  constructor() {
    this.products = /* @__PURE__ */ new Map();
    this.teamMembers = /* @__PURE__ */ new Map();
    this.stats = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const products = [
      {
        id: "1",
        name: "Fresh Tilapia - Whole",
        description: "Affordable whole tilapia, freshly harvested from Lake Victoria. Perfect for family meals with exceptional taste and quality.",
        price: "from 350",
        unit: "KES per kg",
        category: "fresh",
        imageUrl: "/images/whole-tilapia.png",
        tags: ["Affordable", "Fresh", "Lake Victoria"],
        inStock: 1
      },
      {
        id: "2",
        name: "Fresh Tilapia - Fillets",
        description: "Affordable and  boneless tilapia fillets, ready to cook. Perfect for restaurants and quick meals.",
        price: "from 995",
        unit: "KES per box",
        category: "fresh",
        imageUrl: "/images/tilapia-fillets.jpg",
        tags: ["Boneless", "Restaurant Ready", "Fresh"],
        inStock: 1
      },
      {
        id: "3",
        name: "Fish Oil",
        description: "Affordable fish oil made from 100% Lake Victoria tilapia.",
        price: "from 400",
        unit: "KES per Litre",
        category: "oil",
        imageUrl: "/images/fish-powder-250g.jpg",
        tags: ["Affordable", "Nutrition", "Made in Kenya"],
        inStock: 1
      }
    ];
    const teamMembers = [
      {
        id: "1",
        name: "Joseph Rehmann",
        position: "Founder & Group CEO",
        education: "",
        bio: "Joe was born in Egypt and has lived in or worked on five continents. His passion is sustainable development and creating new ways where business can support the development of communities and the restoration of nature and wild areas. After five years in banking and private equity, he discovered fish farming in Ghana where he was CFO of Tropo Farms",
        skills: ["Group"],
        order: 1,
        imageUrl: "/images/team/joe.png",
        linkedinUrl: "https://ke.linkedin.com/in/joerehmann"
      },
      {
        id: "2",
        name: "Steven Moran",
        position: "Co-Founder & Group Chief Aquaculture Officer",
        education: "",
        bio: "Steve is an industry pioneer in african aquaculture, and \xA0co-launched\xA0Victory Farms. Over a period of 7 years he led the growth of \xA0Tropo Frams in Ghana from under 250MT p.a. to more than 6,100MT as its \xA0General Manager. He \xA0has extensive aquaculture experience throughout Africa and globally.\xA0It \xA0is Steve's professional aspiration to find himself at the forefront of \xA0African aquaculture, developing appropriate technologies and catalyzing.",
        skills: ["Group"],
        order: 2,
        imageUrl: "/images/team/steve.png",
        linkedinUrl: "https://ke.linkedin.com/in/steve-moran-796a8575"
      },
      {
        id: "3",
        name: "Mart Stiekema",
        position: "Group Chief Financial Officer",
        education: "",
        bio: "Mart, a seasoned leader with global experience in leadership, finance, and strategic operations, has held high-impact roles, including Finance Director at HEINEKEN Mozambique. With a Bachelor's Degree in Econometrics and Operations Research, an MSc in Operations Research & Management, and an Executive Master's in Finance\xA0&\xA0Control.",
        skills: ["Group"],
        order: 3,
        imageUrl: "/images/team/Mart.png",
        linkedinUrl: "https://ke.linkedin.com/in/mstiekema"
      },
      {
        id: "4",
        name: "Nche Wadike",
        position: "Chief Executive Officer",
        education: "",
        bio: "Nche is Franco-Nigerian and has lived, studied and worked between Nigeria, France, India, Spain and Kenya. He is passionate about designing sustainable solutions to tackle food security while improving livelihoods. Nche is a 2021 French-African Young Leader who is driven by the mantra: 'Think global, Act local' to global solutions that adapt to local contexts. He completed his MBA from INSEAD and MSc from Mines Douai, both in France.",
        skills: [""],
        order: 4,
        imageUrl: "/images/team/nche.png",
        linkedinUrl: "https://ke.linkedin.com/in/nwadike"
      },
      {
        id: "5",
        name: "Caesar Asiyo",
        position: "Group Chief Development Officer",
        education: "",
        bio: "Caesar hails from Karachuonyo in Homabay county. He brings on board private sector experience in operations &amp; administration, public sector experience in high level government coordination, non-governmental sector experience in human rights advocacy, and senior level political party management. His other interests include Environmental Conservation, Youth Empowerment, &amp; Food Security.",
        skills: ["Group"],
        order: 5,
        imageUrl: "/images/team/caesar.png",
        linkedinUrl: null
      },
      {
        id: "6",
        name: "Sarah Benhamo",
        position: "Group Communications Director",
        education: "",
        bio: "Sarah brings over 10 years of experience in  sales/marketing and brand management, with a focus in the hospitality  sector. Her passion is to build a well-motivated sales team  with the capabilities and expertise to implement Victory Farms\u2019 goals.  She received international training in business development in Dubai,  with focus on sales performance and strategic marketing.",
        skills: ["Group"],
        order: 6,
        imageUrl: "/images/team/sarah.png",
        linkedinUrl: "https://www.linkedin.com/in/sarah-benhamo-91309a162"
      },
      {
        id: "7",
        name: "Silvester Saruni",
        position: "Farm Operations Director \u2013 Roo Bay Farm ",
        education: "",
        bio: "Silvester is an Agri-business professional with more than 20 years\u2019 experience in management level. Prior to joining Victory Farms, Silvester was working at Friendship Flowers Ethiopia and is keen on coming back to Kenya. In his spare time, Silvester enjoys watching movies, football and keeping fit. He holds B.Sc in Horticulture from Jomo Kenyatta University of Agriculture and Technology.",
        skills: [""],
        order: 7,
        imageUrl: "/images/team/saruni.png",
        linkedinUrl: "https://www.linkedin.com/in/ntekerei-saruni-047a126a/"
      }
    ];
    const stats = [
      {
        id: "1",
        value: "400MT",
        label: "Monthly Harvest",
        description: "Premium Quality",
        order: 1
      },
      {
        id: "2",
        value: "60M+",
        label: "Fingerlings Annually",
        description: "Lake Victoria Excellence",
        order: 2
      },
      {
        id: "3",
        value: "600+",
        label: "Jobs Created",
        description: "Job Creation",
        order: 3
      },
      {
        id: "4",
        value: "100%",
        label: "Sustainable",
        description: "Sustainable Farming",
        order: 4
      }
    ];
    products.forEach((product) => this.products.set(product.id, product));
    teamMembers.forEach((member) => this.teamMembers.set(member.id, member));
    stats.forEach((stat) => this.stats.set(stat.id, stat));
  }
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = {
      ...insertProduct,
      id,
      imageUrl: insertProduct.imageUrl || null,
      tags: insertProduct.tags || null,
      inStock: insertProduct.inStock || null
    };
    this.products.set(id, product);
    return product;
  }
  async getTeamMembers() {
    return Array.from(this.teamMembers.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }
  async getTeamMember(id) {
    return this.teamMembers.get(id);
  }
  async createTeamMember(insertMember) {
    const id = randomUUID();
    const member = {
      ...insertMember,
      id,
      education: insertMember.education || null,
      skills: insertMember.skills || null,
      order: insertMember.order || null,
      imageUrl: insertMember.imageUrl || null,
      linkedinUrl: insertMember.linkedinUrl || null
    };
    this.teamMembers.set(id, member);
    return member;
  }
  async getStats() {
    return Array.from(this.stats.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }
  async createStats(insertStats) {
    const id = randomUUID();
    const stats = {
      ...insertStats,
      id,
      description: insertStats.description || null,
      order: insertStats.order || null
    };
    this.stats.set(id, stats);
    return stats;
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/team", async (req, res) => {
    try {
      const teamMembers = await storage.getTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });
  app2.get("/api/team/:id", async (req, res) => {
    try {
      const teamMember = await storage.getTeamMember(req.params.id);
      if (!teamMember) {
        return res.status(404).json({ message: "Team member not found" });
      }
      res.json(teamMember);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team member" });
    }
  });
  app2.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, () => {
    log(`serving on port ${port}`);
  });
})();
