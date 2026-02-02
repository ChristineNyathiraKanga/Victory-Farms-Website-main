import crispyTilapiaImage from "@/assets/blog/crispy-tilapia.jpg";
import sweetSpicyTilapiaImage from "@/assets/blog/sweet-spicy-tilapia.jpg";
import mediterraneanTilapiaImage from "@/assets/blog/mediterranean-tilapia.jpg";
import alexMigwalaImage from "@/assets/blog/alex-migwala.png";
import heapAquaponicsImage from "@/assets/blog/heap-aquaponics.png";
// import fastestGrowingFarmImage from "@/assets/blog/fastest-growing-farm.jpg";
// import expansionTargetsImage from "@/assets/blog/expansion-targets.jpg";
// import skrettingForumImage from "@/assets/blog/skretting-forum.jpg";
// import cageFarmingImage from "@/assets/blog/cage-farming.jpg";
// import cnnInterviewImage from "@/assets/blog/cnn-interview.jpg";
// import aquavisionConferenceImage from "@/assets/blog/aquavision-conference.jpg";
// import sustainableProteinImage from "@/assets/blog/sustainable-protein.jpg";
// import womenEmpowermentImage from "@/assets/blog/women-empowerment.jpg";
// import localProductionImage from "@/assets/blog/local-production.jpg";
// import openRoadsImage from "@/assets/blog/open-roads.jpg";

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Innovation" | "Community Impact" | "Partnership" | "Investment" | "Community";
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: number;
  tags?: string[];
  externalUrl?: string;
  source?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "20",
    slug: "crispy-tilapia",
    title: "Crispy Tilapia",
    date: "2024-07-01",
    category: "Community",
    excerpt: "A delicious crispy tilapia recipe with a crunchy cornflake crust, perfect for a healthy and flavorful meal.",
    image: crispyTilapiaImage,
    content: `
<p><strong>Ingredients:</strong><br>4 tilapia fillets<br>3 eggs<br>1 cup wheat flour<br>3 cups cornflakes<br>1/2 tsp cumin<br>1/2 tsp black pepper<br>1/2 tsp garlic powder<br>1/2 tsp salt<br>1/2 tsp paprika<br>4 red royco beef cubes</p>

<p><strong>Marinade:</strong><br>3 tbsp soy sauce<br>3 tbsp ginger garlic paste<br>1 tsp water</p>

<h2>Process:</h2>

<p>In a bowl, mix the soy sauce, water and ginger garlic paste to make the marinade. Massage the marinade into every fish fillet and chill in the fridge while covered for 30 mins (minimum) to 1 hour (maximum). The soy sauce helps to tenderize the fillet and infuses flavor. Don't marinate for more than 1 hour as the fish fillet will be mushy when cooked.</p>

<p>As the fillet marinates, in a blender, blend the cornflakes, spices and salt till powdery. Do not add any liquid. This will be a substitute for breadcrumbs. I feel it makes a crunchier crust than breadcrumbs would.</p>

<p>After an hour, remove the fillets from the fridge. Arrange on a counter the following, in this order:<br>1. Fish fillets<br>2. Wheat flour<br>3. Eggs<br>4. Seasoned corn flakes powder</p>

<p>Dip the fish fillet in the wheat flour and coat, then into the eggs and finally into the seasoned cornflakes powder. Set aside and follow the same procedure for the other fillets. The flour helps the egg wash to adhere, while the egg wash helps the seasoned cornflakes powder to adhere instead of falling off in hot oil. They also help to add texture - the enticingly brown crust, flavor and color.</p>

<p>On a pan, pour some oil, enough to coat the pan. When the oil is hot, place one fillet and fry each side for 5 minutes on medium heat. Place on a grease-proof paper to drain the extra oil and repeat the same procedure for the rest. Serve with slices of lime.</p>

<p>You can also choose to bake instead of frying the fish. Baking is actually a healthier option as no oil is used and its proven that there is less loss of omega 3 fatty acids. If you choose to bake, bake uncovered at 375F or 190C for 15-20 mins or until the fillets flake easily with a fork. Avoid turning the fish and if you choose to turn them, turn it only once and use two spatulas instead of one as the fillet can easily fall apart.</p>
    `,
    author: "Victory Farms Team",
    readTime: 5,
    tags: ["Recipes", "Tilapia", "Cooking"]
  },
  {
    id: "21",
    slug: "sweet-and-spicy-tilapia",
    title: "Sweet and Spicy Tilapia",
    date: "2024-07-01",
    category: "Community",
    excerpt: "A flavorful sweet and spicy tilapia recipe with aromatic spices and fresh herbs.",
    image: sweetSpicyTilapiaImage,
    content: `
<p><strong>Ingredients:</strong></p>

<p>3 garlic heads sliced<br>1 red pepper per fillet<br>1 tbsp sweet+spicy paprika, turmeric, cumin<br>1/2 tbsp salt n pepper, chili powder<br>Chopped coriander</p>

<h2><strong>Process:</strong></h2>

<p>Heat 5 tbsp oil on a pan with all the spices, mix well till warm. Add garlic and all the other spices, mix and spread the red pepper around the pan. Gently add the fillets on top, cook with the lid on for 8 minutes so it won't dry, then use a spoon to sprinkle the sauce on top (no need to flip, medium burn the whole way). Add coriander, and cook with the pan open for 4 minutes. Serve with bread, salad, tahini, fresh juice.</p>
    `,
    author: "Victory Farms Team",
    readTime: 3,
    tags: ["Recipes", "Tilapia", "Cooking"]
  },
  {
    id: "23",
    slug: "mediterranean-inspired-tilapia",
    title: "Mediterranean Inspired Tilapia",
    date: "2024-07-01",
    category: "Community",
    excerpt: "A simple Mediterranean-style tilapia recipe with lemon, olives, capers and sundried tomatoes.",
    image: mediterraneanTilapiaImage,
    content: `
<p>This recipe is super simple to make. Simply marinate the tilapia for a few hours in lemon, salt, pepper, minced green chillies (optional), garlic, paprika, melted butter and a little olive oil. Before cooking, garnish fillets with round lemon slices, olives, capers and sundried tomatoes. Cook the fish in a pan or oven and enjoy with a side of your choice. Garnish with parsley/coriander.</p>
    `,
    author: "Victory Farms Team",
    readTime: 2,
    tags: ["Recipes", "Tilapia", "Mediterranean"]
  },
  {
    id: "2",
    slug: "breaking-boundaries-alex-migwala-journey",
    title: "Breaking boundaries: Alex Migwala's journey to success with Victory Farms",
    date: "2025-01-29",
    category: "Community Impact",
    excerpt: "At 49 years old, Alex Ojwang Migwala has become a beacon of hope and success for his community in Roo, Homa-bay County, Kenya.",
    image: alexMigwalaImage,
    content: `
<p>At 49 years old, Alex Ojwang Migwala has become a beacon of hope and success for his community in Roo, Homa-bay County, Kenya. Married and a proud father of 11 children, Alex's journey from financial uncertainty to sustainable success is nothing short of remarkable. This is the story of how one man's fortunes turned around - a transformation made possible by his partnership with Victory Farms.</p>

<h2>Humble beginnings</h2>

<p>Before Victory Farms established its presence in Roo community, Alex's days were fraught with uncertainty. He was once a fisherman on Lake Victoria but was forced to leave the trade due to unpredictable fish availability. "There were many days I returned home with nothing to show for my efforts," says Alex. He then turned to small-scale commercial farming, working a one-acre family plot where he earned an average of KES 9,000 per month. His wife managed a modest roadside shop whose income barely supplemented their needs. At times, Alex would make stick chairs for sale, but this business was slow and yielded low, sporadic returns.</p>

<p>The family relied on a sooty kerosene lamp to light their home and Alex would walk 7 kilometres to Sindo town and back to Roo community every few days just to buy kerosene and charge his phone. "Those times were tough. Most days, I didn't know how I would make ends meet." Alex recalls.</p>

<p>His aspirations for his family—especially for his children—seemed out of reach.</p>

<h2>A visionary decision</h2>

<p>In 2016, Victory Farms' founders, Joseph Rehmann and Steve Moran, approached Roo community with an ambitious idea: establishing a fish farm. Skepticism and hostility initially greeted the proposal, as fish farming was an unfamiliar concept. "The idea was new to us," Alex says. "We'd never heard of a fish farm before. Some people in our community even became hostile to the founders." However, through numerous community engagements and sensitization meetings, the proposal eventually gained acceptance from the community.</p>

<p>Alex was among the first to embrace the opportunity. "I gave out two acres of land," he says proudly. "The benefits were immediate. I received half the land's value upfront, which I used to buy another piece of land; the remaining half continues to come in as annual dividends, creating a steady income stream for me." This decision laid the foundation for Alex's remarkable ascent and paid off in ways he could never have imagined.</p>

<h2>Reaping the rewards</h2>

<p>In 2021, Victory Farms introduced the outgrower pond program, partnering with local landowners to establish broodstock ponds on their land. This marked another turning point for Alex. Recognizing the program's potential, Alex became a pioneer partner. "By then, the entire community had seen the benefits of working with Victory Farms," he explains. "Everyone wanted to join. I was lucky to have my first outgrower pond set up that year."</p>

<p>That one pond generated KES 100,000 annually for Alex, enabling him to buy additional land. Recognizing the program's potential, Alex expanded to two ponds in 2024, doubling his passive income to KES 200,000 per year. "I don't have to do anything, yet I earn KES 200,000 annually," he says with a smile. "And I still own the land where the ponds are."</p>

<h2>Beyond financial freedom</h2>

<p>With newfound financial stability, Alex transformed every aspect of his life. He revitalized his roadside shop, managed by his wife, increasing monthly profits to between KES 12,000 and 19,000, thanks to Victory Farms employees who are his regular customers.</p>

<p>A solar system now lights his home, transforming his family's quality of life. "The bright, safe light has made a huge difference for my children, especially with their studies," he shares. Alex's firstborn, a 22-year-old girl studying Tourism and Management at Karatina University in Kenya, is now in her second year. His second and third children attend boarding secondary schools. The remaining children attend private schools and daycares within Roo community—a dream Alex once thought unattainable.</p>

<p>Alex has also ventured into horticulture, cultivating watermelons, bananas and vegetables on the lands he acquired. During a good season, he earns up to KES 160,000. Furthermore, he has built a five-door rental unit on his property, generating an additional KES 7,500 monthly.</p>

<h2>A thriving community</h2>

<p>Alex's success is mirrored throughout Roo community. According to Alex, before Victory Farms came, Roo community grappled with widespread unemployment, youth alcoholism, charcoal burning and robbery with violence. Today, Victory Farms has provided stable employment to local youths, reducing the prevalence of illegal activities and traditional alcohol consumption. According to Alex, living standards in Roo community has profoundly improved. Many residents have upgraded from mud-walled, grass-thatched houses to cement and iron-roof homes. Rental units targeting Victory Farms employees are springing up, both in Roo community and Sindo town, further boosting the local economy.</p>

<p>"The change is palpable," Alex observes. "Our youths now have jobs, and crime is almost unheard of. Most families, like mine, have transitioned to cement houses with iron roofs."</p>

<h2>Looking ahead with a grateful heart</h2>

<p>Alex's ambitions continue to grow. He is currently building a bigger three-bedroom permanent house. After completing this new project, he plans to expand his ventures by acquiring more land for additional outgrower ponds. "From the very first year I partnered with Victory Farms, my life has been a success story," Alex reflects with gratitude. "I no longer worry about school fees, healthcare, or putting food on the table. Victory Farms has given my family a future we never thought possible."</p>

<p>Alex's story is a powerful reminder that when we take advantage of the right opportunities, we unlock boundless possibilities for a better future.</p>
    `,
    author: "Victory Farms Team",
    readTime: 7,
    tags: ["Community Impact", "Success Story", "HEAP", "Outgrower Program"]
  },
  {
    id: "1",
    slug: "families-reap-income-from-aquaponics-project",
    title: "Families reap income from aquaponics project",
    date: "2025-11-28",
    category: "Community Impact",
    excerpt: "Victory Farms is transforming the livelihoods of smallholder farmers in Kaksingri through the HEAP aquaponics initiative.",
    image: heapAquaponicsImage,
    content: `
<p><strong>As featured in Kenya News Agency</strong></p>

<p>Victory Farms is transforming the livelihoods of smallholder farmers in Kaksingri, Suba South Sub-County, through an ambitious aquaponics initiative that is turning idle land into a consistent source of income.</p>

<p>The Homa Bay Extensive Aquaponics Programme (HEAP), an innovative partnership between the aquaculture firm and local landowners, is emerging as one of the region's most promising rural economic empowerment models.</p>

<p>Through the programme, smallholder farmers earn steady monthly royalties from fish-egg production hosted on their underutilized land.</p>

<p>Under the arrangement, Victory Farms installs ponds on farmers' land, stocks them with fish, manages the ponds, and harvests eggs weekly, paying farmers for the eggs in return.</p>

<p>Landowners earn Sh1,200 per kilogram of tilapia eggs harvested, creating a reliable monthly income stream while contributing to the company's aquaculture supply chain.</p>

<p>Speaking during a HEAP awareness football tournament in Kaksingri, Project Manager Georgia Hoile said the model is designed to build long-term household financial stability.</p>

<p>"The HEAP model allows landowners to participate in our success. The goal is to bring families a reliable monthly income that can help them meet essential needs such as school fees and other household expenses," Hoile said.</p>

<p>Beyond income generation, the HEAP system boosts local food production through an integrated aquaponics approach. Solar-powered pumps installed on the ponds regularly flush nutrient-rich water into nearby farms, where it is used to irrigate vegetables and other crops, creating a natural fertilizer system driven by fish waste.</p>

<p>The programme currently works with 30 pond owners, some hosting up to seven ponds with many more community members expressing interest as its benefits become widely known.</p>

<p>Victory Farms Community Relations Coordinator David Otieno described HEAP as both an economic catalyst and a community empowerment platform. He said the football tournament was organized to showcase the program's impact and rally more residents to join.</p>

<p>"We are here today courtesy of HEAP, a project the farm runs in partnership with community members where we outsource fish egg production to local smallholder farmers. We are excited about its outcome and the potential it has to accelerate economic transformation and uplift our landowners," Otieno said.</p>

<p>Otieno emphasized that the tournament was designed not only to empower local youth but also to rally the community to join the HEAP bandwagon by telling the story of economic transformation and bring more people on board.</p>

<p>At the tournament, the company donated balls and training equipment to local teams as part of efforts to nurture talent in the football-rich region.</p>

<p>"Kaksingri is a hotbed of football talent, but lack of resources continues to hold the teams back. Victory Farms is stepping in as a trusted partner to promote these teams and expose their abilities as we continue to grow the economics of pond partnership," he said.</p>

<p>However, beneficiaries like Benard Owato reported improved financial stability and better use of previously idle land.</p>

<p>Owato, who hosts two ponds, said he now enjoys financial stability and better use of land that previously lay idle.</p>

<p>"I am a pond partner with two ponds and I get about Sh30,000 as royalties after every harvesting cycle. Victory Farms has helped us a lot. Our lives have transformed. I am able to pay school fees, and by the fourth day of every month, the payment always reflects without fail," he said.</p>
    `,
    author: "Kenya News Agency",
    readTime: 5,
    tags: ["Community Impact", "HEAP", "Aquaponics", "Smallholder Farmers"],
    externalUrl: "https://www.kenyanews.go.ke/families-reap-income-from-aquaponics-project/",
    source: "Kenya News Agency"
  },
  {
    id: "3",
    slug: "meet-africas-fastest-growing-fish-farm",
    title: "Meet Africa's fastest growing fish farm",
    date: "2017-07-01",
    category: "Innovation",
    excerpt: "Leading industry publication Intrafish chronicles Victory Farms' story from a humble beginning to the fastest growing fish farm on the continent.",
    image: "",
    content: `
<p><em>July 2017</em></p>

<p>Leading industry publication Intrafish chronicles Victory Farms' story from a humble beginning to the fastest growing fish farm on the continent.</p>
    `,
    author: "Intrafish",
    readTime: 2,
    tags: ["Media", "Growth", "Aquaculture"]
  },
  {
    id: "7",
    slug: "kenyan-tilapia-farm-on-track-expansion-targets",
    title: "Kenyan tilapia farm on track to hit expansion targets",
    date: "2018-02-01",
    category: "Innovation",
    excerpt: "An update from Intrafish on production progress at Victory Farms. Despite national unrest in late 2017, we remain on track to hit our expansion goals!",
    image: "",
    content: `
<p><em>February 2018</em></p>

<p>An update from Intrafish on production progress at Victory Farms. Despite national unrest in late 2017, we remain on track to hit our expansion goals!</p>
    `,
    author: "Intrafish",
    readTime: 2,
    tags: ["Media", "Expansion", "Production"]
  },
  {
    id: "8",
    slug: "skretting-tilapia-forum",
    title: "Skretting tilapia forum",
    date: "2018-02-01",
    category: "Partnership",
    excerpt: "Victory Farms joins Skretting's first-ever Tilapia Forum in Egypt, bringing together the world's leading stakeholders from the tilapia industry.",
    image: "",
    content: `
<p><em>February 2018</em></p>

<p>Tilapia represents one of aquaculture's greatest success stories of recent times; transitioning from small-scale, rural farming into one of the world's most productive and internationally traded fish, thereby providing a nutritious and inexpensive protein to consumers in many markets. Indeed, it is estimated that the global tilapia harvest has now reached a level of around 6 million tonnes, which is considerably more than the annual production of salmonids and shrimp.</p>

<p>Today, more tilapia is produced in Asia than in the species' native Africa, and its production has grown at a significant rate in many regions around the world. However, it is widely recognised that the potential exists to increase production dramatically. To facilitate this growth, bring greater market credibility and improve margins, the tilapia sector has put strong emphasis on advancing its production systems, with great strides made on establishing best-practice.</p>

<p>In order to further stimulate this progress, Skretting organised its first-ever Skretting Tilapia Forum. Held 26 February – 1 March 2018 in Egypt, this international business conference brought together many of the world's leading stakeholders from the tilapia industry to share invaluable information, insight and opinion. Skretting's top 50 tilapia farming customers from around the world were invited to join leading authorities from areas such as genetics, farming, health, raw materials, feed, nutrition, processing and retail.</p>

<p>Attendance at the conference, which began in Cairo before moving south to Aswan, was strictly by invitation only.</p>

<blockquote>
<p>"We brought these companies and experts together for the first time; partly to enable important networking opportunities, but also to share technical and informative presentations from across the value chain"</p>
<cite>— Arjen Roem, Marketing Director, Skretting Africa</cite>
</blockquote>

<p>He continued, "As one of the world's leading tilapia producing countries, Egypt provided the ideal setting to show the aquaculture sector and the broader supply chain that as well as salmon and shrimp, Skretting is also leading the way when it comes to collaboratively progressing tilapia farming on a global scale."</p>

<p>In addition to looking at the market developments in recent years, discussions at the forum focused on the challenges and opportunities facing the tilapia sector today and in the future.</p>
    `,
    author: "Skretting",
    readTime: 4,
    tags: ["Partnership", "Tilapia", "Industry Forum"]
  },
  {
    id: "9",
    slug: "cage-farming-lake-victoria-boosting-fish-supply",
    title: "How Cage Farming in Lake Victoria is boosting fish supply",
    date: "2018-04-16",
    category: "Innovation",
    excerpt: "Victory Farms is among success stories of cage aquaculture in sub-Saharan Africa, pioneering fish cage farming in Lake Victoria.",
    image: "",
    content: `
<p><em>April 2018</em></p>

<p>It is early morning in Sindo Beach, Homa Bay County in western Kenya. At the Victoria Farms, workers are seen clocking in for work then proceeding to their various planning meetings.</p>

<p>The fish farm has more than 200 employees comprising cleaners, cage managers, fish feeders, hatchery workers, and fishmongers. A flurry of activity ensues soon after the meetings breaks off.</p>

<p>Victory Farms is among success stories of cage aquaculture in sub-Saharan Africa. Other countries where it is practised include Uganda, South Africa and Ghana.</p>

<p>The fish firm was co-founded by Joseph Rehmann and Steve Moran.</p>

<p>In a sense, fate brought the two men together. Both Rehmann and Moran are passionate about aquaculture. They met in Ghana, West Africa many years ago and quickly became friends.</p>

<p>They would eventually cross over to East Africa and set up Victory Farms — which pioneered fish cage farming in Lake Victoria.</p>

<p>Mr Moran, chief operating officer of Victory Farms, was particularly drawn to Lake Victoria after spending months travelling in the region.</p>

<p>Following extensive research and consultation with village elders and the county government, the duo eventually settled on rural Homa Bay as the ideal site for the project.</p>

<h2>Cage fish farming</h2>

<p>But, instead of digging fish ponds on the land — a common model of fish farming in Kenya — they ventured into commercial cage fish farming, with critical support from the county and national governments.</p>

<p>"The first fish were put into the water in June 2016 and by the end of last year, our daily production was way above 2,000 tonnes," said Mr Rehmann, who previously worked in private equity and banking. "With the dwindling local fish stocks, we saw an opportunity and took it up."</p>

<p>Today, Victory Farms has more than 100 deep-water cages located almost a kilometre or a 10-minute boat ride offshore.</p>

<p>These cages hold fish (tilapia) ranging from two to six months old. In this type of environment, strong currents flush through the cages throughout the day, and create favourable conditions for the fish.</p>

<p>"This means the fish are raised in an environment that mirrors that of wild tilapia. The response of the customers has been favourable, and the pickiest of connoisseurs is unable to distinguish between wild type and our cage-produced tilapia," said Mr Rehmann.</p>

<p>The cages are 36 square meters, holding about 5,000 fish fingerlings each. Last year, Victory Farms produced 300,000 units of fish with an average of 80,000 tonnes per month for the local market. The firm plans to double that figure this year.</p>

<h2>Fish stocks</h2>

<p>Currently, the country produces only 200,000 tonnes of fish against a demand of almost one million tonnes.</p>

<p>"Over the past two decades, local fishermen have seen their catch of tilapia drop by almost 50 per cent, yet the population growth has doubled. This has seen dwindling fish stocks from the traditional artisanal fishing. Caged fish farming offers an opportunity to correct this," said Mr Rehman.</p>

<p>The fish are fed three times daily — twice in the morning and once in the afternoon — on a mix of local and imported feed, averaging four tonnes per week.</p>

<p>At the start, the farm had 50,000 Nile tilapia. This number has grown to more than 1 million in two years. The farm also runs a hatchery producing up to 200,000 fingerlings per week.</p>

<h2>Sustainability</h2>

<p>"When we think about how to provide protein to the nine billion people expected to inhabit the planet by 2050, farmed fish is a definitive part of the answer.</p>

<p>With species like tilapia, the environmental impact is much lower than beef, pork or other fish species like salmon. For me, the question is not whether we eat farmed fish, it is how we do everything within our power to use practices that safeguard our shared natural resources and ensure environmental sustainability," said Katrina ole-MoiYoi, the sustainability director for Victory Farms.</p>
    `,
    author: "The East African",
    readTime: 6,
    tags: ["Innovation", "Cage Farming", "Lake Victoria", "Aquaculture"]
  },
  {
    id: "10",
    slug: "building-kenyan-commercial-aquaculture",
    title: "Building Kenyan commercial aquaculture",
    date: "2018-04-01",
    category: "Innovation",
    excerpt: "CNN interviews Victory Farms in a two-part series about Kenyan aquaculture, Chinese tilapia imports, and solutions to cold chain and distribution.",
    image: "",
    content: `
<p><em>April 2018</em></p>

<p>CNN interviews Victory Farms in a two-part series about Kenyan aquaculture, Chinese tilapia imports, and solutions to cold chain and distribution. Click to learn more about what sets us apart from other fish providers in the region!</p>
    `,
    author: "CNN",
    readTime: 2,
    tags: ["Media", "Innovation", "Distribution"],
    externalUrl: "https://edition.cnn.com/2018/04/16/africa/kenya-fish-china-imports-cheap-africa/index.html",
    source: "CNN"
  },
  {
    id: "11",
    slug: "norway-aquavision-conference",
    title: "Taking the stage at the Norway Aquavision Conference",
    date: "2018-06-01",
    category: "Partnership",
    excerpt: "Victory Farms was invited to Aquavision to present on our growth trajectory, sustainability vision and exciting plans to solve the regional protein problem.",
    image: "",
    content: `
<p><em>June 2018</em></p>

<p>Victory Farms was invited to Aquavision to present on our growth trajectory, sustainability vision and exciting plans to solve the regional protein problem. Other speakers included former UN Secretary General Ban Ki Moon, Princess Victoria of Sweden, and aquaculture CEOs from across the globe. Click to learn more about why we consider Africa's "equatorial belt" the next frontier for commercial aquaculture.</p>
    `,
    author: "Undercurrent News",
    readTime: 2,
    tags: ["Partnership", "Conference", "Sustainability"],
    externalUrl: "https://www.undercurrentnews.com/2018/06/12/aquavision-2018-chileans-descend-on-stavanger/",
    source: "Undercurrent News"
  },
  {
    id: "12",
    slug: "low-carbon-sustainable-protein-east-africa",
    title: "Low-carbon, sustainable protein for East Africa",
    date: "2020-07-01",
    category: "Investment",
    excerpt: "Victory Farms is a sustainable aquaculture business that produces tilapia on Lake Victoria and sells primarily in low-income neighborhoods across Kenya.",
    image: "",
    content: `
<p><em>July 2020</em></p>

<p>Victory Farms is a sustainable aquaculture business that produces tilapia on Lake Victoria and sells primarily in low-income neighborhoods across Kenya. Their mission is to build a commercial tilapia farm that can feed 2 billion Africans with affordable, accessible and healthy protein over the next two decades, while also taking extensive measures to protect and restore the environment in which the farm operates.</p>
    `,
    author: "Conservation International",
    readTime: 2,
    tags: ["Investment", "Sustainability", "Conservation"],
    externalUrl: "https://www.conservation.org/projects/conservation-international-ventures-llc/victory-farms",
    source: "Conservation International"
  },
  {
    id: "13",
    slug: "tilapia-caging-solution-sex-for-fish-trade",
    title: "Is tilapia caging the solution for sex-for-fish trade?",
    date: "2019-06-28",
    category: "Community Impact",
    excerpt: "In 2016, the life of a widow changed drastically when she came across Victory Farms in Roo, earning enough to support her children and build a new home.",
    image: "",
    content: `
<p><em>July 2020</em></p>

<p>In 2016, the life of the widow changed drastically, when she came across Victory Farms in Roo. The farm is involved in breeding, processing and selling of fish.</p>

<p>After three years working and supplying fish bred there, Atipa earned enough to support her children and build a two-bedroom iron sheet house.</p>
    `,
    author: "The Star",
    readTime: 2,
    tags: ["Community Impact", "Women Empowerment"],
    externalUrl: "https://www.the-star.co.ke/news/big-read/2019-06-28-is-tilapia-caging-solution-to-sex-for-fish-trade/",
    source: "The Star"
  },
  {
    id: "14",
    slug: "how-not-rely-china-fish-supply",
    title: "How not to rely on China for fish supply",
    date: "2019-06-28",
    category: "Innovation",
    excerpt: "Located at the offshore of Roo beach in Homa Bay county, Victory Farms is destined to supplement the tilapia shortage in the country.",
    image: "",
    content: `
<p><em>July 2020</em></p>

<p>Located at the offshore of Roo beach in Homa Bay county, Victory Farms is destined to supplement the tilapia shortage in the country, while changing the lives of locals.</p>

<p>The farm covers 216 acres. It produces its own tilapia in hatcheries, rearing the fingerlings in their ponds, then after some time transferring to cages which cover 56 acres of the lake, 1.5km from the Roo offshore.</p>
    `,
    author: "The Star",
    readTime: 2,
    tags: ["Innovation", "Local Production", "Food Security"],
    externalUrl: "https://www.the-star.co.ke/news/big-read/2019-06-28-how-not-to-rely-on-china-for-fish-supply/",
    source: "The Star"
  },
  {
    id: "15",
    slug: "open-roads-bridge-loans-covid-19",
    title: "Open Roads' bridge loans aid social enterprises battered by Covid-19",
    date: "2020-07-01",
    category: "Investment",
    excerpt: "COVID-19 provided an opening for Kenya's fish-farming industry as local farms gained market share, with Open Road among the lenders that gave the industry a boost.",
    image: "",
    content: `
<p><em>July 2020</em></p>

<p>COVID-19 provided an opening for Kenya's fish-farming industry. Chinese tilapia imports have long dominated the market, but health fears and trade bottlenecks have allowed for local farms to gain market share. Local fish producers, including Victory Farms, Kenya's largest, needed funds to quickly scale-up production. Open Road is among the lenders that gave the industry a boost.</p>
    `,
    author: "Karma Impact",
    readTime: 2,
    tags: ["Investment", "COVID-19", "Growth"],
    externalUrl: "https://karmaimpact.com/open-roads-bridge-loans-aid-social-enterprises-battered-by-covid-19/",
    source: "Karma Impact"
  }
];

// Helper to get unique categories
export const blogCategories = ["Innovation", "Community Impact", "Partnership", "Investment", "Community"] as const;
