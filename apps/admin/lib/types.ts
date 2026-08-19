export type InquiryRow = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  project_type: string | null;
  message: string;
  status: string;
  last_contacted_at: string | null;
  created_at: string;
};

export type NoteRow = {
  id: string;
  inquiry_id: string;
  body: string;
  author_email: string;
  created_at: string;
};

export const STATUSES = ["new", "contacted", "in_progress", "closed", "spam"] as const;
export type InquiryStatus = (typeof STATUSES)[number];
