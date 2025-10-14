// AlphaDesk Documentation JavaScript

// Sidebar toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle if needed
    const sidebar = document.querySelector('.docs-sidebar');
    const toggleBtn = document.createElement('button');

    // Copy code blocks to clipboard
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyBtn.style.cssText = 'position:absolute;top:8px;right:8px;padding:4px 8px;background:#003d82;color:white;border:none;border-radius:4px;cursor:pointer;font-size:0.85rem;';

        pre.style.position = 'relative';
        pre.appendChild(copyBtn);

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent);
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            }, 2000);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
