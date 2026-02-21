🌙 Khatm Planner
A smart React-based tool designed to help groups organize and track their Quran completion (Khatm). It automatically divides the 604 pages of the Quran among participants and rotates the assignments in each cycle to ensure everyone reads different sections.

✨ Features
Smart Distribution: Automatically calculates page ranges for any number of participants.

Rotation Logic: Supports multiple cycles. Names rotate each cycle so participants read new pages every time.

Quran Data Integration: Displays specific Surah and Ayah information for the start and end of each assigned range.

Persistent Storage: Uses localStorage to save your participant list and current cycle, so your progress isn't lost when you refresh the page.

Mobile Friendly: Fully responsive UI designed for easy use on smartphones.

🚀 Tech Stack
Frontend: React (Vite)

Styling: CSS3 (Flexbox & Responsive Design)

Deployment: Vercel

Data: JSON-based Quran mapping

🛠️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/khatm-planner.git
Install dependencies:

Bash
npm install
Run locally:

Bash
npm run dev
Build for production:

Bash
npm run build
📖 How it Works
The core logic resides in KhatmLogic.js. It takes the total 604 -1 pages of the Quran and divides them by the number of people in your list.

Cycle System: When you click "Next Cycle", the cycle state increments.

Rotation: The rotateNames function shifts the array of names based on the current cycle number.

Data Mapping: The app looks up the quran.json file to find which Surah and Ayah correspond to the calculated page numbers.

📝 License
This project is open-source and free to use.
