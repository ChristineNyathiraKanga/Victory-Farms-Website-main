import { type Product, type InsertProduct, type TeamMember, type InsertTeamMember, type Stats, type InsertStats } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  // Stats
  getStats(): Promise<Stats[]>;
  createStats(stats: InsertStats): Promise<Stats>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private teamMembers: Map<string, TeamMember>;
  private stats: Map<string, Stats>;

  constructor() {
    this.products = new Map();
    this.teamMembers = new Map();
    this.stats = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize products
    const products: Product[] = [
      {
        id: "1",
        name: "Fresh Tilapia - Whole",
        description: "Affordable whole tilapia, freshly harvested from Lake Victoria. Perfect for family meals with exceptional taste and quality.",
        price: "from 350",
        unit: "KES per kg",
        category: "fresh",
        imageUrl: "/images/whole-tilapia.png",
        tags: ["Affordable", "Fresh", "Lake Victoria"],
        inStock: 1,
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
        inStock: 1,
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
        inStock: 1,
      },
    ];

    // Initialize team members
    const teamMembers: TeamMember[] = [
      {
        id: "1",
        name: "Joseph Rehmann",
        position: "Founder & Group CEO",
        education: "",
        bio: "Joe was born in Egypt and has lived in or worked on five continents. His passion is sustainable development and creating new ways where business can support the development of communities and the restoration of nature and wild areas. After five years in banking and private equity, he discovered fish farming in Ghana where he was CFO of Tropo Farms",
        skills: ["Group"],
        order: 1,
        imageUrl: "/images/team/joe.png",
        linkedinUrl: "https://ke.linkedin.com/in/joerehmann",
      },
      {
        id: "2",
        name: "Steven Moran",
        position: "Co-Founder & Group Chief Aquaculture Officer",
        education: "",
        bio: "Steve is an industry pioneer in african aquaculture, and  co-launched Victory Farms. Over a period of 7 years he led the growth of  Tropo Frams in Ghana from under 250MT p.a. to more than 6,100MT as its  General Manager. He  has extensive aquaculture experience throughout Africa and globally. It  is Steve's professional aspiration to find himself at the forefront of  African aquaculture, developing appropriate technologies and catalyzing.",
        skills: ["Group"],
        order: 2,
        imageUrl: "/images/team/steve.png",
        linkedinUrl: "https://ke.linkedin.com/in/steve-moran-796a8575",
      },
      {
        id: "3",
        name: "Mart Stiekema",
        position: "Group Chief Financial Officer",
        education: "",
        bio: "Mart, a seasoned leader with global experience in leadership, finance, and strategic operations, has held high-impact roles, including Finance Director at HEINEKEN Mozambique. With a Bachelor's Degree in Econometrics and Operations Research, an MSc in Operations Research & Management, and an Executive Master's in Finance & Control.",
        skills: ["Group"],
        order: 3,
        imageUrl: "/images/team/Mart.png",
        linkedinUrl: "https://ke.linkedin.com/in/mstiekema",
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
        linkedinUrl: "https://ke.linkedin.com/in/nwadike",
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
        linkedinUrl: null,
      },
      {
        id: "6",
        name: "Sarah Benhamo",
        position: "Group Communications Director",
        education: "",
        bio: "Sarah brings over 10 years of experience in  sales/marketing and brand management, with a focus in the hospitality  sector. Her passion is to build a well-motivated sales team  with the capabilities and expertise to implement Victory Farms’ goals.  She received international training in business development in Dubai,  with focus on sales performance and strategic marketing.",
        skills: ["Group"],
        order: 6,
        imageUrl: "/images/team/sarah.png",
        linkedinUrl: "https://www.linkedin.com/in/sarah-benhamo-91309a162",
      },
      {
        id: "7",
        name: "Silvester Saruni",
        position: "Farm Operations Director – Roo Bay Farm ",
        education: "",
        bio: "Silvester is an Agri-business professional with more than 20 years’ experience in management level. Prior to joining Victory Farms, Silvester was working at Friendship Flowers Ethiopia and is keen on coming back to Kenya. In his spare time, Silvester enjoys watching movies, football and keeping fit. He holds B.Sc in Horticulture from Jomo Kenyatta University of Agriculture and Technology.",
        skills: [""],
        order: 7,
        imageUrl: "/images/team/saruni.png",
        linkedinUrl: "https://www.linkedin.com/in/ntekerei-saruni-047a126a/",
      },
    ];

    // Initialize stats
    const stats: Stats[] = [
      {
        id: "1",
        value: "400MT",
        label: "Monthly Harvest",
        description: "Premium Quality",
        order: 1,
      },
      {
        id: "2",
        value: "60M+",
        label: "Fingerlings Annually",
        description: "Lake Victoria Excellence",
        order: 2,
      },
      {
        id: "3",
        value: "600+",
        label: "Jobs Created",
        description: "Job Creation",
        order: 3,
      },
      {
        id: "4",
        value: "100%",
        label: "Sustainable",
        description: "Sustainable Farming",
        order: 4,
      },
    ];

    products.forEach(product => this.products.set(product.id, product));
    teamMembers.forEach(member => this.teamMembers.set(member.id, member));
    stats.forEach(stat => this.stats.set(stat.id, stat));
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      imageUrl: insertProduct.imageUrl || null,
      tags: insertProduct.tags || null,
      inStock: insertProduct.inStock || null
    };
    this.products.set(id, product);
    return product;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { 
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

  async getStats(): Promise<Stats[]> {
    return Array.from(this.stats.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async createStats(insertStats: InsertStats): Promise<Stats> {
    const id = randomUUID();
    const stats: Stats = { 
      ...insertStats, 
      id,
      description: insertStats.description || null,
      order: insertStats.order || null
    };
    this.stats.set(id, stats);
    return stats;
  }
}

export const storage = new MemStorage();
