import React, { useState } from 'react';
import { 
  Lock, 
  Sparkles, 
  Heart, 
  Phone, 
  CreditCard, 
  CheckCircle2, 
  Copy, 
  X, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Story, PaymentRecord } from '../types';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: Story;
  onSubmitPayment: (payment: Omit<PaymentRecord, 'id' | 'createdAt' | 'status'>) => void;
  onInstantUnlockForDemo: (storyId: string) => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  story,
  onSubmitPayment,
  onInstantUnlockForDemo
}) => {
  const [senderName, setSenderName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionCode, setTransactionCode] = useState('');
  const [network, setNetwork] = useState('M-Pesa');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const paymentPhoneNumber = '0716614099';

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(paymentPhoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !phoneNumber || !transactionCode) {
      alert('Tafadhali jaza taarifa zote za malipo ili Dada Marry aweze kuthibitisha muamala wako.');
      return;
    }

    onSubmitPayment({
      storyId: story.id,
      storyTitle: story.title,
      amountTsh: story.priceTsh || 300,
      phoneNumber,
      senderName,
      transactionCode: transactionCode.toUpperCase(),
      network
    });

    setSubmitted(true);
  };

  const handleQuickInstantDemoUnlock = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
    onInstantUnlockForDemo(story.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-pink-500/40 p-6 sm:p-8 shadow-2xl bg-[#140728]/95 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation state */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-pink-500/40 animate-bounce mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif-title font-bold text-2xl text-white">
              Taarifa Zako Zimetumwa Kikamilifu! ❤️
            </h3>

            <p className="mt-3 text-sm text-pink-200/90 leading-relaxed max-w-sm mx-auto">
              Asante <span className="font-bold text-pink-300">{senderName}</span>! Muamala wako wa <span className="font-bold text-amber-300">TSh {story.priceTsh}</span> wenye namba <span className="font-mono text-pink-300 font-bold">{transactionCode.toUpperCase()}</span> umepokewa na umetumwa kwenye Admin Dashboard ya Dada Marry kwa ajili ya uthibitisho.
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-pink-950/40 border border-pink-500/30 text-xs text-pink-200 text-left space-y-2">
              <p className="flex items-center gap-2">
                <span>⚡</span>
                <span>Uthibitisho huchukua sekunde chache hadi dakika 2.</span>
              </p>
              <p className="flex items-center gap-2">
                <span>👑</span>
                <span>Unaweza pia kubofya 'Admin' juu kulia kuthibitisha muamala wako mwenyewe sasa hivi!</span>
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleQuickInstantDemoUnlock}
                className="w-full py-3 rounded-full font-bold text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 hover:from-amber-300 hover:to-yellow-400 glow-button-gold flex items-center justify-center gap-2 shadow-lg"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Jaribu Kufungua Papo Hapo (Demo Unlock)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/15 transition-colors"
              >
                Funga Dirisha
              </button>
            </div>
          </div>
        ) : (
          /* Payment Form */
          <div>
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 text-white shadow-lg shadow-pink-500/40 mb-3 animate-pulse">
                <Lock className="w-6 h-6" />
              </div>

              <span className="block text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                🔐 STORY HII NI PREMIUM
              </span>

              <h3 className="font-serif-title font-bold text-2xl text-white leading-snug">
                “Umefika sehemu tamu zaidi ya story 😍”
              </h3>

              <p className="mt-2 text-sm text-pink-200">
                Fungua story nzima ya <span className="font-bold text-white">"{story.title}"</span> kwa <span className="font-bold text-amber-300 text-base">TSh 300</span> tu.
              </p>
            </div>

            {/* Payment Instructions Box */}
            <div className="mt-5 p-4 rounded-2xl bg-[#0d051c] border border-amber-400/40 shadow-inner">
              <div className="flex items-center justify-between text-xs text-amber-300 font-bold mb-2">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  💳 LIPA KUPITIA:
                </span>
                <span className="text-[11px] text-pink-300 font-normal">Kima cha chini: TSh 300</span>
              </div>

              {/* Number and Copy Button */}
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-pink-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-600/30 flex items-center justify-center text-pink-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono font-black text-lg sm:text-xl text-white tracking-wider">
                      {paymentPhoneNumber}
                    </span>
                    <p className="text-[10px] text-pink-300/80">Jina: DADA MARRY STORIES (M-Pesa / Tigo / Airtel)</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Imenakiliwa!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Nakili</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-pink-200 mb-1">
                  Mtandao Uliotumia
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['M-Pesa', 'Tigo Pesa', 'Airtel', 'HaloPesa'].map((net) => (
                    <button
                      key={net}
                      type="button"
                      onClick={() => setNetwork(net)}
                      className={`py-1.5 text-xs font-bold rounded-xl border transition-all ${
                        network === net
                          ? 'bg-pink-600 text-white border-pink-400 shadow-md shadow-pink-600/30'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {net}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-pink-200 mb-1">
                  Jina la Mtumaji (Kama linavyoonekana kwenye muamala)
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Mfano: Joyce Emmanuel"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-pink-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-pink-200 mb-1">
                    Namba Yako ya Simu
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Mfano: 0754890123"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-pink-200 mb-1">
                    Namba ya Muamala / SMS Code
                  </label>
                  <input
                    type="text"
                    required
                    value={transactionCode}
                    onChange={(e) => setTransactionCode(e.target.value)}
                    placeholder="Mfano: 8HA9812..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm uppercase placeholder-slate-500 focus:outline-none focus:border-pink-400 font-mono"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="btn-confirm-payment"
                className="w-full mt-2 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-red-600 hover:from-pink-400 hover:to-rose-500 glow-button transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-pink-500/30"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>💗 NIMELIPA — THIBITISHA MALIPO</span>
              </button>
            </form>

            {/* Quick Demo Preview / Testing Aid */}
            <div className="mt-4 pt-3 border-t border-pink-500/20 flex items-center justify-between text-xs">
              <span className="text-pink-300/70">Jaribio la ukaguzi:</span>
              <button
                onClick={handleQuickInstantDemoUnlock}
                className="text-amber-300 hover:text-amber-200 font-bold underline flex items-center gap-1 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Fungua Papo Hapo (Quick Demo Unlock)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
