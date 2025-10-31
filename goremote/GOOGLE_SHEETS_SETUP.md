# Google Sheets Waitlist Integration

This feature allows users to submit their email and role (Company or Freelancer) through the landing page CTA section, which gets saved to a Google Sheet.

## Setup Instructions

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Service account name: `goremote-waitlist` (or any name)
   - Click "Create and Continue"
4. Skip the optional steps and click "Done"

### 3. Generate Service Account Key

1. Click on the created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" and click "Create"
5. A JSON file will be downloaded - **keep this file secure!**

### 4. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename it to "GoRemote Waitlist" (or any name)
4. Add headers in the first row:
   - Column A: `Timestamp`
   - Column B: `Email`
   - Column C: `Role`
5. Copy the Spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

### 5. Share Sheet with Service Account

1. In your Google Sheet, click the "Share" button
2. Add the service account email (from the JSON file: `client_email`)
3. Give it "Editor" access
4. Click "Send"

### 6. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your credentials:
   ```env
   GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
   ```

   **Important**: 
   - For `GOOGLE_SHEETS_PRIVATE_KEY`, copy the entire `private_key` value from the JSON file
   - Keep the `\n` characters as they are (don't replace them with actual line breaks)
   - Wrap the private key in double quotes

### 7. Restart Development Server

```bash
npm run dev
```

## How It Works

1. User enters their email in the CTA section
2. User selects their role (Company or Freelancer) from the dropdown
3. User clicks "Get Started" button
4. The form validates the input (email format and required fields)
5. If valid, it sends a POST request to `/api/submit-waitlist`
6. The API route authenticates with Google Sheets API using the service account
7. A new row is appended to the spreadsheet with:
   - Current timestamp
   - User's email
   - Selected role
8. User sees a success or error message

## Testing

1. Open the landing page in your browser
2. Scroll to the CTA section
3. Enter an email address
4. Select a role from the dropdown
5. Click "Get Started"
6. Check your Google Sheet - a new row should appear!

## Troubleshooting

### "Failed to add to waitlist"
- Check that all environment variables are set correctly
- Verify the service account has Editor access to the sheet
- Check the spreadsheet ID is correct
- Ensure Google Sheets API is enabled in your Google Cloud project

### "Invalid email format"
- The email validation requires a valid email format (e.g., user@example.com)

### Private key errors
- Make sure the private key includes the full `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers
- Keep the `\n` characters in the private key string
- Wrap the private key value in double quotes in the `.env.local` file

## Security Notes

- **Never commit `.env.local`** to version control (it's already in `.gitignore`)
- Keep your service account JSON file secure
- The service account should only have access to the specific spreadsheet
- Consider implementing rate limiting for production use
- Add CAPTCHA for production to prevent spam

## API Endpoint

**POST** `/api/submit-waitlist`

**Request Body:**
```json
{
  "email": "user@example.com",
  "role": "company" | "freelancer"
}
```

**Success Response (200):**
```json
{
  "message": "Successfully added to waitlist"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error message"
}
```
