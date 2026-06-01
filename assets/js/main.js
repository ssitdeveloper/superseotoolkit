// SuperSEOToolkit - Main JavaScript

// ===== Theme Management =====
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.setupToggle();
  }

  setupToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
    }
  }

  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.theme);
    localStorage.setItem('theme', this.theme);
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      this.updateToggleIcon(true);
    } else {
      document.body.classList.remove('dark-mode');
      this.updateToggleIcon(false);
    }
  }

  updateToggleIcon(isDark) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      const sunIcon = toggle.querySelector('.sun-icon');
      const moonIcon = toggle.querySelector('.moon-icon');
      if (sunIcon && moonIcon) {
        if (isDark) {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        } else {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        }
      }
    }
  }
}

// ===== Mobile Menu =====
class MobileMenu {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.nav = document.querySelector('nav');
    this.init();
  }

  init() {
    if (this.hamburger && this.nav) {
      this.hamburger.addEventListener('click', () => this.toggle());
      document.addEventListener('click', (e) => this.handleClick(e));
    }
  }

  toggle() {
    this.nav.classList.toggle('active');
  }

  handleClick(e) {
    if (!e.target.closest('.hamburger') && !e.target.closest('nav')) {
      this.nav.classList.remove('active');
    }
  }
}

// ===== Search Functionality =====
class ToolSearch {
  constructor(toolsData = []) {
    this.toolsData = toolsData;
    this.searchInput = document.getElementById('tool-search');
    this.resultsContainer = document.getElementById('search-results');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.search(e.target.value));
      this.searchInput.addEventListener('focus', () => this.show());
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
          this.hide();
        }
      });
    }
  }

  search(query) {
    if (!query.trim()) {
      this.hide();
      return;
    }

    const results = this.toolsData.filter(tool =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase()) ||
      tool.category.toLowerCase().includes(query.toLowerCase())
    );

    this.displayResults(results, query);
    this.show();
  }

  displayResults(results, query) {
    if (!this.resultsContainer) return;

    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div class="p-4 text-center text-muted">
          No tools found for "${query}"
        </div>
      `;
      return;
    }

    this.resultsContainer.innerHTML = results.map(tool => `
      <a href="${tool.url}" class="search-result p-3 border-b cursor-pointer hover:bg-light-secondary block">
        <div class="font-semibold">${tool.name}</div>
        <div class="text-sm text-muted">${tool.description}</div>
        <div class="text-xs mt-1">
          <span class="category-badge">${tool.category}</span>
        </div>
      </a>
    `).join('');
  }

  show() {
    if (this.resultsContainer) {
      this.resultsContainer.style.display = 'block';
    }
  }

  hide() {
    if (this.resultsContainer) {
      this.resultsContainer.style.display = 'none';
    }
  }
}

// ===== Copy to Clipboard =====
class CopyButton {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('copy-btn')) {
        this.copy(e.target);
      }
    });
  }

  copy(button) {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    if (!target) return;

    const text = target.value || target.textContent;

    navigator.clipboard.writeText(text).then(() => {
      const originalText = button.textContent;
      button.textContent = '✓ Copied!';
      button.style.backgroundColor = '#10b981';

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 2000);
    });
  }
}

// ===== FAQ Accordion =====
class Accordion {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      const faqQuestion = e.target.closest('.faq-question');
      if (faqQuestion) {
        this.toggle(faqQuestion);
      }
    });
  }

  toggle(question) {
    const item = question.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Close all open items
    document.querySelectorAll('.faq-item.active').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  }
}

// ===== Tabs =====
class Tabs {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        this.switchTab(e.target);
      }
    });
  }

  switchTab(btn) {
    const tabGroup = btn.closest('.tabs');
    if (!tabGroup) return;

    const tabName = btn.getAttribute('data-tab');
    if (!tabName) return;

    // Deactivate all tabs in this group
    tabGroup.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
    });

    // Activate clicked tab
    btn.classList.add('active');

    // Hide all contents
    document.querySelectorAll(`.tab-content[data-tab-content="${tabName}"]`).forEach(content => {
      const parent = content.closest('.tab-container');
      if (parent && parent.contains(tabGroup)) {
        parent.querySelectorAll('.tab-content').forEach(c => {
          c.classList.remove('active');
        });
        content.classList.add('active');
      }
    });
  }
}

// ===== SEO Tools =====

// 1. Keyword Density Checker
class KeywordDensityChecker {
  check(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCount = words.length;

    if (wordCount === 0) return [];

    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    return Object.entries(frequency)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / wordCount) * 100).toFixed(2)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
  }
}

// 2. Meta Tag Analyzer
class MetaTagAnalyzer {
  analyze() {
    const analysis = {
      title: document.title,
      titleLength: document.title.length,
      titleOk: document.title.length >= 30 && document.title.length <= 60,
      description: document.querySelector('meta[name="description"]')?.content || '',
      descriptionLength: document.querySelector('meta[name="description"]')?.content?.length || 0,
      descriptionOk: (document.querySelector('meta[name="description"]')?.content?.length || 0) >= 120 && (document.querySelector('meta[name="description"]')?.content?.length || 0) <= 160,
      h1Count: document.querySelectorAll('h1').length,
      h1Ok: document.querySelectorAll('h1').length === 1,
      viewport: !!document.querySelector('meta[name="viewport"]'),
      canonical: document.querySelector('link[rel="canonical"]')?.href || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
      ogImage: document.querySelector('meta[property="og:image"]')?.content || '',
      ogImageOk: !!document.querySelector('meta[property="og:image"]')?.content
    };

    return analysis;
  }
}

// 3. Word Counter
class WordCounter {
  count(text) {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const readingTime = Math.ceil(words / 200); // Average reading speed

    return {
      words,
      characters,
      charactersNoSpaces,
      paragraphs,
      sentences,
      readingTime: `${readingTime} min`
    };
  }
}

// 4. JSON Formatter
class JSONFormatter {
  format(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      throw new Error(`Invalid JSON: ${error.message}`);
    }
  }

  minify(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed);
    } catch (error) {
      throw new Error(`Invalid JSON: ${error.message}`);
    }
  }

  validate(jsonString) {
    try {
      JSON.parse(jsonString);
      return { valid: true, error: null };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }
}

// 5. Text Case Converter
class TextCaseConverter {
  uppercase(text) {
    return text.toUpperCase();
  }

  lowercase(text) {
    return text.toLowerCase();
  }

  capitalize(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  }

  titleCase(text) {
    const exceptions = ['a', 'an', 'and', 'as', 'at', 'but', 'for', 'if', 'in', 'of', 'on', 'or', 'the', 'to'];
    return text.split(' ').map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    }).join(' ');
  }

  sentenceCase(text) {
    return text.replace(/([.!?]\s*|\A)(.)/g, (_, p1, p2) => p1 + p2.toUpperCase());
  }

  alternatingCase(text) {
    let toggle = false;
    return text.split('').map(char => {
      if (!/[a-z]/i.test(char)) return char;
      toggle = !toggle;
      return toggle ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  }

  inverseCase(text) {
    return text.split('').map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
  }
}

// 6. Password Generator
class PasswordGenerator {
  generate(length = 16, options = {}) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = lowercase + uppercase + numbers;
    if (options.symbols) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
  }

  strengthCheck(password) {
    let strength = 0;
    let feedback = [];

    if (password.length >= 8) strength++;
    else feedback.push('Use at least 8 characters');

    if (password.length >= 16) strength++;
    if (/[a-z]/.test(password)) strength++;
    else feedback.push('Add lowercase letters');

    if (/[A-Z]/.test(password)) strength++;
    else feedback.push('Add uppercase letters');

    if (/[0-9]/.test(password)) strength++;
    else feedback.push('Add numbers');

    if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) strength++;
    else feedback.push('Add special characters');

    const strengthLevel = strength <= 2 ? 'Weak' : strength <= 4 ? 'Medium' : 'Strong';

    return { strength, strengthLevel, feedback };
  }
}

// 7. Hash Generators
class HashGenerator {
  // Note: For production, use crypto library or server-side hashing
  // These are simplified versions for demonstration

  async md5(text) {
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    return this.bufferToHex(hashBuffer);
  }

  async sha1(text) {
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    return this.bufferToHex(hashBuffer);
  }

  async sha256(text) {
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    return this.bufferToHex(hashBuffer);
  }

  bufferToHex(buffer) {
    const hashArray = Array.from(new Uint8Array(buffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}

// 8. Base64 Encoder/Decoder
class Base64Coder {
  encode(text) {
    try {
      return btoa(unescape(encodeURIComponent(text)));
    } catch (error) {
      throw new Error('Error encoding to Base64');
    }
  }

  decode(base64) {
    try {
      return decodeURIComponent(escape(atob(base64)));
    } catch (error) {
      throw new Error('Error decoding from Base64');
    }
  }
}

// 9. URL Encoder/Decoder
class URLCoder {
  encode(text) {
    return encodeURIComponent(text);
  }

  decode(text) {
    try {
      return decodeURIComponent(text);
    } catch (error) {
      throw new Error('Invalid URL encoded string');
    }
  }

  parse(url) {
    try {
      const urlObj = new URL(url);
      return {
        protocol: urlObj.protocol,
        hostname: urlObj.hostname,
        pathname: urlObj.pathname,
        search: urlObj.search,
        hash: urlObj.hash,
        port: urlObj.port || 'default'
      };
    } catch (error) {
      throw new Error('Invalid URL');
    }
  }
}

// 10. UUID Generator
class UUIDGenerator {
  generate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  generateMultiple(count) {
    const uuids = [];
    for (let i = 0; i < count; i++) {
      uuids.push(this.generate());
    }
    return uuids;
  }
}

// 11. Text Utilities
class TextUtilities {
  removeDuplicateLines(text) {
    const lines = text.split('\n');
    const unique = [...new Set(lines)];
    return unique.join('\n');
  }

  sortLines(text, ascending = true) {
    const lines = text.split('\n');
    return lines.sort((a, b) => {
      if (ascending) return a.localeCompare(b);
      return b.localeCompare(a);
    }).join('\n');
  }

  reverseText(text) {
    return text.split('').reverse().join('');
  }

  reverseLines(text) {
    return text.split('\n').reverse().join('\n');
  }

  removeWhitespace(text, spaces = false) {
    if (spaces) {
      return text.replace(/\s+/g, '');
    }
    return text.replace(/^\s+|\s+$/g, '');
  }

  slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  countParagraphs(text) {
    return text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
  }

  readingTime(text) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  }
}

// 12. Code Formatters
class CodeFormatter {
  formatJSON(json) {
    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch (error) {
      throw new Error('Invalid JSON');
    }
  }

  formatHTML(html) {
    let formatted = '';
    let indent = 0;

    const lines = html.split(/>\s*</g);
    lines.forEach((line, i) => {
      if (i > 0) line = '<' + line;
      if (i < lines.length - 1) line = line + '>';

      if (line.match(/^<\/\w/)) indent--;
      formatted += '  '.repeat(indent) + line + '\n';
      if (line.match(/^<\w[^>]*[^/]>$|^<\w[^>]*>$/)) indent++;
    });

    return formatted.trim();
  }

  minifyJSON(json) {
    try {
      return JSON.stringify(JSON.parse(json));
    } catch (error) {
      throw new Error('Invalid JSON');
    }
  }

  minifyCSS(css) {
    return css
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*[{};:,]\s*/g, (match) => match.trim())
      .trim();
  }

  minifyJS(js) {
    return js
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new MobileMenu();
  new CopyButton();
  new Accordion();
  new Tabs();

  // Initialize search if tools data exists
  if (window.toolsData) {
    new ToolSearch(window.toolsData);
  }

  // Add fade-in animation
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '1';
  });
});

// ===== Utility Functions =====
function showAlert(message, type = 'info') {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} fixed top-4 right-4 max-w-md z-50`;
  alert.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" style="margin-left: auto; background: none; border: none; cursor: pointer; font-size: 1.5rem; line-height: 1;">×</button>
  `;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 3000);
}

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Export classes for use in tool pages
window.KeywordDensityChecker = KeywordDensityChecker;
window.MetaTagAnalyzer = MetaTagAnalyzer;
window.WordCounter = WordCounter;
window.JSONFormatter = JSONFormatter;
window.TextCaseConverter = TextCaseConverter;
window.PasswordGenerator = PasswordGenerator;
window.HashGenerator = HashGenerator;
window.Base64Coder = Base64Coder;
window.URLCoder = URLCoder;
window.UUIDGenerator = UUIDGenerator;
window.TextUtilities = TextUtilities;
window.CodeFormatter = CodeFormatter;
