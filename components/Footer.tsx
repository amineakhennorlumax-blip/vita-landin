import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const SITE_LINKS = ["الرئيسية", "برامجنا", "خطوات التقديم", "قصص النجاح", "الأسئلة الشائعة"];
const ABOUT_LINKS = ["التعريف", "العملية الصناعية", "الكهرباء", "اللحام", "الضيافة والفندقة", "المزيد"];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink pt-16 text-paper/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="latin text-2xl font-bold text-paper">VITA</span>
          <p className="mt-4 max-w-xs text-sm leading-7">
            نحن في VITA نؤمن بأن كل شخص يستحق فرصة لحياة أفضل. رافقناك في كل خطوة نحو تحقيق حلمك في ألمانيا.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-paper">روابط سريعة</h4>
          <ul className="space-y-3 text-sm">
            {SITE_LINKS.map((l) => (<li key={l}><a href="#" className="hover:text-gold">{l}</a></li>))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-paper">برامجنا</h4>
          <ul className="space-y-3 text-sm">
            {ABOUT_LINKS.map((l) => (<li key={l}><a href="#" className="hover:text-gold">{l}</a></li>))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-paper">تواصل معنا</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 justify-end"><span className="latin">+212 600 000 000</span><Phone className="h-4 w-4 text-gold" /></li>
            <li className="flex items-center gap-2 justify-end"><span className="latin">+49 176 00000000</span><Phone className="h-4 w-4 text-gold" /></li>
            <li className="flex items-center gap-2 justify-end"><span className="latin">info@vita-partner.com</span><Mail className="h-4 w-4 text-gold" /></li>
            <li className="flex items-center gap-2 justify-end">المغرب – الجزائر – العراق<MapPin className="h-4 w-4 text-gold" /></li>
          </ul>
        </div>
      </div>

      <div className="seam" />
      <p className="py-6 text-center text-xs text-paper/40">© 2024 VITA. جميع الحقوق محفوظة.</p>
    </footer>
  );
}
