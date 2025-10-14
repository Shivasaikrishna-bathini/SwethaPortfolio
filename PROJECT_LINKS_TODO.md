# TODO: Add Project Links

This document explains how to add GitHub repository links and live demo/website links to your project cards.

## 📍 Where to Add Links

### File Location
`client/src/components/sections/projects.tsx`

### For Each Project

Find the commented lines in each project object and uncomment them, then add your URLs:

```typescript
// TODO: UNCOMMENT AND ADD YOUR LINKS BELOW
// githubLink: "https://github.com/yourusername/your-repo", // Your GitHub repository URL
// websiteLink: "https://your-project-demo.com", // Your live demo or project website URL
```

## 📝 Step-by-Step Instructions

### 1. Project 1: Cognitive HOI Reasoning (Lines 22-23)
```typescript
{
  id: 1,
  title: "Cognitive HOI Reasoning",
  // ... other fields ...
  
  // STEP 1: Remove the // at the beginning of these lines
  // STEP 2: Replace the URLs with your actual links
  githubLink: "https://github.com/yourusername/cognitive-hoi",
  websiteLink: "https://your-demo-url.com",
}
```

### 2. Project 2: Personal Attorney – Legal RAG (Lines 45-46)
```typescript
{
  id: 2,
  title: "Personal Attorney – Legal RAG",
  // ... other fields ...
  
  githubLink: "https://github.com/yourusername/legal-rag",
  websiteLink: "https://your-demo-url.com",
}
```

### 3. Project 3: SmartMed AI – Pill Detection (Lines 69-70)
```typescript
{
  id: 3,
  title: "SmartMed AI – Pill Detection",
  // ... other fields ...
  
  githubLink: "https://github.com/yourusername/smartmed-ai",
  websiteLink: "https://your-demo-url.com",
}
```

### 4. Project 4: Time-Series Forecasting (Lines 93-94)
```typescript
{
  id: 4,
  title: "Time-Series Forecasting",
  // ... other fields ...
  
  githubLink: "https://github.com/yourusername/time-series-forecast",
  websiteLink: "https://your-demo-url.com",
}
```

### 5. Project 5: Custom Sanskrit Transformer (Lines 117-118)
```typescript
{
  id: 5,
  title: "Custom Sanskrit Transformer",
  // ... other fields ...
  
  githubLink: "https://github.com/yourusername/sanskrit-transformer",
  websiteLink: "https://your-demo-url.com",
}
```

## 🎨 How Links Will Appear

Once you uncomment the link fields in `projects.tsx`, the links will automatically appear in the project modal when users click on a project card.

### In the Modal

The modal will show two buttons below the project header:
- **🔗 View on GitHub** - Opens your GitHub repository
- **🔗 Live Demo** - Opens your live website/demo

### Features
- ✅ Opens in new tab
- ✅ Hover effects with icons
- ✅ Only shows buttons if links are provided
- ✅ Styled with your project's theme color

## 📋 Enable the Link Display (One-Time Setup)

### File: `client/src/components/ui/project-modal.tsx`

**Lines 18-19:** Uncomment the interface fields:
```typescript
interface ProjectModalProps {
  project: {
    // ... other fields ...
    githubLink?: string;  // UNCOMMENT THIS
    websiteLink?: string; // UNCOMMENT THIS
  };
  // ...
}
```

**Lines 49-78:** Uncomment the entire links section:
```typescript
{/* Remove the comment markers around this entire block */}
{(project.githubLink || project.websiteLink) && (
  <div className="flex flex-wrap gap-3 mt-4">
    {/* GitHub Link Button */}
    {/* Website Link Button */}
  </div>
)}
```

## ⚡ Quick Example

If you want to add a GitHub link to Project 1, change:

**From:**
```typescript
// githubLink: "https://github.com/yourusername/your-repo",
```

**To:**
```typescript
githubLink: "https://github.com/yourusername/cognitive-hoi-research",
```

That's it! The link will automatically show up in the modal. 🎉

## 🔍 Notes

- You can add just `githubLink`, just `websiteLink`, or both
- If a project doesn't have a link, just leave it commented out
- Links open in a new tab for better user experience
- Icons automatically appear on hover
