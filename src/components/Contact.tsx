import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Linkedin, Instagram, Mail, Copy, Check, Info, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ContactProps {
  initialService?: string;
  initialBudget?: string;
  initialDescription?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialService,
  initialBudget,
  initialDescription,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: initialService || 'Websites & Digital Experiences',
    budgetRange: initialBudget || 'KES 25,000 – 65,000',
    description: initialDescription || '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [mailDraftOpened, setMailDraftOpened] = useState(false);

  useEffect(() => {
    if (initialService) setFormData((prev) => ({ ...prev, enquiryType: initialService }));
    if (initialBudget) setFormData((prev) => ({ ...prev, budgetRange: initialBudget }));
    if (initialDescription) setFormData((prev) => ({ ...prev, description: initialDescription }));
  }, [initialService, initialBudget, initialDescription]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyBrief = async () => {
    const briefText =
      `PROJECT ENQUIRY FOR LAURENCE MAGONDU\n` +
      `====================================\n` +
      `Client Name: ${formData.name || 'Potential Client'}\n` +
      `Email: ${formData.email || 'Not specified'}\n` +
      `Enquiry Type: ${formData.enquiryType}\n` +
      `Budget Range: ${formData.budgetRange}\n\n` +
      `Project Description & Requirements:\n${formData.description || 'Custom Scope Evaluation'}`;

    try {
      await navigator.clipboard.writeText(briefText);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project Enquiry: ${formData.enquiryType} — ${formData.name || 'New Client'}`
    );
    const body = encodeURIComponent(
      `PROJECT ENQUIRY FOR LAURENCE MAGONDU\n\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Enquiry Type: ${formData.enquiryType}\n` +
      `Budget Range: ${formData.budgetRange}\n\n` +
      `Project Description & Requirements:\n${formData.description}\n`
    );

    // Open user's default email client with preformatted draft
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setMailDraftOpened(true);
  };

  const getWhatsAppMessageUrl = () => {
    const summary = formData.description
      ? `\n\nScope Summary:\n${formData.description.slice(0, 300)}...`
      : '';
    const text = encodeURIComponent(
      `Hi Laurence, I would like to discuss a project.\n\n` +
      `Name: ${formData.name || 'Client'}\n` +
      `Enquiry Type: ${formData.enquiryType}\n` +
      `Budget: ${formData.budgetRange}${summary}`
    );
    return `https://wa.me/254110343757?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
              Start a Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
              Let’s discuss your project, operations, or design.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
              Fill in your details below or connect directly via WhatsApp. I respond promptly with a realistic evaluation of your needs, scope, and next steps.
            </p>

            {mailDraftOpened && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white dark:text-white light-theme:text-slate-900">
                    Email Client Launch Initiated
                  </div>
                  <div className="mt-1 text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                    Your enquiry details were formatted into an email draft to <span className="font-mono text-emerald-300">{PERSONAL_INFO.email}</span>. You can also send the same details directly via WhatsApp below.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-600 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Mwangi"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-300 text-white dark:text-white light-theme:text-slate-900 text-sm focus:outline-none focus:border-[#a3e635] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-600 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-300 text-white dark:text-white light-theme:text-slate-900 text-sm focus:outline-none focus:border-[#a3e635] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-600 mb-2">
                    Type of Enquiry
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-300 text-white dark:text-white light-theme:text-slate-900 text-sm focus:outline-none focus:border-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="Brand & Graphic Design">Brand &amp; Graphic Design (Logo, Identity, Print)</option>
                    <option value="Websites & Digital Experiences">Websites &amp; Digital Experiences (Website, E-commerce)</option>
                    <option value="Data, Reporting & Business Systems">Data, Reporting &amp; Business Systems (Excel, Dashboards)</option>
                    <option value="Operations & Process Improvement">Operations &amp; Process Improvement (Kaizen, SOPs)</option>
                    <option value="Custom Project Scope">Custom Multi-Disciplinary Scope</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-600 mb-2">
                    Budget Range (KES)
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-300 text-white dark:text-white light-theme:text-slate-900 text-sm focus:outline-none focus:border-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="Under KES 10,000">Under KES 10,000 (Small tasks / flyer / minor fixes)</option>
                    <option value="KES 10,000 – 25,000">KES 10,000 – 25,000 (Logo / Landing page / SOP pack)</option>
                    <option value="KES 25,000 – 65,000">KES 25,000 – 65,000 (Full website / Identity / Dashboard)</option>
                    <option value="KES 65,000 – 120,000">KES 65,000 – 120,000 (E-commerce / Multi-page system)</option>
                    <option value="KES 120,000+">KES 120,000+ (Full ecosystem / Enterprise scope)</option>
                    <option value="To Be Discussed">To Be Discussed based on Scope</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-600 mb-2">
                  Project Description &amp; Requirements *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your business, current operational or digital challenge, required deliverables, and any target timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-300 text-white dark:text-white light-theme:text-slate-900 text-sm focus:outline-none focus:border-[#a3e635] transition-colors leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 transition-all cursor-pointer shadow-lg shadow-lime-500/20"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Send Project Enquiry</span>
                </button>

                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/30 hover:border-[#a3e635] transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-300 dark:text-slate-300 light-theme:text-slate-700 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light-theme:hover:bg-slate-200 border border-white/10 dark:border-white/10 light-theme:border-slate-300 transition-colors cursor-pointer"
                >
                  {copiedBrief ? (
                    <>
                      <Check className="w-4 h-4 text-[#a3e635]" />
                      <span className="text-[#a3e635] font-bold">Brief Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Structured Brief</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Static GitHub Pages Notice */}
            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex items-start gap-2.5 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
              <Info className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Deployment Note:</strong> On static GitHub Pages, the form above launches your email client pre-addressed to <span className="font-mono text-white dark:text-white light-theme:text-slate-900">{PERSONAL_INFO.email}</span> with your message formatted. To receive silent submissions without opening an email client, you can connect a free endpoint like Formspree or EmailJS.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Direct Contact Channels
              </h3>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-500">
                Quick responses during business hours via WhatsApp, email, or LinkedIn.
              </p>

              {/* WhatsApp Button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 p-4 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-between group hover:border-[#a3e635] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#a3e635]/20 flex items-center justify-center text-[#a3e635]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#a3e635]">
                      WhatsApp Direct
                    </div>
                    <div className="text-sm font-bold text-white dark:text-white light-theme:text-slate-900">
                      {PERSONAL_INFO.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#a3e635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
              </a>

              {/* Direct Email Address with Copy */}
              <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400">Email Address</div>
                    <div className="text-xs font-mono font-medium text-white dark:text-white light-theme:text-slate-900 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-[#a3e635] border border-white/10 cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Professional Profiles */}
              <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 flex items-center justify-between gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 text-xs font-semibold text-white dark:text-white light-theme:text-slate-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 text-xs font-semibold text-white dark:text-white light-theme:text-slate-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#e4405f]" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Identity & Location */}
              <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
                <div className="font-semibold text-white dark:text-white light-theme:text-slate-900">
                  {PERSONAL_INFO.fullName}
                </div>
                <div className="mt-0.5">{PERSONAL_INFO.location}</div>
                <div className="mt-2 text-[#a3e635] font-mono text-[11px]">
                  ● Open for projects &amp; consultations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
