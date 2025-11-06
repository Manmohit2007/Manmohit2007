<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" type="image/png" href="favicon.png" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FanPlusFollow Viral Content Generator</title>
    <!-- Load Tailwind CSS from CDN --><script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Import Inter Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        :root { font-family: 'Inter', sans-serif; }

        /* Custom Styles for Glassmorphism */
        .glass-card {
            background-color: rgba(255, 255, 255, 0.02); /* bg-white/2 */
            backdrop-filter: blur(24px); /* backdrop-blur-3xl */
            border: 1px solid rgba(255, 255, 255, 0.1); /* border border-white/10 */
            border-radius: 32px;
            transition: all 300ms ease-in-out;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
        }

        /* Custom Styles for CTA Buttons */
        .cta-button {
            transition: all 300ms ease-in-out;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .cta-button:active {
            transform: scale(0.98);
            box-shadow: none;
        }

        /* Radial gradient for iOS Dark Mode Background */
        body {
            background-color: #0A0D14;
            background-image: radial-gradient(circle at center, #1b0e2d 0%, #0A0D14 70%);
            min-height: 100vh;
        }
        
        /* Utility for score animation (replicates React's transition) */
        .viral-score-text {
            transition: color 500ms, text-shadow 500ms;
        }

        /* Glow effect for the file drop area's dashed border */
        .dashed-border-glow {
            transition: all 300ms ease-in-out;
        }
        /* Using the dark purple glow for the hover effect on the drop area */
        #file-drop-area:hover .dashed-border-glow {
            border-color: rgba(27, 14, 45, 0.8); /* dark purple */
            box-shadow: 0 0 20px rgba(27, 14, 45, 0.5);
        }
    </style>
</head>
<body class="text-white p-4 md:p-8" onload="initApp()">

    <div class="max-w-4xl mx-auto">
        
        <!-- ============================================== --><!-- HEADER - Glass Bar --><!-- UPDATED: Glow color to match background purple --><!-- ============================================== --><header id="app-header" class="glass-card p-6 mb-8 flex flex-col md:flex-row items-center justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/40">
            <div class="flex items-center space-x-4 mb-4 md:mb-0">
                <!-- FanPlusFollow Logo SVG (Replicates FanPlusFollowLogo Component) --><div class="w-12 h-12">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#f97316; stop-opacity:1" />
                          <stop offset="40%" style="stop-color:#ef4444; stop-opacity:1" />
                          <stop offset="70%" style="stop-color:#c084fc; stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#818cf8; stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <circle cx="32" cy="32" r="31" fill="url(#logoGradient)" fill-opacity="0.9" stroke="#ffffff" stroke-opacity="0.4" stroke-width="1" />
                      <path d="M20 23 L35 32 L20 41 Z" fill="#ffffff" />
                      <rect x="40" y="27" width="4" height="10" fill="#ffffff" rx="1" />
                      <rect x="37" y="30" width="10" height="4" fill="#ffffff" rx="1" />
                    </svg>
                </div>
                <div class="text-left">
                    <h1 class="text-xl font-bold bg-clip-text text-transparent" style="background-image: linear-gradient(to right, #ec4899, #c084fc, #6366f1)">
                      FanPlusFollow
                    </h1>
                    <p class="text-indigo-300 text-sm flex items-center">
                        <!-- Users Icon (Lucide) --><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-3 w-3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        Growth AI
                    </p>
                </div>
            </div>
            
            <!-- Viral Mode Toggle (Replicates IosToggleSwitch Component) --><div class="flex flex-col sm:flex-row items-center gap-3">
                <div class="flex items-center space-x-3">
                    <!-- Zap Icon (Lucide) --><svg id="viral-toggle-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 transition-colors duration-300 text-green-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    <span id="viral-toggle-text" class="text-sm font-medium transition-colors duration-300 text-white">
                        Viral Mode
                    </span>
                    <div
                      id="viral-toggle-track"
                      class="w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 backdrop-blur-3xl border bg-green-500/70 border-green-400/50"
                      onclick="toggleViralBoost()"
                      style="box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.6);"
                    >
                      <div
                        id="viral-toggle-knob"
                        class="bg-white w-6 h-6 rounded-full transform transition-transform duration-300"
                        style="transform: translateX(24px); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 0 0 4px rgba(0, 0, 0, 0.05);"
                      />
                    </div>
                </div>
            </div>
        </header>

        <main>
            <!-- Main CTAs Section REMOVED to avoid redundancy with the footer section --><!-- ============================================== --><!-- Upload Section (Glass Card) --><!-- UPDATED: Glow color to match background purple --><!-- ============================================== --><div class="glass-card p-6 rounded-[32px] mb-12 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/40">
                <div class="mb-4">
                    <h2 class="text-2xl font-semibold flex items-center gap-2">
                        <!-- Upload Icon (Lucide) --><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                        Upload Your Video
                    </h2>
                </div>
                <div class="p-1" id="upload-section-content">
                    <!-- Content rendered by JavaScript --></div>
            </div>

            <!-- ============================================== --><!-- Results Section (Hidden until processed) --><!-- ============================================== --><div id="results-section" style="display: none;">
                <!-- Content rendered by JavaScript after processing --></div>
        </main>

        <!-- ============================================== --><!-- Channel Promotion (Glass Card) --><!-- CHANGED: Removed outer wrapper and set padding/radius to p-6 rounded-[32px] for consistency --><!-- ============================================== --><div class="glass-card p-6 rounded-[32px] mt-12 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/40">
            <div class="p-1">
                <div class="flex flex-col items-center">
                    <!-- FanPlusFollow Logo SVG --><div class="w-16 h-16 mb-2 sm:mb-4">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs><linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#f97316; stop-opacity:1" />
                              <stop offset="40%" style="stop-color:#ef4444; stop-opacity:1" />
                              <stop offset="70%" style="stop-color:#c084fc; stop-opacity:1" />
                              <stop offset="100%" style="stop-color:#818cf8; stop-opacity:1" />
                            </linearGradient></defs>
                          <circle cx="32" cy="32" r="31" fill="url(#logoGradient2)" fill-opacity="0.9" stroke="#ffffff" stroke-opacity="0.4" stroke-width="1" />
                          <path d="M20 23 L35 32 L20 41 Z" fill="#ffffff" />
                          <rect x="40" y="27" width="4" height="10" fill="#ffffff" rx="1" />
                          <rect x="37" y="30" width="10" height="4" fill="#ffffff" rx="1" />
                        </svg>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold bg-clip-text text-transparent text-center" style="background-image: linear-gradient(to right, #ec4899, #c084fc)">
                      Boost Your Reach With FanPlusFollow
                    </h3>
                    <p class="text-indigo-300 mt-1 sm:mt-2 text-center max-w-md text-sm sm:text-base">
                      Join the community for exclusive growth insights and advanced content tools.
                    </p>
                    <div class="mt-3 sm:mt-4 flex flex-wrap justify-center gap-4">
                      <button 
                        class="cta-button px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out shadow-xl transform active:scale-[0.98] active:shadow-none bg-gradient-to-r from-[#f97316]/50 via-[#ef4444]/50 to-[#c084fc]/50 hover:from-[#f97316] hover:via-[#ef4444] hover:to-[#818cf8] backdrop-blur-3xl text-white border border-white/50"
                        onclick="window.open('https://www.youtube.com/@fanplusfollow', '_blank')"
                      >
                        <!-- Users Icon (Lucide) --><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        Subscribe Now
                      </button>
                      <button 
                        class="cta-button px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out shadow-xl transform active:scale-[0.98] active:shadow-none bg-gradient-to-r from-[#f97316]/50 via-[#ef4444]/50 to-[#c084fc]/50 hover:from-[#f97316] hover:via-[#ef4444] hover:to-[#818cf8] backdrop-blur-3xl text-white border border-white/50"
                        onclick="window.open('https://www.instagram.com/_manmohit_singh_/', '_blank')"
                      >
                        <!-- Star Icon (Lucide) - CHANGED to outlined style --><svg xmlns="http://www.w3.org/2003/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        Follow Now
                      </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Footer --><footer class="text-center text-indigo-400/70 text-xs mt-12 py-6 border-t border-white/5">
          <p>© 2026 FanPlusFollow AI Growth Tools. All rights reserved.</p>
        </footer>
    </div>

    <!-- ============================================== --><!-- JAVASCRIPT LOGIC --><!-- ============================================== --><script>
        // --- GLOBAL STATE ---
        let file = null;
        let isProcessing = false;
        let isProcessed = false;
        let viralScore = 0;
        let titles = [];
        let description = "";
        let copiedIndex = null;
        let isViralBoostEnabled = true; // Default to true
        let progressValue = 0;
        let progressInterval = null;

        // --- CONSTANTS ---
        const YOUTUBE_CHANNEL_LINK = "https://www.youtube.com/@fanplusfollow";
        const INSTAGRAM_LINK = "https://www.instagram.com/_manmohit_singh_/";

        // --- ICON HELPER (Replaces Lucide-react) ---
        const icon = (name, classes) => {
            const iconMap = {
                'Upload': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
                'Play': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
                'Copy': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
                'Check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><polyline points="20 6 9 17 4 12"/></svg>`,
                'RotateCcw': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M3 2v6h6"/><path d="M3 13a9 9 0 1 0 3-7.7L3 8"/></svg>`,
            };
            return iconMap[name] || '';
        };
        
        // --- PROGRESS & TOGGLE LOGIC ---

        const setProgress = (value) => {
            progressValue = value;
            const indicator = document.getElementById('progress-indicator');
            const label = document.getElementById('progress-label');
            
            if (indicator && label) {
                indicator.style.width = `${progressValue}%`;
                label.innerHTML = `${progressValue}%`;
                
                // Update indicator class based on state
                indicator.className = `h-2.5 rounded-full transition-all duration-1000 ${
                    progressValue < 100 ? "bg-yellow-400" : "bg-green-500 shadow-md shadow-green-500/50"
                }`;
                
                const statusText = document.getElementById('processing-status');
                if (statusText) {
                    statusText.textContent = isProcessed ? "Processing Complete!" : "Analyzing content and generating titles...";
                }
            }
        };

        const startProgressSimulation = () => {
            if (progressInterval) clearInterval(progressInterval);
            
            progressInterval = setInterval(() => {
                if (progressValue >= 95) {
                    clearInterval(progressInterval);
                    progressInterval = null;
                    setProgress(95); // Stop just before 100
                } else {
                    setProgress(progressValue + Math.floor(Math.random() * 10) + 1);
                }
            }, 500);
        };

        const stopProgressSimulation = () => {
            if (progressInterval) clearInterval(progressInterval);
            progressInterval = null;
            setProgress(100);
        };

        const updateToggleUI = () => {
            const toggleTrack = document.getElementById('viral-toggle-track');
            const toggleKnob = document.getElementById('viral-toggle-knob');
            const toggleZap = document.getElementById('viral-toggle-zap');
            const toggleText = document.getElementById('viral-toggle-text');

            if (toggleTrack && toggleKnob && toggleZap && toggleText) {
                // Track
                toggleTrack.className = `w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 backdrop-blur-3xl border ${
                    isViralBoostEnabled 
                        ? "bg-green-500/70 border-green-400/50" 
                        : "bg-white/10 border-white/20"
                }`;
                toggleTrack.style.boxShadow = isViralBoostEnabled 
                    ? 'inset 0 0 10px rgba(0, 255, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.6)' 
                    : 'inset 0 0 5px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.6)';

                // Knob
                toggleKnob.style.transform = isViralBoostEnabled ? 'translateX(24px)' : 'translateX(0)';

                // Zap Icon & Text (Using class for color control)
                toggleZap.classList.toggle('text-green-400', isViralBoostEnabled);
                toggleZap.classList.toggle('text-gray-500', !isViralBoostEnabled);
                toggleText.classList.toggle('text-white', isViralBoostEnabled);
                toggleText.classList.toggle('text-gray-400', !isViralBoostEnabled);
            }
        };

        const toggleViralBoost = () => {
            isViralBoostEnabled = !isViralBoostEnabled;
            
            // CRITICAL FIX: If results are visible, regenerate the score/content based on the new toggle state
            if (isProcessed) {
                generateViralContent();
            }
            // Update the entire UI (including the toggle appearance and results if necessary)
            updateUI();
        };

        // --- FILE HANDLING & PROCESSING ---

        const handleFileChange = (event) => {
            const selectedFile = event.target.files?.[0];
            if (selectedFile && selectedFile.type === "video/mp4") {
                file = selectedFile;
                processFile();
            }
        };

        const handleDrop = (event) => {
            event.preventDefault();
            const droppedFile = event.dataTransfer.files?.[0];
            if (droppedFile && droppedFile.type === "video/mp4") {
                file = droppedFile;
                processFile();
            }
        };

        const processFile = () => {
            isProcessing = true;
            isProcessed = false;
            updateUI();
            startProgressSimulation();
            
            // Simulate file processing duration
            setTimeout(() => {
                stopProgressSimulation();
                
                // Generate viral content after a small delay to show 100%
                setTimeout(() => {
                    generateViralContent();
                    isProcessing = false;
                    isProcessed = true;
                    updateUI();
                }, 500);
            }, 3000);
        };

        const generateViralContent = () => {
            if (!file) return;
            const fileName = file.name;
            // Remove file extension
            const videoName = fileName.replace(/\.[^/.]+$/, "");
            
            // Generate viral titles
            titles = [
              `🔥 ULTIMATE ${videoName} Guide! (FanPlusFollow Secret)`,
              `📈 ${videoName}: Watch How We Went VIRAL in 24 Hours!`,
              `🤯 You Won't BELIEVE This ${videoName} Trick!`,
            ];
            
            // Generate description
            description = `🎬 ${videoName} - Watch this incredible video to discover amazing insights!\n\n` +
              `✨ What you'll learn:\n` +
              `✅ Key techniques from FanPlusFollow's viral success\n` +
              `✅ Insider tips from YouTube growth experts\n` +
              `✅ Step-by-step instructions for success\n\n` +
              `👍 Don't forget to LIKE, COMMENT, and SUBSCRIBE to @FanPlusFollow for more amazing content!\n` +
              `🔔 Turn on notifications so you never miss an update!\n\n` +
              `Check out the FanPlusFollow Channel here: ${YOUTUBE_CHANNEL_LINK}\n\n` +
              `Follow Manmohit Singh on Instagram: ${INSTAGRAM_LINK}\n\n` +
              `#FanPlusFollow #YouTubeGrowth #ViralVideo #ContentCreation #YouTubeTips`;
            
            // Generate viral score (0-100) - Influenced by Viral Mode toggle
            const scoreBase = isViralBoostEnabled ? 78 : 65;
            viralScore = Math.floor(Math.random() * 20) + scoreBase; // 65-95 or 78-98
        };

        const handleRegenerate = () => {
            if (file) {
                generateViralContent();
                updateUI();
            }
        };

        const copyToClipboard = (text, index) => {
            const tempElement = document.createElement('textarea');
            tempElement.value = text;
            document.body.appendChild(tempElement);
            tempElement.select();
            document.execCommand('copy');
            document.body.removeChild(tempElement);
            
            copiedIndex = index;
            updateUI(); // Re-render the UI to show the "Copied" checkmark
            setTimeout(() => {
                copiedIndex = null;
                updateUI(); // Re-render to revert to the "Copy" icon
            }, 2000);
        };

        const resetApp = () => {
            file = null;
            isProcessing = false;
            isProcessed = false;
            viralScore = 0;
            titles = [];
            description = "";
            progressValue = 0;
            if (progressInterval) clearInterval(progressInterval);

            const fileInput = document.getElementById('file-upload-input');
            if (fileInput) fileInput.value = "";
            
            updateUI();
        };

        // --- UI RENDERING FUNCTIONS (Replaces React JSX rendering) ---

        const renderUploadSection = () => {
            const uploadContainer = document.getElementById('upload-section-content');
            if (!uploadContainer) return;

            if (!file) {
                // Initial state: Show drag & drop area
                uploadContainer.innerHTML = `
                    <div
                        id="file-drop-area"
                        class="relative p-0.5 rounded-[30px] cursor-pointer transition-all hover:scale-[1.01] overflow-hidden"
                        style="background: radial-gradient(circle at center, #1b0e2d 0%, #0A0D14 70%); padding: 2px; background-clip: padding-box, border-box; background-origin: padding-box, border-box; border: none;"
                        ondragover="event.preventDefault()"
                    >
                        <div class="absolute inset-0 border-2 border-dashed border-white/40 rounded-[28px] pointer-events-none z-0 dashed-border-glow"></div>
                        <div class="relative z-10 bg-transparent backdrop-blur-md rounded-[28px] p-8 text-center flex flex-col items-center justify-center gap-4 h-full">
                            ${icon('Upload', 'h-10 w-10 text-white/80')}
                            <div>
                            <p class="font-medium">Drag & drop your MP4 file here</p>
                            <p class="text-sm text-indigo-300 mt-1">or click to browse (Max 500MB)</p>
                            </div>
                            <button id="select-file-btn" class="cta-button px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out shadow-xl transform active:scale-[0.98] active:shadow-none bg-gradient-to-r from-[#f97316]/50 via-[#ef4444]/50 to-[#c084fc]/50 hover:from-[#f97316] hover:via-[#ef4444] hover:to-[#818cf8] backdrop-blur-3xl text-white border border-white/50">
                            Select File
                            </button>
                        </div>
                        <input type="file" id="file-upload-input" class="hidden" accept="video/mp4" onchange="handleFileChange(event)"/>
                    </div>
                `;
                // Must re-attach manual listeners for drop and click after innerHTML update
                const dropArea = document.getElementById('file-drop-area');
                if (dropArea) {
                    dropArea.addEventListener('drop', handleDrop);
                    dropArea.addEventListener('click', () => document.getElementById('file-upload-input')?.click());
                }
            } else {
                // File selected state
                const processingArea = isProcessing || isProcessed ? `
                    <div class="w-full max-w-sm mb-4">
                        <div class="flex justify-between mb-2">
                            <span id="processing-status" class="text-yellow-300">
                                ${isProcessed ? "Processing Complete!" : "Analyzing content and generating titles..."}
                            </span>
                            <span id="progress-label" class="text-yellow-300 font-bold">${progressValue}%</span>
                        </div>
                        <div class="w-full bg-white/10 rounded-full h-2.5">
                            <div
                                id="progress-indicator"
                                class="h-2.5 rounded-full transition-all duration-1000 ${
                                    progressValue < 100 ? "bg-yellow-400" : "bg-green-500 shadow-md shadow-green-500/50"
                                }"
                                style="width: ${progressValue}%"
                            ></div>
                        </div>
                    </div>
                    ${isProcessed ? `
                        <div class="flex gap-4 mt-6">
                            <button 
                                onclick="resetApp()"
                                class="cta-button bg-gray-700/50 hover:bg-gray-600/70 text-white border border-white/10 backdrop-blur-xl shadow-inner shadow-white/5 px-6 py-3 rounded-full font-medium"
                            >
                                ${icon('RotateCcw', 'mr-2 h-4 w-4')}
                                Start New Video
                            </button>
                        </div>
                    ` : ''}
                ` : '';

                uploadContainer.innerHTML = `
                    <div class="flex flex-col items-center">
                        <div class="flex items-center gap-3 mb-4 p-4 rounded-[24px] bg-white/10 backdrop-blur-sm w-full max-w-sm">
                            ${icon('Play', 'h-6 w-6 text-green-400 flex-shrink-0')}
                            <div class="text-left overflow-hidden">
                                <p class="font-medium truncate">${file.name}</p>
                                <p class="text-xs text-indigo-300">
                                    ${(file.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                            </div>
                        </div>
                        ${processingArea}
                    </div>
                `;
            }
        };

        const renderResults = () => {
            const resultsContainer = document.getElementById('results-section');
            if (!resultsContainer) return;

            if (isProcessed) {
                // --- Viral Score Section ---
                const scoreColorClass = viralScore < 75 ? "text-red-400" : viralScore < 90 ? "text-yellow-400" : "text-green-400";
                const scoreText = viralScore < 75 
                    ? "Rethink your content hook for better reach." 
                    : viralScore < 90 
                        ? "Solid performance. A few tweaks could push it higher." 
                        : "VIRAL READY! This content is primed for maximum engagement. Post ASAP.";
                const scoreGlowStyle = viralScore >= 90 ? 'text-shadow: 0 0 15px rgba(0, 255, 0, 0.7);' : 'text-shadow: none;';
                
                // UPDATED: Glow color to match background purple
                const viralScoreHTML = `
                    <div class="glass-card p-6 rounded-[32px] mb-12 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/40">
                        <div class="mb-4"><h2 class="text-2xl font-semibold">Viral Potential Score</h2></div>
                        <div class="p-1">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-indigo-300 text-lg">Estimated Viral Score</span>
                                <span class="text-4xl sm:text-5xl font-extrabold transition-colors duration-500 viral-score-text ${scoreColorClass}" style="${scoreGlowStyle}">
                                    ${viralScore}%
                                </span>
                            </div>
                            <div class="w-full bg-white/10 rounded-full h-3">
                                <div
                                    class="h-3 rounded-full transition-all duration-1000 ${
                                        viralScore < 75 ? "bg-red-500" : viralScore < 90 ? "bg-yellow-500" : "bg-green-500"
                                    }"
                                    style="width: ${viralScore}%"
                                ></div>
                            </div>
                            <p class="text-sm text-indigo-300 mt-3">${scoreText}</p>
                        </div>
                    </div>
                `;

                // --- Title Options Section ---
                const titlesHTML = `
                    <div class="mb-12">
                        <div class="flex justify-between items-center mb-6">
                            <h2 class="text-2xl font-semibold text-white">Suggested Titles</h2>
                            <button 
                                onclick="handleRegenerate()"
                                class="cta-button bg-gray-700/50 hover:bg-gray-600/70 text-white border border-white/10 backdrop-blur-xl text-sm px-4 py-2 shadow-inner shadow-white/5 rounded-full font-medium"
                            >
                                ${icon('RotateCcw', 'mr-2 h-3 w-3')}
                                Regenerate
                            </button>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            ${titles.map((title, index) => `
                                <div class="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-purple-900 transition-all shadow-xl hover:shadow-purple-900/40 p-4 rounded-[32px]">
                                    <div class="p-1">
                                        <div class="flex justify-between items-start mb-2">
                                            <span class="text-xs font-medium px-2 py-1 rounded-full bg-pink-700/50 text-pink-300 border border-pink-500/30">
                                                Option ${index + 1}
                                            </span>
                                            <button
                                                onclick="copyToClipboard('${title.replace(/'/g, "\\'")}', ${index})"
                                                class="h-8 w-8 p-0 bg-transparent hover:bg-white/10 text-indigo-300 hover:text-white shadow-none rounded-full"
                                            >
                                                ${copiedIndex === index ? icon('Check', 'h-4 w-4 text-green-400') : icon('Copy', 'h-4 w-4')}
                                            </button>
                                        </div>
                                        <p class="text-base min-h-[50px] flex items-center text-white/90 p-1">${title}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                
                // --- Description Section ---
                // Escape single quotes in description for JavaScript string literal
                const escapedDescription = description.replace(/'/g, "\\'").replace(/\n/g, '\\n');

                // UPDATED: Glow color to match background purple
                const descriptionHTML = `
                    <div class="glass-card p-6 rounded-[32px] mb-12 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/40">
                        <div class="mb-4">
                            <h2 class="flex justify-between items-center text-xl sm:text-2xl font-semibold">
                                <span>Optimized Description & Hashtags</span>
                                <button
                                    onclick="copyToClipboard('${escapedDescription}', 3)"
                                    class="cta-button bg-gray-700/50 hover:bg-gray-600/70 text-white border border-white/10 backdrop-blur-xl text-sm px-4 py-2 shadow-inner shadow-white/5 rounded-full font-medium"
                                >
                                    ${copiedIndex === 3 ? `<span class="flex items-center">${icon('Check', 'mr-2 h-4 w-4 text-green-400')} Copied!</span>` : `<span class="flex items-center">${icon('Copy', 'mr-2 h-4 w-4')} Copy All</span>`}
                                </button>
                            </h2>
                        </div>
                        <div class="p-1">
                            <div class="bg-black/40 rounded-[24px] p-4 sm:p-5 min-h-[250px] max-h-96 border border-white/20 overflow-auto">
                                <pre class="whitespace-pre-wrap text-xs sm:text-sm font-mono text-indigo-100 leading-relaxed">${description}</pre>
                            </div>
                        </div>
                    </div>
                `;

                resultsContainer.innerHTML = viralScoreHTML + titlesHTML + descriptionHTML;
                resultsContainer.style.display = 'block';
            } else {
                resultsContainer.innerHTML = '';
                resultsContainer.style.display = 'none';
            }
        };

        const updateUI = () => {
            updateToggleUI();
            renderUploadSection();
            renderResults();
            document.getElementById('results-section').style.display = isProcessed ? 'block' : 'none';
        };

        const initApp = () => {
            // Initial UI render
            updateUI();

            // Attach toggle listener once
            // The listener is already attached via onclick="toggleViralBoost()" in the HTML, no need to re-attach.
        };
    </script>
</body>
</html>
