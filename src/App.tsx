import { useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Compass,
  FileText,
  Globe2,
  GraduationCap,
  LineChart,
  Menu,
  MessageSquareText,
  PenTool,
  Presentation,
  Rocket,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

type Track = {
  id: number;
  name: string;
  english: string;
  color: string;
  majors: string[];
  keywords: string[];
  intro: string;
  opportunity: string;
  projectIdeas: string[];
  studentType: string;
};

type Mentor = {
  name: string;
  labels: string[];
  intro: string;
};

const navItems = [
  { label: "BPA Overview", id: "overview" },
  { label: "Why BPA", id: "why" },
  { label: "Competition Path", id: "timeline" },
  { label: "Tracks 2026", id: "tracks" },
  { label: "Program Plan", id: "plan" },
  { label: "Mentors", id: "mentors" },
  { label: "Results", id: "results" },
  { label: "Apply", id: "apply" },
];

const trackData: Track[] = [
  {
    id: 1,
    name: "银发经济",
    english: "Silver Economy",
    color: "#BFC5C9",
    majors: [
      "工商管理",
      "市场营销",
      "健康管理",
      "公共卫生",
      "老年学",
      "社会工作",
      "心理学",
      "护理学",
      "人机交互",
      "产品管理",
    ],
    keywords: ["老龄化", "居家养老", "慢病管理", "陪伴服务", "适老化产品"],
    intro:
      "中国正在快速进入深度老龄化社会，银发经济正从传统养老服务扩展为覆盖医疗健康、生活照护、文娱消费、智能设备、金融服务与居家支持的综合型产业。",
    opportunity:
      "围绕老年人的健康、安全、陪伴、便利生活与尊严化养老，品牌和服务机构都需要更清晰的用户洞察、产品适配与渠道触达策略。",
    projectIdeas: [
      "居家养老服务包设计",
      "适老化智能设备市场进入策略",
      "慢病管理会员服务模型",
    ],
    studentType: "适合关注社会议题、健康消费、产品适配与公共服务创新的学生。",
  },
  {
    id: 2,
    name: "宠物经济",
    english: "Pet Economy",
    color: "#C9824A",
    majors: [
      "工商管理",
      "市场营销",
      "消费者行为学",
      "动物科学",
      "兽医学",
      "电子商务",
      "产品管理",
      "品牌管理",
      "供应链管理",
      "创业管理",
    ],
    keywords: ["精细化养宠", "宠物医疗", "宠物食品", "智能用品", "情感陪伴"],
    intro:
      "随着家庭结构小型化、独居人群增加和情感陪伴需求上升，宠物经济正在从养宠消费升级为覆盖食品、医疗、护理、美容、保险、智能用品和线下服务的综合产业。",
    opportunity:
      "未来增长不只来自养宠数量增加，更来自科学喂养、宠物医疗与陪伴型消费升级，适合构建细分人群和场景化服务。",
    projectIdeas: [
      "年轻养宠家庭订阅制产品",
      "宠物医疗服务体验优化",
      "智能宠物用品品牌定位",
    ],
    studentType: "适合对消费升级、品牌管理、服务体验和情感消费感兴趣的学生。",
  },
  {
    id: 3,
    name: "睡眠经济",
    english: "Sleep Economy",
    color: "#1E2A44",
    majors: [
      "健康科学",
      "心理学",
      "神经科学",
      "生物医学工程",
      "公共卫生",
      "认知科学",
      "数据科学",
      "人机交互",
      "产品设计",
      "工商管理",
    ],
    keywords: ["助眠产品", "睡眠监测", "健康消费", "压力管理", "智能设备"],
    intro:
      "随着生活节奏加快、学业与职场压力上升，睡眠问题正在从个人健康困扰变成大规模消费需求，助眠产品和智能睡眠设备持续进入大众市场。",
    opportunity:
      "睡眠正在从基础生理需求升级为健康消费赛道，企业需要在可信数据、长期陪伴与产品体验之间建立平衡。",
    projectIdeas: ["学生睡眠管理工具", "智能床品市场细分策略", "压力场景助眠产品组合"],
    studentType: "适合对心理健康、健康科技、数据产品与用户行为研究感兴趣的学生。",
  },
  {
    id: 4,
    name: "懒人经济",
    english: "Convenience Economy",
    color: "#FF8A3D",
    majors: [
      "工商管理",
      "市场营销",
      "电子商务",
      "供应链管理",
      "运营管理",
      "信息系统",
      "物流管理",
      "产品管理",
      "工业设计",
      "创业管理",
    ],
    keywords: ["即时零售", "预制菜", "家政服务", "智能清洁", "省时消费"],
    intro:
      "懒人经济的本质不是懒，而是现代消费者愿意为节省时间、降低生活成本和提升效率付费，便利生活正在成为城市消费的重要增长方向。",
    opportunity:
      "即时满足、低决策成本和省时服务可转化为明确的商业模型，关键在于供应链效率、用户留存与场景切入。",
    projectIdeas: ["校园即时服务平台", "预制餐品牌年轻化策略", "智能清洁设备订阅模型"],
    studentType: "适合关注运营效率、产品体验、供应链和城市生活方式的学生。",
  },
  {
    id: 5,
    name: "情绪经济",
    english: "Emotional Value Economy",
    color: "#F4A7B9",
    majors: [
      "心理学",
      "市场营销",
      "消费者行为学",
      "传播学",
      "媒体研究",
      "产品设计",
      "人机交互",
      "社会学",
      "品牌管理",
      "创业管理",
    ],
    keywords: ["情绪价值", "陪伴感", "治愈消费", "潮玩", "AI陪伴"],
    intro:
      "情绪经济正在成为新消费的重要增长引擎。年轻消费者越来越愿意为陪伴感、治愈感、惊喜感、审美表达和身份认同付费。",
    opportunity:
      "未来消费竞争的关键，不只是产品有没有用，而是能否让用户感到被理解、被陪伴和被治愈。",
    projectIdeas: ["AI 陪伴产品体验设计", "治愈型消费品牌策略", "校园情绪支持服务模型"],
    studentType: "适合对心理学、品牌叙事、内容传播和用户体验感兴趣的学生。",
  },
  {
    id: 6,
    name: "运动经济",
    english: "Sports & Wellness Economy",
    color: "#2ECC71",
    majors: [
      "体育管理",
      "运动机能学",
      "运动科学",
      "健康科学",
      "公共卫生",
      "工商管理",
      "市场营销",
      "活动管理",
      "体育营销",
      "康复科学",
    ],
    keywords: ["健身", "户外", "跑步", "运动康复", "赛事体验"],
    intro:
      "运动经济正在从单一体育用品消费，升级为融合健康、社交、文旅和生活方式的复合型产业。",
    opportunity:
      "健身、户外、骑行、跑步、露营、赛事体验和运动康复等场景，都具备持续增长潜力。",
    projectIdeas: ["青少年运动社群增长策略", "城市轻户外品牌方案", "运动康复服务产品化"],
    studentType: "适合对健康生活方式、体育营销、活动运营和社群商业感兴趣的学生。",
  },
  {
    id: 7,
    name: "独居经济",
    english: "Solo Living Economy",
    color: "#6F8799",
    majors: [
      "社会学",
      "心理学",
      "消费者行为学",
      "工商管理",
      "市场营销",
      "城市研究",
      "产品设计",
      "人机交互",
      "社会工作",
      "创业管理",
    ],
    keywords: ["一人食", "单人旅行", "小份包装", "独居安全", "陪伴服务"],
    intro:
      "独居经济正在随着家庭结构小型化、结婚率下降和年轻人生活方式变化而快速兴起，并催生更精细化、更个性化的消费需求。",
    opportunity:
      "独居消费集中在便利、安全、陪伴和生活品质方面，适合以小场景切入并形成高频服务。",
    projectIdeas: ["独居安全服务包", "一人食产品线优化", "单人旅行体验产品"],
    studentType: "适合关注社会结构变化、生活方式消费和服务设计的学生。",
  },
  {
    id: 8,
    name: "低空经济",
    english: "Low-Altitude Economy",
    color: "#0B5CAD",
    majors: [
      "航空航天工程",
      "机械工程",
      "电子电气工程",
      "机器人工程",
      "交通运输管理",
      "城市规划",
      "供应链管理",
      "商业分析",
    ],
    keywords: ["无人机", "eVTOL", "低空物流", "城市巡检", "应急救援"],
    intro:
      "低空经济围绕无人机、eVTOL、城市巡检、物流配送、农业植保、应急救援、低空文旅和空域管理等场景展开。",
    opportunity:
      "它强调技术在城市和产业中的应用，未来有望成为智慧城市和新基础设施的重要组成部分。",
    projectIdeas: ["低空物流城市试点方案", "无人机巡检商业模式", "低空文旅服务设计"],
    studentType: "适合对科技商业化、城市运营、工程应用和商业分析感兴趣的学生。",
  },
  {
    id: 9,
    name: "绿色经济",
    english: "Green Economy",
    color: "#1F6F4A",
    majors: [
      "环境科学",
      "环境工程",
      "可持续商业",
      "可再生能源工程",
      "公共政策",
      "供应链管理",
      "工商管理",
      "城市规划",
      "经济学",
    ],
    keywords: ["双碳", "清洁能源", "绿色供应链", "低碳消费", "循环经济"],
    intro:
      "绿色经济正在从环保理念转变为真实的产业增长动力。清洁能源、电动车、储能、电池、光伏、绿色供应链和低碳消费都在快速发展。",
    opportunity:
      "企业和消费者都会越来越重视低碳、环保、可循环和可持续的产品与服务，商业方案需要兼顾增长与责任。",
    projectIdeas: ["低碳消费品牌策略", "校园循环经济方案", "绿色供应链信息透明化"],
    studentType: "适合对可持续商业、公共政策、能源转型和责任消费感兴趣的学生。",
  },
  {
    id: 10,
    name: "职业探索",
    english: "Career Exploration",
    color: "#7B2CBF",
    majors: [
      "市场营销",
      "人力资源管理",
      "教育学",
      "心理学",
      "传播学",
      "社会学",
      "数据科学",
      "商业分析",
      "电子商务",
      "创业管理",
    ],
    keywords: ["职业认知", "能力标签", "岗位匹配", "技能错配", "AI时代就业"],
    intro:
      "教育与就业之间的信息断层正在成为全球性问题。学生在选择专业时，往往不了解真实职业路径，而企业也长期面临人才匹配问题。",
    opportunity:
      "在 AI 与数字化快速发展的背景下，职业认知、能力标签与岗位匹配系统正在成为教育与就业之间的重要新方向。",
    projectIdeas: ["高中生职业认知平台", "AI 岗位匹配工具", "能力标签与课程推荐模型"],
    studentType: "适合对教育创新、人力资源、数据产品和未来职业趋势感兴趣的学生。",
  },
];

const timelineItems = [
  {
    title: "报名准备阶段",
    time: "9月-12月上旬",
    detail: "完成报名、组队、规则学习、基础商业知识输入与项目构思。",
  },
  {
    title: "初选站研习阶段",
    time: "12月下旬",
    detail: "围绕 BPA 初选站要求完成案例分析、商业方案与作品提交。",
  },
  {
    title: "中国站研习阶段",
    time: "2月底",
    detail: "晋级团队进入更高强度的商业模型优化、展示打磨与答辩训练。",
  },
  {
    title: "全球站研习阶段",
    time: "5月或8月",
    detail: "针对全球站标准进行英文表达、Presentation、Q&A 与商业逻辑强化。",
  },
];

const sessions = [
  ["Session 1", "BPA 赛事认知与备赛导入", "明确赛事路径与团队目标"],
  ["Session 2", "竞赛规则解析与参赛要求", "完成赛项规则理解与任务拆解"],
  ["Session 3", "商科基础知识与核心框架", "建立商业分析基础框架"],
  ["Session 4", "商业案例理解与问题识别", "明确案例痛点与核心问题"],
  ["Session 5", "商业分析方法与方案构建", "形成初步商业解决方案"],
  ["Session 6", "调研思路与内容组织方法", "完成调研框架与内容结构"],
  ["Session 7", "商业展示逻辑与表达训练", "搭建 Presentation 叙事逻辑"],
  ["Session 8", "演示文稿设计与呈现优化", "完成路演 PPT 优化"],
  ["Session 9", "团队协作机制与任务推进", "明确分工与最终交付计划"],
  ["Session 10", "模拟演练与作品交付准备", "完成提交包与演讲演练"],
];

const mentors: Mentor[] = [
  {
    name: "Ms. H",
    labels: ["会计与金融背景", "商法与合规方向", "东南亚创业与投融资经验", "BPA 全国站金奖教练"],
    intro:
      "具备商业运营、资本市场与法律风控的多维背景，长期参与创业与投融资实践，擅长从战略设计、融资路径到合规落地，为学生建立从商业想法到可路演项目的完整框架。",
  },
  {
    name: "Mr. L",
    labels: ["MBA 背景", "PBL 项目制学习研发", "品牌运营与用户增长", "BPA 全国站金奖教练"],
    intro:
      "拥有多年国际教育与项目管理经验，长期专注 PBL 体系研发，擅长将真实商业问题转化为结构化学习路径，指导学生完成商业选题、市场分析、商业模式设计与路演表达。",
  },
  {
    name: "Ms. C",
    labels: ["应用金融与会计硕士", "汇丰银行高级投资顾问经历", "财务模型与投资逻辑", "BPA 全国站金奖教练"],
    intro:
      "具备扎实金融分析与商业实践能力，长期指导国际商赛项目，擅长商业计划书撰写、财务模型搭建与路演表达优化，帮助学生实现从 idea 到可落地项目的转化。",
  },
  {
    name: "Ms. Z",
    labels: ["商科竞赛指导教师", "英语 + 金融背景", "留学规划与竞赛辅导", "BPA 全国站金奖教练"],
    intro:
      "熟悉康莱德、BPA、钻石挑战赛、蓝海战略、CTB 等赛事体系与评审逻辑，注重通过引导式教学激发学生问题意识与商业表达能力，帮助团队搭建结构化商业框架。",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: [0.12, 0.35, 0.6] },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  invert?: boolean;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase ${invert ? "text-gold" : "text-business"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl font-semibold md:text-5xl ${invert ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 ${invert ? "text-slate-300" : "text-muted"}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const active = useActiveSection(navItems.map((item) => item.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line/80 bg-white/88 shadow-sm backdrop-blur-xl" : "bg-white/35 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm bg-deep text-sm font-semibold text-gold">
            BPA
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-ink">Business Professionals</span>
            <span className="block text-xs text-muted">of America 2026</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-sm px-3 py-2 text-sm transition ${
                active === item.id ? "bg-business text-white" : "text-slate-700 hover:bg-slate-100 hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Open navigation"
          className="grid size-10 place-items-center rounded-sm border border-line bg-white text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-sm px-3 py-3 text-sm ${
                  active === item.id ? "bg-business text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroGraphic() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, 56]);
  const springY = useSpring(y, { stiffness: 80, damping: 24 });

  return (
    <motion.div
      className="relative mx-auto aspect-[1.08] w-full max-w-[560px]"
      style={{ y: springY }}
      animate={{ translateY: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-8 rounded-full border border-slate-200 bg-white/60 shadow-premium" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 520" role="img" aria-label="Business data visual">
        <defs>
          <linearGradient id="dataBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="#0F2747" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <pattern id="dotGrid" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#CBD5E1" />
          </pattern>
        </defs>
        <rect x="56" y="42" width="448" height="410" rx="10" fill="url(#dotGrid)" opacity="0.55" />
        <path d="M88 368 C150 310, 181 328, 228 262 S326 192, 382 218 452 174, 498 118" fill="none" stroke="url(#dataBlue)" strokeWidth="4" />
        <path d="M88 398 C160 374, 196 386, 246 322 S334 284, 392 302 454 262, 498 234" fill="none" stroke="#C9A227" strokeWidth="3" opacity="0.9" />
        {[88, 228, 382, 498].map((cx, index) => (
          <circle key={cx} cx={cx} cy={[368, 262, 218, 118][index]} r="7" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="4" />
        ))}
      </svg>

      <div className="absolute left-0 top-20 w-56 rounded-sm border border-line bg-white/90 p-4 shadow-fine backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-muted">Market Case</span>
          <BarChart3 className="text-business" size={18} />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div className="h-2 w-4/5 rounded-full bg-business" />
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div className="h-2 w-3/5 rounded-full bg-gold" />
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div className="h-2 w-2/3 rounded-full bg-navy" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-0 w-64 rounded-sm border border-line bg-deep p-5 text-white shadow-premium">
        <p className="text-xs uppercase text-slate-400">Project-Based Division</p>
        <p className="mt-2 text-2xl font-semibold">Case Analysis</p>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
          <span className="border border-white/10 py-2">Research</span>
          <span className="border border-white/10 py-2">Model</span>
          <span className="border border-white/10 py-2">Pitch</span>
        </div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  const metrics = [
    ["45,000+", "全球学生成员"],
    ["1,800+", "社团 / 分会"],
    ["90+", "商业与职业技能赛项"],
    ["200+", "中国覆盖学校"],
    ["PBL", "商业实践体验"],
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_12%,rgba(30,58,138,0.13),transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#F7F8FA_100%)]" />
      <div className="data-grid absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto grid min-h-[calc(100vh-56px)] max-w-7xl items-center gap-12 px-5 pb-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            className="mb-5 inline-flex items-center gap-2 border border-line bg-white/70 px-3 py-2 text-sm font-medium text-business shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={16} className="text-gold" />
            2026 BPA 实战组别 · Project-Based Division
          </motion.p>
          <motion.h1
            className="text-5xl font-semibold leading-tight text-ink md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75 }}
          >
            BPA Business Professionals of America 2026
          </motion.h1>
          <motion.p
            className="mt-6 text-2xl font-medium text-navy md:text-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.75 }}
          >
            链接真实商业世界，激活你的创新基因
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-9 text-muted"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.75 }}
          >
            BPA 商业全能学术活动是一项面向中学生的国际商科与职业技能平台，融合商业理论学习、真实案例分析、团队项目制实践与路演表达训练，帮助学生在真实商业问题中建立市场洞察、商业建模、团队协作与创新表达能力。
          </motion.p>
          <motion.div
            className="mt-7 flex flex-wrap gap-3 text-sm text-slate-700"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.75 }}
          >
            {["线上指导", "9-12 年级适合", "2026年10月-12月", "Project-Based Division"].map((tag) => (
              <span key={tag} className="border border-line bg-white px-3 py-2 shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.75 }}
          >
            <a href="#timeline" className="shine-button inline-flex items-center justify-center gap-2 bg-deep px-6 py-4 font-semibold text-white">
              了解项目路径 <ArrowRight size={18} />
            </a>
            <a href="#tracks" className="inline-flex items-center justify-center gap-2 border border-business bg-white px-6 py-4 font-semibold text-business transition hover:bg-business hover:text-white">
              查看 2026 选题方向 <Compass size={18} />
            </a>
          </motion.div>
        </div>

        <HeroGraphic />
      </div>

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 pb-14 md:grid-cols-5 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
        }}
      >
        {metrics.map(([value, label]) => (
          <motion.div
            key={label}
            className="border border-line bg-white/88 p-5 shadow-sm backdrop-blur"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-2xl font-semibold text-ink">{value}</p>
            <p className="mt-2 text-sm text-muted">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function OverviewSection() {
  const identity = [
    "Founded in 1966",
    "International Business & Career Skills Platform",
    "Academic + Project-Based Experience",
    "Business / Finance / Management / Marketing / IT",
    "Designed for Future Business Leaders",
  ];

  return (
    <section id="overview" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase text-business">BPA Overview</p>
          <h2 className="text-4xl font-semibold text-ink md:text-5xl">What is BPA?</h2>
          <p className="mt-4 text-2xl font-medium text-navy">一个面向中学生的全真商业实践平台</p>
          <div className="mt-7 space-y-5 text-lg leading-9 text-muted">
            <p>
              <strong className="font-semibold text-business">Business Professionals of America（BPA）</strong>
              成立于 1966 年，是一项长期运营、体系成熟的国际商科与职业技能活动。BPA 致力于培养学生的商业素养、职业技能、团队协作能力与领导力，通过商业案例、专业知识测评、项目制实践与展示表达，为学生提供走出课堂、连接真实商业世界的机会。
            </p>
            <p>
              BPA 在全球范围内拥有广泛参与基础，覆盖商业、金融、管理、信息技术、市场营销等多个方向。对于有志于商科、管理、经济、创业、金融与商业分析方向发展的学生而言，BPA 不只是一次竞赛经历，更是一套完整的商业认知训练路径。
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            className="certificate-card relative overflow-hidden border border-slate-200 bg-paper p-8 shadow-premium"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <div className="absolute right-6 top-6 grid size-16 place-items-center border border-gold/40 text-gold">
              <Globe2 size={30} />
            </div>
            <p className="text-sm font-semibold uppercase text-gold">Identity Card</p>
            <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-ink">
              International Business & Career Skills Platform
            </h3>
            <div className="mt-8 space-y-4">
              {identity.map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-line pt-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-business" size={18} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyBPASection() {
  const cards = [
    {
      icon: Globe2,
      title: "全球影响力",
      text: "BPA 在全球范围内拥有 45,000+ 学生成员、1,800+ 社团 / 分会，并设置 90+ 商业与职业技能赛项，覆盖商业、金融、管理、信息技术等多个方向。",
    },
    {
      icon: Award,
      title: "权威背书",
      text: "BPA 始于 1966 年，具备长期运营历史、清晰组织架构与规范赛事机制，在赛事路径、评价体系与晋级机制方面具有较强公信力。",
    },
    {
      icon: BriefcaseBusiness,
      title: "实战商业体验",
      text: "学生需要围绕案例场景进行问题识别、市场分析、方案构建、商业表达与团队展示，从而形成接近真实商业世界的项目体验。",
    },
    {
      icon: GraduationCap,
      title: "升学背景提升",
      text: "BPA 的成果形式清晰，包括参与证书、奖项荣誉、商业方案、Presentation、调研分析与路演成果，可转化为申请素材。",
    },
  ];

  return (
    <section id="why" className="section-pad bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why BPA"
          title="Why BPA Matters"
          subtitle="从商业知识输入，到真实项目输出"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <motion.article
                  className="interactive-card group h-full border border-line bg-white p-7 shadow-sm"
                  whileHover={{ y: -6 }}
                  onMouseMove={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
                    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
                  }}
                >
                  <div className="mb-8 grid size-12 place-items-center border border-line text-business transition group-hover:border-gold group-hover:text-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-4 text-base leading-8 text-muted">{card.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="timeline" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Competition Path"
          title="Competition Timeline"
          subtitle="从报名准备，到中国站，再到全球站"
        />
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-line md:left-0 md:top-24 md:h-px md:w-full" />
          <div className="grid gap-5 md:grid-cols-4">
            {timelineItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <button
                  className={`timeline-card relative h-full w-full border bg-white p-6 text-left shadow-sm transition ${
                    selected === index ? "border-business" : "border-line hover:border-gold"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <span
                    className={`absolute -left-[1px] top-6 grid size-4 place-items-center rounded-full md:left-6 md:-top-[7px] ${
                      selected >= index ? "bg-business" : "bg-slate-300"
                    }`}
                  />
                  <span className="text-sm font-semibold text-gold">{item.time}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                  <motion.p
                    className="mt-4 text-sm leading-7 text-muted"
                    animate={{ height: selected === index ? "auto" : "3.5rem" }}
                  >
                    {item.detail}
                  </motion.p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-8 border-l-4 border-gold bg-paper p-5 text-sm text-muted">
          每年活动详细时间以当年组委会发布的时间为准。
        </Reveal>
      </div>
    </section>
  );
}

function FormatSection() {
  const [active, setActive] = useState<"academic" | "project">("project");
  const cardClass = (type: "academic" | "project") =>
    active === type ? "border-deep bg-deep text-white shadow-premium" : "border-line bg-white text-ink shadow-sm";

  return (
    <section id="format" className="section-pad bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Competition Format"
          title="Competition Format"
          subtitle="Academic-Based Division 与 Project-Based Division"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <motion.article
            className={`border p-8 transition ${cardClass("academic")}`}
            onMouseEnter={() => setActive("academic")}
            whileHover={{ y: -5 }}
          >
            <BookOpen className={active === "academic" ? "text-gold" : "text-business"} size={34} />
            <h3 className="mt-6 text-3xl font-semibold">Academic-Based Division</h3>
            <p className={`mt-2 ${active === "academic" ? "text-slate-300" : "text-muted"}`}>学术组别</p>
            <ul className="mt-7 space-y-4 text-base">
              {["参与方式：个人", "考察方式：客观题测评", "测评形式：60分钟，80道题", "方向选择：市场营销 / 商业管理", "能力重点：商业基础知识、概念理解、分析判断"].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-gold" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className={`border p-8 transition ${cardClass("project")}`}
            onMouseEnter={() => setActive("project")}
            whileHover={{ y: -5 }}
          >
            <Presentation className={active === "project" ? "text-gold" : "text-business"} size={34} />
            <h3 className="mt-6 text-3xl font-semibold">Project-Based Division</h3>
            <p className={`mt-2 ${active === "project" ? "text-slate-300" : "text-muted"}`}>实战组别 · 项目组重点辅导</p>
            <ul className="mt-7 space-y-4 text-base">
              {["参与方式：团队，3-4人", "考察方式：案例分析 + 演讲视频", "能力重点：商业问题识别、市场调研、方案设计", "团队分工、展示表达、资料提交包", "项目组重点辅导：实战组别"].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-gold" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
        <Reveal className="mt-7 border border-business/20 bg-white p-7 shadow-sm">
          <p className="text-lg leading-8 text-muted">
            <strong className="font-semibold text-business">本项目将统一辅导学员参加 Project-Based Division 实战组别。</strong>
            学生将以团队形式，从不同商业角色视角出发，针对 BPA 活动季主题案例进行分析，完成商业方案，并通过 Presentation 展示调研与分析成果。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TrackCard({ track, onOpen }: { track: Track; onOpen: (track: Track) => void }) {
  return (
    <motion.button
      className="track-card group flex h-full flex-col border border-line bg-white p-5 text-left shadow-sm"
      style={{ "--accent": track.color } as React.CSSProperties}
      onClick={() => onOpen(track)}
      whileHover={{ y: -7 }}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-sm text-muted">{String(track.id).padStart(2, "0")}</span>
        <span className="h-px w-16 bg-[var(--accent)]" />
      </div>
      <h3 className="text-2xl font-semibold text-ink">{track.name}</h3>
      <p className="mt-1 text-sm font-medium text-business">{track.english}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {track.keywords.slice(0, 4).map((keyword) => (
          <span key={keyword} className="border px-2 py-1 text-xs text-slate-600" style={{ borderColor: track.color }}>
            {keyword}
          </span>
        ))}
      </div>
      <p className="mt-5 line-clamp-4 grow text-sm leading-7 text-muted">{track.intro}</p>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs text-muted">{track.majors.length} 个适配专业方向</span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-business">
          View Track <ArrowRight size={16} />
        </span>
      </div>
    </motion.button>
  );
}

function TrackModal({ track, onClose }: { track: Track | null; onClose: () => void }) {
  useEffect(() => {
    if (!track) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [track, onClose]);

  if (!track) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-end bg-deep/45 p-0 backdrop-blur-sm md:place-items-center md:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full overflow-y-auto bg-white p-6 shadow-premium md:max-w-4xl md:p-9"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="font-mono text-sm text-muted">{String(track.id).padStart(2, "0")}</span>
            <h3 className="mt-2 text-4xl font-semibold text-ink">{track.name}</h3>
            <p className="mt-2 text-lg font-medium" style={{ color: track.color }}>
              {track.english}
            </p>
          </div>
          <button className="grid size-10 shrink-0 place-items-center border border-line text-ink hover:bg-paper" onClick={onClose} aria-label="Close track modal">
            <X size={20} />
          </button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {[
              ["行业背景", track.intro],
              ["商业机会", track.opportunity],
              ["适合学生类型", track.studentType],
            ].map(([title, text], index) => (
              <motion.section
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index }}
              >
                <h4 className="mb-2 text-sm font-semibold uppercase text-business">{title}</h4>
                <p className="text-base leading-8 text-muted">{text}</p>
              </motion.section>
            ))}
          </div>
          <div className="space-y-5">
            <section className="border border-line bg-paper p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase text-business">适配专业</h4>
              <div className="flex flex-wrap gap-2">
                {track.majors.map((major) => (
                  <span key={major} className="bg-white px-2 py-1 text-xs text-slate-700">
                    {major}
                  </span>
                ))}
              </div>
            </section>
            <section className="border border-line bg-white p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase text-business">可延展项目方向</h4>
              <ul className="space-y-3">
                {track.projectIdeas.map((idea) => (
                  <li key={idea} className="flex gap-3 text-sm text-slate-700">
                    <Target className="mt-0.5 shrink-0 text-gold" size={16} />
                    {idea}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <section id="tracks" className="section-pad bg-deep text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Tracks 2026"
          title="2026 Business Research Tracks"
          subtitle="10 个面向未来商业世界的选题方向"
          invert
        />
        <Reveal className="mx-auto mb-10 max-w-4xl border border-white/10 bg-white/5 p-6 text-center text-base leading-8 text-slate-300">
          2026 BPA 选题方向围绕真实商业世界中的新兴消费、社会结构变化、科技应用与产业转型展开。学生将从市场需求、用户行为、商业模式、竞争格局与增长策略等角度切入，完成从行业洞察到商业方案表达的完整训练。
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {trackData.map((track, index) => (
            <Reveal key={track.id} delay={(index % 5) * 0.03}>
              <TrackCard track={track} onOpen={setSelectedTrack} />
            </Reveal>
          ))}
        </div>
      </div>
      <TrackModal track={selectedTrack} onClose={() => setSelectedTrack(null)} />
    </section>
  );
}

function GainsSection() {
  const gains = [
    ["商业知识体系", "学习市场营销、商业管理、金融经济、人力资源管理、消费者行为等基础商业知识。", BookOpen],
    ["完整商业方案", "完成商业模型、市场分析、竞争分析、用户洞察、财务逻辑与执行路径设计。", LineChart],
    ["商业计划书与提交包", "形成完整商业计划书、竞赛资料提交包与 Presentation 成果。", FileText],
    ["产品广告视频", "完成符合 BPA 实战组别要求的商业展示视频或演讲视频。", PenTool],
    ["团队协作与领导力", "在团队分工、任务推进、项目管理与路演表达中提升综合能力。", Users],
    ["留学申请素材", "将竞赛经历转化为活动列表、文书素材、面试表达与商科兴趣证明。", GraduationCap],
  ];

  return (
    <section id="gains" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Student Outcomes"
          title="What Students Will Gain"
          subtitle="从商业认知，到可呈现的申请素材"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gains.map(([title, text, Icon], index) => (
            <Reveal key={title as string} delay={index * 0.04}>
              <motion.article className="gain-card h-full border border-line bg-paper p-7" whileHover={{ y: -6 }}>
                <Icon className="text-business" size={30} />
                <h3 className="mt-6 text-xl font-semibold text-ink">{title as string}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text as string}</p>
                <p className="mt-5 hidden border-t border-line pt-4 text-sm leading-7 text-slate-600 group-hover:block">
                  可沉淀为项目复盘、作品集描述、活动列表和面试表达中的具体证据。
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramPlanSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="plan" className="section-pad bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Program Plan"
          title="Program Plan"
          subtitle="2026年10月-12月，线上完成系统化 BPA 项目训练"
        />
        <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="space-y-5">
            {[
              {
                stage: "阶段 1",
                title: "基础知识指导",
                time: "9月-11月 · 线上课程",
                goals: ["建立 BPA 赛事认知", "理解竞赛规则与参赛要求", "学习必要商科基础框架", "完成组队与初步项目构思"],
              },
              {
                stage: "阶段 2",
                title: "1V1 小队指导",
                time: "具体时间由战队和导师沟通确定 · 每次 2 小时",
                goals: ["优化商业模型", "完成案例分析", "打磨商业计划书", "完成竞赛资料提交包", "进行路演表达与模拟演练"],
              },
            ].map((stage, index) => (
              <article key={stage.title} className="border border-line bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-gold">{stage.stage}</span>
                  <span className="h-1 grow bg-slate-100">
                    <span className="block h-1 bg-business" style={{ width: index === 0 ? "45%" : "85%" }} />
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-ink">{stage.title}</h3>
                <p className="mt-2 text-sm text-muted">{stage.time}</p>
                <ul className="mt-5 space-y-3">
                  {stage.goals.map((goal) => (
                    <li key={goal} className="flex gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-business" size={16} />
                      {goal}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden border border-line bg-white shadow-fine">
              {sessions.map(([session, topic, output], index) => (
                <button
                  key={session}
                  className="block w-full border-b border-line p-0 text-left last:border-b-0 hover:bg-paper"
                  onClick={() => setOpen(open === index ? -1 : index)}
                >
                  <div className="grid gap-3 p-4 md:grid-cols-[100px_1fr_1fr_28px] md:items-center">
                    <span className="font-mono text-sm text-business">{session}</span>
                    <span className="font-medium text-ink">{topic}</span>
                    <span className="text-sm text-muted">{output}</span>
                    <ChevronDown className={`text-muted transition ${open === index ? "rotate-180" : ""}`} size={18} />
                  </div>
                  {open === index && (
                    <motion.div
                      className="border-t border-line bg-paper px-4 py-4 text-sm leading-7 text-muted"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      本节将围绕赛事任务拆解、项目推进方法与可交付成果进行训练，并结合小队选题进行即时反馈。
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              备注：教学内容和上课时间将根据赛事实际情况微调，如有调整会提前通知。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MentorDrawer({ mentor, onClose }: { mentor: Mentor | null; onClose: () => void }) {
  useEffect(() => {
    if (!mentor) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mentor]);

  if (!mentor) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[75] bg-deep/45 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.aside
        className="ml-auto h-full w-full max-w-xl overflow-y-auto bg-white p-7 shadow-premium md:p-10"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-business">Mentor Profile</p>
            <h3 className="mt-3 text-4xl font-semibold text-ink">{mentor.name}</h3>
          </div>
          <button className="grid size-10 place-items-center border border-line" onClick={onClose} aria-label="Close mentor drawer">
            <X size={20} />
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {mentor.labels.map((label) => (
            <span key={label} className="border border-line bg-paper px-3 py-2 text-sm text-slate-700">
              {label}
            </span>
          ))}
        </div>
        <p className="mt-8 text-lg leading-9 text-muted">{mentor.intro}</p>
      </motion.aside>
    </motion.div>
  );
}

function MentorSection() {
  const [selected, setSelected] = useState<Mentor | null>(null);

  return (
    <section id="mentors" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Mentor Team"
          title="Mentor Team"
          subtitle="由资深商赛导师与 BPA 金奖教练指导"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor, index) => (
            <Reveal key={mentor.name} delay={index * 0.05}>
              <motion.button
                className="mentor-card group h-full w-full border border-line bg-paper p-6 text-left"
                onClick={() => setSelected(mentor)}
                whileHover={{ y: -6 }}
              >
                <div className="grid size-20 place-items-center border border-ink bg-white text-2xl font-semibold text-ink">
                  {mentor.name.replace(".", "").split(" ")[1]}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink">{mentor.name}</h3>
                <p className="mt-2 text-sm text-business">BPA 全国站金奖教练</p>
                <div className="mt-6 space-y-2 opacity-90 md:max-h-16 md:overflow-hidden md:transition-all md:group-hover:max-h-48">
                  {mentor.labels.map((label) => (
                    <span key={label} className="mr-2 inline-block border border-line bg-white px-2 py-1 text-xs text-slate-600">
                      {label}
                    </span>
                  ))}
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
      <MentorDrawer mentor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ResultsSection() {
  const seasons = [
    ["2025 赛季", ["15 支队伍全部晋级全球站", "BPA 全国站金奖", "BPA 全国站银奖", "BPA 全国站铜奖"]],
    ["2024 赛季", ["8 支队伍晋级全球站", "BPA 全国站银奖", "BPA 全国站铜奖", "BPA 全国站区域奖"]],
    [
      "2023 赛季",
      [
        "BPA 全球站 Digital Media Production 方向全球第二名",
        "Adventra 小队：BPA 初选站金奖、全国站金奖、晋级全球站",
        "Jiangnan United 小队：BPA 初选站区域银奖、全国站银奖、晋级全球站",
      ],
    ],
  ];

  return (
    <section id="results" className="section-pad bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Track Record"
          title="Track Record"
          subtitle="稳定晋级表现与高质量竞赛成果"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {seasons.map(([year, items], index) => (
            <Reveal key={year as string} delay={index * 0.08}>
              <article className="h-full border border-line bg-white p-7 shadow-sm">
                <p className="text-5xl font-semibold text-navy">{year as string}</p>
                <div className="mt-8 space-y-4">
                  {(items as string[]).map((item) => (
                    <div key={item} className="flex gap-3 border-t border-line pt-4">
                      <Award className="mt-1 shrink-0 text-gold" size={18} />
                      <span className="text-base leading-7 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudentFitSection() {
  const fits = [
    ["商科兴趣探索型", "适合未来考虑申请商科、管理、经济、金融、市场营销等方向，但目前缺少系统商业实践经历的学生。", Compass],
    ["项目经历积累型", "适合希望通过一个结构完整、成果明确的国际商赛项目，积累活动列表、文书素材与面试表达内容的学生。", ClipboardList],
    ["表达与领导力提升型", "适合希望提升 Presentation、团队协作、项目管理、商业表达和英文路演能力的学生。", MessageSquareText],
    ["创业与创新导向型", "适合对真实商业问题、新消费趋势、科技商业化、产品创新和创业模型感兴趣的学生。", Rocket],
  ];

  return (
    <section id="fit" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Student Fit"
          title="Who Should Join"
          subtitle="适合对商业世界、市场趋势与创新项目感兴趣的中学生"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {fits.map(([title, text, Icon], index) => (
            <Reveal key={title as string} delay={index * 0.05}>
              <article className="h-full border border-line bg-paper p-6">
                <Icon className="text-business" size={30} />
                <h3 className="mt-6 text-xl font-semibold text-ink">{title as string}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text as string}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationSection() {
  const steps = ["填写报名表格及资质审核", "签署报名协议并支付费用", "开通学习账户", "完成预习打卡任务", "根据报道须知进入项目", "开启 BPA 2026 创新历程"];

  return (
    <section id="apply" className="section-pad bg-white pb-0">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Application"
          title="Application Process"
          subtitle="从报名审核到正式开启 BPA 创新历程"
        />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.04}>
              <article className="process-card h-full border border-line bg-paper p-5">
                <span className="font-mono text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 min-h-14 text-base font-semibold leading-7 text-ink">{step}</h3>
                <p className="mt-4 hidden text-sm leading-7 text-muted md:block">
                  该节点将由项目团队提供清晰指引，确保学生按阶段进入训练流程。
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-deep">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-gold">BPA 2026</p>
            <h3 className="mt-3 text-4xl font-semibold text-white">开启 BPA 2026 创新历程</h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              时间：2026年10月-12月 · 地点：线上 · 适合学生：9-12年级，对市场营销调研、整合营销、商业管理、创业学、金融学等商科领域感兴趣的中学生。
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
            <a href="#top" className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-4 font-semibold text-deep">
              立即咨询 <ArrowRight size={18} />
            </a>
            <a href="#plan" className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 font-semibold text-white hover:bg-white hover:text-deep">
              获取项目说明书 <FileText size={18} />
            </a>
            <a href="#tracks" className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 font-semibold text-white hover:bg-white hover:text-deep">
              查看选题方向 <Target size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep px-5 pb-24 pt-10 text-slate-300 lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-xl font-semibold text-white">BPA Business Professionals of America 2026</h3>
            <p className="mt-3 text-sm">链接真实商业世界，激活你的创新基因。</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {["Project Overview", "Competition Path", "2026 Tracks", "Program Plan", "Apply"].map((item) => (
              <a key={item} href={item === "Apply" ? "#apply" : item === "Program Plan" ? "#plan" : item === "2026 Tracks" ? "#tracks" : item === "Competition Path" ? "#timeline" : "#overview"} className="hover:text-gold">
                {item}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-6 text-slate-500">
          具体赛事安排、时间节点与奖项设置以当年组委会官方发布信息为准。项目指导内容将根据赛事规则与学生团队实际进度进行适度调整。
        </p>
      </div>
    </footer>
  );
}

function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-deep/95 p-3 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href="#tracks" className="border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white">
          选题方向
        </a>
        <a href="#apply" className="bg-gold px-4 py-3 text-center text-sm font-semibold text-deep">
          立即咨询
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  useActiveSection(ids);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      className="min-h-screen bg-white font-sans text-ink"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none fixed z-[1] hidden size-64 rounded-full bg-business/5 blur-3xl lg:block"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <WhyBPASection />
        <TimelineSection />
        <FormatSection />
        <TracksSection />
        <GainsSection />
        <ProgramPlanSection />
        <MentorSection />
        <ResultsSection />
        <StudentFitSection />
        <ApplicationSection />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
