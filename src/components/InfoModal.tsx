import React from 'react';
import { X, Heart, Phone, Mail, ShieldCheck, HelpCircle, AlertTriangle, FileText } from 'lucide-react';

interface InfoModalProps {
  type: string | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap: Record<string, { title: string; icon: any; content: React.ReactNode }> = {
    about: {
      title: 'Kuhusu Dada Marry na Hadithi Hizi',
      icon: Heart,
      content: (
        <div className="space-y-3 text-sm text-slate-200 leading-relaxed">
          <p>
            <strong>💕 STORY TAMU ZA DADA MARRY</strong> ni jukwaa namba moja la hadithi za Kiswahili lililobuniwa mahususi kwa ajili ya vijana na wasomaji wanaopenda simulizi zenye miguso ya hisia, mahaba mazito, mikasa ya ndoa, usaliti na mafunzo ya maisha.
          </p>
          <p>
            Dada Marry ni mwandishi mwenye kipaji cha kipekee cha kutunga hadithi zinazomfanya msomaji ahisi kama yupo ndani ya mkasa huo. Kila hadithi inakupa mwanzo bure, na unafungua hadithi nzima kwa <strong>TSh 300 tu</strong>.
          </p>
          <p className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-300 text-xs">
            "Lengo letu ni kukuza utamaduni wa usomaji wa Kiswahili kupitia simulizi za kiwango cha juu zenye maadili, suspense na twists za kusisimua."
          </p>
        </div>
      )
    },
    contact: {
      title: 'Wasiliana na Dada Marry',
      icon: Phone,
      content: (
        <div className="space-y-4 text-sm text-slate-200">
          <p>Je, una maoni, ushauri, au mkasa wako wa kweli unaotaka Dada Marry augeuze kuwa hadithi? Wasiliana nasi:</p>
          <div className="p-4 rounded-2xl bg-black/40 border border-pink-500/20 space-y-2 text-xs">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-400" />
              <span>Simu & WhatsApp: <strong className="text-white font-mono text-sm">0716614099</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Barua Pepe: <strong className="text-white">dadamarry.stories@gmail.com</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span>
              <span>Ofisi: Dar es Salaam, Tanzania</span>
            </p>
          </div>
          <p className="text-xs text-pink-300/80">Masaa ya huduma: Jumatatu - Jumapili (Saa 2:00 Asubuhi - Saa 5:00 Usiku)</p>
        </div>
      )
    },
    terms: {
      title: 'Vigezo na Masharti (Terms & Conditions)',
      icon: FileText,
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed max-h-72 overflow-y-auto pr-2">
          <p><strong>1. Hakimiliki (Copyright):</strong> Hadithi zote, wahusika na simulizi kwenye mtandao huu zinalindwa na sheria za hakimiliki. Ni marufuku kunakili, kusambaza au kutumia kibiashara bila kibali cha Dada Marry.</p>
          <p><strong>2. Malipo ya TSh 300:</strong> Malipo yanayofanywa kwa ajili ya kufungua hadithi ni halali kwa msomaji aliyelipia kupitia namba 0716614099. Baada ya kuthibitishwa, hadithi inafunguliwa moja kwa moja.</p>
          <p><strong>3. Maudhui:</strong> Hadithi zetu zinalenga wasomaji kuanzia miaka 16 na kuendelea kutokana na maudhui ya mahusiano, hisia na ndoa.</p>
        </div>
      )
    },
    privacy: {
      title: 'Sera ya Faragha (Privacy Policy)',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>Tunaheshimu sana faragha ya wasomaji wetu:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Namba yako ya simu inayotumika kwenye malipo inatumika tu kwa ajili ya kuthibitisha muamala wa TSh 300.</li>
            <li>Hatutoi wala kuuza namba yako au taarifa yoyote kwa wahusika wa tatu.</li>
            <li>Historia yako ya usomaji inahifadhiwa kwa usalama kwenye akaunti yako ili ufurahie hadithi zako bila usumbufu.</li>
          </ul>
        </div>
      )
    },
    payment_help: {
      title: 'Msaada wa Malipo (Payment Help)',
      icon: HelpCircle,
      content: (
        <div className="space-y-3 text-xs text-slate-200 leading-relaxed">
          <h5 className="font-bold text-pink-300 text-sm">Jinsi ya Kulipia Hadithi kwa TSh 300 Tu:</h5>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Kwenye ukurasa wa hadithi, ukifika sehemu ya malipo bofya <strong>"Fungua Story"</strong> au <strong>"NIMELIPA"</strong>.</li>
            <li>Fungua simu yako na utume kiasi cha <strong>TSh 300</strong> kwenda namba <strong>0716614099</strong> (M-Pesa, Tigo Pesa au Airtel Money).</li>
            <li>Nakili jina lako na namba ya muamala (Transaction Code) iliyotumwa kwenye SMS.</li>
            <li>Jaza kwenye fomu na ubofye <strong>"NIMELIPA — THIBITISHA MALIPO"</strong>.</li>
            <li>Hadithi yako itafunguliwa papo hapo au ndani ya sekunde chache!</li>
          </ol>
        </div>
      )
    },
    report: {
      title: 'Ripoti Hadithi au Hitilafu',
      icon: AlertTriangle,
      content: (
        <div className="space-y-3 text-xs text-slate-200">
          <p>Umekutana na hitilafu ya maandishi, ukurasa kutokufunguka, au maoni yasiyofaa?</p>
          <p>Tafadhali tuma ujumbe mfupi moja kwa moja WhatsApp kwenda <strong>0716614099</strong> ukiwa na jina la hadithi, na timu yetu itarekebisha mara moja ndani ya dakika 10.</p>
        </div>
      )
    }
  };

  const currentInfo = contentMap[type] || contentMap.about;
  const Icon = currentInfo.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-pink-500/30 p-6 sm:p-8 bg-[#140728]/95 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-serif-title font-bold text-xl text-white">
            {currentInfo.title}
          </h3>
        </div>

        <div className="mt-4">
          {currentInfo.content}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 rounded-full font-bold text-xs bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
        >
          Funga
        </button>
      </div>
    </div>
  );
};
