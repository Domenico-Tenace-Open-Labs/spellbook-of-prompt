# ✨ SpellBook of prompt 🧙🏻‍♂️

> A **curated collection of tested prompts and templates** to automate workflows and integrate seamlessly across multiple LLM platforms.

[![GitHub license](https://img.shields.io/github/license/Domenico-Tenace-Open-Labs/daily-prompt)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Domenico-Tenace-Open-Labs/daily-prompt?style=social)](https://github.com/Domenico-Tenace-Open-Labs/daily-prompt)
[![GitHub forks](https://img.shields.io/github/forks/Domenico-Tenace-Open-Labs/daily-prompt?style=social)](https://github.com/Domenico-Tenace-Open-Labs/daily-prompt)

---

## 🚀 Overview

**SpellBook of prompt** is your go-to resource for **production-ready prompts** designed to save you time and improve your workflows. Whether you're working with OpenAI's ChatGPT, Anthropic's Claude, or any other LLM platform, you'll find carefully curated, tested, and documented prompts organized by use case.

### What You'll Find Here

- 📝 **Tested Prompts** — Ready-to-use templates validated across multiple models
- 🏗️ **Well-Structured Examples** — Each prompt includes input/output examples and best practices
- 🔧 **Easy Integration** — Copy-paste prompts or integrate them into your applications
- 🌍 **Model-Agnostic** — Most prompts work across ChatGPT, Claude, Gemini, and more
- 💡 **Comprehensive Documentation** — Troubleshooting guides and edge cases included

---

## 🎯 Key Features

✅ **Organized by Category** — Prompts sorted by use case and industry
✅ **Live Documentation** — Hosted on Astro with Starlight for fast browsing
✅ **Community-Driven** — Open-source with contribution guidelines
✅ **Low Token Cost** — Optimized prompts that work efficiently across platforms
✅ **Real-World Examples** — Practical templates for content creation, coding, analysis, and more

---

## 📚 Quick Start

### 1. **Browse the Documentation**

Visit the [live documentation site](https://daily-prompt.vercel.app) to explore all available prompts.

Or clone and run locally:

```bash
git clone https://github.com/Domenico-Tenace-Open-Labs/daily-prompt.git
cd daily-prompt
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. **Copy a Prompt**

Find a prompt that fits your needs and copy it directly into your LLM interface (ChatGPT, Claude, Copilot, etc.).

### 3. **Customize It**

Adapt the prompt to your specific use case by:
- Changing variables (e.g., `[TOPIC]`, `[LANGUAGE]`)
- Adding your context or constraints
- Adjusting the output format

### 4. **Iterate & Improve**

Test the prompt and refine it based on your results.

---

## 📂 Project Structure

```
daily-prompt/
├── src/
│   ├── components/        # Reusable Astro components
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx          # Home page
│   │       ├── Start Here/        # Getting started guides
│   │       │   └── how-to-use-prompts.mdx
│   │       └── Content Creation/  # Category-organized prompts
│   │           └── tik-tok-shorts-script-generation.mdx
│   └── styles/            # Global CSS and Tailwind
├── public/                # Static assets
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Astro** | Static site generator for blazingly fast documentation |
| **Starlight** | Beautiful, out-of-the-box documentation theme |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **TypeScript** | Type safety and better developer experience |

---

## 📝 Example Prompts

### Content Creation
Create engaging TikTok/Shorts scripts:
```
I need a [TIME] TikTok/Shorts where you explain [TOPIC] in [LANGUAGE].
```

### More Categories Coming Soon
- 💻 Code Generation & Debugging
- 📊 Data Analysis & Reporting
- ✍️ Writing & Copywriting
- 🎨 Design & Creative Direction
- 🧠 Learning & Education

---

## 🤝 Contributing

We welcome contributions! Whether it's a new prompt, improvements, or bug fixes.

### How to Contribute

1. **Search existing prompts** to avoid duplicates
2. **Create or update a prompt** in the appropriate category folder
3. **Include documentation** with:
   - Clear title and description
   - Use case summary
   - Example input/output
   - Compatibility (which models work best)
   - Troubleshooting notes
4. **Open a Pull Request** with a brief description of what you added/improved

### Contribution Guidelines

- Keep prompts **concise and deterministic**
- Provide at least one **example input and output**
- Validate across **at least 2 different LLM models**
- Include **edge cases** and **negative examples**
- Never include **real secrets or sensitive data**
- Follow the documentation template in `copilot-instructions.md`

---

## 🎨 Brand Colors

When creating visuals or documentation:

- **Primary**: `#FA892D` (Orange)
- **Secondary**: `#1E1E2E` (Dark)
- **Tertiary**: `#737373` (Gray)

---

## 📖 Documentation

### For Users
- [How to Use Prompts](src/content/docs/Start%20Here/how-to-use-prompts.mdx) — Guide to adapting prompts for your needs

### For Contributors
- [Contributor Guidelines](copilot-instructions.md) — Detailed requirements and conventions
- [Prompt Documentation Template](copilot-instructions.md#documentation-template-short) — Minimum structure for each prompt

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Development

```bash
# Clone the repository
git clone https://github.com/Domenico-Tenace-Open-Labs/daily-prompt.git
cd daily-prompt

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts

```bash
npm run dev      # Start local dev server
npm start        # Alias for dev
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Direct Astro CLI access
```

---

## ⚙️ Configuration

- **Astro**: [`astro.config.mjs`](astro.config.mjs)
- **TypeScript**: [`tsconfig.json`](tsconfig.json)
- **Tailwind**: Configured via `@tailwindcss/vite` plugin

---

## 📄 License

This project is licensed under the [LICENSE](LICENSE) file. Feel free to use, modify, and distribute these prompts according to the license terms.

---

## ❤️ Support the Project

If you find this resource helpful, please consider supporting the project:

- ⭐ **Star this repository** on GitHub
- 🔄 **Share it** with your network and communities
- 📝 **Contribute** your own tested prompts
- 💝 **Buy me a coffee** to help keep the project alive

<a href="https://www.buymeacoffee.com/domenicotenace" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

---

## 🔗 Links

- 📖 **Documentation**: [live site](https://daily-prompt.vercel.app)
- 🐙 **GitHub**: [Domenico-Tenace-Open-Labs/daily-prompt](https://github.com/Domenico-Tenace-Open-Labs/daily-prompt)
- 💬 **Issues & Discussions**: [GitHub Issues](https://github.com/Domenico-Tenace-Open-Labs/daily-prompt/issues)

---

## 🙏 Acknowledgments

Built with ❤️ by the community. Special thanks to all contributors who share their prompts and improvements.

---

**Happy prompting! 🚀✨**