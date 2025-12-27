# AntiGrav Consulting - Consultation Request Flow

## Where Consultation Requests Go

### 1. Frontend Form Submission
- **File**: `client/src/pages/Contact.tsx`
- **Form Location**: Contact page (`/contact`)
- **Fields Collected**:
  - Name
  - Email
  - Company
  - Message
- **Validation**: Uses Zod schema validation

### 2. Current Implementation (Prototype Mode)
Since this is a **frontend mockup** (not yet integrated with a backend):
- Form submissions are logged to the browser console
- A success toast notification is shown to the user
- No data is currently sent to a server

### 3. Integration with Backend (For Future)
When you're ready to implement a real backend:

**Contact Email**: `info@antigravconsulting.com`
**Location**: India (Ranchi / Delhi)

The consultation requests should be configured to:
- Send to `info@antigravconsulting.com`
- Include all form fields (name, email, company, message)
- Store in a database or email service
- Send confirmation email to the user

### 4. Recommended Backend Integration
When graduating to full-stack:
1. Create an API endpoint (e.g., `/api/consultation/request`)
2. Connect Contact form to that endpoint
3. Send email to `info@antigravconsulting.com`
4. Store request in database
5. Send automated response to user

---

**Current Status**: Prototype Mode (Frontend Only)
**Next Step**: When ready, integrate with Replit's backend capabilities or external email service
