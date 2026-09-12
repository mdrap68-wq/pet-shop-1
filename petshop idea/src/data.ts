import {
  BirdIcon,
  BottleIcon,
  CatIcon,
  DogIcon,
  FishIcon,
  RodentIcon,
  ShirtIcon,
  ToyIcon,
} from "./components/CategoryIcons";

export const navLinks = [
  { label: "خانه", href: "#home" },
  { label: "فروشگاه", href: "#products" },
  { label: "سگ", href: "#categories" },
  { label: "گربه", href: "#categories" },
  { label: "پرندگان", href: "#categories" },
  { label: "جوندگان", href: "#categories" },
  { label: "آکواریوم", href: "#categories" },
  { label: "برندها", href: "#footer" },
  { label: "مقالات", href: "#blog" },
  { label: "تخفیف‌ها", href: "#promos", accent: true },
];

export const categories = [
  { label: "سگ", Icon: DogIcon, tone: "bg-sand" },
  { label: "گربه", Icon: CatIcon, tone: "bg-blush" },
  { label: "لوازم بهداشتی", Icon: BottleIcon, tone: "bg-sky" },
  { label: "اسباب‌بازی", Icon: ToyIcon, tone: "bg-mint" },
  { label: "پرندگان", Icon: BirdIcon, tone: "bg-lilac" },
  { label: "جوندگان", Icon: RodentIcon, tone: "bg-sand" },
  { label: "آکواریوم", Icon: FishIcon, tone: "bg-sky" },
  { label: "لباس و اکسسوری", Icon: ShirtIcon, tone: "bg-blush" },
];

export type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "غذای خشک رویال کنین",
    subtitle: "مخصوص سگ‌های بالغ",
    price: "۱٬۴۵۰٬۰۰۰",
    image: "/images/p1.png",
    badge: "پرفروش",
  },
  {
    id: 2,
    title: "غذای گربه ویسکاس",
    subtitle: "با طعم مرغ",
    price: "۹۵٬۰۰۰",
    image: "/images/p2.png",
  },
  {
    id: 3,
    title: "لانه نرم و راحت",
    subtitle: "مناسب سگ و گربه",
    price: "۷۸۰٬۰۰۰",
    image: "/images/p3.png",
    badge: "جدید",
  },
  {
    id: 4,
    title: "اسباب‌بازی طنابی",
    subtitle: "مناسب جویدن متوسط",
    price: "۱۸۵٬۰۰۰",
    image: "/images/p4.png",
  },
  {
    id: 5,
    title: "شامپو مخصوص سگ",
    subtitle: "با رایحه ملایم",
    price: "۲۵۰٬۰۰۰",
    image: "/images/p5.png",
  },
];

export const posts = [
  {
    id: 1,
    tag: "سلامت",
    tagTone: "bg-white text-brand-800",
    title: "چگونه از پت خود در تابستان مراقبت کنیم؟",
    excerpt: "نکاتی کاربردی برای حفظ سلامت و شادابی و خنکی حیوان خانگی در روزهای گرم سال.",
    read: "۶ دقیقه مطالعه",
    image:
      "https://images.pexels.com/photos/19570766/pexels-photo-19570766.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    id: 2,
    tag: "آموزش",
    tagTone: "bg-blush text-[#b5416a]",
    title: "آموزش دستشویی به سگ توله",
    excerpt: "راهنمای قدم به قدم برای آموزش صحیح و آسان به توله‌سگ‌ها در هفته‌های نخست.",
    read: "۸ دقیقه مطالعه",
    image:
      "https://images.pexels.com/photos/8240133/pexels-photo-8240133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    id: 3,
    tag: "تغذیه",
    tagTone: "bg-blush text-[#b5416a]",
    title: "بهترین غذای خشک برای گربه‌های بالغ",
    excerpt: "راهنمای انتخاب بهترین غذای خشک و کنسرو متناسب با نیازهای بچه‌گربه‌ها.",
    read: "۵ دقیقه مطالعه",
    image:
      "https://images.pexels.com/photos/8529064/pexels-photo-8529064.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export const footerColumns = [
  {
    title: "دسترسی سریع",
    links: ["درباره ما", "تماس با ما", "وبلاگ", "برندها", "تعرفه همکاری"],
  },
  {
    title: "راهنمای خرید",
    links: ["سوالات متداول", "روش‌های ارسال", "روش‌های پرداخت", "ضمانت و بازگشت کالا", "راهنمای سایز"],
  },
];
