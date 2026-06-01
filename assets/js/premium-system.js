// Premium shared interactions for inner pages and tools
(function () {
  class PremiumSite {
    constructor() {
      this.observer = null;
      this.init();
    }

    init() {
      this.markPage();
      this.normalizeLegacyText();
      this.injectTransitionOverlay();
      this.injectFloatingOrbs();
      this.decorateCards();
      this.setupRevealAnimations();
      this.setupLinkTransitions();
      this.setupMicroInteractions();
      this.enhanceNavigation();
    }

    normalizeLegacyText() {
      const replacements = [
        ['âš™ï¸', ''],
        ['ðŸŒ™', 'Theme'],
        ['ðŸ“‹', ''],
        ['ðŸ’¡', ''],
        ['ðŸ”', ''],
        ['âœ“', 'OK'],
        ['âœ—', 'X'],
        ['âš ï¸', 'Warning'],
        ['âš ', 'Warning'],
        ['âŒ', 'Avoid'],
        ['âœ…', 'Recommended'],
        ['Â°', '°']
      ];

      const normalizeText = (text) => {
        let value = text;
        replacements.forEach(([bad, good]) => {
          value = value.split(bad).join(good);
        });
        return value;
      };

      const walkAndFix = (root) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node) {
          const fixed = normalizeText(node.nodeValue || '');
          if (fixed !== node.nodeValue) {
            node.nodeValue = fixed;
          }
          node = walker.nextNode();
        }
      };

      walkAndFix(document.body);

      document.querySelectorAll('.logo').forEach((logo) => {
        logo.textContent = 'SuperSEOToolkit';
      });

      document.querySelectorAll('#theme-toggle').forEach((toggle) => {
        const label = normalizeText(toggle.textContent || '').trim();
        if (!label || label === 'Theme') {
          toggle.textContent = 'Theme';
        } else {
          toggle.textContent = label;
        }
      });

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const fixed = normalizeText(node.nodeValue || '');
              if (fixed !== node.nodeValue) {
                node.nodeValue = fixed;
              }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              walkAndFix(node);
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }

    markPage() {
      document.body.classList.add('premium-site-active');
      if (window.location.pathname.startsWith('/tools/')) {
        document.body.classList.add('premium-tool-page');
      }
      if (window.location.pathname.startsWith('/blog/')) {
        document.body.classList.add('premium-blog-page');
      }
    }

    injectTransitionOverlay() {
      if (document.querySelector('.page-transition-overlay')) return;
      const overlay = document.createElement('div');
      overlay.className = 'page-transition-overlay';
      document.body.appendChild(overlay);
      this.overlay = overlay;
    }

    injectFloatingOrbs() {
      if (document.querySelector('.premium-float-orb')) return;
      const a = document.createElement('div');
      a.className = 'premium-float-orb orb-a';
      const b = document.createElement('div');
      b.className = 'premium-float-orb orb-b';
      document.body.appendChild(a);
      document.body.appendChild(b);

      let t = 0;
      const tick = () => {
        t += 0.01;
        a.style.transform = `translateY(${Math.sin(t) * 10}px)`;
        b.style.transform = `translateY(${Math.cos(t * 1.2) * 12}px)`;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    decorateCards() {
      document.querySelectorAll('.card, .faq-item, .tool-card').forEach((el) => {
        el.classList.add('reveal-on-scroll');
      });

      const hero = document.querySelector('.hero');
      if (hero) {
        hero.classList.add('reveal-on-scroll');
      }
    }

    setupRevealAnimations() {
      const targets = document.querySelectorAll('.reveal-on-scroll');
      if (!targets.length) return;

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      targets.forEach((target) => this.observer.observe(target));
    }

    setupLinkTransitions() {
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (!link) return;
        if (link.target === '_blank') return;
        const href = link.getAttribute('href') || '';
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
        if (href.startsWith('javascript:')) return;
        if (/^https?:\/\//.test(href) && !href.includes(window.location.host)) return;

        event.preventDefault();
        if (this.overlay) {
          this.overlay.classList.add('active');
        }

        setTimeout(() => {
          window.location.href = link.href;
        }, 180);
      });
    }

    setupMicroInteractions() {
      document.querySelectorAll('.btn, button').forEach((button) => {
        button.addEventListener('mousemove', (event) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          button.style.backgroundPosition = `${x}px ${y}px`;
        });
      });

      document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('mousemove', (event) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          const rotateY = (px - 0.5) * 3;
          const rotateX = (0.5 - py) * 3;
          card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    enhanceNavigation() {
      const nav = document.querySelector('.navbar');
      if (!nav) return;

      const cta = nav.querySelector('a[href*="contact"]');
      if (cta) {
        cta.classList.add('btn', 'btn-primary', 'btn-sm');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new PremiumSite();
  });
})();
