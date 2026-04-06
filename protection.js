// Advanced Site Protection System
(function() {
    'use strict';
    
    // Disable right-click
    document.addEventListener('contextmenu', e => e.preventDefault(), false);
    
    // Disable key combinations
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (view source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (save page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        // Ctrl+P (print)
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            return false;
        }
    }, false);
    
    // Disable text selection
    document.addEventListener('selectstart', e => e.preventDefault(), false);
    
    // Disable image dragging
    document.addEventListener('dragstart', function(e) {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
        }
    }, false);
    
    // Disable copy
    document.addEventListener('copy', e => e.preventDefault(), false);
    
    // Anti-debugger
    const antiDebug = function() {
        setInterval(function() {
            (function() {
                return false;
            }['constructor']('debugger')['call']());
        }, 50);
    };
    
    try {
        antiDebug();
    } catch(e) {}
    
    // DevTools detection
    let devtoolsOpen = false;
    const threshold = 160;
    
    setInterval(function() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a0f;color:#ff2a2a;font-family:monospace;flex-direction:column;"><h1 style="font-size:48px;margin-bottom:20px;">⚠️ SECURITY VIOLATION</h1><p style="font-size:18px;">Developer Tools access is prohibited.</p><p style="font-size:14px;color:#888;margin-top:20px;">This incident has been logged.</p></div>';
                setTimeout(() => {
                    window.location.href = 'about:blank';
                }, 2000);
            }
        }
    }, 1000);
    
    // Console protection
    setInterval(function() {
        console.clear();
        console.log('%cSECURITY WARNING', 'color: red; font-size: 40px; font-weight: bold;');
        console.log('%cDo not paste any code here!', 'color: yellow; font-size: 20px;');
        console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.', 'font-size: 14px;');
    }, 1000);
    
    // Detect iframe embedding
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }
    
    // Prevent opening in iframe
    if (window.frameElement) {
        window.frameElement.remove();
    }
    
    // Detect automation tools
    if (navigator.webdriver) {
        document.body.innerHTML = '<h1>Automated access detected</h1>';
        window.location.href = 'about:blank';
    }
    
    // Obfuscate source code in memory
    const originalHTML = document.documentElement.outerHTML;
    Object.defineProperty(document, 'documentElement', {
        get: function() {
            return {
                outerHTML: '<!-- Source code protected -->',
                innerHTML: '<!-- Source code protected -->'
            };
        }
    });
    
    // Disable common scraping methods
    Object.defineProperty(navigator, 'plugins', {
        get: function() {
            return [1, 2, 3, 4, 5];
        }
    });
    
    // Detect and block common download tools
    const userAgent = navigator.userAgent.toLowerCase();
    const blockedAgents = ['wget', 'curl', 'httrack', 'webzip', 'teleport', 'webcopier'];
    
    for (let agent of blockedAgents) {
        if (userAgent.includes(agent)) {
            document.body.innerHTML = '<h1>Access Denied</h1>';
            window.location.href = 'about:blank';
        }
    }
    
    // Watermark console
    console.log('%c© TUFXN 2025 - All Rights Reserved', 'color: #ff2a2a; font-size: 16px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    console.log('%cUnauthorized access, copying, or distribution is strictly prohibited.', 'color: #888; font-size: 12px;');
    
})();
