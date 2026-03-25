// Hamburger Menu Component
class HamburgerMenu {
    constructor() {
        this.isOpen = false;
        this.createMenu();
        this.addEventListeners();
    }

    createMenu() {
        // Create menu container
        this.menuContainer = document.createElement('div');
        this.menuContainer.id = 'hamburger-menu';
        this.menuContainer.innerHTML = `
            <div class="hamburger-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-overlay">
                <nav class="menu-content">
                    <div class="menu-header">
                        <h3>🎵 משחקים מוזיקליים</h3>
                    </div>
                    <ul class="menu-links">
                        <li><a href="index.html" class="menu-link">
                            <span class="menu-icon">🏠</span>
                            <span class="menu-text">עמוד ראשי</span>
                        </a></li>
                        <li><a href="muzikay.html" class="menu-link">
                            <span class="menu-icon">🎸</span>
                            <span class="menu-text">נגן הצבעים</span>
                        </a></li>
                        <li><a href="muzikay1.html" class="menu-link">
                            <span class="menu-icon">🎯</span>
                            <span class="menu-text">תפוס ת'צבע</span>
                        </a></li>
                        <li><a href="muzikay2.html" class="menu-link">
                            <span class="menu-icon">👂</span>
                            <span class="menu-text">אוזן מוזיקלית 1</span>
                        </a></li>
                        <li><a href="muzikay3.html" class="menu-link">
                            <span class="menu-icon">🎵</span>
                            <span class="menu-text">אוזן מוזיקלית 2</span>
                        </a></li>
                    </ul>
                </nav>
            </div>
        `;

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            #hamburger-menu {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                font-family: 'Noto Sans Hebrew', sans-serif;
            }

            .hamburger-button {
                width: 40px;
                height: 40px;
                background: var(--surface, #0e0e18);
                border: 2px solid var(--dim, #42445a);
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 4px;
                transition: all 0.3s ease;
                position: relative;
                z-index: 1001;
            }

            .hamburger-button:hover {
                border-color: var(--text, #dde0f0);
                box-shadow: 0 0 15px rgba(0, 230, 118, 0.3);
            }

            .hamburger-button span {
                width: 20px;
                height: 2px;
                background: var(--text, #dde0f0);
                transition: all 0.3s ease;
                transform-origin: center;
            }

            .hamburger-button.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .hamburger-button.active span:nth-child(2) {
                opacity: 0;
            }

            .hamburger-button.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }

            .menu-overlay {
                position: fixed;
                top: 0;
                right: -100%;
                width: 280px;
                height: 100vh;
                background: var(--bg, #07070d);
                border-left: 1px solid var(--dim, #42445a);
                transition: right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 1000;
                box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
            }

            .menu-overlay.active {
                right: 0;
            }

            .menu-content {
                padding: 80px 30px 30px;
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .menu-header {
                margin-bottom: 40px;
                text-align: center;
            }

            .menu-header h3 {
                color: var(--text, #dde0f0);
                font-size: 1.4em;
                font-weight: 700;
                margin: 0;
                background: linear-gradient(135deg, var(--c0, #00e676), var(--c1, #40c4ff));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .menu-links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 15px;
            }

            .menu-link {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px 20px;
                background: var(--surface, #0e0e18);
                border: 1px solid var(--dim, #42445a);
                border-radius: 10px;
                color: var(--text, #dde0f0);
                text-decoration: none;
                font-weight: 500;
                font-size: 1.1em;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .menu-link::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
                opacity: 0;
                transition: opacity 0.3s;
            }

            .menu-link:hover {
                border-color: var(--c0, #00e676);
                transform: translateX(-5px);
                box-shadow: 0 5px 15px rgba(0, 230, 118, 0.2);
            }

            .menu-link:hover::before {
                opacity: 1;
            }

            .menu-icon {
                font-size: 1.3em;
                min-width: 30px;
                text-align: center;
            }

            .menu-text {
                flex: 1;
            }

            /* Mobile adjustments */
            @media (max-width: 600px) {
                .menu-overlay {
                    width: 100%;
                }

                .menu-content {
                    padding: 70px 20px 20px;
                }

                .menu-header h3 {
                    font-size: 1.2em;
                }

                .menu-link {
                    padding: 12px 15px;
                    font-size: 1em;
                }
            }

            /* Close menu when clicking outside */
            .menu-overlay::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: calc(100vw - 280px);
                height: 100vh;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: -1;
            }

            .menu-overlay.active::before {
                opacity: 1;
                visibility: visible;
            }

            @media (max-width: 600px) {
                .menu-overlay::before {
                    width: 0;
                }
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(this.menuContainer);
    }

    addEventListeners() {
        const button = this.menuContainer.querySelector('.hamburger-button');
        const overlay = this.menuContainer.querySelector('.menu-overlay');

        button.addEventListener('click', () => {
            this.toggleMenu();
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeMenu();
            }
        });

        // Close menu when clicking on links
        const links = this.menuContainer.querySelectorAll('.menu-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        const button = this.menuContainer.querySelector('.hamburger-button');
        const overlay = this.menuContainer.querySelector('.menu-overlay');

        if (this.isOpen) {
            button.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            this.closeMenu();
        }
    }

    closeMenu() {
        this.isOpen = false;
        const button = this.menuContainer.querySelector('.hamburger-button');
        const overlay = this.menuContainer.querySelector('.menu-overlay');

        button.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HamburgerMenu();
});