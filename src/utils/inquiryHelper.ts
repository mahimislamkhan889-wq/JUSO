/**
 * Helper utilities for JUSO Brand inquiry message drafting
 */

export interface InquiryData {
  name: string;
  jarCount: number;
  phone?: string;
  note?: string;
}

export function generateInquiryDraft(data: InquiryData): string {
  const cleanName = data.name.trim() || 'শুভাকাঙ্ক্ষী';
  const count = Math.max(1, Math.floor(data.jarCount || 1));
  const phoneText = data.phone?.trim() ? `\nযোগাযোগ নম্বর: ${data.phone.trim()}` : '';

  return `নমস্কার / হ্যালো JUSO টিম,

আমি ${cleanName}। আপনাদের JUSO Natural Refreshment ড্রিংক নিতে খুবই আগ্রহী।
আমি প্রাথমিকভাবে ${count}টি জার প্রি-অর্ডার / সংগ্রহ করতে চাই।${phoneText}

অর্ডার চালু হলে বা বিস্তারিত দাম ও ডেলিভারি তথ্য জানতে পারলে খুশি হব।
ধন্যবাদ!
— ${cleanName}`;
}

export function getWhatsAppInquiryUrl(message: string, whatsappNumber = '8801700123456'): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}
